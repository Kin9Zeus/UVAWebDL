import { courses } from "@/lib/data/courses";
import LandingPageIAClient from "@/components/landing-page-ia-client";

export default async function RenderVisualizacionIAPage() {
  const course = courses.find((c) => c.id === "render-visualizacion-ia");

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return <LandingPageIAClient course={course} />;
}
