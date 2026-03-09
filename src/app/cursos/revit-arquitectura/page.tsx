import { courses } from "@/lib/data/courses";
import LandingPageRevitClient from "@/components/landing-page-revit-client";

export default async function RevitPage() {
  const course = courses.find((c) => c.id === "revit-arquitectura");

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return <LandingPageRevitClient course={course} />;
}
