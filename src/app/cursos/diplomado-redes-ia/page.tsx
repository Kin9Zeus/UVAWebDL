import { courses } from "@/lib/data/courses";
import { getAuthToken, verifyToken } from "@/lib/auth";
import LandingPageRedesClient from "@/components/landing-page-redes-client";

export default async function DiplomadoRedesIAPage() {
  const course = courses.find((c) => c.id === "diplomado-redes-ia");
  const token = await getAuthToken();
  const payload = verifyToken(token || "");
  const isAuthenticated = !!payload;

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return <LandingPageRedesClient course={course} isAuthenticated={isAuthenticated} />;
}
