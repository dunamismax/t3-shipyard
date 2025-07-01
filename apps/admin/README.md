# Admin Application

<p align="center">
  <img src="../../t3-shipyard-image.png" alt="t3-shipyard logo" width="250"/>
</p>

## Overview

This application provides a dedicated interface for managing users, content, and system settings. It demonstrates robust authentication, protected tRPC routes, and user management features, all built with the Next.js App Router.

## Getting Started

To run this application locally, follow these steps:

1. **Navigate to the app directory**:
   ```bash
   cd apps/admin
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**: Create a `.env` file in this directory (`apps/admin/.env`) and add the following:
   ```sh
   DATABASE_URL="postgresql://user:password@localhost:5432/t3shipyard_admin"
   # NEXTAUTH_SECRET is not required with tRPC
   NEXTAUTH_URL="http://localhost:3001"
   ```

4. **Push database schema**:
   ```bash
   pnpm db:push
   ```

5. **Run the development server**:
   ```bash
   pnpm dev
   ```

The application will be accessible at `http://localhost:3001`.

## Project Structure (App Router)

```sh
apps/admin/
├── prisma/
│   └── schema.prisma
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/trpc/[trpc]/route.ts # tRPC route handler
│   │   ├── layout.tsx               # Root layout with TRPCReactProvider
│   │   └── page.tsx                 # Main application page
│   ├── components/
│   │   └── ui/                      # Shared UI components
│   ├── server/
│   │   ├── api/
│   │   │   ├── root.ts              # Main tRPC router
│   │   │   ├── routers/
│   │   │   │   ├── example.ts
│   │   │   │   └── user.ts
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