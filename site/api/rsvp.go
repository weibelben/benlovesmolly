package main

import (
	"errors"
	"net/mail"
	"strings"
	"time"
)

// Response is one guest's answer. Answering again replaces it, so there's
// always one row per guest.
type Response struct {
	ID        uint      `gorm:"primaryKey"`
	CreatedAt time.Time `gorm:"not null"`
	UpdatedAt time.Time `gorm:"not null"`
	Party     string    `gorm:"not null;uniqueIndex:idx_responses_party_guest"`
	Guest     string    `gorm:"not null;uniqueIndex:idx_responses_party_guest"`
	Attending bool      `gorm:"not null"`
	Email     string    `gorm:"not null"`
}

// RSVP is what the RSVP form sends: an answer for every guest in the party.
type RSVP struct {
	Party  string `json:"party"`
	Email  string `json:"email"`
	Guests []struct {
		Name      string `json:"name"`
		Attending bool   `json:"attending"`
	} `json:"guests"`
}

var errInvalid = errors.New("invalid RSVP")

// responses checks the RSVP against the guest list and returns a row for
// each guest. It fails unless every guest in the party is answered for
// exactly once.
func (r *RSVP) responses(gl *GuestList) ([]Response, error) {
	party := gl.Party(r.Party)
	if party == nil || len(r.Guests) != len(party.Guests) {
		return nil, errInvalid
	}
	email, err := normalizeEmail(r.Email)
	if err != nil {
		return nil, err
	}

	answered := map[string]bool{}
	var rows []Response
	for _, g := range r.Guests {
		if answered[g.Name] || !party.has(g.Name) {
			return nil, errInvalid
		}
		answered[g.Name] = true
		rows = append(rows, Response{Party: party.Key, Guest: g.Name, Attending: g.Attending, Email: email})
	}
	return rows, nil
}

func (p *Party) has(name string) bool {
	for _, g := range p.Guests {
		if g.Name == name {
			return true
		}
	}
	return false
}

func normalizeEmail(s string) (string, error) {
	email := strings.ToLower(strings.TrimSpace(s))
	if len(email) > 254 {
		return "", errInvalid
	}
	addr, err := mail.ParseAddress(email)
	if err != nil || addr.Address != email {
		return "", errInvalid
	}
	// net/mail allows dotless domains like "user@localhost"; require a TLD.
	domain := email[strings.LastIndexByte(email, '@')+1:]
	if dot := strings.LastIndexByte(domain, '.'); dot <= 0 || dot == len(domain)-1 {
		return "", errInvalid
	}
	return email, nil
}
