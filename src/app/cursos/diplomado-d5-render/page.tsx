import { Suspense } from "react";
import { courses } from "@/lib/data/courses";
import LandingPageD5Client from "@/components/landing-page-d5-client";
import JsonLd from "@/components/json-ld";
import { buildCourseMetadata, buildCourseJsonLd } from "@/lib/seo";

const SLUG = "diplomado-d5-render";
const course = courses.find((c) => c.id === SLUG)!;

export const metadata = buildCourseMetadata(
  course,
  SLUG,
  "Diplomado en D5 Render — Visualización Arquitectónica"
);

export default async function DiplomadoD5RenderPage() {
  if (!course) return <div>Curso no encontrado</div>;

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course, SLUG)} />
      <Suspense fallback={<div>Cargando...</div>}>
        <LandingPageD5Client course={course} />
      </Suspense>
    </>
  );
}
