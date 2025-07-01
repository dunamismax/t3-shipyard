# database management

<p align="center">
  <img src="../t3-shipyard-image.png" alt="t3-shipyard logo" width="250"/>
</p>

This document provides guidelines and best practices for managing databases within the **[t3-shipyard](https://github.com/dunamismax/t3-shipyard)** monorepo, primarily focusing on PostgreSQL and Prisma.

---

## overview

Each application in this monorepo typically has its own Prisma schema and database. This ensures isolation and flexibility. This guide covers common database management tasks.

---

## prisma migrations

Prisma Migrate is used to evolve your database schema. Each application manages its own migrations.

### development workflow

1.  **make schema changes**: Modify `prisma/schema.prisma` within your application directory (`apps/<app-name>/prisma/schema.prisma`).

2.  **create a new migration**: Generate a new migration file based on your schema changes.

    ```bash
    cd apps/<app-name>
    pnpm prisma migrate dev --name <migration-name>
    ```

    Replace `<migration-name>` with a descriptive name (e.g., `add-users-table`). This command will:
    -   Create a new migration file in `prisma/migrations/`.
    -   Apply the migration to your development database.
    -   Generate a new Prisma Client.

3.  **resetting the database**: If you need to reset your development database (e.g., to clear all data and apply migrations from scratch):

    ```bash
    cd apps/<app-name>
    pnpm prisma migrate reset
    ```

    **caution**: This will delete all data in your database.

### production workflow

For production environments, migrations are typically applied in a non-interactive way.

1.  **generate migration**: On your development machine, after making schema changes, generate the migration without applying it:

    ```bash
    cd apps/<app-name>
    pnpm prisma migrate dev --create-only --name <migration-name>
    ```

2.  **apply migration in production**: On your production server, after pulling the latest code, apply pending migrations:

    ```bash
    cd apps/<app-name>
    pnpm prisma migrate deploy
    ```

    This command will apply all pending migrations found in `prisma/migrations/`.

---

## database seeding

Seeding your database with initial data is useful for development and testing.

1.  **create a seed script**: Create a `seed.ts` (or `seed.js`) file in your `prisma` directory (e.g., `apps/<app-name>/prisma/seed.ts`).

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

2.  **configure package.json**: Add a `postinstall` script to your application's `package.json` to run the seed script after `prisma generate`.

    ```json
    {
      "scripts": {
        "postinstall": "prisma generate && ts-node prisma/seed.ts"
      }
    }
    ```

3.  **run seeding**: After `pnpm install` and `pnpm db:push`, the `postinstall` script will run the seed.

---

## troubleshooting common issues

-   **database connection refused**: Ensure your PostgreSQL server is running and accessible from your application. Check `DATABASE_URL` in your `.env` file.
-   **migration conflicts**: If you encounter conflicts when pulling changes, you might need to resolve them manually or reset your local database (`pnpm prisma migrate reset`).
-   **prisma client not found**: After making schema changes or running migrations, ensure you run `pnpm prisma generate` (or `pnpm db:generate` from the monorepo root) to regenerate the Prisma Client.

---

**[back to monorepo root](https://github.com/dunamismax/t3-shipyard?tab=readme-ov-file)**
