# Contributing to t3-shipyard

<p align="center">
  <img src="../t3-shipyard-image.png" alt="t3-shipyard logo" width="250"/>
</p>

This document provides guidelines for contributing to the **[t3-shipyard](https://github.com/dunamismax/t3-shipyard)** monorepo. Whether you're fixing a bug, adding a new feature, or improving documentation, your contributions are welcome!

---

## Overview

This monorepo is structured to support independent Next.js applications while sharing common configurations and tools. All applications use the **Next.js App Router exclusively**. Contributions should respect this modularity and adhere to the App Router paradigm.

---

## Local Development Setup

To set up your local development environment, follow these steps:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/dunamismax/t3-shipyard.git
    cd t3-shipyard
    ```

2.  **Install Dependencies**
    From the root of the monorepo, install all dependencies using pnpm:
    ```bash
    pnpm install
    ```

3.  **Set Up Local Services**
    Ensure you have PostgreSQL and Redis running locally. You can install them via your system's package manager (e.g., `brew install postgresql redis` on macOS, `sudo apt install postgresql redis-server` on Ubuntu).

4.  **Configure Environment Variables**
    For each application you plan to work on, create a `.env` file in its root directory (`apps/<app-name>/.env`). Refer to the application's `README.md` for required variables. For development, `DATABASE_URL` will typically point to your local PostgreSQL instance.

5.  **Push Database Schema**
    For any application with a Prisma schema, push the schema to set up your local database:
    ```bash
    cd apps/<app-name>
    pnpm db:push
    ```

6.  **Start Development Server**
    You can start individual applications in development mode:
    ```bash
    cd apps/<app-name>
    pnpm dev
    ```
    Or, to run all applications concurrently (if configured in `turbo.json`):
    ```bash
    pnpm dev
    ```

---

## Branching Strategy

We use a `main` branch for stable code. For new features or bug fixes, please create a new branch from `main`:
```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name # or bugfix/your-bug-fix
```

---

## Commit Message Conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for clear and consistent commit messages. Examples:

-   `feat: add new user management module`
-   `fix: correct typo in README`
-   `docs: update deployment guide`
-   `refactor: simplify auth logic`

---

## Testing

-   **Unit/Integration Tests (Jest)**: Run tests for individual applications.
    ```bash
    pnpm test # from app root
    ```

-   **End-to-End Tests (Playwright)**: Run Playwright tests from the monorepo root or specific app.
    ```bash
    pnpm playwright test
    ```

---

## Pull Request Process

1.  Ensure your branch is up-to-date with `main`.
2.  Ensure all tests pass and linting issues are resolved.
3.  Open a pull request to the `main` branch.
4.  Provide a clear description of your changes.

---

**[⬆️ Back to Monorepo Root](https://github.com/dunamismax/t3-shipyard?tab=readme-ov-file)**