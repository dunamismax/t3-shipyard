This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

<p align="center">
  <img src="../../t3-shipyard-image.png" alt="t3-shipyard logo" width="100"/>
</p>

## Getting Started

To run this application locally, follow these steps:

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Configure Environment Variables**: Create a `.env` file in the root of this application and add the following variables, replacing with your actual values:

   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/t3shipyard_dunamismax"
   NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET" # Generate a strong secret: openssl rand -base64 32
   NEXTAUTH_URL="http://localhost:3000" # Or your deployment URL
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

   The application will be accessible at `http://localhost:3000` (or another port if 3000 is in use).

## Project Structure

```
apps/dunamismax.com/
├── src/
│   ├── app/                    # Next.js App Router (pages, layout, etc.)
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/             # Reusable React components
│   │   └── Navbar.tsx
│   ├── pages/                  # Next.js Pages Router (for API routes or specific pages)
│   │   ├── api/                # API routes (tRPC endpoint)
│   │   ├── blog/               # Blog pages
│   │   ├── portfolio/          # Portfolio pages
│   │   ├── _app.tsx            # Custom App component
│   │   └── index.tsx           # Home page
│   ├── server/                 # Backend-related code
│   │   ├── api/                # tRPC API definitions
│   │   ├── auth/               # Authentication setup (NextAuth.js)
│   │   └── db/                 # Database client setup
│   ├── styles/                 # Global styles
│   │   └── globals.css
│   └── utils/                  # Utility functions (e.g., tRPC client setup)
│       └── api.ts
├── next.config.ts              # Next.js configuration
├── package.json                # Package dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
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
- [NextAuth.js Documentation](https://next-auth.js.org/)

---

**[&#8593; Back to Monorepo Root](https://github.com/dunamismax/t3-shipyard?tab=readme-ov-file#projects-overview)**

## Tech Stack

This application is built using the following core technologies:

- **Next.js**
- **TypeScript**
- **tRPC**
- **Prisma**
- **Tailwind CSS**
- **NextAuth.js**
