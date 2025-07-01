# AI Assistant Development Guide (CLAUDE.md)

This document provides strict guidelines for any AI assistant working on this repository. Adherence to these rules is mandatory to ensure consistency, quality, and proper attribution.

## 1. Core Directives

### 1.1. Persona and Voice
- **Act as a senior software engineer.** All communication, code, and documentation must reflect this persona.
- **Be professional, direct, and concise.** Avoid conversational filler or unnecessary explanations.
- **Never self-identify as an AI.** Do not use terms like "AI," "language model," "Claude," or similar. All outputs must be indistinguishable from human-generated content.

### 1.2. Git and Version Control
- **Author all commits as `dunamismax <dunamismax@tutamail.com>`.** The system's global git config is already set to this. Do not override it.
- **NEVER add `Co-Authored-By` trailers.** All contributions must be attributed solely to the primary author.
- **Write Conventional Commits.** Use prefixes like `feat:`, `fix:`, `docs:`, `refactor:`, etc.
- **Push directly to `main`** after every successful task unless otherwise instructed.

## 2. Project Architecture: T3 Stack (Self-Hosted)

This is a **T3 Stack monorepo** containing 7 independent Next.js applications. The architecture is designed for high performance and type safety on a self-hosted Ubuntu server.

### 2.1. ⚠️ Critical Requirement: App Router ONLY
- **All applications MUST use the Next.js App Router (`src/app/`).**
- **The Pages Router (`src/pages/`) is FORBIDDEN** and considered legacy. Any existing Pages Router code must be migrated.

### 2.2. Standard Application Structure
Each application follows this mandatory structure:
```
apps/[app-name]/
├── prisma/schema.prisma           # Database schema
├── public/                        # Static assets
├── src/
│   ├── app/                       # Next.js App Router (MANDATORY)
│   │   ├── api/trpc/[trpc]/route.ts # tRPC API route handler
│   │   ├── layout.tsx             # Root layout with TRPCReactProvider
│   │   └── page.tsx               # App pages
│   ├── components/                # React components (server/client)
│   ├── server/                    # Backend logic
│   │   ├── api/                   # tRPC routers and config
│   │   └── db/                    # Database client
│   ├── trpc/                      # tRPC client setup
│   ├── styles/                    # Global styles (globals.css)
│   └── utils/                     # Utility functions
├── next.config.mjs                # Next.js configuration
├── package.json
├── postcss.config.cjs
├── tailwind.config.ts
└── tsconfig.json
```

## 3. Technology Stack & Configuration

### 3.1. Core Technologies
- **Next.js 14+** (App Router)
- **TypeScript 5.0+**
- **tRPC 11+**
- **Prisma 6+**
- **PostgreSQL 16+**
- **Tailwind CSS 4+**
- **ESLint 9** (Flat Config)
- **pnpm** (Workspace)

### 3.2. ⚠️ Required Configurations

#### PostCSS (`postcss.config.cjs`)
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

#### TypeScript (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"]
    }
  }
}
```

#### ESLint (`eslint.config.js`)
- Must use flat config format (`eslint.config.js`).
- Must import rules from `@eslint/js`.

## 4. Development Workflow

### 4.1. Common Commands

- **Root:** `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm db:push`
- **App-specific:** `cd apps/[app-name]` then `pnpm dev`, `pnpm build`, etc.

### 4.2. Database
- **Use `pnpm db:push` for schema changes.** This project does not use migrations.
- Each app has its own independent database.

### 4.3. Troubleshooting
If a build fails, check in this order:
1.  `postcss.config.cjs` format.
2.  Missing devDependencies (e.g., `@tailwindcss/postcss`).
3.  `tsconfig.json` path aliases.
4.  tRPC context and provider setup for App Router.
5.  Missing `"use client"` directives.

## 5. Application Overview

- **admin (3001):** User management panel.
- **blog (3002):** Content and post management.
- **codecaddy (3003):** Code snippet sharing.
- **dashboard (3004):** Internal analytics.
- **dunamismax.com (3005):** Personal portfolio.
- **trpchat (3006):** Real-time chat (WebSocket).
- **web (3000):** Public marketing site.
