# Deployment Guide

<p align="center">
  <img src="../t3-shipyard-image.png" alt="t3-shipyard logo" width="250"/>
</p>

This document provides a comprehensive guide for deploying and configuring applications within the **[t3-shipyard](https://github.com/dunamismax/t3-shipyard)** monorepo on a self-hosted Ubuntu server.

---

## Overview

The deployment strategy involves running each Next.js application as a separate Node.js process managed by PM2. These processes are then exposed to the web via a Caddy reverse proxy, which also handles automatic HTTPS. The entire setup is managed by `systemd` to ensure services start on boot.

---

## Prerequisites

Ensure you have the following installed and configured on your Ubuntu server:

-   **Node.js (Latest LTS)**
-   **pnpm**
-   **PM2**
-   **PostgreSQL (16+)**
-   **Redis**
-   **Caddy** (or another reverse proxy like Nginx)

---

## Deployment Steps

Follow these steps to deploy each application:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/dunamismax/t3-shipyard.git
    cd t3-shipyard
    ```

2.  **Install Dependencies**
    From the root of the monorepo, install all dependencies:
    ```bash
    pnpm install --frozen-lockfile
    ```

3.  **Build Applications**
    Build all applications for production:
    ```bash
    pnpm build
    ```

4.  **Configure Environment Variables**
    For each application (`apps/<app-name>`), create a `.env` file with the necessary production environment variables. Refer to each application's `README.md` for specific variables.

    Example for `apps/admin/.env`:
    ```
    DATABASE_URL="postgresql://user:password@localhost:5432/t3shipyard_admin"
    NEXTAUTH_URL="https://admin.your-domain.com"
    ```

5.  **Push Database Schema**
    For each application with a Prisma schema, push the schema to your production database:
    ```bash
    cd apps/<app-name>
    pnpm db:push
    ```

6.  **Start Applications with PM2**
    Install PM2 globally if you haven't already:
    ```bash
    pnpm install -g pm2
    ```
    For each application, navigate to its directory and start it with PM2.
    ```bash
    cd apps/admin
    pm2 start pnpm --name "admin" -- start
    ```
    Repeat for all other apps, giving each a unique name in PM2.

7.  **Configure `systemd` Services**
    Copy the provided `systemd` service files from the `/systemd` directory to `/etc/systemd/system/`. Remember to replace `your_username` in each service file with your actual username.
    ```bash
    sudo cp /path/to/t3-shipyard/systemd/*.service /etc/systemd/system/
    sudo systemctl daemon-reload
    sudo systemctl enable admin.service # Repeat for other services
    sudo systemctl start admin.service  # Repeat for other services
    ```

8.  **Set Up Reverse Proxy (Caddy)**
    Configure Caddy to route public traffic to your applications. Each application runs on a different port, as defined in the `pnpm start` script in its `package.json`.
    Example `Caddyfile` configuration:
    ```caddy
    admin.your-domain.com {
        reverse_proxy localhost:3001
    }

    blog.your-domain.com {
        reverse_proxy localhost:3002
    }

    # ...and so on for all other apps
    ```
    Reload Caddy after making changes:
    ```bash
    sudo systemctl reload caddy
    ```

---

**[⬆️ Back to Monorepo Root](https://github.com/dunamismax/t3-shipyard?tab=readme-ov-file)**