import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.uvarq.com";

export const metadata: Metadata = {
  title: "Comunidad UVA en Discord — Red de Arquitectos",
  description:
    "Únete a la comunidad exclusiva de arquitectos en Discord. Networking, recursos, mentorías y crecimiento profesional por solo $7 USD/mes.",
  openGraph: {
    title: "Comunidad UVA Discord | Arquitectos",
    description:
      "La red de arquitectos más activa en español. Recursos, networking y mentorías.",
    url: `${BASE_URL}/comunidad`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comunidad UVA Discord",
    description: "Red exclusiva de arquitectos y diseñadores.",
  },
  alternates: { canonical: `${BASE_URL}/comunidad` },
};

export default function ComunidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
