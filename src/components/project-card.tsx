import type { Project } from "@/lib/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <section className="rounded-xl border border-neutral-200 p-6">
      <header className="flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-semibold text-[var(--color-tertiary)]">{project.name}</h2>
        {project.category && (
          <span className="text-xs rounded-full border border-neutral-300 px-2 py-1 text-neutral-600">{project.category}</span>
        )}
      </header>
      <p className="mt-2 text-neutral-600 text-sm">{project.description}</p>

      {/* Carrusel en móvil */}
      <div className="mt-6 md:hidden snap-x snap-mandatory overflow-x-auto flex gap-4">
        {project.images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`${project.name} — imagen ${idx + 1}`}
            className="snap-start w-64 h-40 object-cover rounded-lg"
            loading="lazy"
          />
        ))}
      </div>

      {/* Collage (masonry) en escritorio */}
      <div className="mt-6 hidden md:block">
        <div className="columns-2 lg:columns-3 gap-4">
          {project.images.map((src, idx) => (
            <figure key={src} style={{ breakInside: "avoid" }} className="mb-4">
              <img
                src={src}
                alt={`${project.name} — imagen ${idx + 1}`}
                className="w-full rounded-lg object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}