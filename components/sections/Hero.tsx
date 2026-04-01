"use client";

import { motion } from "framer-motion";
import { QrCode, Search, Package, Home, PlusSquare, MessageSquare, User, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" className="w-6 h-6 fill-white">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

export function Hero() {
  return (
    <section className="relative pt-24 lg:pt-32 bg-brand-500 text-white flex flex-col items-center justify-start z-0">
      {/* Background Layer (Keeps shapes from overflowing) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#056037] rounded-full -translate-y-[40%] translate-x-[20%]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#056037] rounded-full translate-y-1/3 -translate-x-1/3" />
      </div>

      {/* Mini dots */}
      <div className="hidden lg:flex absolute top-1/4 left-[20%] w-4 h-4 rounded-full border-[4px] border-white/20 items-center justify-center">
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </div>
      <div className="hidden lg:flex absolute top-[50%] right-[20%] w-5 h-5 rounded-full border-[4px] border-white/20 items-center justify-center">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>

      {/* QR Code floating right */}
      <div className="hidden xl:flex absolute right-10 top-1/2 -translate-y-1/2 bg-white p-3 shadow-lg z-30 justify-center items-center rounded-xl">
        <QrCode className="w-20 h-20 text-brand-600" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 mt-4 leading-tight"
          >
            Vos colis au-delà des frontières
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-brand-50 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Simple, rapide et pas cher. Envoyez (presque) tout, entre Paris 🇫🇷 et l'Afrique de l'Ouest 🌍 — Bamako, Abidjan, Dakar, Conakry et plus — grâce à des vols déjà prévus. Chaque colis (GP), vous rapproche de ce qui compte.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-900 transition-colors w-full sm:w-auto h-14 border border-gray-800">
              <AppleIcon />
              <div className="flex flex-col items-start leading-[1.1]">
                <span className="text-[10px] text-gray-300">Download on the</span>
                <span className="text-base font-semibold">App Store</span>
              </div>
            </button>
            <button className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-900 transition-colors w-full sm:w-auto h-14 border border-gray-800">
              <Image src="/icons8-google-play-store-nouveau-96.png" alt="Google Play" width={24} height={24} className="object-contain" />
              <div className="flex flex-col items-start leading-[1.1]">
                <span className="text-[10px] text-gray-300">GET IT ON</span>
                <span className="text-base font-semibold">Google Play</span>
              </div>
            </button>
          </motion.div>
        </div>

        {/* Stacked Mobile Mockups */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full mt-4 md:mt-8 h-[540px] lg:h-[600px] z-10"
        >
          {/* Perfect Split Horizon Background */}
          <div className="absolute top-1/2 inset-x-0 w-[200vw] -left-[50vw] bg-white z-0" style={{ height: 'calc(50% + 200px)' }} />

          {/* Left Phone (Separated, centered vertically, closer gap) */}
          <div className="hidden lg:block absolute left-[calc(50%-330px)] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[250px] h-[520px] bg-white rounded-[2.5rem] border-[8px] border-black shadow-[0_20px_40px_rgba(0,0,0,0.2)] overflow-hidden">
             <div className="absolute top-0 inset-x-0 h-5 bg-black rounded-b-xl w-32 mx-auto z-30" />
             <div className="p-4 pt-10 h-full flex flex-col items-center bg-gray-50">
               <div className="w-full flex items-center justify-between mb-4">
                 <div className="w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs">←</div>
                 <span className="text-xs font-semibold text-black">Détails</span>
                 <div className="w-6 h-6" />
               </div>
               <div className="text-[10px] text-gray-400 mb-1">Nom de business</div>
               <div className="text-sm font-semibold text-black mb-4">Azz</div>
               <div className="text-[10px] text-gray-400 mb-1">Prix</div>
               <div className="text-xl font-bold text-brand-600 mb-5">10,00 €/Kg</div>
               <div className="w-full h-20 bg-white rounded-xl shadow-sm border border-gray-100 mb-4 flex flex-col items-center justify-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs font-bold text-black">M</div>
                 <span className="text-xs font-medium text-black">Mayel Thiam</span>
               </div>
               <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center py-4 px-4">
                  <div className="flex justify-between w-full text-[10px] text-gray-500 mb-3">
                    <div className="flex items-center gap-1"><div className="w-4 h-3 bg-blue-600" /> France</div>
                    <div className="flex items-center gap-1">Sénégal <div className="w-4 h-3 bg-green-500" /></div>
                  </div>
                  <div className="flex justify-between items-center w-full relative mb-2">
                    <div className="absolute w-full border-t border-dashed border-gray-300 top-1/2 -z-10" />
                    <div className="w-2 h-2 rounded-full border border-gray-400 bg-white" />
                    <div className="text-brand-500 bg-white px-2">✈</div>
                    <div className="w-2 h-2 rounded-full border border-gray-400 bg-white" />
                  </div>
                  <div className="text-[9px] text-gray-400 mt-2 text-center">Paris 🇫🇷 ➔ Bamako 🇲🇱 · Abidjan 🇨🇮 · Dakar 🇸🇳</div>
               </div>
             </div>
          </div>

          {/* Right Phone (Separated, centered vertically, closer gap) */}
          <div className="hidden lg:block absolute left-[calc(50%+330px)] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[250px] h-[520px] bg-white rounded-[2.5rem] border-[8px] border-black shadow-[0_20px_40px_rgba(0,0,0,0.2)] overflow-hidden">
             <div className="absolute top-0 inset-x-0 h-5 bg-black rounded-b-xl w-32 mx-auto z-30" />
             <div className="p-4 pt-10 h-full flex flex-col bg-gray-50">
               <div className="w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs mb-6">←</div>
               
               <div className="w-full bg-white rounded-xl border border-gray-100 mb-6 p-6 flex flex-col items-center justify-center shadow-sm">
                  <div className="relative mb-2">
                    <Package className="w-16 h-16 text-black/80" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-black" />
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-black mt-2">Colis livré</div>
               </div>
               
               <div className="flex justify-between px-4 mb-6 bg-white rounded-xl shadow-sm border border-gray-100 py-4">
                 <div className="flex flex-col items-center"><span className="text-[10px] text-gray-400">Poids</span><span className="text-xs font-bold text-black mt-1">1/2 kg</span></div>
                 <div className="flex flex-col items-center"><span className="text-[10px] text-gray-400">Prix</span><span className="text-xs font-bold text-black mt-1">22,40 €</span></div>
               </div>

               <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 py-4 px-4 mb-4">
                 <div className="flex justify-between text-[10px] text-gray-500 mb-3"><span>Sénégal</span><span>France</span></div>
                 <div className="flex justify-between items-center relative mb-2">
                     <div className="absolute w-full border-t border-dashed border-gray-300 top-1/2 -z-10" />
                     <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
                     <div className="text-brand-500 text-sm bg-white px-2">✈</div>
                     <div className="w-3 h-3 rounded-full bg-blue-600 border-2 border-white" />
                  </div>
               </div>

               <div className="bg-white rounded-xl p-4 flex flex-col shadow-sm border border-gray-100 mt-auto mb-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-pink-100" />
                      <div>
                        <div className="text-[10px] font-medium text-black">Mayel Thiam</div>
                        <div className="text-[10px] font-bold text-brand-600">20,00 €/Kg</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">📞</div>
                      <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">💬</div>
                    </div>
                  </div>
               </div>
             </div>
          </div>

          {/* Center Phone (Front, straight, larger, perfectly centered) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[270px] lg:w-[310px] h-[560px] lg:h-[620px] bg-gray-50 rounded-[2.8rem] border-[10px] border-black shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden">
             <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-[18px] w-36 mx-auto z-30" />
             <div className="p-5 pt-12 h-full flex flex-col relative z-20">
               <div className="flex justify-between items-start mb-6 mt-2">
                 <h3 className="text-3xl font-bold text-brand-600 leading-[1.1]">Trouvez<br/>rapidement<br/>un GP</h3>
                 <div className="flex flex-col gap-2">
                   <div className="w-8 h-8 bg-blue-100 text-blue-600 font-bold rounded-[10px] flex items-center justify-center text-sm shadow-sm">M</div>
                   <div className="w-8 h-8 bg-brand-500 text-white rounded-[10px] flex items-center justify-center shadow-sm"><Package className="w-4 h-4"/></div>
                 </div>
               </div>

               <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 mb-6 relative">
                 <div className="flex items-center justify-between pb-3">
                   <span className="text-xs text-gray-500 font-medium">Pays de départ</span>
                   <span className="text-brand-500 text-lg">🛫</span>
                 </div>
                 <div className="w-full h-[1px] bg-gray-100 mb-3" />
                 <div className="flex items-center justify-between">
                   <span className="text-xs text-gray-500 font-medium">Pays d'arrivée</span>
                   <span className="text-brand-500 text-lg">🛬</span>
                 </div>
                 
                 <div className="w-full h-12 bg-brand-500 rounded-2xl mt-5 flex items-center justify-center text-white text-[13px] font-bold shadow-md shadow-brand-500/30">Rechercher</div>
               </div>
               
               <div className="flex-1">
                 <div className="text-xs font-bold text-brand-600 mb-3">Dernières annonces</div>
                 <div className="bg-white rounded-3xl border border-gray-100 p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                       <span className="text-[10px] text-gray-500 font-medium flex items-center gap-1.5"><div className="w-5 h-3.5 bg-blue-600 rounded-[2px]" /> France</span>
                       <span className="text-[10px] text-gray-500 font-medium flex items-center gap-1.5">Sénégal <div className="w-5 h-3.5 bg-green-500 rounded-[2px]" /></span>
                    </div>
                    <div className="flex justify-between items-center mb-4 relative">
                       <div className="absolute w-full border-t border-dashed border-gray-200 top-1/2 -z-10" />
                       <div className="w-2.5 h-2.5 bg-white border-2 border-gray-300 rounded-full" />
                       <div className="text-sm text-brand-500 bg-white px-2">✈</div>
                       <div className="w-2.5 h-2.5 bg-white border-2 border-gray-300 rounded-full" />
                    </div>
                    <div className="text-center text-[9px] text-gray-400 mb-4 font-medium">Paris, France ➔ Bamako, Mali</div>
                    <div className="flex justify-between items-center border-t border-gray-50 pt-4">
                       <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-xs font-bold text-black" >M</div><span className="text-[11px] font-bold text-black">Mayel Thiam</span></div>
                       <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-lg">10,00 €/Kg</span>
                    </div>
                 </div>
               </div>

               {/* Mock Bottom Tab Bar */}
               <div className="absolute bottom-0 inset-x-0 h-20 bg-brand-700 mt-auto rounded-b-[2rem] flex justify-around items-center px-4 pb-2 border-t border-brand-800">
                  <div className="flex flex-col items-center gap-1.5 text-white bg-white/10 px-3 py-1.5 rounded-xl"><Home className="w-5 h-5 fill-white" /><span className="text-[9px] font-bold">Accueil</span></div>
                  <div className="flex flex-col items-center gap-1.5 text-white/50"><Search className="w-5 h-5" /><span className="text-[9px] font-medium">Suivis</span></div>
                  <div className="flex flex-col items-center gap-1.5 text-white/50"><PlusSquare className="w-5 h-5" /><span className="text-[9px] font-medium">Publier</span></div>
                  <div className="flex flex-col items-center gap-1.5 text-white/50"><MessageSquare className="w-5 h-5" /><span className="text-[9px] font-medium">Annonces</span></div>
                  <div className="flex flex-col items-center gap-1.5 text-white/50"><User className="w-5 h-5" /><span className="text-[9px] font-medium">Profil</span></div>
               </div>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
