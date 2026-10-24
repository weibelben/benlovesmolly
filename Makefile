COMPOSE := docker compose -f site/compose.yaml
WEB_DIR := site/web

.PHONY: up down build deploy deploy-web dev logs ps

up:
	$(COMPOSE) up -d

down:
	$(COMPOSE) down

build:
	$(COMPOSE) build

deploy:
	$(COMPOSE) up -d --build

# Rebuild and restart only the frontend, leaving the tunnel running.
deploy-web:
	$(COMPOSE) up -d --build --no-deps web

dev:
	cd $(WEB_DIR) && npm run dev -- --host

logs:
	$(COMPOSE) logs -f --tail 50 $(s)

ps:
	$(COMPOSE) ps
