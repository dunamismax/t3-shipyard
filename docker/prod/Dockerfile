# 1. Install dependencies only when needed
FROM node:20-slim AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm
RUN pnpm fetch

# 2. Rebuild the source code only when needed
FROM node:20-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules .
COPY . .
RUN npm install -g pnpm
RUN pnpm install -r --offline
RUN pnpm turbo build --filter= @t3-shipyard/web...

# 3. Production image, copy all the files and run next
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/public ./apps/web/public
CMD node apps/web/web/server.js
