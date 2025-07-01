# deployment

<p align="center">
  <img src="../t3-shipyard-image.png" alt="t3-shipyard logo" width="250"/>
</p>

This document provides a comprehensive guide for deploying and configuring applications within the **[t3-shipyard](https://github.com/dunamismax/t3-shipyard)** monorepo on an Ubuntu server.

---

## overview

This section outlines the general deployment strategy for applications in this monorepo.

---

## prerequisites

Ensure you have the following installed and configured on your Ubuntu server:

-   **Node.js (LTS)**
-   **pnpm**
-   **PM2**
-   **PostgreSQL (16+)**
-   **Redis**
-   **Caddy** (or Nginx)

---

## deployment steps

Follow these steps to deploy each application:

1.  **clone the repository**

    ```bash
    git clone https://github.com/dunamismax/t3-shipyard.git
    cd t3-shipyard
    ```

2.  **install dependencies**

    From the root of the monorepo, install all dependencies:

    ```bash
    pnpm install
    ```

3.  **build applications**

    Build all applications for production:

    ```bash
    pnpm build
    ```

4.  **configure environment variables**

    For each application (`apps/<app-name>`), create a `.env` file with the necessary environment variables. Refer to each application's `README.md` for specific variables.

    Example for `apps/admin/.env`:

    ```
    DATABASE_URL="postgresql://user:password@localhost:5432/t3shipyard_admin"
    NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET"
    NEXTAUTH_URL="http://localhost:3000"
    ```

5.  **run database migrations**

    For each application with a Prisma schema, run migrations:

    ```bash
    cd apps/<app-name>
    pnpm db:push
    pnpm db:generate
    ```

6.  **start applications with pm2**

    Install PM2 globally if you haven't already:

    ```bash
    npm install -g pm2
    ```

    For each application, navigate to its directory and start it with PM2. If the application has an `ecosystem.config.js` (like `trpchat`), use that. Otherwise, use `pm2 start npm --name "<app-name>-app" -- start`.

    Example for `admin`:

    ```bash
    cd apps/admin
    pm2 start npm --name "admin-app" -- start
    ```

    Example for `trpchat`:

    ```bash
    cd apps/trpchat
    pm2 start ecosystem.config.js
    ```

7.  **configure systemd services**

    Copy the provided systemd service files from the `systemd/` directory in this repository to `/etc/systemd/system/` on your server. Remember to replace `your_username` in each service file with your actual username.

    ```bash
    sudo cp /path/to/your/t3-shipyard/systemd/*.service /etc/systemd/system/
    sudo systemctl daemon-reload
    sudo systemctl enable admin.service # Repeat for other services
    sudo systemctl start admin.service  # Repeat for other services
    ```

8.  **set up reverse proxy (caddy)**

    Configure Caddy to route public traffic to your applications. Each application will be running on a different port (e.g., 3000, 3001, etc.).

    Example Caddyfile configuration:

    ```caddy
    your-admin-domain.com {
        reverse_proxy localhost:3000 # Adjust port for each app
    }

    your-blog-domain.com {
        reverse_proxy localhost:3001 # Example port
    }
    ```

    Reload Caddy after making changes:

    ```bash
    sudo systemctl reload caddy
    ```

---

**[back to monorepo root](https://github.com/dunamismax/t3-shipyard?tab=readme-ov-file)**
