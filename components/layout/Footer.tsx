import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { AppleIcon } from "@/components/icons/AppleIcon";

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
                width={280}
                height={112}
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
              <AppleIcon className="w-5 h-5 fill-white shrink-0" />
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
