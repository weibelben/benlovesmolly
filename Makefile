COMPOSE := docker compose -f site/compose.yaml
WEB_DIR := site/web

.PHONY: up down build deploy dev logs ps

up:
	$(COMPOSE) up -d

down:
	$(COMPOSE) down

build:
	$(COMPOSE) build

deploy:
	$(COMPOSE) up -d --build

dev:
	cd $(WEB_DIR) && npm run dev -- --host

logs:
	$(COMPOSE) logs -f --tail 50 $(s)

ps:
	$(COMPOSE) ps
