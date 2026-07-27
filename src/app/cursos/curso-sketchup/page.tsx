import { courses } from "@/lib/data/courses";
import LandingPageSketchupClient from "@/components/landing-page-sketchup-client";
import JsonLd from "@/components/json-ld";
import { buildCourseMetadata, buildCourseJsonLd } from "@/lib/seo";

const SLUG = "curso-sketchup";
const course = courses.find((c) => c.id === SLUG)!;

export const metadata = buildCourseMetadata(
  course,
  SLUG,
  "Curso de SketchUp — Modelado Arquitectónico desde Cero"
);

export default async function SketchupPage() {
  if (!course) return <div>Curso no encontrado</div>;

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course, SLUG)} />
      <LandingPageSketchupClient course={course} />
    </>
  );
}