package main

import (
	"encoding/json"
	"testing"
)

func TestRSVPResponses(t *testing.T) {
	gl := testGuests(t)
	doe := gl.parties[0].ID

	rsvp := func(body string) *RSVP {
		var r RSVP
		if err := json.Unmarshal([]byte(body), &r); err != nil {
			t.Fatal(err)
		}
		r.Party = doe
		return &r
	}

	rows, err := rsvp(`{"email": " Jane@Example.com ", "guests": [
		{"name": "Jane Doe", "attending": true},
		{"name": "John Doe", "attending": false}]}`).responses(gl)
	if err != nil {
		t.Fatal(err)
	}
	want := []Response{
		{Party: "doe", Guest: "Jane Doe", Attending: true, Email: "jane@example.com"},
		{Party: "doe", Guest: "John Doe", Attending: false, Email: "jane@example.com"},
	}
	if len(rows) != len(want) {
		t.Fatalf("got %d rows, want %d", len(rows), len(want))
	}
	for i := range want {
		if rows[i] != want[i] {
			t.Errorf("row %d = %+v, want %+v", i, rows[i], want[i])
		}
	}

	for name, body := range map[string]string{
		"missing guest": `{"email": "a@example.com", "guests": [{"name": "Jane Doe", "attending": true}]}`,
		"guest twice":   `{"email": "a@example.com", "guests": [{"name": "Jane Doe"}, {"name": "Jane Doe"}]}`,
		"other party":   `{"email": "a@example.com", "guests": [{"name": "Jane Doe"}, {"name": "Kid Smith"}]}`,
		"bad email":     `{"email": "jane@localhost", "guests": [{"name": "Jane Doe"}, {"name": "John Doe"}]}`,
		"no email":      `{"guests": [{"name": "Jane Doe"}, {"name": "John Doe"}]}`,
	} {
		if _, err := rsvp(body).responses(gl); err == nil {
			t.Errorf("%s: accepted, want error", name)
		}
	}

	unknown := rsvp(`{"email": "a@example.com", "guests": [{"name": "Jane Doe"}, {"name": "John Doe"}]}`)
	unknown.Party = "nope"
	if _, err := unknown.responses(gl); err == nil {
		t.Error("unknown party: accepted, want error")
	}
}
