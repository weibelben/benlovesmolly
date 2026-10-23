# benlovesmolly
Code supporting benlovesmolly.com

## Layout

- `site/web` – Astro static site, served by nginx in a container
- `site/compose.yaml` – the `web` container plus a `cloudflared` tunnel that publishes it
- Wedding details (date, events, hotels, registries, etc.) live in `site/web/src/data/wedding.js`

## Commands

| Command       | Action                                               |
| :------------ | :--------------------------------------------------- |
| `make dev`    | Run the Astro dev server at `localhost:4321`         |
| `make deploy` | Rebuild and (re)start the web and tunnel containers  |
| `make logs`   | Tail container logs (`make logs s=cloudflared`)      |
| `make down`   | Stop everything                                      |

Deploying needs `site/.env` with a `TUNNEL_TOKEN` (see `site/.env.example`).
