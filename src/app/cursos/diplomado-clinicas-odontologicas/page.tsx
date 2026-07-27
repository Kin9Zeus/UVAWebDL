import { courses } from "@/lib/data/courses";
import LandingPageOdontologiaClient from "@/components/landing-page-odontologia-client";
import JsonLd from "@/components/json-ld";
import { buildCourseMetadata, buildCourseJsonLd } from "@/lib/seo";

const SLUG = "diplomado-clinicas-odontologicas";
const course = courses.find((c) => c.id === SLUG)!;

export const metadata = buildCourseMetadata(
  course,
  SLUG,
  "Diplomado en Diseño Interior y Habilitación de Clínicas Odontológicas"
);

export default async function OdontologiaPage() {
  if (!course) return <div>Curso no encontrado</div>;

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course, SLUG)} />
      <LandingPageOdontologiaClient course={course} />
    </>
  );
}