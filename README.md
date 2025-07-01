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

This monorepo serves as the foundation for my full-stack, type-safe web development projects using the T3 Stack, with a strong emphasis on AI-assisted development. By leveraging a monorepo setup with pnpm and Turborepo, I can efficiently manage multiple Next.js applications that share common dependencies, configurations, and utilities. This approach enhances code reusability, enforces consistency, and simplifies the overall development workflow.

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

This monorepo leverages the T3 Stack, optimized for performance and developer experience, with a focus on AI-assisted development and self-hosting.

### I. Core Infrastructure & Backend

-   **Full-Stack Framework**: [**Next.js**](https://nextjs.org/docs) (Latest stable release, 14+)
-   **Programming Language**: [**TypeScript**](https://www.typescriptlang.org/docs/) (Latest stable version, 5.0+)
-   **Application Server & Runtime**: [**Node.js**](https://nodejs.org/en/docs/) (Latest LTS)
-   **Containerization**: [**Docker**](https://docs.docker.com/) & [**Docker Compose**](https://docs.docker.com/compose/)
-   **Production Process Manager**: [**PM2**](https://pm2.keymetrics.io/docs/usage/quick-start/)
-   **Web Server (Reverse Proxy)**: [**Caddy**](https://caddyserver.com/docs/) or [**Nginx**](https://nginx.org/en/docs/)
-   **Database**: [**PostgreSQL**](https://www.postgresql.org/docs/) (16+)
-   **ORM & Data Access**: [**Prisma**](https://www.prisma.io/docs/)
-   **In-Memory Data Store**: [**Redis**](https://redis.io/docs/)
-   **Operating System**: [**Ubuntu Server**](https://ubuntu.com/server/docs) (Latest LTS)

### II. Frontend & User Interface

-   **Frontend Build Tool**: [**Next.js Compiler (SWC)**](https://nextjs.org/docs/architecture/compiler)
-   **Dynamic UI Framework**: [**React**](https://react.dev/learn)
-   **API Layer**: [**tRPC**](https://trpc.io/docs/)
-   **CSS Framework**: [**Tailwind CSS**](https://tailwindcss.com/docs/installation)
-   **Component Library**: [**Shadcn/ui**](https://ui.shadcn.com/docs)

### III. Monorepo Tools

-   **Package Manager**: [**pnpm**](https://pnpm.io)
-   **Task Runner**: [**Turborepo**](https://turbo.build)

### IV. Development Environment & Tools

-   **Local Environment Orchestration**: [**Docker Compose**](https://docs.docker.com/compose/gettingstarted/)
-   **Version Control**: [**Git**](https://git-scm.com/doc) & [**GitHub**](https://docs.github.com/en)
-   **Code Editor / IDE**: [**VS Code**](https://code.visualstudio.com/docs) or [**WebStorm**](https://www.jetbrains.com/webstorm/documentation/)
-   **Database GUI**: [**TablePlus**](https://tableplus.com/docs/) or [**DBeaver**](https://dbeaver.io/docs/)
-   **CLI Tools**: Package Manager Scripts ([npm](https://docs.npmjs.com/cli/v10/using-npm/scripts), [pnpm](https://pnpm.io/using-npmrc), [yarn](https://yarnpkg.com/cli/run)) & [**Prisma CLI**](https://www.prisma.io/docs/reference/cli-reference)

---

## V. Quality Assurance & Code Standards

Tools to enforce type safety, code quality, and application stability, which are critical for an AI-assisted workflow.

### 1. Testing Frameworks

-   **Technology**: [**Jest**](https://jestjs.io/docs/getting-started) & [**Playwright**](https://playwright.dev/docs/intro)
-   **Description**: Jest is the standard for unit and integration testing React components and backend logic. Playwright is used for robust, browser-level end-to-end testing of the complete application flow.

### 2. Static Analysis

-   **Technology**: [**TypeScript Compiler (tsc)**](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
-   **Description**: The primary static analysis tool. Running `tsc --noEmit` checks the entire project for type errors, acting as the first and most important line of defense against bugs.

### 3. Code Linters & Formatters

-   **Technology**: [**ESLint**](https://eslint.org/docs/latest/user-guide/getting-started) & [**Prettier**](https://prettier.io/docs/en/)
-   **Description**: ESLint enforces code quality and consistency rules. Prettier is an opinionated code formatter that automates all styling, ensuring a clean, readable, and consistent codebase with zero effort.

### 4. Debugging Tools

-   **Technology**: [**VS Code Debugger**](https://code.visualstudio.com/docs/editor/debugging) & [**React Developer Tools**](https://react.dev/learn/react-developer-tools)
-   **Description**: VS Code provides a first-class, built-in Node.js debugger for step-debugging backend code (API routes and server-side logic). The React DevTools browser extension is essential for inspecting the component tree and state.

---

## V. AI-Assisted Development Workflow

A structured workflow that maximizes development speed by leveraging an AI coding assistant, with the stack's type safety acting as a real-time validator.

### 1. AI Agent-Led Architecture & Scaffolding

-   **Technology**: Prisma Schema & Developer Expertise
-   **Description**: The developer and/or Agent define the data models in `schema.prisma`. The developer runs `prisma migrate dev` to create migrations and generate the fully type-safe client. The developer then creates the necessary file stubs (e.g., `app/users/page.tsx`, `server/api/routers/user.ts`).

### 2. AI Agent-Written Implementation

-   **Technology**: AI Coding Assistant (Gemini CLI, GitHub Copilot)
-   **Description**: With the files and strong type definitions in place (from Prisma and tRPC), the AI Agent is prompted to write the implementation details. The types guide the AI, dramatically improving the accuracy and relevance of its output for React components, API procedures, and database queries.

### 3. Developer-Driven Review & Refinement

-   **Technology**: The Full QA Stack (TypeScript, ESLint, Prettier, Jest)
-   **Description**: The developer acts as the lead reviewer and architect. All AI-generated code is instantly validated by the TypeScript compiler and ESLint directly within the IDE. This immediate, type-safe feedback loop allows the developer to rapidly refactor and test the code, using the AI as an intelligent pair programmer to ensure the final output is robust, maintainable, and production-ready.

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