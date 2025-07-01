# contributing

<p align="center">
  <img src="../t3-shipyard-image.png" alt="t3-shipyard logo" width="250"/>
</p>

This document provides guidelines for contributing to the **[t3-shipyard](https://github.com/dunamismax/t3-shipyard)** monorepo. Whether you're fixing a bug, adding a new feature, or improving documentation, your contributions are welcome!

---

## overview

This monorepo is structured to support independent Next.js applications while sharing common configurations and tools. Contributions should respect this modularity.

---

## local development setup

To set up your local development environment, follow these steps:

1.  **clone the repository**

    ```bash
    git clone https://github.com/dunamismax/t3-shipyard.git
    cd t3-shipyard
    ```

2.  **install dependencies**

    From the root of the monorepo, install all dependencies using pnpm:

    ```bash
    pnpm install
    ```

3.  **set up local services**

    Ensure you have PostgreSQL and Redis running locally. You can install them via your system's package manager (e.g., `brew install postgresql redis` on macOS, `sudo apt install postgresql redis-server` on Ubuntu).

4.  **configure environment variables**

    For each application you plan to work on, create a `.env` file in its root directory (`apps/<app-name>/.env`). Refer to the application's `README.md` for required variables. For development, `DATABASE_URL` will typically point to your local PostgreSQL instance.

5.  **run database migrations**

    For any application with a Prisma schema, run migrations to set up your local database:

    ```bash
    cd apps/<app-name>
    pnpm db:push
    pnpm db:generate
    ```

6.  **start development server**

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

## branching strategy

We use a `main` branch for stable code. For new features or bug fixes, please create a new branch from `main`:

```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name # or bugfix/your-bug-fix
```

---

## commit message conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for clear and consistent commit messages. Examples:

-   `feat: add new user management module`
-   `fix: correct typo in README`
-   `docs: update deployment guide`
-   `refactor: simplify auth logic`

---

## testing

-   **unit/integration tests (jest)**: Run tests for individual applications.

    ```bash
    pnpm test # from app root
    ```

-   **end-to-end tests (playwright)**: Run Playwright tests from the monorepo root or specific app.

    ```bash
    pnpm playwright test
    ```

---

## pull request process

1.  Ensure your branch is up-to-date with `main`.
2.  Ensure all tests pass and linting issues are resolved.
3.  Open a pull request to the `main` branch.
4.  Provide a clear description of your changes.

---

**[back to monorepo root](https://github.com/dunamismax/t3-shipyard?tab=readme-ov-file)**
