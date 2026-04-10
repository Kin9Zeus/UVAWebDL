import { courses } from "@/lib/data/courses";
import LandingPageClient from "@/components/landing-page-client";
import JsonLd from "@/components/json-ld";
import { buildCourseMetadata, buildCourseJsonLd } from "@/lib/seo";

const SLUG = "diplomado-gerencia-proyectos";
const course = courses.find((c) => c.id === SLUG)!;

export const metadata = buildCourseMetadata(
  course,
  SLUG,
  "Diplomado en Gerencia de Proyectos, Costos y Presupuestos"
);

export default async function DiplomadoViviendaPage() {
  if (!course) return <div>Curso no encontrado</div>;

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course, SLUG)} />
      <LandingPageClient course={course} />
    </>
  );
}
