# t3-shipyard ⚓

# t3-shipyard ⚓

Welcome to my T3 Stack monorepo. This repository centralizes multiple Next.js applications, each designed to be independent and self-contained.

[![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js-000000.svg)](https://nextjs.org/)
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6.svg)](https://www.typescriptlang.org/)
[![API Layer: tRPC](https://img.shields.io/badge/API%20Layer-tRPC-2596BE.svg)](https://trpc.io/)
[![Database ORM: Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748.svg)](https://prisma.io/)
[![Styling: Tailwind CSS](https://img.shields.io/badge/CSS-TailwindCSS-06B6D4.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/dunamismax/t3-shipyard/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/dunamismax/t3-shipyard/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/dunamismax/t3-shipyard?style=social)](https://github.com/dunamismax/t3-shipyard/stargazers)

---

## Table of Contents

- [Introduction](#introduction)
- [Repository Structure](#repository-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Projects Overview](#projects-overview)
- [Contributing](#contributing)
- [Connect](#connect)
- [License](#license)

---

## Introduction

This monorepo serves as the foundation for my full-stack, type-safe web development projects using the T3 Stack. Each application within this repository is designed to be independent, with its own dependencies, configurations, and build processes. This approach ensures maximum isolation and flexibility for deployment.

---

## Repository Structure

The repository is organized to support a scalable and maintainable monorepo architecture. Below is a detailed look at the directory structure.

<details>
<summary><strong>Click to expand repository layout</strong></summary>

```
```
t3-shipyard/
├── apps/                               # Individual Next.js applications
│   ├── admin/                          # Internal admin panel application
│   │   ├── .eslintrc.cjs
│   │   ├── next.config.mjs
│   │   ├── package.json
│   │   ├── postcss.config.cjs
│   │   ├── README.md
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── prisma/
│   │       └── schema.prisma
│   ├── blog/                           # Blog application
│   │   ├── .eslintrc.cjs
│   │   ├── next.config.mjs
│   │   ├── package.json
│   │   ├── postcss.config.cjs
│   │   ├── README.md
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── prisma/
│   │       └── schema.prisma
│   ├── dashboard/                      # Internal dashboard application
│   │   ├── .eslintrc.cjs
│   │   ├── next.config.mjs
│   │   ├── package.json
│   │   ├── postcss.config.cjs
│   │   ├── README.md
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── prisma/
│   │       └── schema.prisma
│   ├── dunamismax.com/                 # Personal blog and portfolio website
│   │   ├── .eslintrc.cjs
│   │   ├── eslint.config.mjs
│   │   ├── next-env.d.ts
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   ├── pnpm-lock.yaml
│   │   ├── postcss.config.mjs
│   │   ├── README.md
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   └── public/
│   │       ├── file.svg
│   │       ├── globe.svg
│   │       ├── next.svg
│   │       ├── vercel.svg
│   │       └── window.svg
│   └── web/                            # Marketing website application
│       ├── .eslintrc.cjs
│       ├── next.config.mjs
│       ├── package.json
│       ├── postcss.config.cjs
│       ├── README.md
│       ├── tailwind.config.ts
│       ├── tsconfig.json
│       └── prisma/
│           └── schema.prisma
├── .git/                               # Git version control
├── .gitignore                          # Git ignore rules
├── .prettierignore                     # Prettier ignore rules
├── .prettierrc.cjs                     # Prettier configuration
├── env.mjs                             # Environment variables
├── LICENSE                             # Project license
├── package.json                        # Root pnpm package configuration
├── pnpm-workspace.yaml                 # pnpm workspace configuration
├── tsconfig.json                       # Root TypeScript configuration
└── turbo.json                          # Turborepo configuration
```
```

</details>

---

## Tech Stack

This monorepo leverages the T3 Stack, optimized for performance and developer experience, with a focus on self-hosting.

### Core Technologies
- **Next.js**: Full-stack React framework (v14+)
- **TypeScript**: Type-safe language (v5.0+)
- **Node.js**: JavaScript runtime (LTS)
- **systemd**: Service manager for Ubuntu Server
- **PM2**: Node.js process manager
- **Caddy**: Reverse proxy with automatic HTTPS ([Installation Guide](https://caddyserver.com/docs/install))
- **PostgreSQL**: Relational database (v16+)
- **Prisma**: ORM for type-safe data access
- **Redis**: In-memory data store
- **Ubuntu Server**: Host operating system (LTS)

### Frontend
- **Next.js Compiler (SWC)**: Fast build tool
- **React**: UI framework
- **tRPC**: Type-safe API layer
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: Reusable UI components

### Development Tools
- **Git & GitHub**: Version control
- **VS Code/WebStorm**: Code editors
- **TablePlus/DBeaver**: Database GUIs
- **Prisma CLI**: Database management

### Quality Assurance
- **Jest & Playwright**: Testing frameworks
- **TypeScript Compiler (tsc)**: Static analysis
- **ESLint & Prettier**: Linters and formatters
- **VS Code Debugger & React Developer Tools**: Debugging tools

---

## Getting Started

To get started with this monorepo, follow the steps below.

1. **Clone the repository**:

    ```bash
    git clone https://github.com/dunamismax/t3-shipyard.git
    cd t3-shipyard
    ```

2. **Install dependencies for each application**:

    Navigate into each application directory (e.g., `apps/admin`, `apps/blog`) and run:

    ```bash
    pnpm install
    ```

3. **Build applications for production**:

    Navigate into each application directory and run:

    ```bash
    pnpm build
    ```

4. **Start applications using PM2 (on your Ubuntu server)**:
    After building, you can start each application using PM2. First, install PM2 globally:

    ```bash
    npm install -g pm2
    ```

    Then, navigate to each application's directory and start it with PM2. For example, for the `admin` app:

    ```bash
    cd apps/admin
    pm2 start npm --name "admin-app" -- start
    ```

    Repeat for `blog`, `dashboard`, `dunamismax.com`, and `web` apps, adjusting the `--name` and `cd` path accordingly.

5. **Configure systemd services (on your Ubuntu server)**:
    Copy the provided systemd service files from the `systemd/` directory in this repository to `/etc/systemd/system/` on your server. Remember to replace `your_username` in each service file with your actual username.

    ```bash
    sudo cp /path/to/your/t3-shipyard/systemd/*.service /etc/systemd/system/
    sudo systemctl daemon-reload
    sudo systemctl enable admin.service # Repeat for other services
    sudo systemctl start admin.service  # Repeat for other services
    ```

6. **Set up a Reverse Proxy (e.g., Caddy)**:
    Configure Caddy to route traffic to your applications. Each application will be running on a different port (e.g., 3000, 3001, etc.). For Caddy installation instructions, refer to the [official documentation](https://caddyserver.com/docs/install).

    Example Caddyfile configuration for `dunamismax.com`:

    ```caddy
    dunamismax.com {
        reverse_proxy localhost:3000 # Adjust port for each app
    }
    ```
    You will need to add similar blocks for `blog.dunamismax.com`, `admin.dunamismax.com`, `dashboard.dunamismax.com`, and `web.dunamismax.com`, adjusting the port for each application.

---

## Projects Overview

This monorepo hosts the following Next.js applications. Each is a self-contained project.

### Web Application

The main marketing website for the project. This application showcases public-facing content and features, serving as a primary example of a client-facing application.

### Dashboard Application

An internal dashboard for administrative tasks and data visualization. This application demonstrates authenticated routes and complex data interactions, providing a robust interface for internal operations.

### Blog Application

A content-focused application for publishing articles and updates. This app features dynamic content rendering, tRPC queries and mutations for post management, and basic SEO considerations.

### Admin Application

A dedicated application for managing users, content, and system settings. This application demonstrates robust authentication with NextAuth.js, protected tRPC routes, and user management features.

### dunamismax.com

My personal blog and developer portfolio website. This application showcases my work, articles, and serves as a comprehensive online presence.
