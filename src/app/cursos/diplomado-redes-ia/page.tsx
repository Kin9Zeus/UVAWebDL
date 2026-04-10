import { courses } from "@/lib/data/courses";
import LandingPageRedesClient from "@/components/landing-page-redes-client";
import JsonLd from "@/components/json-ld";
import { buildCourseMetadata, buildCourseJsonLd } from "@/lib/seo";

const SLUG = "diplomado-redes-ia";
const course = courses.find((c) => c.id === SLUG)!;

export const metadata = buildCourseMetadata(
  course,
  SLUG,
  "Diplomado en Redes Sociales e IA para Arquitectos"
);

export default async function DiplomadoRedesIAPage() {
  if (!course) return <div>Curso no encontrado</div>;

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course, SLUG)} />
      <LandingPageRedesClient course={course} />
    </>
  );
}
