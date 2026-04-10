import { courses } from "@/lib/data/courses";
import LandingPageDisenoInteriorClient from "@/components/landing-page-diseno-interior-client";
import JsonLd from "@/components/json-ld";
import { buildCourseMetadata, buildCourseJsonLd } from "@/lib/seo";

const SLUG = "diseno-interior-iluminacion";
const course = courses.find((c) => c.id === SLUG)!;

export const metadata = buildCourseMetadata(
  course,
  SLUG,
  "Diplomado en Diseño Interior e Iluminación Arquitectónica"
);

export default async function DisenoInteriorPage() {
  if (!course) return <div>Curso no encontrado</div>;

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course, SLUG)} />
      <LandingPageDisenoInteriorClient course={course} />
    </>
  );
}
