# Blog Application

<p align="center">
  <img src="../../t3-shipyard-image.png" alt="t3-shipyard logo" width="250"/>
</p>

## Overview

This application is a content-focused platform for publishing articles and updates. It demonstrates dynamic content rendering and tRPC queries/mutations for post management using the Next.js App Router.

## Getting Started

To run this application locally, follow these steps:

1. **Navigate to the app directory**:
   ```bash
   cd apps/blog
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**: Create a `.env` file in this directory (`apps/blog/.env`) and add your database URL:
   ```sh
   DATABASE_URL="postgresql://user:password@localhost:5432/t3shipyard_blog"
   ```

4. **Push database schema**:
   ```bash
   pnpm db:push
   ```

5. **Run the development server**:
   ```bash
   pnpm dev
   ```

The application will be accessible at `http://localhost:3002`.

## Project Structure (App Router)

```sh
apps/blog/
├── prisma/
│   └─�� schema.prisma
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/trpc/[trpc]/route.ts # tRPC route handler
│   │   ├── posts/[id]/page.tsx      # Dynamic route for single posts
│   │   ├── layout.tsx               # Root layout with TRPCReactProvider
│   │   └── page.tsx                 # Main application page (post list)
│   ├── components/
│   │   └── ui/                      # Shared UI components
│   ├── server/
│   │   ├── api/
│   │   │   ├── root.ts              # Main tRPC router
│   │   │   ├── routers/
│   │   │   │   └── post.ts
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