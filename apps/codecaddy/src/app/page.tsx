"use client";

import Link from 'next/link';

export default function Home() {
  const mockSnippets = [
    {
      id: '1',
      title: 'Sample React Component',
      language: 'typescript',
      tags: [{ id: '1', name: 'react' }, { id: '2', name: 'typescript' }],
    },
  ];

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Recent Snippets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockSnippets?.map((snippet) => (
          <div key={snippet.id} className="bg-gray-700 p-4 rounded-lg">
            <Link href={`/snippets/${snippet.id}`}>
              <h2 className="text-2xl font-semibold text-white hover:underline">
                {snippet.title}
              </h2>
            </Link>
            <p className="text-gray-400 text-sm">{snippet.language}</p>
            <div className="mt-2 flex flex-wrap gap-2">
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
          </div>
        ))}
      </div>
    </main>
  );
};
