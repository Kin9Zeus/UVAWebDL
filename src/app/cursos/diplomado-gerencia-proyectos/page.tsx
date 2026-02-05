
import { courses } from "@/lib/data/courses";
import LandingPageClient from "@/components/landing-page-client";

export default async function DiplomadoViviendaPage() {
  const course = courses.find((c) => c.id === "diplomado-gerencia-proyectos");
  
  if (!course) return <div>Curso no encontrado</div>;

  return <LandingPageClient course={course} />;
}
