import { type NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const BlogPostPage: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Head>
        <title>{`Blog Post: ${slug as string} - dunamismax.com`}</title>
        <meta
          name="description"
          content={`Blog post about ${slug as string}`}
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-[5rem]">
          Blog Post: <span className="text-blue-500">{slug}</span>
        </h1>
        <p className="mt-3 text-2xl text-gray-700">
          Content for {slug} goes here.
        </p>
        {/* TODO: Fetch and display individual blog post content */}
      </main>
    </>
  )
}

export default BlogPostPage
