import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link href="/" className="flex items-center group">
            <Image
              src="/GP RELAY.png"
              alt="GP Relay"
              width={140}
              height={56}
              className="object-contain"
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
