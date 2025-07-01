import { type NextPage } from 'next'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/react'

import { api } from '../utils/api'

const Home: NextPage = () => {
  

  return (
    <>
      <Head>
        <title>dunamismax.com</title>
        <meta
          name="description"
          content="dunamismax.com - Personal Blog and Developer Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-[5rem]">
          Welcome to <span className="text-blue-500">dunamismax.com</span>
        </h1>
        <p className="mt-3 text-2xl text-gray-700">
          This is my personal blog and developer portfolio.
        </p>
        <AuthShowcase />
      </main>
    </>
  )
}

export default Home

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession()

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    {
      enabled: sessionData?.user !== undefined,
    }
  )

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-gray-700">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-gray-900 no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  )
}
