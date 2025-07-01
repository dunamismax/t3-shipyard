# t3-shipyard ⚓

Welcome to my T3 Stack monorepo. This repository centralizes multiple Next.js applications, leveraging a shared architecture for efficient, scalable, and maintainable project management.

[![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js-000000.svg)](https://nextjs.org/)
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6.svg)](https://www.typescriptlang.org/)
[![API Layer: tRPC](https://img.shields.io/badge/API%20Layer-tRPC-2596BE.svg)](https://trpc.io/)
[![Database ORM: Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748.svg)](https://prisma.io/)
[![Styling: Tailwind CSS](https://img.shields.io/badge/CSS-TailwindCSS-06B6D4.svg)](https://tailwindcss.com/)
[![Package Manager: pnpm](https://img.shields.io/badge/Package%20Manager-pnpm-F69220.svg)](https://pnpm.io/)
[![Task Runner: Turborepo](https://img.shields.io/badge/Task%20Runner-Turborepo-6366F1.svg)](https://turbo.build/)
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

This monorepo serves as the foundation for my full-stack, type-safe web development projects using the T3 Stack. By leveraging a monorepo setup with pnpm and Turborepo, I can efficiently manage multiple Next.js applications that share common dependencies, configurations, and utilities. This approach enhances code reusability, enforces consistency, and simplifies the overall development workflow.

---

## Repository Structure

The repository is organized to support a scalable and maintainable monorepo architecture. Below is a detailed look at the directory structure.

<details>
<summary><strong>Click to expand repository layout</strong></summary>

```
t3-shipyard/
├── apps/                               # Individual Next.js applications
│   ├── admin/                          # Internal admin panel application
│   │   ├── package.json
│   │   ├── next.config.mjs
│   │   ├── postcss.config.cjs
│   │   ├── tailwind.config.ts
│   │   ├── .eslintrc.cjs
│   │   ├── tsconfig.json
│   │   └── README.md
│   ├── blog/                           # Blog application
│   │   ├── package.json
│   │   ├── next.config.mjs
│   │   ├── postcss.config.cjs
│   │   ├── tailwind.config.ts
│   │   ├── .eslintrc.cjs
│   │   ├── tsconfig.json
│   │   └── README.md
│   ├── dashboard/                      # Internal dashboard application
│   │   ├── package.json
│   │   ├── next.config.mjs
│   │   ├── postcss.config.cjs
│   │   ├── tailwind.config.ts
│   │   ├── .eslintrc.cjs
│   │   ├── tsconfig.json
│   │   └── README.md
│   └── web/                            # Marketing website application
│       ├── package.json
│       ├── next.config.mjs
│       ├── postcss.config.cjs
│       ├── tailwind.config.ts
│       ├── .eslintrc.cjs
│       ├── tsconfig.json
│       └── README.md
├── packages/                           # Shared libraries and configurations
│   ├── config-eslint/                  # ESLint configurations
│   │   ├── nextjs.js
│   │   └── package.json
│   ├── config-tailwind/                # Tailwind CSS configurations
│   │   ├── package.json
│   │   └── tailwind.config.ts
│   ├── config-typescript/              # TypeScript configurations
│   │   ├── base.json
│   │   └── package.json
│   ├── db/                             # Database client and schema
│   │   ├── index.ts
│   │   ├── package.json
│   │   └── prisma/
│   │       └── schema.prisma
│   ├── ui/                             # Reusable UI components
│   │   ├── button.tsx
│   │   ├── index.tsx
│   │   └── package.json
│   └── utils/                          # Common utility functions
│       └── (placeholder for files)
├── .git/                               # Git version control
├── .gitignore                          # Git ignore rules
├── .prettierignore                     # Prettier ignore rules
├── .prettierrc.cjs                     # Prettier configuration
├── LICENSE                             # Project license
├── README.md                           # This README file
├── package.json                        # Root pnpm package configuration
├── pnpm-workspace.yaml                 # pnpm workspace configuration
├── tsconfig.json                       # Root TypeScript configuration
└── turbo.json                          # Turborepo configuration
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
- **pnpm**: Package manager
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

2. **Install dependencies**:

    ```bash
    pnpm install
    ```

3. **Build applications for production**:

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

This monorepo hosts the following Next.js applications. Each is a self-contained project that benefits from shared packages and a unified development environment.

### [Web Application](https://github.com/dunamismax/t3-shipyard/tree/main/apps/web)

The main marketing website for the project. This application showcases public-facing content and features, serving as a primary example of a client-facing application within the monorepo.

### [Dashboard Application](https://github.com/dunamismax/t3-shipyard/tree/main/apps/dashboard)

An internal dashboard for administrative tasks and data visualization. This application demonstrates authenticated routes and complex data interactions, providing a robust interface for internal operations.

### [Blog Application](https://github.com/dunamismax/t3-shipyard/tree/main/apps/blog)

A content-focused application for publishing articles and updates. This app features dynamic content rendering, tRPC queries and mutations for post management, and basic SEO considerations.

### [Admin Application](https://github.com/dunamismax/t3-shipyard/tree/main/apps/admin)

A dedicated application for managing users, content, and system settings. This application demonstrates robust authentication with NextAuth.js, protected tRPC routes, and user management features.

### [dunamismax.com](https://github.com/dunamismax/t3-shipyard/tree/main/apps/dunamismax.com)

My personal blog and developer portfolio website. This application showcases my work, articles, and serves as a comprehensive online presence.

---

## Contributing

Contributions are welcome! Please feel free to fork the repository, create a feature branch, and open a pull request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Connect

Connect with the author, **dunamismax**, on:

- **Twitter:** [@dunamismax](https://twitter.com/dunamismax)
- **Bluesky:** [@dunamismax.bsky.social](https://bsky.app/profile/dunamismax.bsky.social)
- **Reddit:** [u/dunamismax](https://www.reddit.com/user/dunamismax)
- **Discord:** `dunamismax`
- **Signal:** `dunamismax.66`

---

## License

This repository is licensed under the **MIT License**. See the `LICENSE` file for more details.
