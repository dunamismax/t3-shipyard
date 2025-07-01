# t3-shipyard

<p align="center">
  <img src="./t3-shipyard-image.png" alt="t3-shipyard logo" width="250"/>
</p>

Welcome to my T3 Stack monorepo. This repository centralizes multiple Next.js applications, each designed to be independent and self-contained for efficient, scalable, and maintainable project management.

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

This monorepo serves as the foundation for my full-stack, type-safe web development projects using the T3 Stack. Each Next.js application within this repository is designed to be independent and self-contained, with its own dependencies and configurations. This approach ensures maximum isolation and flexibility for deployment, while still benefiting from a centralized repository for efficient management.

---

## Repository Structure

The repository is organized to support a scalable and maintainable monorepo architecture. Below is a detailed look at the directory structure.

<details>
<summary><strong>Click to expand repository layout</strong></summary>

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
│   ├── trpchat/                        # Real-time chat application
│   │   ├── .eslintrc.cjs
│   │   ├── next.config.mjs
│   │   ├── package.json
│   │   ├── postcss.config.cjs
│   │   ├── README.md
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── prisma/
│   │       └── schema.prisma
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

</details>

---

## Tech Stack

This monorepo leverages the T3 Stack, optimized for performance and developer experience, with a focus on self-hosting.

### I. Core Infrastructure & Backend

- **Full-Stack Framework:** [Next.js](https://nextjs.org/docs) (14+)
- **Programming Language:** [TypeScript](https://www.typescriptlang.org/docs/) (5.0+)
- **Application Server & Runtime:** [Node.js](https://nodejs.org/en/docs/) (Latest LTS)
- **Operating System:** [Ubuntu Server](https://ubuntu.com/server/docs) (Latest LTS)
- **Service Management:** [systemd](https://www.freedesktop.org/wiki/Software/systemd/)
- **Production Process Manager:** [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/)
- **Web Server (Reverse Proxy):** [Caddy](https://caddyserver.com/docs/)
- **Database:** [PostgreSQL](https://www.postgresql.org/docs/) (16+)
- **ORM & Data Access:** [Prisma](https://www.prisma.io/docs/)
- **In-Memory Data Store:** [Redis](https://redis.io/docs/)

### II. Frontend & User Interface

- **UI Framework:** [React](https://react.dev/learn)
- **API Layer:** [tRPC](https://trpc.io/docs/)
- **CSS Framework:** [Tailwind CSS](https://tailwindcss.com/docs/)
- **Component Library:** [Shadcn/ui](https://ui.shadcn.com/docs)
- **Build Tool:** [Next.js Compiler (SWC)](https://nextjs.org/docs/architecture/compiler)

### III. Development Environment & Tools

- **Local Services Setup:** Locally Installed Services (PostgreSQL, Redis)
- **Version Control:** [Git](https://git-scm.com/doc) & [GitHub](https://docs.github.com/en)
- **Code Editor:** [VS Code](https://code.visualstudio.com/docs) or [WebStorm](https://www.jetbrains.com/webstorm/documentation/)
- **Database GUI:** [TablePlus](https://tableplus.com/docs/)
- **CLI Tools:** Package Manager Scripts ([npm](https://docs.npmjs.com/cli/v10/using-npm/scripts)) & [Prisma CLI](https://www.prisma.io/docs/reference/cli-reference)

### IV. Quality Assurance & Code Standards

- **Testing Frameworks:** [Jest](https://jestjs.io/docs/getting-started) & [Playwright](https://playwright.dev/docs/intro)
- **Static Analysis:** [TypeScript Compiler (tsc)](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- **Code Linters & Formatters:** [ESLint](https://eslint.org/docs/latest/user-guide/getting-started) & [Prettier](https://prettier.io/docs/en/)
- **Debugging Tools:** [VS Code Debugger](https://code.visualstudio.com/docs/editor/debugging) & [React Developer Tools](https://react.dev/learn/react-developer-tools)

---

## Getting Started

To get started with this monorepo, follow the steps below.

1. **Clone the Repository**

   ```bash
   git clone https://github.com/dunamismax/t3-shipyard.git
   cd t3-shipyard
   ```

2. **Install Dependencies**:

   From the root of the monorepo, install all dependencies for all applications:

   ```bash
   pnpm install
   ```

3. **Build Applications**:

   From the root of the monorepo, build all applications for production:

   ```bash
   pnpm build
   ```

4. **Start Individual Applications using PM2 (on your Ubuntu server)**

   After building, you can start each application independently using PM2. First, install PM2 globally:

   ```bash
   npm install -g pm2
   ```

   Then, for each application, navigate to its directory and start it with PM2. For example, for the `admin` app:

   ```bash
   cd apps/admin
   pm2 start npm --name "admin-app" -- start
   ```

   Repeat this process for `blog`, `dashboard`, `dunamismax.com`, and `web` apps, adjusting the `--name` and `cd` path accordingly.

5. **Configure systemd services (on your Ubuntu server)**

   Copy the provided systemd service files from the `systemd/` directory in this repository to `/etc/systemd/system/` on your server. Remember to replace `your_username` in each service file with your actual username.

   ```bash
   sudo cp /path/to/your/t3-shipyard/systemd/*.service /etc/systemd/system/
   sudo systemctl daemon-reload
   sudo systemctl enable admin.service # Repeat for other services
   sudo systemctl start admin.service  # Repeat for other services
   ```

6. **Set up a Reverse Proxy (e.g., Caddy)**

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

### [Admin Application](https://github.com/dunamismax/t3-shipyard/tree/main/apps/admin)

A dedicated application for managing users, content, and system settings. This application demonstrates robust authentication with NextAuth.js, protected tRPC routes, and user management features.

### [Blog Application](https://github.com/dunamismax/t3-shipyard/tree/main/apps/blog)

A content-focused application for publishing articles and updates. This app features dynamic content rendering, tRPC queries and mutations for post management, and basic SEO considerations.

### [Dashboard Application](https://github.com/dunamismax/t3-shipyard/tree/main/apps/dashboard)

An internal dashboard for administrative tasks and data visualization. This application demonstrates authenticated routes and complex data interactions, providing a robust interface for internal operations.

### [dunamismax.com](https://github.com/dunamismax/t3-shipyard/tree/main/apps/dunamismax.com)

My personal blog and developer portfolio website. This application showcases my work, articles, and serves as a comprehensive online presence.

### [Web Application](https://github.com/dunamismax/t3-shipyard/tree/main/apps/web)

The main marketing website for the project. This application showcases public-facing content and features, serving as a primary example of a client-facing application.

### [trpchat Application](https://github.com/dunamismax/t3-shipyard/tree/main/apps/trpchat)

A real-time chat application similar to Slack or Discord, built to explore WebSockets with tRPC for real-time communication.

### [CodeCaddy Application](https://github.com/dunamismax/t3-shipyard/tree/main/apps/codecaddy)

A minimalist and fast platform for developers to publicly save, tag, and discover code snippets.

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
