import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "UVA — Unidad Vectorial de Arquitectura",
  description: "Cursos, proyectos y servicios de arquitectura en Colombia.",
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
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
      </body>
    </html>
  );
}
