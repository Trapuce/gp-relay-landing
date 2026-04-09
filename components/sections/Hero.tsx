"use client";

import { motion } from "framer-motion";
import { QrCode } from "lucide-react";
import Image from "next/image";
import { AppleIcon } from "@/components/icons/AppleIcon";

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

          {/* Left Phone */}
          <div className="hidden lg:block absolute left-[calc(50%-330px)] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[250px] h-[520px] rounded-[2.5rem] border-[8px] border-black shadow-[0_20px_40px_rgba(0,0,0,0.2)] overflow-hidden">
            <Image src="/screenshots/screen-reservation.png" alt="Détails de la réservation" fill className="object-cover object-top" />
          </div>

          {/* Right Phone */}
          <div className="hidden lg:block absolute left-[calc(50%+330px)] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[250px] h-[520px] rounded-[2.5rem] border-[8px] border-black shadow-[0_20px_40px_rgba(0,0,0,0.2)] overflow-hidden">
            <Image src="/screenshots/screen-activity.png" alt="Mes voyages planifiés" fill className="object-cover object-top" />
          </div>

          {/* Center Phone */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[270px] lg:w-[310px] h-[560px] lg:h-[620px] rounded-[2.8rem] border-[10px] border-black shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden">
            <Image src="/screenshots/screen-home.png" alt="GP Relay - Recherche de GP" fill className="object-cover object-top" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
