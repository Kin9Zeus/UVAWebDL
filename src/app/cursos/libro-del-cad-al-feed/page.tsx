import { courses } from "@/lib/data/courses";
import LandingPageCadFeedClient from "@/components/landing-page-cad-feed-client";
import JsonLd from "@/components/json-ld";
import { buildCourseMetadata, buildCourseJsonLd } from "@/lib/seo";

const SLUG = "libro-del-cad-al-feed";
const course = courses.find((c) => c.id === SLUG)!;

export const metadata = buildCourseMetadata(
  course,
  SLUG,
  "Libro: Del CAD al Feed — Marketing para Arquitectos"
);

export default async function LibroCadFeedPage() {
  if (!course) return <div>Curso no encontrado</div>;

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course, SLUG)} />
      <LandingPageCadFeedClient course={course} />
    </>
  );
}
