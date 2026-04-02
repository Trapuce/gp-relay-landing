import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gprelay.com"),
  title: {
    default: "GP Relay — Expédition rapide de colis et bagages Paris ↔ Afrique de l'Ouest",
    template: "%s — GP Relay",
  },
  description:
    "Envoyez vos colis et bagages entre Paris et l'Afrique de l'Ouest — Bamako, Abidjan, Dakar, Conakry. Mise en relation gratuite avec des voyageurs (GP). Rapide, fiable et abordable.",
  keywords: [
    "envoi colis Paris Bamako",
    "envoi colis Paris Abidjan",
    "envoi colis Paris Dakar",
    "envoi colis Paris Conakry",
    "GP voyageur colis",
    "expédition bagages Afrique de l'Ouest",
    "transport colis pas cher",
    "GPRelay",
    "GP Relay",
  ],
  authors: [{ name: "GP Relay", url: "https://gprelay.com" }],
  creator: "GP Relay",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://gprelay.com",
    siteName: "GP Relay",
    title: "GP Relay — Expédition rapide de colis et bagages Paris ↔ Afrique de l'Ouest",
    description:
      "Envoyez vos colis et bagages entre Paris et l'Afrique de l'Ouest — Bamako, Abidjan, Dakar, Conakry. Mise en relation gratuite avec des voyageurs (GP).",
    images: [
      {
        url: "/GP RELAY.png",
        width: 1200,
        height: 630,
        alt: "GP Relay — Expédition de colis Paris Afrique de l'Ouest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GP Relay — Expédition rapide de colis et bagages",
    description:
      "Envoyez vos colis entre Paris et l'Afrique de l'Ouest. Rapide, fiable et abordable.",
    images: ["/GP RELAY.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
