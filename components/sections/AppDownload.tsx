"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AppleIcon } from "@/components/icons/AppleIcon";

export function AppDownload() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden shadow-2xl bg-[#fafafa] border border-gray-100">
          
          {/* Text Side (Left) */}
          <div className="flex-1 p-12 md:p-16 flex flex-col justify-center items-start text-left">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
             >
               L'App GP Relay
             </motion.h2>

             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg"
             >
               La toute nouvelle application GP Relay est votre compagnon d'expédition ultime. 
               Prenez des photos de vos biens, suivez en un seul clic, recevez des notifications push 
               directement sur votre téléphone concernant les événements importants de votre envoi, et bien plus encore.
             </motion.p>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
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

          {/* Image Side (Right) - Hand holding phone */}
          <div className="flex-1 relative min-h-[400px] md:min-h-[500px]">
             {/* Instead of a real photo, we emulate the aesthetic with a stylized mockup background */}
             <div className="absolute inset-0 w-full h-full object-cover bg-gray-200">
               {/* Blurred background image emulation */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542451313056-b7c8e6266471?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center blur-sm brightness-75 mix-blend-multiply" />
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
             </div>

             {/* Phone in focus */}
             <motion.div
               initial={{ opacity: 0, x: 50, rotate: 12 }}
               whileInView={{ opacity: 1, x: 0, rotate: -12 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[500px] rounded-[2.5rem] border-[8px] border-black shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden"
             >
                <Image
                  src="/screenshots/screen-login.png"
                  alt="GP Relay - Connexion"
                  fill
                  className="object-cover object-top"
                />
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
