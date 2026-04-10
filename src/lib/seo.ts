import type { Metadata } from "next";
import type { Course } from "@/lib/data/courses";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.uvarq.com";

/**
 * Generate page metadata for a course landing page.
 */
export function buildCourseMetadata(
  course: Course,
  slug: string,
  titleOverride?: string
): Metadata {
  const url = `${BASE_URL}/cursos/${slug}`;
  const title = titleOverride || course.title;
  return {
    title,
    description: course.description,
    openGraph: {
      title: `${title} | UVA Arquitectura`,
      description: course.description,
      url,
      images: [{ url: course.cover, alt: title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | UVA`,
      description: course.description,
      images: [course.cover],
    },
    alternates: { canonical: url },
  };
}

/**
 * Build Course JSON-LD data for Schema.org.
 */
export function buildCourseJsonLd(course: Course, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "UVA Arquitectura",
      url: BASE_URL,
    },
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/cursos/${slug}`,
    },
    image: course.cover,
  };
}
