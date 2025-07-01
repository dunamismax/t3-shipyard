import { useRouter } from "next/router";
import Head from "next/head";
import { api } from "../../utils/api";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: post, isLoading } = api.post.getById.useQuery(Number(id), {
    enabled: !!id,
  });

  if (isLoading) return <div>Loading post...</div>;
  if (!post) return <div>Post not found.</div>;

  return (
    <>
      <Head>
        <title>{post.name}</title>
        <meta name="description" content={post.name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-10">
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            {post.name}
          </h1>
          <p className="text-gray-600 text-sm mb-4">Published: {new Date(post.createdAt).toLocaleDateString()}</p>
          <p className="text-gray-700">This is the content of the blog post. Replace with actual content from your database.</p>
        </div>
      </main>
    </>
  );
}
