import { courses } from "@/lib/data/courses";
import LandingPageOficinaClient from "@/components/landing-page-oficina-client";
import JsonLd from "@/components/json-ld";
import { buildCourseMetadata, buildCourseJsonLd } from "@/lib/seo";

const SLUG = "abriendo-oficina-arquitectura";
const course = courses.find((c) => c.id === SLUG)!;

export const metadata = buildCourseMetadata(
  course,
  SLUG,
  "Abriendo tu Oficina de Arquitectura — Curso UVA"
);

export default async function AbriendoOficinaArquitecturaPage() {
  if (!course) return <div>Curso no encontrado</div>;

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course, SLUG)} />
      <LandingPageOficinaClient course={course} />
    </>
  );
}
