import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/project-card";
import Image from "next/image";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://uvarq.com";

export const metadata: Metadata = {
  title: "Portafolio de Proyectos Arquitectónicos",
  description:
    "Galería profesional de proyectos de arquitectura por UVA: diseño residencial, comercial, glamping, salud y urbanismo en Colombia.",
  openGraph: {
    title: "Proyectos de Arquitectura | UVA",
    description:
      "Explora nuestro portafolio de +50 proyectos de arquitectura residencial, comercial y urbana.",
    url: `${BASE_URL}/proyectos`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio de Arquitectura | UVA",
    description: "Galería profesional de proyectos arquitectónicos.",
  },
  alternates: { canonical: `${BASE_URL}/proyectos` },
};

export default function ProyectosPage() {
  const order = [
    "maracay-ciudad-campestre",
    "selva-negra",
    "casa-de-las-arenas",
    "la-mahaus",
  ];
  const ordered = order
    .map((id) => projects.find((p) => p.id === id))
    .filter((p) => !!p) as typeof projects;
  const rest = projects.filter((p) => !order.includes(p.id));
  const sorted = [...ordered, ...rest];

  const totalImages = projects.reduce((acc, p) => acc + p.images.length, 0);

  return (
    <section>
      {/* ════════ Hero Section ════════ */}
      <div className="relative overflow-hidden">
        <div className="relative min-h-[45vh] sm:min-h-[50vh] lg:min-h-[55vh]">
          <Image
            src="/projects/La-Mahaus/5.jpg"
            alt="Proyectos UVA — Arquitectura premium"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-gradient absolute inset-0" />
          <div className="grain-overlay absolute inset-0" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
            <div className="text-white max-w-2xl animate-reveal-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[var(--color-accent)]" />
                <span className="text-xs uppercase tracking-[0.15em] text-white/50">Portafolio</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                Proyectos UVA
              </h1>
              <p className="mt-3 text-sm sm:text-base text-white/65 max-w-lg leading-relaxed">
                Galería profesional de arquitectura, diseño y urbanismo. Cada proyecto refleja nuestra pasión por crear espacios que transforman vidas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ════════ Stats Bar ════════ */}
      <div className="border-b border-[var(--neutral-200)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl font-bold text-[var(--foreground)]" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
                {projects.length}
              </span>
              <span className="text-xs text-[var(--neutral-500)] uppercase tracking-[0.1em]">Proyectos</span>
            </div>
            <div className="w-px h-6 bg-[var(--neutral-200)]" />
            <div className="flex items-center gap-2.5">
              <span className="text-2xl font-bold text-[var(--foreground)]" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
                {totalImages}
              </span>
              <span className="text-xs text-[var(--neutral-500)] uppercase tracking-[0.1em]">Fotografías</span>
            </div>
            <div className="w-px h-6 bg-[var(--neutral-200)] hidden sm:block" />
            <div className="flex items-center gap-2 hidden sm:flex">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              <span className="text-xs text-[var(--neutral-500)]">Residencial · Comercial · Glamping · Salud · Urbanismo</span>
            </div>
          </div>
        </div>
      </div>

      {/* ════════ Projects List ════════ */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="space-y-14 sm:space-y-20">
          {sorted.map((p, idx) => (
            <ProjectCard key={p.id} project={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
