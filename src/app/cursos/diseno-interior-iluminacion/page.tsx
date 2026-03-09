import { courses } from "@/lib/data/courses";
import LandingPageDisenoInteriorClient from "@/components/landing-page-diseno-interior-client";

export default async function DisenoInteriorPage() {
  const course = courses.find((c) => c.id === "diseno-interior-iluminacion");

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return <LandingPageDisenoInteriorClient course={course} />;
}
