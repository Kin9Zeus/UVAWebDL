
import { courses } from "@/lib/data/courses";
import { getAuthToken, verifyToken } from "@/lib/auth";
import LandingPageD5Client from "@/components/landing-page-d5-client";

export default async function DiplomadoD5RenderPage() {
  const course = courses.find((c) => c.id === "diplomado-d5-render");
  
  // Auth Check for the purchase button on this page
  const token = await getAuthToken();
  const payload = verifyToken(token || "");
  const isAuthenticated = !!payload;

  if (!course) return <div>Curso no encontrado</div>;

  return <LandingPageD5Client course={course} isAuthenticated={isAuthenticated} />;
}
