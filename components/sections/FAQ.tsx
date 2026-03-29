"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Comment fonctionne GPRelay ?",
    answer: "GPRelay connecte des expéditeurs avec des voyageurs ayant de l'espace disponible dans leurs bagages. Il suffit de publier une annonce ou de rechercher un trajet correspondant à vos besoins."
  },
  {
    question: "Est-ce que c'est sécurisé et fiable ?",
    answer: "Oui, la sécurité est notre priorité. Tous les profils sont vérifiés et nous offrons un système d'évaluation ainsi qu'un paiement sécurisé pour garantir la fiabilité de chaque transaction."
  },
  {
    question: "Quels types de colis puis-je envoyer ?",
    answer: "Vous pouvez envoyer des vêtements, des documents, de l'électronique (selon les règles de sécurité aérienne), ou d'autres biens non prohibés par les compagnies aériennes."
  },
  {
    question: "Combien coûte l'envoi d'un colis avec GPRelay ?",
    answer: "Le coût dépend du poids de votre colis et du prix fixé par le transporteur (GP). Le tarif moyen est généralement calculé au kilo (par ex: 10€/Kg)."
  },
  {
    question: "Que faire si mon colis est perdu ou endommagé ?",
    answer: "Notre support client est là pour vous assister. Nous recommandons de bien emballer vos colis et nous proposons également une assurance pour couvrir vos biens en cas de problème."
  },
  {
    question: "Comment puis-je devenir transporteur (GP) sur GPRelay ?",
    answer: "Inscrivez-vous sur l'application, complétez votre profil, et publiez votre annonce de voyage avec les détails de votre vol et l'espace disponible (en kilos)."
  },
  {
    question: "Comment le paiement est-il géré entre expéditeur et transporteur (GP) ?",
    answer: "Les paiements sont gérés de manière sécurisée directement via l'application. Le montant est bloqué au moment de la réservation et transféré au transporteur une fois le colis livré."
  },
  {
    question: "Comment contacter le support client en cas de problème ?",
    answer: "Vous pouvez nous contacter directement depuis l'application via la rubrique d'aide, ou en nous envoyant un email à support@gpma.app."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            FAQ
          </motion.h2>
        </div>

        <div className="flex flex-col rounded-xl overflow-hidden border border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={cn(
                  "border-b border-gray-200 bg-white",
                  index === faqs.length - 1 && "border-b-0"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0",
                      isOpen && "transform rotate-180"
                    )} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-gray-50/50"
                    >
                      <div className="px-6 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
