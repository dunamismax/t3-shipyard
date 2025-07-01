import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { api } from "../../utils/api";
import Navbar from "../../components/Navbar";

const TagPage: NextPage = () => {
  const router = useRouter();
  const { tag } = router.query;

  const { data: snippets, isLoading } = api.snippet.findByTag.useQuery(
    { tag: tag as string },
    { enabled: !!tag },
  );

  if (isLoading) return <div>Loading snippets for tag &quot;{tag}&quot;...</div>;
  if (!snippets || snippets.length === 0) return <div>No snippets found for tag &quot;{tag}&quot;.</div>;

  return (
    <>
      <Head>
        <title>Tag: {tag} - CodeCaddy</title>
        <meta name="description" content={`Code snippets tagged with ${tag}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Snippets tagged with &quot;{tag}&quot;</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {snippets?.map((snippet) => (
            <div key={snippet.id} className="bg-gray-700 p-4 rounded-lg">
              <Link href={`/snippets/${snippet.id}`}>
                <h2 className="text-2xl font-semibold text-white hover:underline">
                  {snippet.title}
                </h2>
              </Link>
              <p className="text-gray-400 text-sm">{snippet.language}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {snippet.tags.map((t) => (
                  <Link
                    key={t.id}
                    href={`/tags/${t.name}`}
                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full hover:bg-blue-600"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default TagPage;
