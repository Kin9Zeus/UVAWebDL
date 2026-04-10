import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.uvarq.com";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con UVA Arquitectura. Escríbenos por WhatsApp, email o redes sociales. Estamos listos para ayudarte con tu proyecto.",
  openGraph: {
    title: "Contacto | UVA Arquitectura",
    description:
      "Contáctanos para consultoría, cursos o servicios de arquitectura.",
    url: `${BASE_URL}/contacto`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contacto | UVA Arquitectura",
    description: "Contáctanos para consultoría, cursos o servicios.",
  },
  alternates: { canonical: `${BASE_URL}/contacto` },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
