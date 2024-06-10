FROM node:20-alpine as build
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ARG VITE_BASE_USER_SERVICE_URL=https://wheelz-user.zcorp.ovh
ENV VITE_BASE_USER_SERVICE_URL=${VITE_BASE_USER_SERVICE_URL}
ARG VITE_BASE_AUTH_SERVICE_URL=https://wheelz-auth.zcorp.ovh
ENV VITE_BASE_AUTH_SERVICE_URL=${VITE_BASE_AUTH_SERVICE_URL}
RUN npm run build

FROM caddy:2.8-alpine
COPY --from=build /app/dist /usr/share/caddy

COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
