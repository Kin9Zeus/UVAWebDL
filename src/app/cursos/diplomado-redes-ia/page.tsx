import { courses } from "@/lib/data/courses";
import LandingPageRedesClient from "@/components/landing-page-redes-client";

export default async function DiplomadoRedesIAPage() {
  const course = courses.find((c) => c.id === "diplomado-redes-ia");

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return <LandingPageRedesClient course={course} />;
}
