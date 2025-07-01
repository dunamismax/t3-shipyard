# CodeCaddy Application

<p align="center">
  <img src="../../t3-shipyard-image.png" alt="t3-shipyard logo" width="250"/>
</p>

## Overview

CodeCaddy is a minimalist and fast platform for developers to publicly save, tag, and discover code snippets. It's designed as a community-driven, open clipboard for useful code, with all snippets being public and no login required.

## Getting Started

To run this application locally, follow these steps:

1. **Navigate to the app directory**:
   ```bash
   cd apps/codecaddy
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**: Create a `.env` file in this directory (`apps/codecaddy/.env`) and add your database URL:
   ```sh
   DATABASE_URL="postgresql://user:password@localhost:5432/t3shipyard_codecaddy"
   ```

4. **Push database schema**:
   ```bash
   pnpm db:push
   ```

5. **Run the development server**:
   ```bash
   pnpm dev
   ```

The application will be accessible at `http://localhost:3003`.

## Project Structure (App Router)

```sh
apps/codecaddy/
├── prisma/
│   └── schema.prisma
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/trpc/[trpc]/route.ts # tRPC route handler
│   │   ├── snippets/[id]/page.tsx   # Dynamic route for single snippets
│   │   ├── tags/[tag]/page.tsx      # Dynamic route for tags
│   │   ├── new/page.tsx             # Page to create a new snippet
│   │   ├── layout.tsx               # Root layout with TRPCReactProvider
│   │   └── page.tsx                 # Main application page
│   ├── components/
│   │   └── ui/                      # Shared UI components
│   ├── server/
│   │   ├── api/
│   │   │   ├── root.ts              # Main tRPC router
│   │   │   ├── routers/
│   │   │   │   └── snippet.ts
│   │   │   └── trpc.ts              # tRPC context and procedures
│   │   └── db/
│   │       └── index.ts             # Prisma client instance
│   ├── styles/
│   │   └── globals.css
│   ├── trpc/
│   │   └── react.tsx                # tRPC client provider
│   └── utils/
│       └── index.ts                 # Utility functions
├── next.config.mjs
├── package.json
├── postcss.config.cjs
├── tailwind.config.ts
└── tsconfig.json
```

## Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **tRPC**
- **Prisma**
- **Tailwind CSS**
- **Shadcn/ui**

---

**[⬆️ Back to Monorepo Root](https://github.com/dunamismax/t3-shipyard?tab=readme-ov-file#projects-overview)**