import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-100 p-4">
      <nav className="container">
        <ul className="flex gap-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
