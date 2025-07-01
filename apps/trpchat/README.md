# trpchat Application

<p align="center">
  <img src="../../t3-shipyard-image.png" alt="t3-shipyard logo" width="250"/>
</p>

## Overview

This application is a real-time chat application similar to Slack or Discord. It demonstrates real-time communication using WebSockets with tRPC and is built with the Next.js App Router.

## Getting Started

To run this application locally, follow these steps:

1. **Navigate to the app directory**:
   ```bash
   cd apps/trpchat
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**: Create a `.env` file in this directory (`apps/trpchat/.env`) and add your database URL:
   ```sh
   DATABASE_URL="postgresql://user:password@localhost:5432/t3shipyard_trpchat"
   ```

4. **Push database schema**:
   ```bash
   pnpm db:push
   ```

5. **Start the WebSocket server**:
    ```bash
    pnpm ws-dev
    ```

6. **In a separate terminal, run the development server**:
   ```bash
   pnpm dev
   ```

The application will be accessible at `http://localhost:3006`.

## Project Structure (App Router)

```sh
apps/trpchat/
├── prisma/
│   └── schema.prisma
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/trpc/[trpc]/route.ts # tRPC route handler
│   │   ├── chat/[room]/page.tsx     # Dynamic route for chat rooms
│   │   ├── layout.tsx               # Root layout with TRPCReactProvider
│   │   └── page.tsx                 # Main application page
│   ├── components/
│   │   └── ui/                      # Shared UI components
│   ├── server/
│   │   ├── api/
│   │   │   ├── root.ts              # Main tRPC router
│   │   │   ├── routers/
│   │   │   │   └── chat.ts
│   │   │   └── trpc.ts              # tRPC context and procedures
│   │   ├── db/
│   │   │   └── index.ts             # Prisma client instance
│   │   └── wsServer.ts              # WebSocket server logic
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
- **tRPC (with WebSockets)**
- **Prisma**
- **Tailwind CSS**
- **Shadcn/ui**

---

**[⬆️ Back to Monorepo Root](https://github.com/dunamismax/t3-shipyard?tab=readme-ov-file#projects-overview)**