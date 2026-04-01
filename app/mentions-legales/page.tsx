import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales — GP Relay",
  description:
    "Mentions légales de la plateforme GPRelay — éditeur, hébergement, propriété intellectuelle.",
};

export default function MentionsLegales() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="border-l-4 border-brand-500 pl-6 mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Mentions Légales — GPRelay
          </h1>
          <p className="text-sm text-brand-600 font-medium">
            En vigueur à compter du 1er avril 2026
          </p>
        </div>

        <section className="space-y-10 text-gray-700 text-sm leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              1 — Éditeur de la Plateforme
            </h2>
            <p className="mb-3">
              La plateforme GPRelay (application mobile et site web accessible à l&apos;adresse https://gprelay.com) est éditée par :
            </p>
            <div className="p-4 bg-brand-50 border border-brand-100 rounded-lg space-y-1">
              <p><strong>Daouda Traoré</strong></p>
              <p>Auto-entrepreneur</p>
              <p>Numéro SIRET : [À compléter]</p>
              <p>Adresse : Rennes, France</p>
              <p>Email : <a href="mailto:contact@gprelay.com" className="text-brand-600 hover:underline font-medium">contact@gprelay.com</a></p>
              <p>Site web : https://gprelay.com</p>
            </div>
            <p className="mt-3">
              L&apos;Éditeur n&apos;est pas assujetti à la TVA en tant qu&apos;auto-entrepreneur en franchise de base (article 293 B du CGI), sauf dépassement des seuils légaux.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              2 — Directeur de la publication
            </h2>
            <div className="p-4 bg-brand-50 border border-brand-100 rounded-lg space-y-1">
              <p><strong>Daouda Traoré</strong></p>
              <p>Email : <a href="mailto:contact@gprelay.com" className="text-brand-600 hover:underline font-medium">contact@gprelay.com</a></p>
            </div>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              3 — Hébergement
            </h2>
            <p className="mb-3">La Plateforme GPRelay est hébergée et distribuée par :</p>
            <div className="space-y-3">
              <div className="p-4 bg-brand-50 border border-brand-100 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">Backend &amp; Infrastructure</p>
                <p><strong>DigitalOcean, LLC</strong></p>
                <p>101 Avenue of the Americas, 10th Floor</p>
                <p>New York, NY 10013 — États-Unis</p>
                <p>Site web : www.digitalocean.com</p>
              </div>
              <div className="p-4 bg-brand-50 border border-brand-100 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">Application mobile iOS</p>
                <p><strong>Apple Inc.</strong> — Apple App Store</p>
                <p>One Apple Park Way, Cupertino, CA 95014 — États-Unis</p>
                <p>Site web : www.apple.com</p>
              </div>
              <div className="p-4 bg-brand-50 border border-brand-100 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">Application mobile Android</p>
                <p><strong>Google LLC</strong> — Google Play Store</p>
                <p>1600 Amphitheatre Parkway, Mountain View, CA 94043 — États-Unis</p>
                <p>Site web : play.google.com</p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              4 — Propriété intellectuelle
            </h2>
            <p className="mb-3">
              L&apos;ensemble des contenus présents sur la Plateforme GPRelay — notamment la marque GPRelay, le logo, la charte graphique, le code source, les textes, les illustrations et les bases de données — est la propriété exclusive de Daouda Traoré et est protégé par les dispositions du Code de la Propriété Intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments de la Plateforme, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation préalable et écrite de l&apos;Éditeur.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              5 — Données personnelles
            </h2>
            <p>
              Le traitement des données personnelles des utilisateurs est décrit dans la{" "}
              <a href="/politique-de-confidentialite" className="text-brand-600 hover:underline font-medium">
                Politique de Confidentialité
              </a>{" "}
              disponible sur la Plateforme. Conformément à la loi Informatique et Libertés et au RGPD, vous pouvez exercer vos droits en contactant :{" "}
              <a href="mailto:contact@gprelay.com" className="text-brand-600 hover:underline font-medium">
                contact@gprelay.com
              </a>
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              6 — Cookies
            </h2>
            <p>
              L&apos;application mobile GPRelay n&apos;utilise pas de cookies au sens strict. Des mécanismes de stockage local sont utilisés pour maintenir la session de l&apos;utilisateur. Pour plus d&apos;informations, consultez notre{" "}
              <a href="/politique-de-confidentialite" className="text-brand-600 hover:underline font-medium">
                Politique de Confidentialité
              </a>.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              7 — Limitation de responsabilité
            </h2>
            <p className="mb-3">
              L&apos;Éditeur s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur la Plateforme. Toutefois, il ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition.
            </p>
            <p>
              L&apos;Éditeur décline toute responsabilité pour les dommages directs ou indirects résultant de l&apos;accès à la Plateforme ou de l&apos;utilisation des informations qui y figurent, ainsi que pour toute interruption ou indisponibilité de la Plateforme.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              8 — Droit applicable
            </h2>
            <p>
              Les présentes Mentions Légales sont régies par le droit français. En cas de litige, les tribunaux français sont seuls compétents.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              9 — Contact
            </h2>
            <p className="mb-3">Pour toute question ou signalement concernant la Plateforme :</p>
            <div className="p-4 bg-brand-50 border border-brand-100 rounded-lg">
              <p className="font-semibold text-gray-900">Daouda Traoré — GPRelay</p>
              <p>Email : <a href="mailto:contact@gprelay.com" className="text-brand-600 hover:underline font-medium">contact@gprelay.com</a></p>
            </div>
          </div>

          <p className="text-xs text-gray-400 border-t border-brand-100 pt-6">
            Dernière mise à jour : 1er avril 2026
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
