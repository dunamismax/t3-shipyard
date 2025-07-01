import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { api } from "../../utils/api";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // Or any other theme you prefer

const SnippetPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: snippet, isLoading } = api.snippet.findById.useQuery(
    { id: id as string },
    { enabled: !!id },
  );

  useEffect(() => {
    if (snippet) {
      hljs.highlightAll();
    }
  }, [snippet]);

  if (isLoading) return <div>Loading snippet...</div>;
  if (!snippet) return <div>Snippet not found.</div>;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippet.code);
    alert("Code copied to clipboard!");
  };

  return (
    <>
      <Head>
        <title>{snippet.title} - CodeCaddy</title>
        <meta name="description" content={snippet.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{snippet.title}</h1>
        <p className="text-gray-400 text-sm mb-4">Language: {snippet.language}</p>
        <div className="mt-2 flex flex-wrap gap-2 mb-4">
          {snippet.tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/tags/${tag.name}`}
              className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full hover:bg-blue-600"
            >
              {tag.name}
            </Link>
          ))}
        </div>
        <div className="relative bg-gray-800 rounded-lg overflow-hidden">
          <pre className="p-4 overflow-auto">
            <code className={`language-${snippet.language}`}>
              {snippet.code}
            </code>
          </pre>
          <button
            onClick={handleCopyCode}
            className="absolute top-2 right-2 bg-gray-600 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-500"
          >
            Copy Code
          </button>
        </div>
      </main>
    </>
  );
};

export default SnippetPage;
