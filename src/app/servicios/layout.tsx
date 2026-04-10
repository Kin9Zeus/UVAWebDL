import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.uvarq.com";

export const metadata: Metadata = {
  title: "Servicios de Arquitectura Profesional",
  description:
    "Servicios de arquitectura de UVA: consultoría, diseño arquitectónico, diseño urbano, desarrollo constructivo, diseño interior, branding y asesorías personalizadas.",
  openGraph: {
    title: "Servicios de Arquitectura | UVA",
    description:
      "Consultoría, diseño arquitectónico, urbano, interior y más. +13 años de experiencia y +50 proyectos ejecutados.",
    url: `${BASE_URL}/servicios`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Arquitectura | UVA",
    description: "Consultoría e diseño arquitectónico profesional en Colombia.",
  },
  alternates: { canonical: `${BASE_URL}/servicios` },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
