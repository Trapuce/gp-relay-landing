"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative Corner Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-200 rounded-br-[100%] -translate-x-1/4 -translate-y-1/4 opacity-50" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-200 rounded-tl-[100%] translate-x-1/3 translate-y-1/3 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold flex items-center justify-center gap-4 text-gray-900"
          >
            <span>📦</span> GPRelay en 3 minutes !
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-video bg-brand-100 flex items-center justify-center group cursor-pointer border-4 border-white"
        >
          {/* Base Background graphic for video placeholder */}
          <div className="absolute inset-0 bg-brand-200 flex flex-col pt-8 px-12 items-center justify-end overflow-hidden">
             <div className="flex gap-8 items-end relative w-full h-full max-w-2xl mx-auto opacity-70">
                <div className="w-1/3 h-3/4 bg-brand-300 rounded-t-3xl border-4 border-b-0 border-white shadow-xl" />
                <div className="w-1/3 h-[90%] bg-brand-400 rounded-t-3xl border-4 border-b-0 border-white shadow-2xl z-10 -translate-y-4" />
                <div className="w-1/3 h-2/3 bg-brand-300 rounded-t-3xl border-4 border-b-0 border-white shadow-xl" />
             </div>
             {/* Logo overlay on right */}
             <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-center opacity-80">
                <div className="w-24 h-24 bg-brand-500 rounded-xl mb-4" />
                <div className="text-brand-600 font-bold text-xl">GPRelay</div>
             </div>
          </div>
          
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent p-4 flex justify-between items-start text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <span className="font-medium text-lg text-white">GPRelay - Vos colis au-delà des frontières</span>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4 border-none flex bg-transparent">
             <div className="px-4 py-2 bg-black/80 rounded flex items-center gap-2 text-white font-medium hover:bg-black transition-colors">
               Regarder sur <span className="font-bold">YouTube</span>
             </div>
          </div>

          <div className="relative z-20 w-20 h-20 bg-accent text-white rounded-2xl flex items-center justify-center transform transition-transform group-hover:scale-110 shadow-lg">
            <Play className="w-10 h-10 ml-1 fill-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
