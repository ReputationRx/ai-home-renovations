#!/usr/bin/env bash
set -euo pipefail

SITE_ROOT="/www/wwwroot/stage.aihomerenovations.com"
REPO_URL="https://github.com/ReputationRx/ai-home-renovations.git"
BRANCH="main"
APP_PORT=3011
PM2_NAME="ai-home-renovations-stage"
NGINX_EXT="/www/server/panel/vhost/nginx/extension/stage.aihomerenovations.com/proxy.conf"

echo "==> Preparing site directory at ${SITE_ROOT}"
mkdir -p "${SITE_ROOT}/app"
cd "${SITE_ROOT}"

if [[ ! -d repo/.git ]]; then
  echo "==> Cloning repository"
  rm -rf repo
  git clone --branch "${BRANCH}" "${REPO_URL}" repo
else
  echo "==> Updating repository"
  git -C repo fetch origin "${BRANCH}"
  git -C repo reset --hard "origin/${BRANCH}"
fi

echo "==> Installing dependencies"
cd repo
npm ci

echo "==> Building Next.js standalone app"
npm run build

echo "==> Syncing standalone build to app/"
rsync -a --delete \
  .next/standalone/ "${SITE_ROOT}/app/" \
  --exclude node_modules
rsync -a --delete .next/static "${SITE_ROOT}/app/.next/static"
rsync -a --delete public/ "${SITE_ROOT}/app/public/"

cp "${SITE_ROOT}/repo/ecosystem.config.cjs" "${SITE_ROOT}/ecosystem.config.cjs"

echo "==> Installing nginx reverse proxy config"
mkdir -p "$(dirname "${NGINX_EXT}")"
cp "${SITE_ROOT}/repo/deploy/aapanel/nginx-proxy.conf" "${NGINX_EXT}"
nginx -t
systemctl reload nginx

echo "==> Restarting PM2 process"
pm2 delete "${PM2_NAME}" 2>/dev/null || true
pm2 start "${SITE_ROOT}/ecosystem.config.cjs"
pm2 save

echo "==> Deployment complete"
curl -sI "http://127.0.0.1:${APP_PORT}/" | head -5
