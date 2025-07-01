import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const PortfolioPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - dunamismax.com</title>
        <meta name="description" content="Portfolio of dunamismax" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-[5rem]">
          My <span className="text-blue-500">Portfolio</span>
        </h1>
        <p className="mt-3 text-2xl text-gray-700">
          Showcasing my projects.
        </p>
        {/* TODO: Fetch and display portfolio projects */}
        <Link href="/" className="mt-4 text-blue-500 hover:underline">
          Go back home
        </Link>
      </main>
    </>
  );
};

export default PortfolioPage;
