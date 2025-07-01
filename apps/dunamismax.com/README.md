# dunamismax.com

<p align="center">
  <img src="../../t3-shipyard-image.png" alt="t3-shipyard logo" width="250"/>
</p>

## Overview

My personal blog and developer portfolio website. This application showcases my work, articles, and serves as a comprehensive online presence, built with the Next.js App Router.

## Getting Started

To run this application locally, follow these steps:

1. **Navigate to the app directory**:
   ```bash
   cd apps/dunamismax.com
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**: Create a `.env` file in this directory (`apps/dunamismax.com/.env`) and add the following:
   ```sh
   DATABASE_URL="postgresql://user:password@localhost:5432/t3shipyard_dunamismax"
   NEXTAUTH_URL="http://localhost:3005"
   ```

4. **Push database schema**:
   ```bash
   pnpm db:push
   ```

5. **Run the development server**:
   ```bash
   pnpm dev
   ```

The application will be accessible at `http://localhost:3005`.

## Project Structure (App Router)

```sh
apps/dunamismax.com/
├── prisma/
│   └── schema.prisma
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/trpc/[trpc]/route.ts # tRPC route handler
│   │   ├── blog/[slug]/page.tsx     # Dynamic route for blog posts
│   │   ├── portfolio/[slug]/page.tsx# Dynamic route for portfolio projects
│   │   ├── layout.tsx               # Root layout with TRPCReactProvider
│   │   └── page.tsx                 # Main application page
│   ├── components/
│   │   └── ui/                      # Shared UI components
│   ├── server/
│   │   ├── api/
│   │   │   ├── root.ts              # Main tRPC router
│   │   │   ├── routers/
│   │   │   │   ├── blog.ts
│   │   │   │   └── portfolio.ts
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