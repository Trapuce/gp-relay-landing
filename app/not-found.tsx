import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center py-24">
        <p className="text-8xl font-extrabold text-brand-500 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page introuvable</h1>
        <p className="text-gray-500 mb-8 max-w-sm">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </main>
      <Footer />
    </div>
  );
}
