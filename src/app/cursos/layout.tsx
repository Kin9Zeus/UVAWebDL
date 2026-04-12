import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { courses } from "@/lib/data/courses";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.uvarq.com";

export const metadata: Metadata = {
  title: "Academia UVA | Cursos, Diplomados, Libros y Mentorías",
  description:
    "Explora la Academia UVA Arquitectura: Cursos, Diplomados, Libros, Mentorías y Comunidad. Formación de alto impacto para arquitectos y diseñadores.",
  openGraph: {
    title: "Academia UVA | Arquitectura y Diseño",
    description:
      "Formación profesional de alto impacto para arquitectos: Revit, Render, Gerencia de Proyectos, Diseño Interior, Libros y Mentorías.",
    url: `${BASE_URL}/cursos`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academia UVA | Arquitectura y Diseño",
    description: "Diplomados, cursos online, libros y mentorías para arquitectos y diseñadores.",
  },
  alternates: { canonical: `${BASE_URL}/cursos` },
};

export default function CursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const courseItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": courses.map((course, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${BASE_URL}${course.href || `/cursos/${course.id}`}`,
      "name": course.title
    }))
  };

  return (
    <>
      <JsonLd data={courseItemList} />
      {children}
    </>
  );
}
