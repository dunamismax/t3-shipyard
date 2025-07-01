import Link from 'next/link'

const Navbar: React.FC = () => {
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
          <li>
            <Link href="/users" className="hover:underline">
              Users
            </Link>
          </li>
          <li>
            <span className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white">
              Admin Dashboard
            </span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
