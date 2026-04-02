import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/project-card";

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
  return (
    <section>
      {/* Page Header */}
      <div className="bg-[var(--surface-warm)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="line-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--neutral-500)]">Portafolio</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Proyectos UVA
          </h1>
          <p className="mt-4 text-[var(--neutral-500)] max-w-2xl leading-relaxed">
            Galería profesional de arquitectura, diseño y urbanismo. Cada proyecto refleja nuestra pasión por crear espacios que transforman vidas.
          </p>
          <div className="separator-gold mt-8 max-w-xs" />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-12 sm:gap-16">
          {sorted.map((p, idx) => (
            <ProjectCard key={p.id} project={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
