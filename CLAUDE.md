# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **T3 Stack monorepo** containing 7 independent Next.js applications with shared tooling and architecture patterns. All apps use **Next.js App Router exclusively** - Pages Router is forbidden and considered legacy.

## Critical Architecture Requirements

### ⚠️ MANDATORY: Next.js App Router Only
- **ALL apps MUST use Next.js App Router** (`src/app/` directory)
- **Pages Router is FORBIDDEN** (`src/pages/` directory is legacy)
- Any references to Pages Router patterns must be migrated to App Router

### ⚠️ Required Configuration Pattern
All apps must follow this exact configuration:

#### PostCSS Configuration (`postcss.config.cjs`):
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

#### TypeScript Configuration (`tsconfig.json`):
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

#### Required Dependencies Pattern:
Every app must include these devDependencies:
```json
{
  "@eslint/js": "^9.3.0",
  "@next/eslint-plugin-next": "^15.0.0", 
  "@tailwindcss/postcss": "4.1.11",
  "autoprefixer": "^10.4.14",
  "eslint-config-prettier": "^9.1.0",
  "globals": "^15.3.0",
  "postcss": "^8.4.23"
}
```

## Common Development Commands

### Root Level Commands (using Turbo)
```bash
pnpm dev          # Start all apps in development mode
pnpm build        # Build all apps for production
pnpm lint         # Lint all apps (ESLint 9 flat config)
pnpm db:generate  # Generate Prisma clients for all apps
pnpm db:push      # Push database changes for all apps
```

### Individual App Commands
Navigate to `apps/[app-name]` and run:
```bash
pnpm dev          # Start single app in dev mode (each app has specific port)
pnpm build        # Build single app
pnpm start        # Start production build
pnpm lint         # Lint single app with --fix
pnpm db:generate  # Generate Prisma client
pnpm db:push      # Push database schema changes
```

### App-Specific Ports (CORRECTED)
- **admin**: 3001 (User management and admin panel)
- **blog**: 3002 (Blog posts and content management) 
- **codecaddy**: 3003 (Code snippet sharing platform)
- **dashboard**: 3004 (Internal dashboard and analytics)
- **dunamismax.com**: 3005 (Personal portfolio and blog)
- **trpchat**: 3006 (Real-time chat with WebSockets - also has `pnpm ws-dev`)
- **web**: 3000 (Public marketing website)

## Architecture Patterns

### Standard T3 Stack Structure (App Router)
Each app follows this **mandatory** pattern:
```
apps/[app-name]/
├── prisma/schema.prisma           # Database schema
├── postcss.config.cjs             # PostCSS with @tailwindcss/postcss
├── tailwind.config.ts             # Tailwind CSS configuration
├── src/
│   ├── app/                       # Next.js App Router (MANDATORY)
│   │   ├── api/trpc/[trpc]/       # tRPC API route handler
│   │   ├── layout.tsx             # Root layout with TRPCReactProvider
│   │   └── page.tsx               # App pages
│   ├── components/                # React components
│   │   ├── Navbar.tsx             # Navigation (simplified for SSR)
│   │   └── ui/                    # Shared UI components
│   ├── server/                    # Backend logic
│   │   ├── api/                   # tRPC routers and config
│   │   │   ├── root.ts            # Main router export
│   │   │   ├── trpc.ts            # tRPC context and procedures
│   │   │   └── routers/           # Individual route handlers
│   │   └── db/                    # Database client
│   ├── trpc/                      # tRPC client setup
│   │   └── react.tsx              # TRPCReactProvider (App Router)
│   ├── styles/
│   │   └── globals.css            # Global styles with Tailwind imports
│   └── utils/                     # Utility functions
└── [config files]
```

### tRPC App Router Setup (CRITICAL)

#### Server Context (`src/server/api/trpc.ts`):
```typescript
export const createTRPCContext = (_opts: { req: NextRequest }) => {
  return { prisma }
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
})
```

#### API Route Handler (`src/app/api/trpc/[trpc]/route.ts`):
```typescript
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { createTRPCContext } from '~/server/api/trpc'

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createTRPCContext({ req }),
  })

export { handler as GET, handler as POST }
```

#### Client Provider (`src/trpc/react.tsx`):
```typescript
'use client'

export const api = createTRPCReact<AppRouter>()

export function TRPCReactProvider(props: { children: React.ReactNode }) {
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          transformer: superjson,
        }),
      ],
    })
  )
  // ... rest of provider setup
}
```

#### Layout Integration (`src/app/layout.tsx`):
```typescript
import { TRPCReactProvider } from '~/trpc/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  )
}
```

### tRPC Router Patterns
- All apps have `example.ts` router with hello procedure
- App-specific routers by domain:
  - **admin**: `user.ts` - User management
  - **blog**: `post.ts` - Blog posts and content
  - **codecaddy**: `snippet.ts` - Code snippets with tags
  - **dashboard**: `example.ts` - Basic dashboard data
  - **dunamismax.com**: `blog.ts`, `portfolio.ts` - Personal content
  - **trpchat**: `chat.ts` - Real-time messaging
  - **web**: `example.ts` - Marketing content

### Database Setup
- All apps use **PostgreSQL** with **Prisma ORM 6.11.0**
- Each app has independent database and schema
- Standard models: User (NextAuth compatible), Post
- App-specific models: Snippet+Tag (codecaddy), Message (trpchat), Project (dunamismax)
- Database operations via `prisma db push` (no migrations)

## Technology Stack

This monorepo follows **The T3 Stack: A Self-Hosted Architecture** - a high-performance, fully type-safe stack designed for self-hosting on Ubuntu server infrastructure.

### Core Infrastructure & Backend

#### 1. Full-Stack Framework: Next.js (14+)
- **Architectural Standard:** **EXCLUSIVELY uses Next.js App Router** (`app` directory)
- **Critical:** The `pages` directory (Pages Router) is **LEGACY and MUST NOT be used**
- **Rationale:** App Router enables React Server Components, granular caching, and streamlined data-fetching patterns

#### 2. Programming Language: TypeScript (5.0+)
- Complete end-to-end type safety from database to UI
- Static type system is cornerstone of T3 philosophy

#### 3. Application Server & Runtime: Node.js (Latest LTS)
- Executes Next.js applications via `next start` command
- Optimized, long-lived server processes

#### 4. Operating System: Ubuntu Server (Latest LTS)
- Stable Linux distribution hosting the entire stack

#### 5. Service Management: systemd
- Manages all background services (Next.js via PM2, PostgreSQL, Redis, Caddy)
- Ensures services start on boot and restart on failure

#### 6. Production Process Manager: PM2
- Runs `next start` as durable service with automatic restarts
- Provides log management and CPU clustering
- Managed as systemd service

#### 7. Web Server (Reverse Proxy): Caddy
- Routes public traffic to Next.js applications
- Automatic HTTPS via Let's Encrypt and SSL termination
- Efficiently serves static assets

#### 8. Database: PostgreSQL (16+)
- Object-relational database with strict data integrity
- Advanced features and proven scalability
- Runs as native systemd service

#### 9. ORM & Data Access: Prisma
- Type-safe database client generating types from schema
- Intuitive and safe data access patterns

#### 10. In-Memory Data Store: Redis
- High-performance key-value store for caching and sessions
- Background job queues and session management
- Runs as native systemd service

### Frontend & User Interface

#### 1. UI Framework: React
- Component-based architecture with Server Components and Hooks
- Modern reactive interfaces with clear state management

#### 2. API Layer: tRPC
- End-to-end type safety between backend and frontend
- Eliminates need for manual API contract definitions

#### 3. CSS Framework: Tailwind CSS
- Utility-first framework for rapid UI development
- Custom, modern designs built directly in markup

#### 4. Component Library: Shadcn/ui
- Accessible, unstyled components copied into project
- Full control over code and styling, complements Tailwind CSS

#### 5. Build Tool: Next.js Compiler (SWC)
- High-performance Rust-based build tool
- Handles TypeScript/React compilation, bundling, and minification

### Development Environment & Tools

#### 1. Local Services Setup
- PostgreSQL and Redis installed locally via native package managers
- Mirrors production server setup

#### 2. Version Control: Git & GitHub
- Industry standard for version control and collaboration
- Manages code history, reviews, and CI/CD pipelines

#### 3. Code Editor: VS Code or WebStorm
- VS Code: Standard for TypeScript with extensive extensions
- WebStorm: Integrated experience with advanced refactoring

#### 4. Database GUI: TablePlus
- Modern, native GUI for PostgreSQL database management

#### 5. CLI Tools: npm scripts & Prisma CLI
- Development tasks via npm scripts
- Prisma CLI for database migrations and client generation

### Quality Assurance & Code Standards

#### 1. Testing Frameworks: Jest & Playwright
- Jest: Unit and integration testing of components and backend
- Playwright: Browser-level end-to-end testing

#### 2. Static Analysis: TypeScript Compiler (tsc)
- Primary static analysis tool via `tsc --noEmit`
- Most important line of defense against bugs

#### 3. Code Linters & Formatters: ESLint 9 & Prettier
- **ESLint 9 with Flat Config:** Uses `eslint.config.js` (not `.eslintrc.*`)
- Prettier: Automated code formatting for consistency

#### 4. Debugging Tools: VS Code Debugger & React Developer Tools
- VS Code: Step-debugging backend code
- React DevTools: Frontend component tree and state inspection

## Known Issues and Common Fixes

### When Apps Fail to Build
If any app fails to build, apply these fixes in order:

1. **PostCSS Issues**: Ensure `postcss.config.cjs` has the correct format
2. **Missing Dependencies**: Add required devDependencies pattern 
3. **Path Resolution**: Update `tsconfig.json` to use `~/*` paths
4. **tRPC Context**: Fix server context for App Router compatibility
5. **Client Components**: Add `"use client"` to components using hooks
6. **Import Paths**: Update all imports to use `~/*` pattern

### ESLint 9 Troubleshooting
- Uses flat config (`eslint.config.js` not `.eslintrc.*`)
- Requires `globals` package for proper configuration
- Build ignores are set in root `eslint.config.js`

### TailwindCSS v4 Issues
- Must use `@tailwindcss/postcss` plugin (not `tailwindcss` directly)
- Config format should be CommonJS for compatibility

## Production Architecture

### Deployment Pattern
- **systemd service files** in `/systemd/` directory for each app
- **PM2 process management** with automatic restarts and clustering
- **Caddy reverse proxy** with automatic HTTPS and SSL termination
- **Each app runs on independent ports** (3000-3006)

### Self-Hosted Infrastructure
- **Ubuntu Server** (Latest LTS) as host OS
- **PostgreSQL 16+** as primary database
- **Redis** for caching and sessions
- **Node.js** (Latest LTS) as runtime

### App Independence
- **95% isolation** - apps share only development tooling
- **Separate databases** - each app has own schema and connection
- **Independent deployments** - can deploy, scale, start/stop individually
- **No runtime dependencies** between apps

## ESLint 9 Flat Configuration

This project uses **ESLint 9 with flat config** format:

### Key Changes from Legacy ESLint
- **Configuration File:** `eslint.config.js` (NOT `.eslintrc.*`)
- **Export Format:** ES modules with `export default [...]` array
- **Recommended Rules:** Import from `@eslint/js` package: `js.configs.recommended`
- **Node.js Requirement:** v18.18.0+ or v20.9.0+

### Example Flat Config Structure
```javascript
// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      "semi": "error"
    }
  }
];
```

### Important Flat Config Rules
- Function-style rules no longer supported - rules must be objects with `create()` method
- `meta.schema` required for rules accepting options
- Stricter rule defaults and validation
- Multiple `/* eslint */` comments for same rule are disallowed

## Workspace Configuration

- Root `package.json` configures workspace
- `pnpm-workspace.yaml` defines workspace structure  
- `turbo.json` orchestrates build pipeline
- Shared ESLint config in workspace packages using flat config format
- All apps use ESM modules (`"type": "module"`)

## Post-Development Workflow

After completing any feature or implementation:
1. Add all files: `git add -A`
2. Create detailed git commit message
3. Commit changes: `git commit -m "message"`
4. Push directly to main: `git push origin main`
**Note:** This is done automatically without prompting for confirmation.