import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-12 border-b border-gray-200 bg-white">
      <div className="font-serif text-sm tracking-widest uppercase text-black">
        TKT Studio
      </div>
      <div className="flex gap-8 text-xs uppercase tracking-tight font-sans text-black hover:text-gray-600 text-large">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
