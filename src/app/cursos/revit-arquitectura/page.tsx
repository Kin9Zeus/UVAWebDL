import { courses } from "@/lib/data/courses";
import LandingPageRevitClient from "@/components/landing-page-revit-client";
import JsonLd from "@/components/json-ld";
import { buildCourseMetadata, buildCourseJsonLd } from "@/lib/seo";

const SLUG = "revit-arquitectura";
const course = courses.find((c) => c.id === SLUG)!;

export const metadata = buildCourseMetadata(
  course,
  SLUG,
  "Diplomado en Autodesk Revit — Arquitectura desde Cero"
);

export default async function RevitPage() {
  if (!course) return <div>Curso no encontrado</div>;

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course, SLUG)} />
      <LandingPageRevitClient course={course} />
    </>
  );
}
