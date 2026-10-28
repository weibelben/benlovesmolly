package main

import (
	"encoding/json"
	"log/slog"
	"net/http"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type App struct {
	db     *gorm.DB
	log    *slog.Logger
	guests *GuestList
}

const maxBodyBytes = 16 << 10

type lookupResult struct {
	Parties []partyJSON `json:"parties"`
}

type partyJSON struct {
	ID string `json:"id"`
	// The guest who matched comes first, then the rest of their party.
	Guests []string `json:"guests"`
}

// lookup finds the parties a guest belongs to by their full or last name.
func (a *App) lookup(w http.ResponseWriter, r *http.Request) {
	var req struct {
		Name string `json:"name"`
	}
	if !decode(w, r, &req) {
		return
	}

	res := lookupResult{Parties: []partyJSON{}}
	for _, m := range a.guests.Find(req.Name) {
		names := []string{m.Party.Guests[m.Guest].Name}
		for i, g := range m.Party.Guests {
			if i != m.Guest {
				names = append(names, g.Name)
			}
		}
		res.Parties = append(res.Parties, partyJSON{ID: m.Party.ID, Guests: names})
	}
	writeJSON(w, res)
}

func (a *App) rsvp(w http.ResponseWriter, r *http.Request) {
	var req RSVP
	if !decode(w, r, &req) {
		return
	}
	rows, err := req.responses(a.guests)
	if err != nil {
		writeError(w, "Please check your answers and email, then try again.", http.StatusBadRequest)
		return
	}

	err = a.db.WithContext(r.Context()).Clauses(clause.OnConflict{
		Columns:   []clause.Column{{Name: "party"}, {Name: "guest"}},
		DoUpdates: clause.AssignmentColumns([]string{"attending", "email", "updated_at"}),
	}).Create(&rows).Error
	if err != nil {
		a.log.Error("save rsvp", "err", err)
		writeError(w, "Something went wrong. Please try again later.", http.StatusInternalServerError)
		return
	}

	a.log.Info("rsvp saved", "party", rows[0].Party)
	w.WriteHeader(http.StatusNoContent)
}

func (a *App) healthz(w http.ResponseWriter, r *http.Request) {
	sqlDB, err := a.db.DB()
	if err != nil || sqlDB.PingContext(r.Context()) != nil {
		http.Error(w, "db unavailable", http.StatusServiceUnavailable)
		return
	}
	w.Write([]byte("ok"))
}

func decode(w http.ResponseWriter, r *http.Request, v any) bool {
	r.Body = http.MaxBytesReader(w, r.Body, maxBodyBytes)
	if err := json.NewDecoder(r.Body).Decode(v); err != nil {
		writeError(w, "Invalid request.", http.StatusBadRequest)
		return false
	}
	return true
}

func writeJSON(w http.ResponseWriter, v any) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "no-store")
	json.NewEncoder(w).Encode(v)
}

// writeError sends a message the RSVP page can show the guest as is.
func writeError(w http.ResponseWriter, message string, status int) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(map[string]string{"error": message})
}
