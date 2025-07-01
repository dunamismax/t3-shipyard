'use client'

import { useParams } from 'next/navigation'

export default function PostPage() {
  const params = useParams()
  const id = params.postId

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-10">
      <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
          Post {id}
        </h1>
        <p className="mb-4 text-sm text-gray-600">
          Published: {new Date().toLocaleDateString()}
        </p>
        <p className="text-gray-700">
          This is the content of the blog post. Replace with actual content from
          your database.
        </p>
      </div>
    </main>
  )
}
