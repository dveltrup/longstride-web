FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
# Remove optional platform-specific binaries (e.g. sharp darwin packages) that
# have empty version strings and cause npm 10 to abort during lockfile validation.
RUN node -e "
  const fs = require('fs');
  const lock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));
  for (const [k, v] of Object.entries(lock.packages || {})) {
    if (v.version === '' && v.optional) delete lock.packages[k];
  }
  fs.writeFileSync('package-lock.json', JSON.stringify(lock));
"
RUN npm ci --omit=optional

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
