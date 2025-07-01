import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          CodeCaddy
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/new" className="text-white hover:text-gray-300">
              New Snippet
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
