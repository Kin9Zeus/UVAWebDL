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

export const metadata: Metadata = {
  title: "UVA — Unidad Vectorial de Arquitectura",
  description:
    "Plataforma profesional de arquitectura, diseño y educación en Colombia. Cursos, diplomados, proyectos de alto nivel y servicios de arquitectura residencial, comercial y urbana.",
  keywords: [
    "arquitectura",
    "diseño",
    "cursos arquitectura",
    "UVA",
    "Colombia",
    "diseño interior",
    "urbanismo",
  ],
  openGraph: {
    title: "UVA — Unidad Vectorial de Arquitectura",
    description:
      "Plataforma profesional de arquitectura, diseño y educación en Colombia.",
    type: "website",
  },
};

import ChatWidget from "@/components/chat-widget";

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
