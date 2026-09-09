import { courses } from "@/lib/data/courses";
import LandingPageClaudeClient from "@/components/landing-page-claude-client";
import JsonLd from "@/components/json-ld";
import { buildCourseMetadata, buildCourseJsonLd } from "@/lib/seo";

const SLUG = "diplomado-claude-ia";
const course = courses.find((c) => c.id === SLUG)!;

export const metadata = buildCourseMetadata(
  course,
  SLUG,
  "Diplomado en Claude IA para Presupuestos y Administración de Obra"
);

export default async function ClaudePage() {
  if (!course) return <div>Curso no encontrado</div>;

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course, SLUG)} />
      <LandingPageClaudeClient course={course} />
    </>
  );
}