# t3-shipyard ⚓

My personal shipyard for building and launching full-stack, type-safe web applications using the T3 Stack. This is a monorepo managed with pnpm and Turborepo.

## Tech Stack

- **Framework**: [Next.js](<https://nextjs.org>)
- **Language**: [TypeScript](<https://www.typescriptlang.org>)
- **API Layer**: [tRPC](<https://trpc.io>)
- **Database ORM**: [Prisma](<https://prisma.io>)
- **Styling**: [Tailwind CSS](<https://tailwindcss.com>)
- **Database**: [PostgreSQL](<https://www.postgresql.org>)
- **Hosting**: Self-Hosted on Ubuntu via [Docker](<https://www.docker.com>), [PM2](<https://pm2.keymetrics.io>), and [Caddy](<https://caddyserver.com>)

## Monorepo Structure

- `apps/`: Contains individual applications (Next.js projects).
- `packages/`: Contains shared code used across multiple apps, such as UI components, database schemas, and configs.
- `docker/`: Contains Docker configurations for local development and production deployment.

## Getting Started

1.  **Clone the repository**: `git clone <your-repo-url>`
2.  **Install dependencies**: `pnpm install`
3.  **Start development services**: `docker compose -f docker/dev/docker-compose.yml up -d`
4.  **Run all apps in dev mode**: `pnpm dev`

## Applications

| Application | Description           | Link      |
|-------------|-----------------------|-----------|
| `web`       | Marketing Website     | [`apps/web`](./apps/web) |
| `dashboard` | Internal Admin Panel  | [`apps/dashboard`](./apps/dashboard) |