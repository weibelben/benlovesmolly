FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Read by src/data/invitees.js; only guest names end up in the built site.
COPY --from=invitees invitees.csv /invitees.csv
ENV INVITEES_CSV=/invitees.csv
RUN npm run build

# Runs as a non-root user; nginx.conf still listens on 80, which Docker
# allows unprivileged processes to bind inside a container.
FROM nginxinc/nginx-unprivileged:alpine
# Rendered into conf.d at start-up, filling in the password hash from the env.
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html
