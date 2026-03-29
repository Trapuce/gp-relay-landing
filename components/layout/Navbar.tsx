import Link from "next/link";
import { Package } from "lucide-react";

export function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Package className="w-8 h-8 text-white" />
            <span className="font-bold text-2xl text-white tracking-tight">GPRelay</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
