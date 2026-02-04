import { courses } from "@/lib/data/courses";
import { getAuthToken, verifyToken } from "@/lib/auth";
import LandingPageLibroClient from "@/components/landing-page-libro-client";

export default async function LibroVendiendoArquitecturaPage() {
  const course = courses.find((c) => c.id === "libro-vendiendo-arquitectura");
  const token = await getAuthToken();
  const payload = verifyToken(token || "");
  const isAuthenticated = !!payload;

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return <LandingPageLibroClient course={course} isAuthenticated={isAuthenticated} />;
}
