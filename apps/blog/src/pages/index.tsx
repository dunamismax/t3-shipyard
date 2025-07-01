import Head from "next/head";
import Link from "next/link";
import { api } from "../utils/api";

export default function Home() {
  const { data: posts, isLoading } = api.post.getAll.useQuery();

  if (isLoading) return <div>Loading posts...</div>;

  return (
    <>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="T3 Shipyard Blog App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-10">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-[5rem] mb-8">
          Blog <span className="text-blue-500">Posts</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 w-full max-w-2xl">
          {posts?.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.name}</h2>
              <p className="text-gray-600 text-sm">Published: {new Date(post.createdAt).toLocaleDateString()}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
