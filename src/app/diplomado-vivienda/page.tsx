
import { courses } from "@/lib/data/courses";
import { getAuthToken, verifyToken } from "@/lib/auth";
import LandingPageClient from "@/components/landing-page-client";

export default async function DiplomadoViviendaPage() {
  const course = courses.find((c) => c.id === "intro-arquitectura");
  
  // Auth Check for the purchase button on this page
  const token = await getAuthToken();
  const payload = verifyToken(token || "");
  const isAuthenticated = !!payload;

  if (!course) return <div>Curso no encontrado</div>;

  return <LandingPageClient course={course} isAuthenticated={isAuthenticated} />;
}
