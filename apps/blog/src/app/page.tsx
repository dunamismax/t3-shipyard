"use client";

import Link from 'next/link';
import { api } from '~/utils/api';
import { useState } from 'react';

const CreatePostForm: React.FC = () => {
  const [postName, setPostName] = useState('');
  const utils = api.useUtils();
  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      setPostName('');
      void utils.post.getAll.invalidate();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ name: postName });
      }}
      className="mb-8 flex w-full max-w-2xl flex-col gap-4 rounded-lg bg-white p-6 shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-800">Create New Post</h2>
      <input
        type="text"
        placeholder="Post Title"
        value={postName}
        onChange={(e) => setPostName(e.target.value)}
        className="rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
      />
      <button
        type="submit"
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        disabled={createPost.isLoading}
      >
        {createPost.isLoading ? 'Creating...' : 'Create Post'}
      </button>
      {createPost.isError && (
        <p className="text-red-500">
          Error creating post: {createPost.error?.message}
        </p>
      )}
    </form>
  );
};

export default function Home() {
  const { data: posts, isLoading } = api.post.getAll.useQuery();

  if (isLoading) return <div>Loading posts...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100 py-10">
      <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-[5rem]">
        Blog <span className="text-blue-500">Posts</span>
      </h1>
      <CreatePostForm />
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4">
        {posts?.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="block rounded-lg bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg"
          >
            <h2 className="mb-2 text-2xl font-bold text-gray-800">
              {post.name}
            </h2>
            <p className="text-sm text-gray-600">
              Published: {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
