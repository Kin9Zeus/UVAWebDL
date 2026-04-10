import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import LayoutContent from "@/components/layout-content";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";
import ConsentBanner from "@/components/analytics/ConsentBanner";
import FacebookPixel from "@/components/analytics/FacebookPixel";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://uvarq.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "UVA — Unidad Vectorial de Arquitectura",
    template: "%s | UVA Arquitectura",
  },
  description:
    "Plataforma profesional de arquitectura, diseño y educación en Colombia. Cursos, diplomados, proyectos de alto nivel y servicios de arquitectura residencial, comercial y urbana.",
  keywords: [
    "arquitectura Colombia",
    "cursos de arquitectura online",
    "diseño arquitectónico",
    "UVA arquitectura",
    "diplomado arquitectura",
    "diseño interior Colombia",
    "urbanismo",
    "Revit arquitectura",
    "render arquitectónico",
    "gerencia de proyectos arquitectura",
    "servicios de arquitectura",
    "asesoría arquitectura",
    "Sebastián Arias Duque",
    "cursos Revit",
    "D5 Render curso",
  ],
  authors: [{ name: "UVA — Unidad Vectorial de Arquitectura", url: BASE_URL }],
  creator: "UVA Arquitectura",
  publisher: "UVA — Unidad Vectorial de Arquitectura",
  openGraph: {
    title: "UVA — Unidad Vectorial de Arquitectura",
    description:
      "Plataforma profesional de arquitectura, diseño y educación en Colombia. Cursos, diplomados, proyectos y servicios de arquitectura.",
    url: BASE_URL,
    siteName: "UVA Arquitectura",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/logo-uva.png",
        width: 512,
        height: 512,
        alt: "UVA — Unidad Vectorial de Arquitectura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UVA — Unidad Vectorial de Arquitectura",
    description:
      "Cursos, diplomados, proyectos y servicios de arquitectura en Colombia.",
    images: ["/logo-uva.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "b-ejr30Exji8zbiMCcCeVOwn5Hez-oH6HMg5nsCAqo8",
  },
  category: "education",
};

import ChatWidget from "@/components/chat-widget";
import JsonLd from "@/components/json-ld";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <GoogleTagManager gtmId={GTM_ID} />
        <GoogleAnalytics gaId={GA_ID} />
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
        <ConsentBanner />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "UVA — Unidad Vectorial de Arquitectura",
            alternateName: "UVA Arquitectura",
            url: BASE_URL,
            logo: `${BASE_URL}/logo-uva.png`,
            description:
              "Plataforma profesional de arquitectura, diseño y educación en Colombia. +13 años de experiencia, +10,000 estudiantes formados.",
            foundingDate: "2012",
            founder: {
              "@type": "Person",
              name: "Sebastián Arias Duque",
            },
            areaServed: {
              "@type": "Country",
              name: "Colombia",
            },
            sameAs: [
              "https://www.instagram.com/uvarquitectura/",
              "https://www.youtube.com/@uvarquitectura",
              "https://www.tiktok.com/@uvarquitectura",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              url: "https://wa.link/4pjm79",
              availableLanguage: "Spanish",
            },
          }}
        />
        <LayoutContent>
          {children}
        </LayoutContent>
        <Suspense fallback={null}>
          <ChatWidget />
        </Suspense>
      </body>
    </html>
  );
}
