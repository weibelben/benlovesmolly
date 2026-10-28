# benlovesmolly
Code supporting benlovesmolly.com

## Layout

- `site/web` – Astro static site, served by nginx in a container
- `site/api` – Go API behind `/api/` that looks up invitations and saves RSVPs to Postgres
- `site/compose.yaml` – the `web`, `api` and `db` containers plus a `cloudflared` tunnel that publishes the site
- Wedding details (date, events, hotels, registries, etc.) live in `site/web/src/data/wedding.js`
- The guest list is `configs/benlovesmolly-private/invitees.csv`, a private submodule; `configs/invitees-example.csv` shows the format

## Commands

| Command       | Action                                               |
| :------------ | :--------------------------------------------------- |
| `make dev`    | Run the Astro dev server at `localhost:4321`         |
| `make dev-api` | Run the API locally against the example guest list, for `make dev` |
| `make deploy` | Rebuild and (re)start the web and tunnel containers  |
| `make deploy-web` | Rebuild and restart only the web container (tunnel stays up) |
| `make restart-api` | Restart the API so it rereads the guest list    |
| `make update-invitees` | Pull the latest guest list and restart the API |
| `make test`   | Vet and test the API                                  |
| `make psql`   | Open a Postgres shell (RSVPs are in `responses`)     |
| `make logs`   | Tail container logs (`make logs s=cloudflared`)      |
| `make down`   | Stop everything                                      |

Deploying needs `site/.env` with the values in `site/.env.example`.
