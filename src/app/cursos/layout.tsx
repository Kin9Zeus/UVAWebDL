import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.uvarq.com";

export const metadata: Metadata = {
  title: "Cursos y Diplomados de Arquitectura Online",
  description:
    "Explora los cursos y diplomados de UVA Arquitectura: Revit, D5 Render, Gerencia de Proyectos, Diseño Interior, IA y más. Formación de alto impacto para arquitectos y diseñadores.",
  openGraph: {
    title: "Cursos y Diplomados de Arquitectura | UVA",
    description:
      "Formación profesional de alto impacto para arquitectos: Revit, Render, Gerencia de Proyectos, Diseño Interior y más.",
    url: `${BASE_URL}/cursos`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Arquitectura | UVA",
    description: "Diplomados y cursos online para arquitectos y diseñadores.",
  },
  alternates: { canonical: `${BASE_URL}/cursos` },
};

export default function CursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
