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

-   [Introduction](#introduction)
-   [Repository Structure](#repository-structure)
-   [Tech Stack](#tech-stack)
-   [Getting Started](#getting-started)
-   [Projects Overview](#projects-overview)
-   [Contributing](#contributing)
-   [Connect](#connect)
-   [License](#license)

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
├── docker/                             # Docker configurations for development and production
│   ├── dev/                            # Development Docker Compose setup
│   │   └── docker-compose.yml
│   └── prod/                           # Production Docker setup
│       ├── Caddyfile
│       ├── Dockerfile
│       └── docker-compose.yml
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

This monorepo leverages the T3 Stack, optimized for performance and developer experience.

### I. Core Infrastructure & Backend

-   **Framework**: [Next.js](https://nextjs.org)
-   **Language**: [TypeScript](https://www.typescriptlang.org)
-   **API Layer**: [tRPC](https://trpc.io)
-   **Database ORM**: [Prisma](https://prisma.io)
-   **Database**: [PostgreSQL](https://www.postgresql.org)
-   **Hosting**: Self-Hosted on Ubuntu via [Docker](https://www.docker.com), [PM2](https://pm2.keymetrics.io), and [Caddy](https://caddyserver.com)

### II. Frontend & User Interface

-   **Styling**: [Tailwind CSS](https://tailwindcss.com)
-   **UI Components**: Custom shared UI package (`@t3-shipyard/ui`)

### III. Monorepo Tools

-   **Package Manager**: [pnpm](https://pnpm.io)
-   **Task Runner**: [Turborepo](https://turbo.build)

### IV. Development Environment & Tools

-   **Version Control**: [Git](https://git-scm.com/doc) & [GitHub](https://docs.github.com/en)
-   **Code Editor / IDE**: [VS Code](https://code.visualstudio.com/docs)
-   **Local Environment**: [Docker Compose](https://docs.docker.com/compose/)
-   **Code Formatter**: [Prettier](https://prettier.io/)
-   **Code Linter**: [ESLint](https://eslint.org/)

---

## Getting Started

To get started with this monorepo, follow the steps below.

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/dunamismax/t3-shipyard.git
    cd t3-shipyard
    ```
2.  **Install dependencies**:
    ```bash
    pnpm install
    ```
3.  **Start development services**:
    ```bash
    docker compose -f docker/dev/docker-compose.yml up -d
    ```
4.  **Run all apps in dev mode**:
    ```bash
    pnpm dev
    ```

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

---

## Contributing

Contributions are welcome! Please feel free to fork the repository, create a feature branch, and open a pull request. For major changes, please open an issue first to discuss what you would like to change.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## Connect

Connect with the author, **dunamismax**, on:

-   **Twitter:** [@dunamismax](https://twitter.com/dunamismax)
-   **Bluesky:** [@dunamismax.bsky.social](https://bsky.app/profile/dunamismax.bsky.social)
-   **Reddit:** [u/dunamismax](https://www.reddit.com/user/dunamismax)
-   **Discord:** `dunamismax`
-   **Signal:** `dunamismax.66`

---

## License

This repository is licensed under the **MIT License**. See the `LICENSE` file for more details.