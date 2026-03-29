"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Star } from "lucide-react";

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Ce que nos utilisateurs disent
          </motion.h2>
          
          {/* Trustpilot-style Rating */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <div className="flex items-center gap-2">
              <span className="font-semibold px-2 py-1 bg-[#00b67a] text-white rounded text-sm">Trustpilot</span>
              <div className="flex gap-1 text-[#00b67a]">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Rated <span className="font-bold">4.8</span> / 5 based on <span className="font-bold border-b border-gray-900">12,403 reviews</span>.
            </p>
          </motion.div>
        </div>

        {/* Video Shorts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="relative aspect-[9/16] bg-gray-200 rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
            >
              {/* Dummy Image Background */}
              <div className={[
                "absolute inset-0 mix-blend-multiply opacity-50",
                index === 0 ? "bg-brand-100" : index === 1 ? "bg-brand-200" : "bg-brand-300"
              ].join(" ")} />
              <div className="absolute inset-0 flex flex-col p-4 justify-between bg-gradient-to-b from-black/50 via-transparent to-black/60">
                 {/* Top user info */}
                 <div className="flex items-center gap-2 text-white">
                    <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-xs font-bold">GP</div>
                    <span className="font-medium text-sm">GP Relay</span>
                    <button className="bg-white/20 text-xs px-2 py-1 rounded hover:bg-white/30 transition-colors">S'abonner</button>
                 </div>

                 {/* Play Button Center */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white transform transition-transform group-hover:scale-110 shadow-lg z-10">
                   <Play className="w-8 h-8 ml-1 fill-white" />
                 </div>
                 
                 {/* Bottom info */}
                 <div className="relative z-10">
                   <h3 className="text-white font-medium text-lg leading-tight mb-4 drop-shadow-md">
                     {index === 0 ? "Envoyer un colis n'a jamais été aussi facile avec GP Relay ! ❤️" : index === 1 ? "Mon expérience avec GP Relay depuis Bamako 🇲🇱" : "Comment j'ai reçu mes affaires de Paris à Abidjan en 48h 🚀"}
                   </h3>
                   <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity w-fit bg-black/40 px-3 py-1.5 rounded-lg">
                      <span className="text-white font-bold text-sm flex items-center gap-2"><Play className="w-4 h-4 fill-white"/> YouTube</span>
                   </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
            Rejoignez plus de <span className="font-extrabold border-b-4 border-brand-500">100,000</span> utilisateurs satisfaits
          </h3>
          <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white font-semibold shadow-xl shadow-brand-500/20">
            Lire tous nos avis
          </Button>
        </div>
      </div>
    </section>
  );
}
