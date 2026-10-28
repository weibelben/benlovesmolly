-- Creates or updates the least-privilege role the API connects as. Run by the
-- db-init service on every `docker compose up`, so it must stay idempotent.
-- The role owns the site's tables (so the API's startup migrations work) but
-- is not a superuser, so it can't run shell commands or read server files.

\set ON_ERROR_STOP on
\getenv site_password SITE_DB_PASSWORD
\if :{?site_password}
\else
  \set site_password ''
\endif
-- Compose passes an unset variable as an empty string.
SELECT length(:'site_password') = 0 AS site_password_missing \gset
\if :site_password_missing
  DO $$ BEGIN RAISE EXCEPTION 'SITE_DB_PASSWORD is not set'; END $$;
\endif

SELECT 'CREATE ROLE benlovesmolly_site'
WHERE NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'benlovesmolly_site')
\gexec

ALTER ROLE benlovesmolly_site WITH LOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE
  NOREPLICATION NOBYPASSRLS PASSWORD :'site_password';

GRANT CONNECT ON DATABASE benlovesmolly TO benlovesmolly_site;
GRANT USAGE, CREATE ON SCHEMA public TO benlovesmolly_site;
