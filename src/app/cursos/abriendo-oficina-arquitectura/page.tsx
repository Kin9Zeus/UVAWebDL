import { courses } from "@/lib/data/courses";
import { getAuthToken, verifyToken } from "@/lib/auth";
import LandingPageOficinaClient from "@/components/landing-page-oficina-client";

export default async function AbriendoOficinaArquitecturaPage() {
  const course = courses.find((c) => c.id === "abriendo-oficina-arquitectura");
  const token = await getAuthToken();
  const payload = verifyToken(token || "");
  const isAuthenticated = !!payload;

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return <LandingPageOficinaClient course={course} isAuthenticated={isAuthenticated} />;
}
