import { courses } from "@/lib/data/courses";
import LandingPageAsesoriaClient from "@/components/landing-page-asesoria-client";

export default async function AsesoriaPage() {
  const course = courses.find((c) => c.id === "asesoria-personalizada");

  if (!course) {
    return <div>Servicio no encontrado</div>;
  }

  return <LandingPageAsesoriaClient course={course} />;
}
