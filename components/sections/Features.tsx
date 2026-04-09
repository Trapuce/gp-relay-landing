"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const features = [
  {
    title: "Publiez une annonce de GP",
    description: "Amortissez les coûts de vos voyages en publiant une annonce de trajet et vendant les kilos disponibles de vos valises.",
    screenshot: "/screenshots/screen-publish.png",
    reverse: false,
  },
  {
    title: "Gérez facilement votre clientèle",
    description: "Retrouvez toutes les informations de vos expéditeurs et de leurs colis au même endroit.",
    screenshot: "/screenshots/screen-activity.png",
    reverse: true,
  },
  {
    title: "Envoyez simplement vos colis",
    description: "Trouvez le transporteur (GP) qu'il vous faut et réservez votre envoi.",
    screenshot: "/screenshots/screen-home.png",
    reverse: false,
  },
  {
    title: "Suivez vos colis en temps réel",
    description: "Vous serez informés de chaque étape de l'acheminement de votre colis, de la réservation de votre envoi jusqu'à la livraison du colis.",
    screenshot: "/screenshots/screen-reservation.png",
    reverse: true,
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900"
          >
            Ce qui rend GP Relay unique
          </motion.h2>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={cn(
                "flex flex-col md:flex-row items-center gap-12 lg:gap-24",
                feature.reverse ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-4"
              >
                <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>

              {/* Mockup Graphic */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 relative flex justify-center w-full"
              >
                {/* Decorative Pill Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60%] md:h-[80%] bg-brand-500 rounded-[3rem] -z-10" />
                
                {/* Phone Mockup Frame */}
                <div className="w-64 md:w-72 h-[500px] md:h-[550px] rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden relative">
                  <Image
                    src={feature.screenshot}
                    alt={feature.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
