import { courses } from "@/lib/data/courses";
import LandingPageOficinaClient from "@/components/landing-page-oficina-client";

export default async function AbriendoOficinaArquitecturaPage() {
  const course = courses.find((c) => c.id === "abriendo-oficina-arquitectura");

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return <LandingPageOficinaClient course={course} />;
}
