import { courses } from "@/lib/data/courses";
import LandingPageCadFeedClient from "@/components/landing-page-cad-feed-client";

export default async function LibroCadFeedPage() {
  const course = courses.find((c) => c.id === "libro-del-cad-al-feed");

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return <LandingPageCadFeedClient course={course} />;
}
