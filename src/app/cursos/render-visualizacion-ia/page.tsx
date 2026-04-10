import { Suspense } from "react";
import { courses } from "@/lib/data/courses";
import LandingPageIAClient from "@/components/landing-page-ia-client";
import JsonLd from "@/components/json-ld";
import { buildCourseMetadata, buildCourseJsonLd } from "@/lib/seo";

const SLUG = "render-visualizacion-ia";
const course = courses.find((c) => c.id === SLUG)!;

export const metadata = buildCourseMetadata(
  course,
  SLUG,
  "Render y Visualización Arquitectónica con IA"
);

export default async function RenderVisualizacionIAPage() {
  if (!course) return <div>Curso no encontrado</div>;

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course, SLUG)} />
      <Suspense fallback={<div>Cargando...</div>}>
        <LandingPageIAClient course={course} />
      </Suspense>
    </>
  );
}
