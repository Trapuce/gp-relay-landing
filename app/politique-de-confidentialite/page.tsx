import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Découvrez comment GP Relay collecte, utilise et protège vos données personnelles conformément au RGPD.",
  robots: { index: false, follow: false },
};

export default function PolitiqueDeConfidentialite() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="border-l-4 border-brand-500 pl-6 mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Politique de Confidentialité — GPRelay
          </h1>
          <p className="text-sm text-brand-600 font-medium">
            Version 1.0 — En vigueur à compter du 1er avril 2026
          </p>
        </div>

        <section className="space-y-10 text-gray-700 text-sm leading-relaxed">
          {/* Article 1 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              Article 1 — Identité du responsable de traitement
            </h2>
            <p className="mb-3">
              Le responsable du traitement des données personnelles collectées via la Plateforme GPRelay est :
            </p>
            <div className="p-4 bg-brand-50 border border-brand-100 rounded-lg space-y-1">
              <p><strong>Daouda Traoré</strong></p>
              <p>Auto-entrepreneur — Exploitant de la plateforme GPRelay</p>
              <p>Adresse : Rennes, France</p>
              <p>Email : <a href="mailto:contact@gprelay.com" className="text-brand-600 hover:underline font-medium">contact@gprelay.com</a></p>
              <p>Site web : https://gprelay.com</p>
            </div>
          </div>

          {/* Article 2 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              Article 2 — Principes fondamentaux
            </h2>
            <p className="mb-3">
              L&apos;Éditeur s&apos;engage à traiter vos données personnelles dans le respect du Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et de la loi Informatique et Libertés (loi n°78-17 du 6 janvier 1978 modifiée).
            </p>
            <ul className="space-y-2">
              {[
                ["Licéité", "tout traitement repose sur une base légale valable"],
                ["Minimisation", "seules les données strictement nécessaires sont collectées"],
                ["Exactitude", "vous pouvez corriger vos données à tout moment"],
                ["Limitation de la conservation", "vos données ne sont pas conservées au-delà du nécessaire"],
                ["Sécurité", "des mesures techniques et organisationnelles appropriées protègent vos données"],
                ["Transparence", "nous vous informons clairement de l'usage de vos données"],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3 items-start">
                  <span className="mt-1 w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                  <span><strong className="text-gray-900">{title}</strong> : {desc}.</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article 3 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-4">
              Article 3 — Données collectées et finalités
            </h2>
            <div className="space-y-8">

              <Subsection title="3.1 Création et gestion de compte">
                <Table rows={[
                  ["Prénom, nom", "Identification de l'utilisateur", "Exécution du contrat"],
                  ["Adresse email", "Authentification, communication, vérification", "Exécution du contrat"],
                  ["Numéro de téléphone", "Contact, sécurité", "Exécution du contrat"],
                  ["Mot de passe (chiffré)", "Authentification sécurisée", "Exécution du contrat"],
                  ["Pays de résidence", "Paramétrage du service", "Exécution du contrat"],
                  ["Photo de profil", "Identification visuelle sur la Plateforme", "Consentement"],
                  ["Biographie", "Présentation du profil GP", "Consentement"],
                ]} />
              </Subsection>

              <Subsection title="3.2 Vérification d'email">
                <p>Un code à 6 chiffres est généré et envoyé à l&apos;adresse email fournie lors de l&apos;inscription. Ce code est stocké temporairement le temps de sa validation, puis supprimé.</p>
              </Subsection>

              <Subsection title="3.3 Connexion Google (OAuth)">
                <p>Si vous choisissez de vous connecter via Google, nous recevons : prénom, nom, adresse email et photo de profil. Aucun mot de passe n&apos;est transmis à GPRelay. Ce traitement repose sur votre consentement lors de l&apos;autorisation OAuth.</p>
              </Subsection>

              <Subsection title="3.4 Publication de trajets (GPs)">
                <Table rows={[
                  ["Villes et pays de départ/arrivée", "Affichage du trajet", "Exécution du contrat"],
                  ["Date et heure du trajet", "Organisation de la mise en relation", "Exécution du contrat"],
                  ["Capacité disponible, tarif", "Fonctionnement du service", "Exécution du contrat"],
                  ["Coordonnées GPS de départ/arrivée", "Géolocalisation du trajet", "Exécution du contrat"],
                ]} />
              </Subsection>

              <Subsection title="3.5 Réservation et livraison (Clients)">
                <Table rows={[
                  ["Description, poids, type du colis", "Mise en relation avec le GP", "Exécution du contrat"],
                  ["Photos du colis", "Preuve de l'état du colis", "Exécution du contrat"],
                  ["Adresse de collecte et de livraison", "Organisation de la livraison", "Exécution du contrat"],
                  ["Nom, téléphone de l'expéditeur", "Contact pour la collecte", "Exécution du contrat"],
                  ["Nom, téléphone du destinataire", "Contact pour la livraison", "Exécution du contrat"],
                  ["Code OTP de livraison", "Confirmation sécurisée de la livraison", "Exécution du contrat"],
                ]} />
              </Subsection>

              <Subsection title="3.6 Paiements (via Stripe)">
                <Table rows={[
                  ["Montant des transactions", "Facturation, comptabilité", "Exécution du contrat / Obligation légale"],
                  ["Identifiant Stripe Connect (GPs)", "Versement des paiements", "Exécution du contrat"],
                  ["Statut du paiement", "Suivi des transactions", "Exécution du contrat"],
                ]} />
                <InfoBox>GPRelay ne stocke jamais vos données bancaires (numéro de carte, IBAN, etc.). Ces données sont traitées exclusivement par Stripe, certifié PCI-DSS niveau 1.</InfoBox>
              </Subsection>

              <Subsection title="3.7 Vérification d'identité (via Stripe Identity)">
                <Table rows={[
                  ["Type de document d'identité", "Vérification d'identité", "Consentement / Intérêt légitime"],
                  ["Nom, prénom, date de naissance, numéro, pays", "Authentification renforcée", "Consentement"],
                  ["Identifiant de session Stripe Identity", "Suivi du statut de vérification", "Exécution du contrat"],
                ]} />
                <p className="mt-3">Les images de documents et selfies ne sont pas conservées sur les serveurs de GPRelay — elles sont transmises directement à Stripe Identity.</p>
              </Subsection>

              <Subsection title="3.8 Messagerie instantanée">
                <Table rows={[
                  ["Contenu des messages texte", "Communication entre utilisateurs", "Exécution du contrat"],
                  ["Images envoyées dans le chat", "Communication entre utilisateurs", "Consentement"],
                  ["Horodatage des messages", "Historique et accusés de lecture", "Exécution du contrat"],
                  ["Statut de lecture", "Confirmation de réception", "Exécution du contrat"],
                ]} />
                <p className="mt-3">Les messages ne sont pas lus par l&apos;Éditeur sauf en cas de signalement ou de procédure judiciaire.</p>
              </Subsection>

              <Subsection title="3.9 Suivi GPS et tracking de livraison">
                <Table rows={[
                  ["Coordonnées GPS du GP (trajet actif)", "Suivi en temps réel de la livraison", "Exécution du contrat"],
                  ["Historique des statuts de livraison", "Traçabilité, preuve de livraison", "Exécution du contrat"],
                ]} />
                <p className="mt-3">La collecte GPS n&apos;a lieu que pendant les trajets actifs et avec votre consentement explicite.</p>
              </Subsection>

              <Subsection title="3.10 Notifications push">
                <Table rows={[
                  ["Token Expo Push", "Envoi de notifications mobiles", "Consentement"],
                  ["Identifiant de l'appareil", "Gestion multi-appareils", "Consentement"],
                  ["Plateforme (iOS/Android)", "Compatibilité technique", "Intérêt légitime"],
                  ["Journal des notifications envoyées", "Audit, déduplication", "Intérêt légitime"],
                ]} />
              </Subsection>

              <Subsection title="3.11 Photos et fichiers (via Cloudinary)">
                <p>Les photos de profil et de colis sont hébergées sur Cloudinary (CDN tiers). L&apos;URL publique de chaque fichier est stockée dans notre base de données.</p>
              </Subsection>

              <Subsection title="3.12 Données de connexion et logs techniques">
                <Table rows={[
                  ["Adresse IP", "Sécurité, prévention de la fraude", "Intérêt légitime"],
                  ["Horodatage des connexions", "Audit de sécurité", "Intérêt légitime"],
                  ["Type d'appareil, système d'exploitation", "Optimisation technique", "Intérêt légitime"],
                ]} />
              </Subsection>
            </div>
          </div>

          {/* Article 4 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-4">
              Article 4 — Destinataires des données
            </h2>
            <Subsection title="4.1 Au sein de la Plateforme">
              <ul className="space-y-1">
                <li className="flex gap-2"><span className="text-brand-500 mt-1">•</span><span>Profil GP : prénom, photo, biographie, note, badge de vérification — visibles par les Clients.</span></li>
                <li className="flex gap-2"><span className="text-brand-500 mt-1">•</span><span>Informations de contact — partagées avec le GP uniquement lors d&apos;une réservation active.</span></li>
              </ul>
            </Subsection>
            <div className="mt-4">
              <Subsection title="4.2 Sous-traitants techniques">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs rounded-lg overflow-hidden border border-brand-100">
                    <thead>
                      <tr className="bg-brand-500 text-white">
                        <th className="text-left p-3">Sous-traitant</th>
                        <th className="text-left p-3">Rôle</th>
                        <th className="text-left p-3">Localisation</th>
                        <th className="text-left p-3">Garanties</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-100">
                      {[
                        ["Stripe", "Paiements, Stripe Connect, Vérification d'identité", "USA / Europe", "CCT UE — PCI-DSS"],
                        ["Cloudinary", "Hébergement des fichiers et images", "USA", "CCT UE"],
                        ["Expo", "Notifications push mobiles", "USA", "CCT UE"],
                        ["Google", "Authentification OAuth, SMTP", "USA / Europe", "CCT UE"],
                      ].map(([name, role, loc, g]) => (
                        <tr key={name} className="bg-white odd:bg-brand-50">
                          <td className="p-3 font-semibold text-brand-700">{name}</td>
                          <td className="p-3">{role}</td>
                          <td className="p-3">{loc}</td>
                          <td className="p-3">{g}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Subsection>
            </div>
            <div className="mt-4">
              <Subsection title="4.3 Autorités légales">
                <p>L&apos;Éditeur peut communiquer vos données aux autorités judiciaires françaises et européennes sur réquisition ou décision de justice.</p>
              </Subsection>
            </div>
          </div>

          {/* Article 5 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              Article 5 — Transferts hors Union Européenne
            </h2>
            <p>Certains de nos sous-traitants (Stripe, Cloudinary, Expo, Google) sont établis aux États-Unis. Ces transferts sont encadrés par des Clauses Contractuelles Types (CCT) approuvées par la Commission Européenne, conformément à l&apos;article 46 du RGPD.</p>
          </div>

          {/* Article 6 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              Article 6 — Durées de conservation
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs rounded-lg overflow-hidden border border-brand-100">
                <thead>
                  <tr className="bg-brand-500 text-white">
                    <th className="text-left p-3">Catégorie de données</th>
                    <th className="text-left p-3">Durée de conservation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-100">
                  {[
                    ["Données de compte (profil, email, téléphone)", "Durée de vie du compte + 3 ans après suppression"],
                    ["Données de transactions et paiements", "10 ans (obligation comptable et fiscale)"],
                    ["Messages de la messagerie", "3 ans à compter de la clôture de la conversation"],
                    ["Données de vérification d'identité", "5 ans à compter de la vérification"],
                    ["Historique de suivi de livraison", "3 ans à compter de la livraison"],
                    ["Données GPS (positions)", "30 jours après la fin du trajet"],
                    ["Tokens push (inactifs)", "90 jours après désactivation"],
                    ["Logs techniques", "12 mois"],
                    ["Codes OTP email", "Supprimés immédiatement après validation ou expiration"],
                    ["Données de compte après suppression", "30 jours, puis anonymisation"],
                  ].map(([cat, dur]) => (
                    <tr key={cat} className="bg-white odd:bg-brand-50">
                      <td className="p-3">{cat}</td>
                      <td className="p-3 font-medium text-brand-700">{dur}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Article 7 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-4">
              Article 7 — Vos droits
            </h2>
            <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ["Droit d'accès (art. 15)", "Obtenir une copie de vos données personnelles que nous détenons."],
                ["Droit de rectification (art. 16)", "Corriger vos données inexactes ou incomplètes."],
                ["Droit à l'effacement (art. 17)", "Demander la suppression de vos données (sauf obligation légale)."],
                ["Droit à la portabilité (art. 20)", "Recevoir vos données dans un format lisible par machine."],
                ["Droit d'opposition (art. 21)", "Vous opposer au traitement fondé sur l'intérêt légitime."],
                ["Droit à la limitation (art. 18)", "Demander la suspension temporaire du traitement."],
                ["Retrait du consentement", "Retirer votre consentement à tout moment sans effet rétroactif."],
                ["Directives post-mortem", "Définir des directives sur vos données après votre décès."],
              ].map(([title, text]) => (
                <div key={title} className="p-4 bg-brand-50 border border-brand-100 rounded-lg">
                  <p className="font-semibold text-brand-700 mb-1">{title}</p>
                  <p className="text-gray-600 text-xs">{text}</p>
                </div>
              ))}
            </div>
            <InfoBox className="mt-4">
              <strong>Comment exercer vos droits ?</strong><br />
              Par email à <a href="mailto:contact@gprelay.com" className="text-brand-700 underline">contact@gprelay.com</a>, en précisant votre nom et prénom. Réponse sous 1 mois.
            </InfoBox>
          </div>

          {/* Article 8 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              Article 8 — Réclamation auprès de la CNIL
            </h2>
            <div className="p-4 bg-brand-50 border border-brand-100 rounded-lg">
              <p className="font-semibold text-gray-900 mb-1">Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</p>
              <p>3 Place de Fontenoy — TSA 80715, 75334 Paris Cedex 07</p>
              <p>www.cnil.fr</p>
            </div>
          </div>

          {/* Article 9 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              Article 9 — Sécurité des données
            </h2>
            <ul className="space-y-2">
              {[
                "Chiffrement des mots de passe (BCrypt)",
                "HTTPS obligatoire sur l'ensemble des échanges",
                "JWT à durée limitée (24 heures) pour les sessions",
                "Accès restreint aux données (principe du moindre privilège)",
                "Hébergement sécurisé chez un prestataire certifié",
                "Aucune donnée bancaire stockée sur nos serveurs",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start list-none">
                  <span className="mt-1 w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Article 10 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              Article 10 — Cookies et technologies similaires
            </h2>
            <p>L&apos;application mobile GPRelay n&apos;utilise pas de cookies au sens strict. Des tokens JWT sont stockés localement sur votre appareil pour maintenir votre session. Ces données ne sont pas partagées avec des tiers à des fins publicitaires.</p>
          </div>

          {/* Article 11 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              Article 11 — Données des mineurs
            </h2>
            <p>La Plateforme est strictement réservée aux personnes âgées de <strong>18 ans et plus</strong>. Si vous pensez qu&apos;un mineur nous a fourni des données, contactez-nous immédiatement à <a href="mailto:contact@gprelay.com" className="text-brand-600 hover:underline">contact@gprelay.com</a>.</p>
          </div>

          {/* Article 12 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              Article 12 — Modifications
            </h2>
            <p>L&apos;Éditeur se réserve le droit de modifier cette politique à tout moment. Toute modification substantielle fera l&apos;objet d&apos;une notification dans l&apos;application et/ou par email avec un préavis raisonnable.</p>
          </div>

          {/* Article 13 */}
          <div>
            <h2 className="text-lg font-bold text-brand-600 uppercase tracking-wide mb-3">
              Article 13 — Contact
            </h2>
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

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      {children}
    </div>
  );
}

function Table({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs rounded-lg overflow-hidden border border-brand-100">
        <thead>
          <tr className="bg-brand-500 text-white">
            <th className="text-left p-3">Données collectées</th>
            <th className="text-left p-3">Finalité</th>
            <th className="text-left p-3">Base légale</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-100">
          {rows.map(([data, purpose, legal]) => (
            <tr key={data} className="bg-white odd:bg-brand-50">
              <td className="p-3 font-medium">{data}</td>
              <td className="p-3 text-gray-600">{purpose}</td>
              <td className="p-3 text-brand-700">{legal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InfoBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-4 bg-brand-50 border border-brand-200 rounded-lg text-sm ${className}`}>
      {children}
    </div>
  );
}
