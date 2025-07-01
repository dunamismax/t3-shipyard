# trpchat Application

## Overview

This application is a real-time chat application similar to Slack or Discord. It demonstrates real-time communication using WebSockets with tRPC, built with Next.js, tRPC, and Tailwind CSS.

## Getting Started

To run this application locally, follow these steps:

1. **Install dependencies**:

    ```bash
    pnpm install
    ```

2. **Configure Environment Variables**: Create a `.env` file in the root of this application and add the following variables, replacing with your actual values:

    ```
    DATABASE_URL="postgresql://user:password@localhost:5432/t3shipyard_trpchat"
    ```

3. **Run database migrations and generate Prisma client**:

    ```bash
    pnpm db:push
    pnpm db:generate
    ```

4. **Start the WebSocket server**:

    ```bash
    pnpm ws-dev
    ```

5. **Run the development server**:

    ```bash
    pnpm dev
    ```

    The application will be accessible at `http://localhost:3000` (or another port if 3000 is in use).

## Project Structure

```
apps/trpchat/
├── src/
│   ├── pages/                  # Next.js pages (routes)
│   │   ├── api/                # API routes (tRPC endpoint)
│   │   │   └── trpc/
│   │   │       └── [trpc].ts
│   │   ├── chat/               # Dynamic chatroom pages
│   │   │   └── [chatroom].tsx
│   │   ├── _app.tsx            # Custom App component
│   │   └── index.tsx           # Home page (username and server input)
│   ├── components/             # Reusable React components
│   │   └── ui/                 # UI components (e.g., Button)
│   │       └── button.tsx
│   ├── server/                 # Backend-related code
│   │   ├── api/                # tRPC API definitions
│   │   │   ├── routers/        # Individual tRPC routers
│   │   │   │   ├── chat.ts
│   │   │   │   └── example.ts
│   │   │   ├── root.ts         # Root tRPC router
│   │   │   └── trpc.ts         # tRPC context and procedures
│   │   ├── auth/               # Authentication setup (NextAuth.js)
│   │   │   └── index.ts
│   │   ├── db/                 # Database client setup
│   │   │   └── client.ts
│   │   └── wsServer.ts         # WebSocket server for real-time communication
│   ├── styles/                 # Global styles
│   │   ├── chat.css
│   │   └── globals.css
│   └── utils/                  # Utility functions (e.g., tRPC client setup)
│       └── api.ts
├── ecosystem.config.js         # PM2 ecosystem configuration
├── next.config.mjs             # Next.js configuration
├── package.json                # Package dependencies and scripts
├── postcss.config.cjs          # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── .eslintrc.cjs               # ESLint configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This README file
```

## Learn More

- [T3 Stack Documentation](https://create.t3.gg/)
- [Next.js Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**[&#8593; Back to Monorepo Root](https://github.com/dunamismax/t3-shipyard?tab=readme-ov-file#projects-overview)**

## Tech Stack

This application is built using the following core technologies:

- **Next.js**
- **TypeScript**
- **tRPC**
- **Tailwind CSS**
- **WebSockets**
