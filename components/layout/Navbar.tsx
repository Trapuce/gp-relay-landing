import Link from "next/link";

export function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link href="/" className="flex items-center group">
            <span className="text-3xl font-extrabold text-white tracking-tight">GP Relay</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
