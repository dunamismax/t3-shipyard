# Database Management

<p align="center">
  <img src="../t3-shipyard-image.png" alt="t3-shipyard logo" width="250"/>
</p>

This document provides guidelines and best practices for managing databases within the **[t3-shipyard](https://github.com/dunamismax/t3-shipyard)** monorepo, primarily focusing on PostgreSQL and Prisma.

---

## Overview

Each application in this monorepo has its own independent Prisma schema and database. This ensures isolation and flexibility. This guide covers common database management tasks. The established workflow in this repository uses `pnpm db:push` for schema management, which is suitable for rapid prototyping and development. **We do not use migrations.**

---

## Development Workflow with `db:push`

The `db:push` command synchronizes your Prisma schema with your database schema. It's a fast way to apply schema changes during development.

1.  **Make Schema Changes**: Modify the `schema.prisma` file within the desired application directory (`apps/<app-name>/prisma/schema.prisma`).

2.  **Push Schema Changes**: From the application's directory, run `db:push`:
    ```bash
    cd apps/<app-name>
    pnpm db:push
    ```
    This command will:
    -   Introspect the database.
    -   Compare it to the target `schema.prisma`.
    -   Apply the necessary changes to the database to match the schema.
    -   Generate a new Prisma Client.

    You can also run this command for all apps from the monorepo root:
    ```bash
    pnpm db:push
    ```

3.  **Resetting the Database**: If you need to reset your development database (e.g., to clear all data and re-apply the schema from scratch):
    ```bash
    cd apps/<app-name>
    pnpm prisma migrate reset
    ```
    **Caution**: This will delete all data in your database.

---

## Database Seeding

Seeding your database with initial data is useful for development and testing.

1.  **Create a Seed Script**: Create a `seed.ts` (or `seed.js`) file in your `prisma` directory (e.g., `apps/<app-name>/prisma/seed.ts`).

    Example `seed.ts`:
    ```typescript
    import { PrismaClient } from '@prisma/client';

    const prisma = new PrismaClient();

    async function main() {
      // Your seeding logic here
      await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice@example.com',
        },
      });
      console.log('Seeding complete!');
    }

    main()
      .catch((e) => {
        console.error(e);
        process.exit(1);
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    ```

2.  **Configure `package.json`**: Add a `seed` script to your application's `package.json`.
    ```json
    {
      "scripts": {
        "seed": "ts-node prisma/seed.ts"
      }
    }
    ```

3.  **Run Seeding**:
    ```bash
    cd apps/<app-name>
    pnpm seed
    ```

---

## Troubleshooting Common Issues

-   **Database Connection Refused**: Ensure your PostgreSQL server is running and accessible from your application. Check the `DATABASE_URL` in your `.env` file.
-   **Schema Drift**: If the database schema has drifted from the `schema.prisma` file, `pnpm db:push` might fail. In development, it's often easiest to reset the database with `pnpm prisma migrate reset`.
-   **Prisma Client Not Found**: After making schema changes, ensure you run `pnpm db:generate` (or `pnpm db:push`, which runs generate automatically) to regenerate the Prisma Client.

---

**[⬆️ Back to Monorepo Root](https://github.com/dunamismax/t3-shipyard?tab=readme-ov-file)**