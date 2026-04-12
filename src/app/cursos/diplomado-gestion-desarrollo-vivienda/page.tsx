import { Suspense } from "react";
import { courses } from "@/lib/data/courses";
import LandingPageViviendaClient from "@/components/landing-page-vivienda-client";
import JsonLd from "@/components/json-ld";
import { buildCourseMetadata, buildCourseJsonLd } from "@/lib/seo";

const SLUG = "diplomado-gestion-desarrollo-vivienda";
const course = courses.find((c) => c.id === SLUG)!;

export const metadata = buildCourseMetadata(
  course,
  SLUG,
  "Diplomado en Gestión y Desarrollo de Vivienda"
);

export default async function DiplomadoViviendaPage() {
  if (!course) return <div>Curso no encontrado</div>;

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course, SLUG)} />
      <Suspense fallback={<div className="pt-32 text-center text-white">Cargando...</div>}>
        <LandingPageViviendaClient course={course} />
      </Suspense>
    </>
  );
}

