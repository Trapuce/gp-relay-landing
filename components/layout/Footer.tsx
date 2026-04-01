import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/GP RELAY.png"
                alt="GP Relay"
                width={120}
                height={48}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              Vos colis au-delà des frontières. Simple, rapide et moins cher.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Produit</h3>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-gray-500 hover:text-brand-500 text-sm transition-colors">Fonctionnalités</Link></li>
              <li><Link href="#how-it-works" className="text-gray-500 hover:text-brand-500 text-sm transition-colors">Comment ça marche</Link></li>
              <li><Link href="#reviews" className="text-gray-500 hover:text-brand-500 text-sm transition-colors">Avis clients</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-500 text-sm transition-colors">Tarifs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Entreprise</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-500 hover:text-brand-500 text-sm transition-colors">À propos</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-500 text-sm transition-colors">Carrières</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-500 text-sm transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-brand-500 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Légal</h3>
            <ul className="space-y-3">
              <li><Link href="/mentions-legales" className="text-gray-500 hover:text-brand-500 text-sm transition-colors">Mentions légales</Link></li>
              <li><Link href="/politique-de-confidentialite" className="text-gray-500 hover:text-brand-500 text-sm transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="/cgv" className="text-gray-500 hover:text-brand-500 text-sm transition-colors">CGV / CGU</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GP Relay. Tous droits réservés.
          </p>
          <div className="flex items-center gap-3">
            <div className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors h-11">
              <svg viewBox="0 0 384 512" className="w-5 h-5 fill-white shrink-0">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] text-gray-400">Download on the</span>
                <span className="text-xs font-semibold">App Store</span>
              </div>
            </div>
            <div className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors h-11">
              <Image src="/icons8-google-play-store-nouveau-96.png" alt="Google Play" width={20} height={20} className="object-contain shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] text-gray-400">GET IT ON</span>
                <span className="text-xs font-semibold">Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
