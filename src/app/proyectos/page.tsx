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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--color-tertiary)]">Proyectos UVA</h1>
        <p className="mt-2 text-neutral-600 max-w-2xl">
          Galería profesional de arquitectura, diseño y urbanismo.
        </p>
        <div className="mt-8 grid gap-6">
          {sorted.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
