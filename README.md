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

# The Ultimate AI-Assisted T3 Stack (Self-Hosted)

A high-performance, fully type-safe stack for modern full-stack applications, architected for AI-assisted development and pure self-hosting on your own infrastructure. This architecture is designed for running directly on an Ubuntu server, leveraging **systemd** for robust service management and **PM2** for Node.js process management in production.

---

## I. Core Infrastructure & Backend

The foundational server and data components powering the stack on a self-hosted Ubuntu server.

### 1. Full-Stack Framework

-   **Technology:** [**Next.js**](https://nextjs.org/docs)
-   **Description:** The core React framework providing a robust foundation for both frontend rendering (React Server Components) and the backend (API Routes, Route Handlers), routing, and optimizations.
-   **Version:** Latest stable release (14+).

### 2. Programming Language

-   **Technology:** [**TypeScript**](https://www.typescriptlang.org/docs/)
-   **Description:** The language for the entire stack. Its static type system is the cornerstone of the T3 philosophy, enabling end-to-end type safety from the database to the UI.
-   **Version:** Latest stable version (5.0+).

### 3. Application Server & Runtime

-   **Technology:** [**Node.js**](https://nodejs.org/en/docs/)
-   **Description:** The asynchronous JavaScript runtime that executes the Next.js application directly on the server. The `next start` command runs a highly optimized, long-lived server process for instant request handling.
-   **Version:** Latest LTS.

### 4. Service Management

-   **Technology:** [**systemd**](https://www.freedesktop.org/wiki/Software/systemd/)
-   **Description:** The core service manager on modern Linux distributions like Ubuntu. It is used to manage the lifecycle of all background services, including the Next.js application (via PM2), PostgreSQL, Redis, and Caddy. Systemd services ensure that applications automatically start on boot and are restarted if they crash, providing a robust foundation for a self-hosted setup.

### 5. Production Process Manager

-   **Technology:** [**PM2**](https://pm2.keymetrics.io/docs/usage/quick-start/)
-   **Description:** A production-grade process manager for Node.js. It runs the `next start` command as a durable service, providing automatic restarts on failure, log management, and a clustering mode to leverage all available CPU cores for maximum performance. PM2 is managed as a `systemd` service to ensure it starts on system boot.

### 6. Web Server (Reverse Proxy)

-   **Technology:** [**Caddy**](https://caddyserver.com/docs/) or [**Nginx**](https://nginx.org/en/docs/)
-   **Description:** Acts as a reverse proxy, routing public traffic to the Next.js application running via PM2 (e.g., `127.0.0.1:3000`). Its primary roles are handling automatic HTTPS via Let's Encrypt (a core Caddy feature), SSL termination, and efficiently serving static assets directly from the `_next/static` directory.

### 7. Database

-   **Technology:** [**PostgreSQL**](https://www.postgresql.org/docs/)
-   **Description:** A powerful, open-source object-relational database. Chosen for its strict data integrity, advanced features like JSONB support, and proven scalability, making it the ideal partner for Prisma. It is installed and runs as a native `systemd` service.
-   **Version:** 16+.

### 8. ORM & Data Access

-   **Technology:** [**Prisma**](https://www.prisma.io/docs/)
-   **Description:** A next-generation ORM that provides a fully type-safe client for interacting with the database. It makes database access intuitive and error-free by generating types directly from your schema.

### 9. In-Memory Data Store

-   **Technology:** [**Redis**](https://redis.io/docs/)
-   **Description:** A high-performance, in-memory key-value store. Used for high-speed caching, session management, and implementing background job queues. It is installed and runs as a native `systemd` service.

### 10. Operating System

-   **Technology:** [**Ubuntu Server**](https://ubuntu.com/server/docs)
-   **Description:** A stable, well-documented, and secure Linux distribution that serves as the host operating system for the entire application stack, which runs directly on the server.
-   **Version:** Latest LTS.

---

## II. Frontend & User Interface

This stack prioritizes a component-based, highly interactive UI workflow with end-to-end type safety.

### 1. Frontend Build Tool

-   **Technology:** [**Next.js Compiler (SWC)**](https://nextjs.org/docs/architecture/compiler)
-   **Description:** An integrated, high-performance build tool written in Rust. It transparently handles compiling TypeScript/React, bundling, and minification, offering superior speed without manual configuration.

### 2. Dynamic UI Framework

-   **Technology:** [**React**](https://react.dev/learn)
-   **Description:** Builds dynamic, reactive interfaces with a component-based architecture. Modern features like Server Components and Hooks are used to create complex UIs with clear state management.

### 3. API Layer

-   **Technology:** [**tRPC**](https://trpc.io/docs/)
-   **Description:** The T3 Stack's signature feature. It allows you to write backend functions and call them from the frontend with full type safety and autocompletion, eliminating the need for manual API contract definition and validation.

### 4. CSS Framework

-   **Technology:** [**Tailwind CSS**](https://tailwindcss.com/docs/installation)
-   **Description:** A utility-first CSS framework for rapid UI development. Its tight integration with the Next.js and React ecosystem allows for building custom, modern designs directly in your markup.

### 5. Component Library

-   **Technology:** [**Shadcn/ui**](https://ui.shadcn.com/docs)
-   **Description:** A collection of beautifully designed, accessible, and unstyled components that you copy and paste into your project. This gives you full control over code and style, perfectly complementing the Tailwind CSS approach.

---

## III. Development Environment & Tools

Tools for a streamlined, consistent, and powerful local development workflow.

### 1. Local Services Setup

-   **Technology:** Locally Installed Services (PostgreSQL, Redis)
-   **Description:** For a pure, non-containerized setup, all required services are installed directly on the development machine. This involves using the system's package manager (e.g., `apt` on Ubuntu) to install and run PostgreSQL and Redis as background services, ensuring the development environment closely mirrors the production server.

### 2. Version Control

-   **Technology:** [**Git**](https://git-scm.com/doc) & [**GitHub**](https://docs.github.com/en)
-   **Description:** The industry standard for version control and collaborative development, powering code reviews, issue tracking, and CI/CD pipelines.

### 3. Code Editor / IDE

-   **Technology:** [**VS Code**](https://code.visualstudio.com/docs) or [**WebStorm**](https://www.jetbrains.com/webstorm/documentation/)
-   **Description:** VS Code is the de-facto standard for TypeScript development, with unparalleled extension support. WebStorm offers a more powerful, integrated experience with advanced refactoring and debugging tools.

### 4. Database GUI

-   **Technology:** [**TablePlus**](https://tableplus.com/docs/) or [**DBeaver**](https://dbeaver.io/docs/)
-   **Description:** TablePlus offers a modern, native GUI for managing PostgreSQL. DBeaver is a powerful, free, and open-source universal database tool.

### 5. CLI Tools

-   **Technology:** Package Manager Scripts ([npm](https://docs.npmjs.com/cli/v10/using-npm/scripts), [pnpm](https://pnpm.io/using-npmrc), [yarn](https://yarnpkg.com/cli/run)) & [**Prisma CLI**](https://www.prisma.io/docs/reference/cli-reference)

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
3.  **Build applications for production**:
    ```bash
    pnpm build
    ```
4.  **Start applications using PM2 (on your Ubuntu server)**:
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

5.  **Configure systemd services (on your Ubuntu server)**:
    Copy the provided systemd service files from the `systemd/` directory in this repository to `/etc/systemd/system/` on your server. Remember to replace `your_username` in each service file with your actual username.
    ```bash
    sudo cp /path/to/your/t3-shipyard/systemd/*.service /etc/systemd/system/
    sudo systemctl daemon-reload
    sudo systemctl enable admin.service # Repeat for other services
    sudo systemctl start admin.service  # Repeat for other services
    ```

6.  **Set up a Reverse Proxy (e.g., Nginx or Caddy)**:
    Configure your chosen reverse proxy (Nginx or Caddy) to route traffic to your applications. Each application will be running on a different port (e.g., 3000, 3001, etc.). Refer to the Nginx or Caddy documentation for detailed setup instructions. An example Caddyfile is provided in the `docker/prod/Caddyfile` (though Docker is removed, this file can serve as a reference for port mapping).

    Example Nginx configuration snippet for `dunamismax.com`:
    ```nginx
    server {
        listen 80;
        server_name dunamismax.com;

        location / {
            proxy_pass http://localhost:3000; # Adjust port for each app
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
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

### [dunamismax.com](https://github.com/dunamismax/t3-shipyard/tree/main/apps/dunamismax.com)

My personal blog and developer portfolio website. This application showcases my work, articles, and serves as a comprehensive online presence.

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