package main

import (
	"crypto/sha256"
	"encoding/csv"
	"encoding/hex"
	"errors"
	"fmt"
	"io"
	"os"
	"strings"
	"unicode"

	"golang.org/x/text/unicode/norm"
)

// Party is a group of guests who RSVP together.
type Party struct {
	// Key is the party column from the CSV (or the guest's name for someone
	// invited alone). It's what RSVPs are stored under.
	Key string
	// ID is an opaque stand-in for Key that's safe to hand to the browser.
	ID     string
	Guests []Guest
}

type Guest struct {
	Name  string
	First string
	// Each way the guest might search for themselves, as normalized words:
	// their full name, with each nickname, and their last name alone.
	spellings [][]string
}

// GuestList is the invitee CSV, loaded once at startup.
type GuestList struct {
	parties []*Party
	byID    map[string]*Party
}

// loadGuestList reads the invitee CSV. Each row is:
//
//	first, last, party, nicknames, email, notes
//
// Guests sharing a party RSVP together; a blank party is a guest on their
// own. Nicknames are separated by semicolons and stand in for the first name.
// Lines starting with # are comments.
func loadGuestList(path string) (*GuestList, error) {
	f, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer f.Close()
	return parseGuestList(f)
}

func parseGuestList(r io.Reader) (*GuestList, error) {
	cr := csv.NewReader(r)
	cr.Comment = '#'
	cr.TrimLeadingSpace = true
	cr.FieldsPerRecord = -1

	gl := &GuestList{byID: map[string]*Party{}}
	byKey := map[string]*Party{}
	for {
		row, err := cr.Read()
		if errors.Is(err, io.EOF) {
			break
		}
		if err != nil {
			return nil, err
		}
		col := func(i int) string {
			if i < len(row) {
				return strings.TrimSpace(row[i])
			}
			return ""
		}
		first, last, key := col(0), col(1), col(2)
		if first == "" && last == "" {
			continue
		}
		line, _ := cr.FieldPos(0)
		if first == "" || last == "" {
			return nil, fmt.Errorf("line %d: guests need a first and last name", line)
		}

		name := first + " " + last
		guest := Guest{Name: name, First: first, spellings: [][]string{words(name), words(last)}}
		for _, nick := range strings.Split(col(3), ";") {
			if nick = strings.TrimSpace(nick); nick != "" {
				guest.spellings = append(guest.spellings, words(nick+" "+last))
			}
		}

		if key == "" {
			key = name
		}
		p := byKey[key]
		if p == nil {
			sum := sha256.Sum256([]byte(key))
			p = &Party{Key: key, ID: hex.EncodeToString(sum[:8])}
			byKey[key] = p
			gl.byID[p.ID] = p
			gl.parties = append(gl.parties, p)
		}
		for _, g := range p.Guests {
			if g.Name == name {
				return nil, fmt.Errorf("line %d: %s is listed twice in party %q", line, name, key)
			}
		}
		p.Guests = append(p.Guests, guest)
	}
	if len(gl.parties) == 0 {
		return nil, errors.New("no guests found")
	}
	return gl, nil
}

// Match is a party with a guest whose name matched a lookup.
type Match struct {
	Party *Party
	// Guest is the index of the guest who matched.
	Guest int
}

// Find returns the parties with a guest whose full name, or last name alone,
// matches what was typed. Case, accents and punctuation are ignored, and each
// word may have a one-letter typo.
func (gl *GuestList) Find(typed string) []Match {
	query := words(typed)
	if len(query) == 0 {
		return nil
	}
	var matches []Match
	for _, p := range gl.parties {
		for i, g := range p.Guests {
			if g.matches(query) {
				matches = append(matches, Match{p, i})
				break
			}
		}
	}
	return matches
}

func (g Guest) matches(query []string) bool {
	for _, spelling := range g.spellings {
		if len(spelling) != len(query) {
			continue
		}
		ok := true
		for i := range query {
			if !wordMatches(query[i], spelling[i]) {
				ok = false
				break
			}
		}
		if ok {
			return true
		}
	}
	return false
}

func (gl *GuestList) Party(id string) *Party {
	return gl.byID[id]
}

// wordMatches allows a one-letter typo, but only in words long enough that a
// typo can't turn one short name into another (Jon/Jan, Lee/Lea).
func wordMatches(typed, want string) bool {
	if typed == want {
		return true
	}
	return len(want) >= 4 && nearlyEqual(typed, want)
}

// words lowercases s, drops accents and apostrophes, and splits it into
// words, so "José O'Brien-Smith" becomes [jose obrien smith].
func words(s string) []string {
	var b strings.Builder
	for _, r := range norm.NFD.String(s) {
		switch {
		case unicode.Is(unicode.Mn, r), r == '\'', r == '’', r == '.':
			// Accents, and punctuation people often leave out.
		case unicode.IsLetter(r) || unicode.IsDigit(r):
			b.WriteRune(unicode.ToLower(r))
		default:
			b.WriteRune(' ')
		}
	}
	return strings.Fields(b.String())
}

// nearlyEqual reports whether a and b differ by at most one inserted,
// deleted, changed or swapped letter.
func nearlyEqual(a, b string) bool {
	x, y := []rune(a), []rune(b)
	if len(x) < len(y) {
		x, y = y, x
	}
	if len(x)-len(y) > 1 {
		return false
	}
	i := 0
	for i < len(y) && x[i] == y[i] {
		i++
	}
	if i == len(y) {
		return true
	}
	if len(x) > len(y) {
		return string(x[i+1:]) == string(y[i:])
	}
	if string(x[i+1:]) == string(y[i+1:]) {
		return true
	}
	return i+1 < len(y) && x[i] == y[i+1] && x[i+1] == y[i] && string(x[i+2:]) == string(y[i+2:])
}
