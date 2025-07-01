This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To run this application locally, follow these steps:

1.  **Install dependencies**:
    ```bash
    pnpm install
    ```

2.  **Configure Environment Variables**: Create a `.env` file in the root of this application and add the following variables, replacing with your actual values:
    ```
    DATABASE_URL="postgresql://user:password@localhost:5432/t3shipyard_dunamismax"
    NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET" # Generate a strong secret: openssl rand -base64 32
    NEXTAUTH_URL="http://localhost:3000" # Or your deployment URL
    ```

3.  **Run database migrations and generate Prisma client**:
    ```bash
    pnpm db:push
    pnpm db:generate
    ```

4.  **Run the development server**:
    ```bash
    pnpm dev
    ```

    The application will be accessible at `http://localhost:3000` (or another port if 3000 is in use).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
