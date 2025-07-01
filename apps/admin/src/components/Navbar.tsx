import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar: React.FC = () => {
  const { data: sessionData } = useSession()

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Admin App
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          {sessionData?.user && (
            <li>
              <Link href="/users" className="hover:underline">
                Users
              </Link>
            </li>
          )}
          <li>
            <button
              className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white no-underline transition hover:bg-white/20"
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
              {sessionData ? 'Sign out' : 'Sign in'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
