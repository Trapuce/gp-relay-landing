"use client";

import { motion } from "framer-motion";
import { Plane, Gift, ArrowDownToLine, PartyPopper, FileText, ShoppingBag } from "lucide-react";

const situations = [
  {
    icon: <Plane className="w-10 h-10 text-brand-500" />,
    text: "Amortir les frais de ses billets d'avion"
  },
  {
    icon: <Gift className="w-10 h-10 text-brand-500" />,
    text: "Envoyer des cadeaux à vos proches, où qu'ils soient"
  },
  {
    icon: <ArrowDownToLine className="w-10 h-10 text-brand-500" />,
    text: "Recevoir des produits de son pays d'origine"
  },
  {
    icon: <PartyPopper className="w-10 h-10 text-brand-500" />,
    text: "Fêter les grands évènements (mariage, baptême, etc.)"
  },
  {
    icon: <FileText className="w-10 h-10 text-brand-500" />,
    text: "Acheminer des documents importants en urgence"
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-brand-500" />,
    text: "Expédier des achats entre Paris et l'Afrique de l'Ouest"
  }
];

export function Situations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold flex items-center justify-center gap-4 text-gray-900"
          >
            <span>📦</span> GPRelay, pensée pour chaque situation
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map((situation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-6 hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                {situation.icon}
              </div>
              <p className="text-gray-700 font-medium text-lg leading-snug">
                {situation.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
