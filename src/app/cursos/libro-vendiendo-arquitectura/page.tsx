import { courses } from "@/lib/data/courses";
import LandingPageLibroClient from "@/components/landing-page-libro-client";
import JsonLd from "@/components/json-ld";
import { buildCourseMetadata, buildCourseJsonLd } from "@/lib/seo";

const SLUG = "libro-vendiendo-arquitectura";
const course = courses.find((c) => c.id === SLUG)!;

export const metadata = buildCourseMetadata(
  course,
  SLUG,
  "Libro: Vendiendo Arquitectura — Guía de Negocio"
);

export default async function LibroVendiendoArquitecturaPage() {
  if (!course) return <div>Curso no encontrado</div>;

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course, SLUG)} />
      <LandingPageLibroClient course={course} />
    </>
  );
}
