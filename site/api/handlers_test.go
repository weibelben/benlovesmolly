package main

import (
	"encoding/json"
	"log/slog"
	"net/http/httptest"
	"reflect"
	"strings"
	"testing"
)

func TestLookup(t *testing.T) {
	app := &App{log: slog.New(slog.DiscardHandler), guests: testGuests(t)}
	r := httptest.NewRequest("POST", "/api/lookup", strings.NewReader(`{"name": "jane doe"}`))
	w := httptest.NewRecorder()
	app.lookup(w, r)

	var res lookupResult
	if err := json.NewDecoder(w.Body).Decode(&res); err != nil {
		t.Fatal(err)
	}
	if len(res.Parties) != 1 {
		t.Fatalf("got %d parties, want 1", len(res.Parties))
	}
	p := res.Parties[0]
	if want := []string{"Jane Doe", "John Doe"}; !reflect.DeepEqual(p.Guests, want) {
		t.Errorf("guests = %v, want %v", p.Guests, want)
	}
	if want := []string{"Jane", "John"}; !reflect.DeepEqual(p.FirstNames, want) {
		t.Errorf("first names = %v, want %v", p.FirstNames, want)
	}
}
