FROM node:20-alpine AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

ARG VITE_BASE_USER_SERVICE_URL=https://wheelz-user.zcorp.ovh
ENV VITE_BASE_USER_SERVICE_URL=${VITE_BASE_USER_SERVICE_URL}
ARG VITE_BASE_AUTH_SERVICE_URL=https://wheelz-auth.zcorp.ovh
ENV VITE_BASE_AUTH_SERVICE_URL=${VITE_BASE_AUTH_SERVICE_URL}
ARG VITE_BASE_TRANSACTION_SERVICE_URL=https://wheelz-transaction.zcorp.ovh
ENV VITE_BASE_TRANSACTION_SERVICE_URL=${VITE_BASE_TRANSACTION_SERVICE_URL}
ARG VITE_BASE_CHAIN_SERVICE_URL=https://wheelz-chain.zcorp.ovh
ENV VITE_BASE_CHAIN_SERVICE_URL=${VITE_BASE_CHAIN_SERVICE_URL}
ARG VITE_BASE_BLOG_SERVICE_URL=https://wheelz-blog-post.zcorp.ovh
ENV VITE_BASE_BLOG_SERVICE_URL=${VITE_BASE_BLOG_SERVICE_URL}
RUN pnpm run build

FROM caddy:2.8-alpine
COPY --from=build /app/dist /usr/share/caddy

COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
