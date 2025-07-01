// import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100 py-10">
      <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-[5rem]">
        Blog <span className="text-blue-500">Posts</span>
      </h1>
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4">
        <div className="block rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">Sample Post</h2>
          <p className="text-sm text-gray-600">
            Published: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </main>
  )
}
