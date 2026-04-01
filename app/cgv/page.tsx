import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — GP Relay",
  description:
    "Conditions Générales de Vente de la plateforme GPRelay — tarifs, paiements, annulations, remboursements.",
};

export default function CGV() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="border-l-4 border-brand-500 pl-6 mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Conditions Générales de Vente — GPRelay
          </h1>
          <p className="text-sm text-brand-600 font-medium">
            Version 1.0 — En vigueur à compter du 1er avril 2026
          </p>
        </div>

        <section className="space-y-10 text-gray-700 text-sm leading-relaxed">
          {/* Préambule */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              Préambule
            </h2>
            <p className="mb-3">
              Les présentes Conditions Générales de Vente (ci-après « CGV ») s&apos;appliquent à toutes les transactions réalisées via la plateforme GPRelay entre :
            </p>
            <ul className="space-y-2 mb-3">
              <li className="flex gap-2"><span className="text-brand-500 mt-1 shrink-0">•</span><span><strong>L&apos;Éditeur</strong> : Daouda Traoré, auto-entrepreneur, exploitant la plateforme GPRelay (contact@gprelay.com) ;</span></li>
              <li className="flex gap-2"><span className="text-brand-500 mt-1 shrink-0">•</span><span><strong>Les utilisateurs</strong> : toute personne physique utilisant la Plateforme pour envoyer ou transporter des colis.</span></li>
            </ul>
            <p>Les CGV complètent les Conditions Générales d&apos;Utilisation (CGU) et la Politique de Confidentialité. En cas de contradiction, les CGV prévalent sur les CGU pour les aspects commerciaux et financiers.</p>
          </div>

          {/* Article 1 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">Article 1 — Objet</h2>
            <p>Les présentes CGV définissent les droits et obligations de l&apos;Éditeur et des utilisateurs dans le cadre de la mise à disposition du service payant de mise en relation via GPRelay, et notamment les conditions de facturation, de paiement et de remboursement.</p>
          </div>

          {/* Article 2 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-4">Article 2 — Description des services</h2>
            <div className="space-y-4">
              <div className="p-4 bg-brand-50 border border-brand-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">2.1 Service de mise en relation — Gratuit</h3>
                <p>L&apos;accès à la Plateforme, la création d&apos;un compte, la publication de trajets et la consultation des annonces sont entièrement gratuits.</p>
              </div>
              <div className="p-4 bg-brand-50 border border-brand-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">2.2 Service de transaction — Payant</h3>
                <p className="mb-2">La Plateforme facture une commission de <strong className="text-brand-600">10% TTC</strong> sur chaque livraison confirmée par code OTP. Cette commission couvre :</p>
                <ul className="space-y-1">
                  {["La mise en relation entre Client et GP", "La sécurisation et le traitement du paiement via Stripe", "Le système d'escrow (paiement bloqué jusqu'à livraison)", "L'assistance en cas de litige", "La maintenance et le fonctionnement de la Plateforme"].map(i => (
                    <li key={i} className="flex gap-2"><span className="text-brand-500 mt-1 shrink-0">•</span>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-brand-50 border border-brand-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">2.3 Services Stripe Connect (GPs)</h3>
                <p>Pour recevoir des paiements, les GPs doivent créer un compte Stripe Connect Express. L&apos;utilisation de Stripe peut engendrer des frais spécifiques décrits dans les conditions tarifaires de Stripe.</p>
              </div>
            </div>
          </div>

          {/* Article 3 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-4">Article 3 — Tarifs et commission</h2>
            <div className="space-y-4">
              <p><strong>3.1 Prix des prestations :</strong> Librement fixé entre le Client et le GP (prix au kg), négociable via la messagerie avant acceptation.</p>
              <div>
                <p className="font-semibold text-gray-800 mb-2">3.2 Commission de la Plateforme</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm rounded-lg overflow-hidden border border-brand-100">
                    <thead>
                      <tr className="bg-brand-500 text-white">
                        <th className="text-left p-3">Montant de la transaction</th>
                        <th className="text-left p-3">Commission GPRelay</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-brand-50">
                        <td className="p-3">Tout montant</td>
                        <td className="p-3 font-bold text-brand-700">10% TTC du montant final</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2">La commission est automatiquement déduite du versement au GP. Elle n&apos;est pas remboursée après livraison confirmée.</p>
              </div>
              <p><strong>3.3 Affichage des prix :</strong> Tous les prix sont en euros (€). L&apos;Éditeur est en franchise de base de TVA (article 293 B du CGI).</p>
              <p><strong>3.4 Modification des tarifs :</strong> Toute modification du taux de commission est communiquée avec un préavis de 30 jours minimum.</p>
            </div>
          </div>

          {/* Article 4 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-4">Article 4 — Processus de commande</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">4.1 Étapes de la transaction</h3>
                <ol className="space-y-2">
                  {[
                    "Le Client consulte les trajets disponibles et sélectionne celui qui correspond à ses besoins.",
                    "Le Client soumet une demande de réservation en renseignant les caractéristiques du colis et les informations de contact.",
                    "Le GP reçoit la demande et dispose d'un délai raisonnable pour l'accepter ou la refuser.",
                    "En cas d'acceptation, un paiement est pré-autorisé (bloqué mais non débité) sur le moyen de paiement du Client.",
                    "Le GP effectue la livraison et saisit le code OTP fourni par le Client pour confirmer la remise.",
                    "Le paiement est capturé et versé au GP, déduction faite de la commission GPRelay.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <p><strong>4.2 Formation du contrat :</strong> Le contrat de transport est formé dès l&apos;acceptation de la réservation par le GP. Le contrat avec l&apos;Éditeur (pour la commission) est formé à la confirmation de la livraison via le code OTP.</p>
              <p><strong>4.3 Confirmation :</strong> L&apos;utilisateur reçoit une notification à chaque étape clé (réservation soumise, acceptée, livrée, paiement capturé).</p>
            </div>
          </div>

          {/* Article 5 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-4">Article 5 — Paiement</h2>
            <div className="space-y-3">
              <div className="p-4 bg-brand-50 border border-brand-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">5.1 Moyens de paiement acceptés</h3>
                <ul className="space-y-1">
                  {["Carte bancaire (Visa, Mastercard, American Express)", "Apple Pay / Google Pay (selon disponibilité)", "Tout autre moyen de paiement proposé par Stripe"].map(m => (
                    <li key={m} className="flex gap-2"><span className="text-brand-500 shrink-0">•</span>{m}</li>
                  ))}
                </ul>
              </div>
              <p><strong>5.2 Sécurité :</strong> Toutes les transactions sont sécurisées par TLS/HTTPS et traitées dans le respect des normes PCI-DSS. GPRelay ne stocke aucune donnée bancaire.</p>
              <p><strong>5.3 Pré-autorisation :</strong> Le montant est bloqué sur la carte du Client à l&apos;acceptation de la réservation par le GP.</p>
              <p><strong>5.4 Capture du paiement :</strong> Le débit effectif intervient uniquement à la confirmation de livraison par code OTP. En cas d&apos;expiration du code OTP (72h), la Plateforme peut procéder à la capture automatique.</p>
              <p><strong>5.5 Versement aux GPs :</strong> Les fonds sont versés sur le compte Stripe Connect Express du GP sous 2 à 7 jours ouvrés, déduction faite de la commission et des frais Stripe.</p>
            </div>
          </div>

          {/* Article 6 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-4">Article 6 — Droit de rétractation</h2>
            <p className="mb-3"><strong>6.1 Exclusions légales :</strong> Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation de 14 jours ne s&apos;applique pas aux prestations pleinement exécutées avec accord préalable de l&apos;utilisateur.</p>
            <p><strong>6.2 Cas particuliers :</strong> Le droit de rétractation peut s&apos;appliquer à l&apos;inscription (service non encore exécuté) dans les 14 jours suivant la création du compte, en contactant <a href="mailto:contact@gprelay.com" className="text-brand-600 hover:underline">contact@gprelay.com</a>.</p>
          </div>

          {/* Article 7 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-4">Article 7 — Annulations et remboursements</h2>
            <div className="space-y-3">
              <p><strong>7.1 Avant acceptation du GP :</strong> Annulation gratuite, aucun débit, pré-autorisation annulée.</p>
              <div>
                <p className="font-semibold text-gray-800 mb-2">7.2 Après acceptation — avant prise en charge</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs rounded-lg overflow-hidden border border-brand-100">
                    <thead>
                      <tr className="bg-brand-500 text-white">
                        <th className="text-left p-3">Partie qui annule</th>
                        <th className="text-left p-3">Conséquences</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-100">
                      <tr className="bg-white">
                        <td className="p-3 font-semibold">Client</td>
                        <td className="p-3">Remboursement partiel possible selon préjudice subi par le GP. L&apos;Éditeur statue en cas de litige.</td>
                      </tr>
                      <tr className="bg-brand-50">
                        <td className="p-3 font-semibold">GP</td>
                        <td className="p-3">Remboursement intégral au Client. Sanction possible en cas d&apos;annulations répétées.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p><strong>7.3 Après prise en charge du colis :</strong> Traité au cas par cas, avec l&apos;Éditeur comme médiateur.</p>
              <p><strong>7.4 Non-livraison par le GP :</strong> Remboursement intégral du Client.</p>
              <p><strong>7.5 Commission :</strong> Non remboursée après confirmation de livraison par OTP. Non prélevée dans les autres cas d&apos;annulation.</p>
              <p><strong>7.6 Délais de remboursement :</strong> 5 à 10 jours ouvrés via Stripe sur le moyen de paiement initial.</p>
            </div>
          </div>

          {/* Article 8 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-4">Article 8 — Obligations des parties</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  title: "L'Éditeur", color: "bg-brand-500", items: [
                    "Service de mise en relation fonctionnel et sécurisé",
                    "Paiements transparents et sécurisés",
                    "Préavis suffisant pour tout changement tarifaire",
                    "Assistance dans un délai raisonnable",
                    "Sécurité des données (RGPD)",
                  ]
                },
                {
                  title: "Le Client", color: "bg-brand-400", items: [
                    "Informations exactes sur le colis (nature, poids, valeur)",
                    "Emballage convenable du colis",
                    "Disponibilité aux heures et lieux convenus",
                    "Paiement du prix convenu dès l'acceptation",
                    "Communication du code OTP uniquement après vérification du colis",
                  ]
                },
                {
                  title: "Le GP", color: "bg-brand-300", items: [
                    "Réalisation du trajet annoncé",
                    "Soin du colis pendant tout le transport",
                    "Remise du colis en bon état au destinataire",
                    "Compte Stripe Connect valide et en règle",
                    "Signalement immédiat de tout incident",
                  ]
                },
              ].map(({ title, color, items }) => (
                <div key={title} className="rounded-lg overflow-hidden border border-brand-100">
                  <div className={`${color} text-white p-3 font-semibold text-sm`}>{title}</div>
                  <ul className="p-3 space-y-2 bg-brand-50">
                    {items.map(item => (
                      <li key={item} className="flex gap-2 text-xs"><span className="text-brand-500 shrink-0">•</span>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Article 9 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-4">Article 9 — Responsabilité et assurances</h2>
            <div className="space-y-3">
              <p><strong>9.1 Responsabilité de l&apos;Éditeur :</strong> GPRelay est une plateforme d&apos;intermédiation, pas un transporteur. Sa responsabilité se limite au bon fonctionnement du service et du système de paiement. L&apos;Éditeur n&apos;est pas responsable des dommages, pertes ou retards affectant les colis.</p>
              <p><strong>9.2 Assurance des GPs :</strong> Les GPs sont seuls responsables des colis transportés. Il leur est fortement recommandé de vérifier que leur assurance personnelle couvre le transport de colis pour le compte de tiers.</p>
              <div className="p-4 bg-brand-50 border border-brand-200 rounded-lg">
                <p><strong className="text-brand-700">9.3 Valeur maximale recommandée :</strong> En l&apos;absence d&apos;assurance transport dédiée, GPRelay recommande de ne pas confier de colis d&apos;une valeur supérieure à <strong>500 €</strong> via la Plateforme.</p>
              </div>
            </div>
          </div>

          {/* Article 10 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-4">Article 10 — Litiges et réclamations</h2>
            <div className="space-y-3">
              <p><strong>10.1 Service client :</strong> Contactez <a href="mailto:contact@gprelay.com" className="text-brand-600 hover:underline">contact@gprelay.com</a>. Accusé de réception sous 48h ouvrées, réponse sous 15 jours ouvrés.</p>
              <p><strong>10.2 Médiation :</strong> En cas de litige non résolu, recours gratuit à un médiateur de la consommation agréé. Coordonnées disponibles sur demande.</p>
              <p><strong>10.3 Règlement en ligne :</strong> Conformément au Règlement (UE) n°524/2013, les utilisateurs UE peuvent utiliser la plateforme de règlement en ligne de la Commission Européenne.</p>
              <p><strong>10.4 Juridiction :</strong> Droit français, tribunaux français compétents.</p>
            </div>
          </div>

          {/* Article 11 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">Article 11 — Force majeure</h2>
            <p>L&apos;Éditeur ne pourra être tenu responsable de l&apos;inexécution de ses obligations en cas de force majeure (art. 1218 du Code civil) : catastrophe naturelle, pandémie, grève, panne générale d&apos;internet, décision gouvernementale, etc.</p>
          </div>

          {/* Article 12 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">Article 12 — Modifications des CGV</h2>
            <p>Toute modification est communiquée avec un préavis de 30 jours minimum. Les CGV applicables sont celles en vigueur à la date de la transaction.</p>
          </div>

          {/* Article 13 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">Article 13 — Droit applicable</h2>
            <p className="mb-2">Les présentes CGV sont soumises au droit français, notamment :</p>
            <ul className="space-y-1">
              {[
                "Le Code de la consommation (articles L111-1 et suivants)",
                "Le Code civil (obligations contractuelles)",
                "La loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN)",
                "Le Règlement Général sur la Protection des Données (RGPD)",
              ].map(item => (
                <li key={item} className="flex gap-2"><span className="text-brand-500 shrink-0">•</span>{item}</li>
              ))}
            </ul>
          </div>

          {/* Article 14 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">Article 14 — Contact</h2>
            <div className="p-4 bg-brand-50 border border-brand-100 rounded-lg space-y-1">
              <p className="font-semibold text-gray-900">Daouda Traoré — GPRelay</p>
              <p>Email : <a href="mailto:contact@gprelay.com" className="text-brand-600 hover:underline font-medium">contact@gprelay.com</a></p>
              <p>Site web : https://gprelay.com</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 border-t border-brand-100 pt-6">
            Dernière mise à jour : 1er avril 2026 — Version 1.0
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
