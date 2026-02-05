import { courses } from "@/lib/data/courses";
import LandingPageLibroClient from "@/components/landing-page-libro-client";

export default async function LibroVendiendoArquitecturaPage() {
  const course = courses.find((c) => c.id === "libro-vendiendo-arquitectura");

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return <LandingPageLibroClient course={course} />;
}
