COMPOSE := docker compose -f site/compose.yaml
API_DIR := site/api
WEB_DIR := site/web

.PHONY: up down build deploy deploy-web restart-api update-invitees dev dev-api logs ps test psql

up:
	$(COMPOSE) up -d

down:
	$(COMPOSE) down

build:
	$(COMPOSE) build

deploy:
	$(COMPOSE) up -d --build

# Rebuild and restart only the frontend, leaving the API, database and tunnel running.
deploy-web:
	$(COMPOSE) up -d --build --no-deps web

# Restart the API so it rereads the guest list.
restart-api:
	$(COMPOSE) restart api

# Pull the latest guest list from the private repo's main branch
update-invitees:
	git submodule update --init --remote configs/benlovesmolly-private

dev:
	cd $(WEB_DIR) && npm run dev -- --host

# Runs the API on :8080 against the example guest list, for `make dev` to
# proxy /api/ to. Starts the database container if it isn't running.
dev-api:
	$(COMPOSE) up -d --wait db
	set -a && . site/.env && cd $(API_DIR) && \
	DATABASE_URL="postgres://benw:$$POSTGRES_PASSWORD@localhost:5433/benlovesmolly?sslmode=disable" \
	INVITEES_CSV=../../configs/invitees-example.csv go run .

logs:
	$(COMPOSE) logs -f --tail 50 $(s)

ps:
	$(COMPOSE) ps

test:
	cd $(API_DIR) && go vet ./... && go test ./...

psql:
	$(COMPOSE) exec db psql -U benw benlovesmolly
