import { courses } from "@/lib/data/courses";
import LandingPageAsesoriaClient from "@/components/landing-page-asesoria-client";
import JsonLd from "@/components/json-ld";
import { buildCourseMetadata, buildCourseJsonLd } from "@/lib/seo";

const SLUG = "asesoria-personalizada";
const course = courses.find((c) => c.id === SLUG)!;

export const metadata = buildCourseMetadata(
  course,
  SLUG,
  "Asesoría Personalizada 1 a 1 — Arquitectura y Diseño"
);

export default async function AsesoriaPage() {
  if (!course) return <div>Curso no encontrado</div>;

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course, SLUG)} />
      <LandingPageAsesoriaClient course={course} />
    </>
  );
}
