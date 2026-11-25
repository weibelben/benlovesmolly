COMPOSE := docker compose -f site/compose.yaml
API_DIR := site/api
WEB_DIR := site/web

.PHONY: up down build deploy deploy-web restart-api update-invitees update-submodules fonts photos dev dev-api logs ps test psql

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

# Pull the latest of every submodule (guest list, fonts) from its main branch.
update-submodules:
	git submodule update --init --remote --recursive
	$(MAKE) fonts photos

# Copy the paid fonts from the private submodule into the site for local
# builds; the Docker build copies them itself. Keep in step with web/Dockerfile.
FONTS := configs/benlovesmolly-private/Le-Studio-Nocturne-Nostalgic-Set
fonts:
	mkdir -p $(WEB_DIR)/src/fonts
	cp "$(FONTS)/Le Studio Nocturne.woff2" $(WEB_DIR)/src/fonts/le-studio-nocturne.woff2

# Copy each page's photos from its folder in the private submodule into
# src/assets/<page>/, replacing what was there so deleted photos go too. The
# Docker build copies them itself. Keep in step with web/Dockerfile.
PRIVATE := configs/benlovesmolly-private
PHOTO_DIRS := Home:home BridalParty:bridal-party OurStory:our-story Logistics:logistics Registry:registry
photos:
	@for pair in $(PHOTO_DIRS); do \
		src=$(PRIVATE)/$${pair%%:*}; dest=$(WEB_DIR)/src/assets/$${pair##*:}; \
		rm -rf "$$dest"; mkdir -p "$$dest"; \
		find "$$src" -maxdepth 1 -type f ! -name README.md -exec cp {} "$$dest"/ \; ; \
		echo "$$src -> $$dest"; \
	done

dev: fonts photos
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
