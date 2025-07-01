# Admin Application

This is the admin application for the `t3-shipyard` monorepo.

## Overview

This application provides a dedicated interface for managing users, content, and system settings. It demonstrates robust authentication with NextAuth.js, protected tRPC routes, and user management features, built with Next.js, tRPC, Prisma, and Tailwind CSS.

## Getting Started

To run this application locally, follow these steps:

1.  **Navigate to the monorepo root**: If you are not already there, change your directory to the `t3-shipyard` root.
    ```bash
    cd /path/to/t3-shipyard
    ```

2.  **Install dependencies**: Ensure all monorepo dependencies are installed.
    ```bash
    pnpm install
    ```

3.  **Start development services (optional but recommended)**: If your application requires a database or other services, start the Docker Compose setup from the monorepo root.
    ```bash
    docker compose -f docker/dev/docker-compose.yml up -d
    ```

4.  **Configure Environment Variables**: Create a `.env` file in the monorepo root and add the following variables, replacing with your actual values:
    ```
    DATABASE_URL="postgresql://user:password@localhost:5432/t3shipyard"
    NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET" # Generate a strong secret: openssl rand -base64 32
    NEXTAUTH_URL="http://localhost:3000" # Or your deployment URL
    ```

5.  **Run the development server**: Start the Next.js development server for the admin application.
    ```bash
    pnpm --filter @t3-shipyard/admin dev
    ```

    The application will be accessible at `http://localhost:3000` (or another port if 3000 is in use).

## Project Structure

```
apps/admin/
├── src/
│   ├── pages/                  # Next.js pages (routes)
│   │   ├── api/                # API routes (tRPC endpoint, NextAuth.js API)
│   │   │   ├── auth/           # NextAuth.js API routes
│   │   │   │   └── [...nextauth].ts
│   │   │   └── trpc/
│   │   │       └── [trpc].ts
│   │   ├── _app.tsx            # Custom App component
│   │   ├── index.tsx           # Home page
│   │   └── users.tsx           # User management page
│   ├── components/             # Reusable React components
│   │   └── Navbar.tsx
│   ├── server/                 # Backend-related code
│   │   ├── api/                # tRPC API definitions
│   │   │   ├── routers/        # Individual tRPC routers
│   │   │   │   ├── example.ts
│   │   │   │   └── user.ts
│   │   │   ├── root.ts         # Root tRPC router
│   │   │   └── trpc.ts         # tRPC context and procedures
│   │   ├── auth/               # Authentication setup (NextAuth.js)
│   │   │   └── index.ts
│   │   └── db/                 # Database client setup
│   │       └── client.ts
│   ├── styles/                 # Global styles
│   │   └── globals.css
│   └── utils/                  # Utility functions (e.g., tRPC client setup)
│       └── api.ts
├── next.config.mjs             # Next.js configuration
├── package.json                # Package dependencies and scripts
├── postcss.config.cjs          # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── .eslintrc.cjs               # ESLint configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This README file
```

## Learn More

-   [T3 Stack Documentation](https://create.t3.gg/)
-   [Next.js Documentation](https://nextjs.org/docs)
-   [tRPC Documentation](https://trpc.io/docs)
-   [Prisma Documentation](https://www.prisma.io/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [NextAuth.js Documentation](https://next-auth.js.org/)

---

**[&#8593; Back to Monorepo Root](https://github.com/dunamismax/t3-shipyard)**