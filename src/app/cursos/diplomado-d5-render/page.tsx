
import { courses } from "@/lib/data/courses";
import LandingPageD5Client from "@/components/landing-page-d5-client";

export default async function DiplomadoD5RenderPage() {
  const course = courses.find((c) => c.id === "diplomado-d5-render");
  
  if (!course) return <div>Curso no encontrado</div>;

  return <LandingPageD5Client course={course} />;
}
