package main

import (
	"context"
	"errors"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

func main() {
	log := slog.New(slog.NewJSONHandler(os.Stdout, nil))

	// Read once at startup; restart the API to pick up guest list changes.
	guests, err := loadGuestList(os.Getenv("INVITEES_CSV"))
	if err != nil {
		log.Error("load guest list", "path", os.Getenv("INVITEES_CSV"), "err", err)
		os.Exit(1)
	}

	db, err := gorm.Open(postgres.Open(os.Getenv("DATABASE_URL")), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Warn),
	})
	if err != nil {
		log.Error("connect database", "err", err)
		os.Exit(1)
	}
	if err := db.AutoMigrate(&Response{}); err != nil {
		log.Error("migrate", "err", err)
		os.Exit(1)
	}

	app := &App{
		db:     db,
		log:    log,
		guests: guests,
	}

	mux := http.NewServeMux()
	mux.HandleFunc("POST /api/lookup", app.lookup)
	mux.HandleFunc("POST /api/rsvp", app.rsvp)
	mux.HandleFunc("GET /healthz", app.healthz)

	srv := &http.Server{
		Addr:              ":8080",
		Handler:           mux,
		ReadHeaderTimeout: 5 * time.Second,
		ReadTimeout:       10 * time.Second,
		WriteTimeout:      15 * time.Second,
		IdleTimeout:       60 * time.Second,
	}

	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	go func() {
		log.Info("listening", "addr", srv.Addr)
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Error("server", "err", err)
			os.Exit(1)
		}
	}()

	<-ctx.Done()
	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err := srv.Shutdown(shutdownCtx); err != nil {
		log.Error("shutdown", "err", err)
	}
}
