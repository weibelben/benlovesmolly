package main

import (
	"reflect"
	"strings"
	"testing"
)

const testCSV = `# first, last, party, nicknames, notes
John, Doe, doe, , Groom's college friend
Jane, Doe, doe, , "Notes, with a comma"
William, Smith, , Bill; Will,
José, O'Brien-Smith, , ,
Jon, Lee, , ,
John, Smith, smith, ,
Kid, Smith, smith, ,
`

func testGuests(t *testing.T) *GuestList {
	t.Helper()
	gl, err := parseGuestList(strings.NewReader(testCSV))
	if err != nil {
		t.Fatal(err)
	}
	return gl
}

// found lists each matching party's guests, matched guest first.
func found(gl *GuestList, typed string) [][]string {
	var out [][]string
	for _, m := range gl.Find(typed) {
		names := []string{m.Party.Guests[m.Guest].Name}
		for i, g := range m.Party.Guests {
			if i != m.Guest {
				names = append(names, g.Name)
			}
		}
		out = append(out, names)
	}
	return out
}

func TestFind(t *testing.T) {
	gl := testGuests(t)
	tests := []struct {
		typed string
		want  [][]string
	}{
		{"John Doe", [][]string{{"John Doe", "Jane Doe"}}},
		{"  jane   DOE ", [][]string{{"Jane Doe", "John Doe"}}},
		{"Jnae Doe", [][]string{{"Jane Doe", "John Doe"}}},
		{"Bill Smith", [][]string{{"William Smith"}}},
		{"will smith", [][]string{{"William Smith"}}},
		{"Willaim Smith", [][]string{{"William Smith"}}},
		{"jose obrien smith", [][]string{{"José O'Brien-Smith"}}},
		{"José O’Brien-Smith", [][]string{{"José O'Brien-Smith"}}},
		{"John Smith", [][]string{{"John Smith", "Kid Smith"}}},
		// A last name alone finds everyone with it.
		{"doe", [][]string{{"John Doe", "Jane Doe"}}},
		{"Smith", [][]string{{"William Smith"}, {"John Smith", "Kid Smith"}}},
		{"smiht", [][]string{{"William Smith"}, {"John Smith", "Kid Smith"}}},
		{"O'Brien-Smith", [][]string{{"José O'Brien-Smith"}}},
		// Short words must be exact, so Jan doesn't find Jon.
		{"Jan Lee", nil},
		// A first name alone, or a wrong first name, finds nobody.
		{"John", nil},
		{"J Doe", nil},
		{"John Q Doe", nil},
		{"", nil},
	}
	for _, tt := range tests {
		if got := found(gl, tt.typed); !reflect.DeepEqual(got, tt.want) {
			t.Errorf("Find(%q) = %v, want %v", tt.typed, got, tt.want)
		}
	}
}

func TestParseGuestList(t *testing.T) {
	gl := testGuests(t)
	var names [][]string
	for _, p := range gl.parties {
		var party []string
		for _, g := range p.Guests {
			party = append(party, g.Name)
		}
		names = append(names, party)
	}
	want := [][]string{
		{"John Doe", "Jane Doe"},
		{"William Smith"},
		{"José O'Brien-Smith"},
		{"Jon Lee"},
		{"John Smith", "Kid Smith"},
	}
	if !reflect.DeepEqual(names, want) {
		t.Errorf("parties = %v, want %v", names, want)
	}

	doe := gl.parties[0]
	if doe.Key != "doe" || gl.Party(doe.ID) != doe {
		t.Errorf("party doe: key %q, found by id: %v", doe.Key, gl.Party(doe.ID) == doe)
	}
	if strings.Contains(doe.ID, "doe") {
		t.Errorf("party ID %q gives away the party key", doe.ID)
	}
}

func TestParseGuestListErrors(t *testing.T) {
	for _, csv := range []string{
		"",
		"# only comments\n",
		"John, , doe\n",
		"John, Doe, doe\nJohn, Doe, doe\n",
	} {
		if _, err := parseGuestList(strings.NewReader(csv)); err == nil {
			t.Errorf("parseGuestList(%q) succeeded, want error", csv)
		}
	}
}

func TestNearlyEqual(t *testing.T) {
	tests := []struct {
		a, b string
		want bool
	}{
		{"jane", "jane", true},
		{"jane", "jnae", true},
		{"jane", "jame", true},
		{"jane", "janet", true},
		{"jane", "jan", true},
		{"jane", "jen", false},
		{"jane", "ajne", true},
		{"jane", "jaen", true},
		{"jane", "naje", false},
		{"jose", "josé", true},
	}
	for _, tt := range tests {
		if got := nearlyEqual(tt.a, tt.b); got != tt.want {
			t.Errorf("nearlyEqual(%q, %q) = %v, want %v", tt.a, tt.b, got, tt.want)
		}
		if got := nearlyEqual(tt.b, tt.a); got != tt.want {
			t.Errorf("nearlyEqual(%q, %q) = %v, want %v", tt.b, tt.a, got, tt.want)
		}
	}
}
