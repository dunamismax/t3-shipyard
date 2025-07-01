This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To run this application locally, follow these steps:

1.  **Navigate to the monorepo root**: If you are not already there, change your directory to the `t3-shipyard` root.
    ```bash
    cd /path/to/t3-shipyard
    ```

2.  **Install dependencies**: Ensure all monorepo dependencies are installed.
    ```bash
    pnpm install
    ```

3.  **Run the development server**: Start the Next.js development server for the dunamismax.com application.
    ```bash
    pnpm --filter @t3-shipyard/dunamismax.com dev
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
