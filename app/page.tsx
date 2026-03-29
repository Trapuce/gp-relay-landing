import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Reviews } from "@/components/sections/Reviews";
import { Situations } from "@/components/sections/Situations";
import { AppDownload } from "@/components/sections/AppDownload";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
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
  );
}
