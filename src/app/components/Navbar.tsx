import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        Chase Meadows
      </Link>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
}
