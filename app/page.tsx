import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Reviews } from "@/components/sections/Reviews";
import { Situations } from "@/components/sections/Situations";
import { AppDownload } from "@/components/sections/AppDownload";
import { FAQ } from "@/components/sections/FAQ";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://gprelay.com/#organization",
      name: "GP Relay",
      url: "https://gprelay.com",
      logo: "https://gprelay.com/GP RELAY.png",
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@gprelay.com",
        contactType: "customer service",
        availableLanguage: "French",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://gprelay.com/#website",
      url: "https://gprelay.com",
      name: "GP Relay",
      publisher: { "@id": "https://gprelay.com/#organization" },
      inLanguage: "fr-FR",
    },
    {
      "@type": "MobileApplication",
      name: "GP Relay",
      operatingSystem: "iOS, Android",
      applicationCategory: "TravelApplication",
      description:
        "Envoyez vos colis et bagages entre Paris et l'Afrique de l'Ouest grâce à des voyageurs (GP). Rapide, fiable et abordable.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        description: "Téléchargement gratuit",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white selection:bg-brand-100 selection:text-brand-900">
        <Navbar />
        <div className="flex-1 w-full">
          <Hero />
          <HowItWorks />
          <Reviews />
          <Features />
          <Situations />
          <FAQ />
          <AppDownload />
        </div>
        <Footer />
      </main>
    </>
  );
}
