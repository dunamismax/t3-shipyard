# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a T3 Stack monorepo containing multiple Next.js applications with shared tooling and architecture patterns. Each app in the `apps/` directory is independent but follows consistent patterns.

## Common Development Commands

### Root Level Commands (using Turbo)
```bash
pnpm dev          # Start all apps in development mode
pnpm build        # Build all apps for production
pnpm lint         # Lint all apps
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

### App-Specific Ports
- admin: 3003
- blog: 3004  
- codecaddy: 3001
- dashboard: 3002
- dunamismax.com: 3005
- trpchat: 3006 (also has `pnpm ws-dev` for WebSocket development)
- web: 3000

## Architecture Patterns

### Standard T3 Stack Structure
Each app follows this pattern:
```
apps/[app-name]/
├── prisma/schema.prisma     # Database schema
├── src/
│   ├── app/                 # Next.js App Router (newer apps)
│   │   └── api/trpc/[trpc]/ # tRPC API route
│   ├── components/          # React components
│   │   ├── Navbar.tsx       # Standard navigation
│   │   └── ui/              # Shared UI components
│   ├── server/              # Backend logic
│   │   ├── api/             # tRPC routers and config
│   │   ├── auth/            # NextAuth.js setup
│   │   └── db/              # Database client
│   ├── trpc/                # tRPC client setup
│   └── utils/               # Utility functions
└── [config files]
```

### tRPC Router Patterns
- All apps have `example.ts` router with hello, getAll, getSecretMessage procedures
- App-specific routers based on domain:
  - `user.ts` (admin) - User management
  - `post.ts` (blog) - Blog posts
  - `snippet.ts` (codecaddy) - Code snippets
  - `chat.ts` (trpchat) - Chat functionality
  - `blog.ts`, `portfolio.ts` (dunamismax.com) - Personal website

### Database Setup
- All apps use PostgreSQL with Prisma ORM
- Standard models: User (NextAuth compatible), Post (example)
- App-specific models as needed (Snippet, Tag, Project, etc.)
- Database migrations via `prisma db push`

### Authentication
- NextAuth.js setup in most apps via `src/server/auth/index.ts`
- Protected procedures use `protectedProcedure` in tRPC routers
- Session management integrated with tRPC context

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

## Critical Architecture Requirements

### App Router Standard
- **MANDATORY:** All apps MUST use Next.js App Router (`app` directory)
- **FORBIDDEN:** Pages Router (`pages` directory) is legacy and must not be used
- Any apps still using Pages Router must be migrated to App Router

### Unique App Features
- **trpchat**: WebSocket server for real-time chat (`src/server/wsServer.ts`)
- **codecaddy**: Code snippet management with syntax highlighting
- **dunamismax.com**: Personal portfolio and blog

### Production Deployment
- systemd service files in `/systemd/` directory
- PM2 process management
- Caddy reverse proxy configuration
- Each app runs on different port in production

## Environment Setup

### Required Services
- PostgreSQL database
- Redis (for some apps)
- Node.js Latest LTS

### Development Environment
- VS Code or WebStorm recommended
- TablePlus for database management
- Local PostgreSQL and Redis installations

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