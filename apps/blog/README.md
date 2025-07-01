# Blog Application

<p align="center">
  <img src="../../t3-shipyard-image.png" alt="t3-shipyard logo" width="250"/>
</p>

## Overview

This application is a content-focused platform for publishing articles and updates. It demonstrates dynamic content rendering, tRPC queries and mutations for post management, and basic SEO considerations.

## Getting Started

To run this application locally, follow these steps:

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Configure Environment Variables**: Create a `.env` file in the root of this application and add the following variables, replacing with your actual values:

   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/t3shipyard_blog"
   ```

3. **Run database migrations and generate Prisma client**:

   ```bash
   pnpm db:push
   pnpm db:generate
   ```

4. **Run the development server**:

   ```bash
   pnpm dev
   ```

   The application will be accessible at `http://localhost:3002`.

## Project Structure

```
apps/blog/
├── src/
│   ├── pages/                  # Next.js pages (routes)
│   │   ├── api/                # API routes (tRPC endpoint)
│   │   │   └── trpc/
│   │   │       └── [trpc].ts
│   │   ├── posts/              # Dynamic post pages
│   │   │   └── [id].tsx
│   │   ├── _app.tsx            # Custom App component
│   │   └── index.tsx           # Home page (post list and creation)
│   ├── components/             # Reusable React components
│   │   └── Navbar.tsx
│   ├── server/                 # Backend-related code
│   │   ├── api/                # tRPC API definitions
│   │   │   ├── routers/        # Individual tRPC routers
│   │   │   │   └── post.ts
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
- **Prisma**
- **Tailwind CSS**
