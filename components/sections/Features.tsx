"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Publiez une annonce de GP",
    description: "Amortissez les coûts de vos voyages en publiant une annonce de trajet et vendant les kilos disponibles de vos valises.",
    imageMockup: "publish",
    reverse: false,
  },
  {
    title: "Gérez facilement votre clientèle",
    description: "Retrouvez toutes les informations de vos expéditeurs et de leurs colis au même endroit.",
    imageMockup: "manage",
    reverse: true,
  },
  {
    title: "Envoyez simplement vos colis",
    description: "Trouvez le transporteur (GP) qu'il vous faut et réservez votre envoi.",
    imageMockup: "send",
    reverse: false,
  },
  {
    title: "Suivez vos colis en temps réel",
    description: "Vous serez informés de chaque étape de l'acheminement de votre colis, de la réservation de votre envoi jusqu'à la livraison du colis.",
    imageMockup: "track",
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
            Ce qui rend GPRelay unique
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
                <div className="w-64 md:w-72 h-[500px] md:h-[550px] bg-white rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden relative">
                   <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-1/2 mx-auto z-30" />
                   
                   {/* Mockup Content based on type */}
                   <div className="pt-12 px-4 h-full bg-gray-50 flex flex-col gap-4">
                     {feature.imageMockup === "publish" && (
                       <>
                         <div className="h-8 w-3/4 bg-brand-100 rounded-md" />
                         <div className="h-32 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-4">
                            <div className="w-full h-full bg-brand-50 rounded-lg flex items-center justify-center">Illustration</div>
                         </div>
                         <div className="h-10 bg-brand-500 rounded-full mt-auto mb-8" />
                       </>
                     )}
                     {feature.imageMockup === "manage" && (
                       <>
                         <div className="h-24 bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-2">
                           <div className="flex justify-between"><div className="w-12 h-4 bg-gray-200 rounded"/><div className="w-12 h-4 bg-gray-200 rounded"/></div>
                           <div className="flex justify-center my-2"><div className="w-8 h-8 rounded-full bg-brand-100"/></div>
                           <div className="flex justify-center"><div className="w-20 h-3 bg-gray-200 rounded"/></div>
                         </div>
                         <div className="bg-white rounded-xl p-3 flex items-center gap-3 border border-gray-100">
                           <div className="w-10 h-10 rounded-full bg-blue-100" />
                           <div className="flex-1 space-y-2">
                             <div className="w-24 h-3 bg-gray-800 rounded" />
                             <div className="w-16 h-2 bg-gray-400 rounded" />
                           </div>
                         </div>
                       </>
                     )}
                     {feature.imageMockup === "send" && (
                       <>
                         <div className="h-40 bg-brand-500 rounded-xl relative overflow-hidden p-4 text-white space-y-4">
                            <div className="flex justify-between items-center"><span className="text-xs">France</span><span className="text-xs">Sénégal</span></div>
                            <div className="flex justify-center"><div className="w-full h-1 bg-brand-400 rounded-full relative"><div className="absolute w-4 h-4 rounded-full bg-white right-0 -top-1.5"/></div></div>
                            <div className="w-3/4 h-4 bg-brand-400 rounded" />
                         </div>
                         <div className="bg-white rounded-xl p-4 border border-gray-100">
                           <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-rose-100" />
                             <div><div className="w-24 h-3 bg-gray-800 rounded mb-1"/><div className="w-16 h-2 bg-brand-500 rounded"/></div>
                           </div>
                         </div>
                       </>
                     )}
                     {feature.imageMockup === "track" && (
                       <>
                         <div className="h-12 flex space-x-2">
                           <div className="flex-1 bg-white rounded-lg border border-gray-100 flex items-center justify-center text-xs font-medium">Mes Réservations</div>
                           <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center text-xs font-medium text-gray-400">Clients</div>
                         </div>
                         <div className="h-32 bg-white rounded-xl border border-gray-100 p-4 flex gap-4">
                            <div className="w-16 h-16 bg-brand-50 rounded-lg" />
                            <div className="flex-1 space-y-2">
                               <div className="w-24 h-3 bg-gray-800 rounded"/>
                               <div className="w-16 h-2 bg-gray-400 rounded"/>
                               <div className="w-full h-12 bg-gray-100 rounded mt-2"/>
                            </div>
                         </div>
                         <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-2"><div className="w-6 h-4 bg-green-500 rounded-sm"/><div className="w-6 h-4 bg-blue-500 rounded-sm"/></div>
                            <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center"><div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45" /></div>
                         </div>
                       </>
                     )}
                   </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
