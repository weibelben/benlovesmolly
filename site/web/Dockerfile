FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Paid fonts come from the private repo (the `private` build context in
# compose.yaml), not this public one. Keep in step with `make fonts`.
COPY --from=private ["Le-Studio-Nocturne-Nostalgic-Set/Le Studio Nocturne.woff2", "src/fonts/le-studio-nocturne.woff2"]
RUN npm run build

# Runs as a non-root user; nginx.conf still listens on 80, which Docker
# allows unprivileged processes to bind inside a container.
FROM nginxinc/nginx-unprivileged:alpine
# Rendered into conf.d at start-up, filling in the password hash from the env.
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html
