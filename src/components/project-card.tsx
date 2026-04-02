import type { Project } from "@/lib/data/projects";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <section className="group rounded-2xl border border-[var(--neutral-200)] bg-[var(--surface)] overflow-hidden card-lift transition-all duration-500">
      {/* Header */}
      <div className="p-6 sm:p-8 pb-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-medium text-[var(--neutral-400)] tabular-nums" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="w-6 h-px bg-[var(--neutral-300)]" />
              {project.category && (
                <span className="badge badge-accent text-[10px]">{project.category}</span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">{project.name}</h2>
          </div>
        </div>
        <p className="mt-2 text-sm text-[var(--neutral-500)] leading-relaxed max-w-3xl">{project.description}</p>
      </div>

      {/* Mobile Carousel */}
      <div className="mt-6 md:hidden snap-x snap-mandatory overflow-x-auto flex gap-3 px-6 pb-6">
        {project.images.map((src, idx) => (
          <div key={src} className="snap-start shrink-0 w-72 rounded-xl overflow-hidden image-hover">
            <img
              src={src}
              alt={`${project.name} — imagen ${idx + 1}`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Desktop Masonry */}
      <div className="mt-6 hidden md:block px-6 sm:px-8 pb-6 sm:pb-8">
        <div className="columns-2 lg:columns-3 gap-3">
          {project.images.map((src, idx) => (
            <figure key={src} style={{ breakInside: "avoid" }} className="mb-3">
              <div className="rounded-xl overflow-hidden image-hover group/img relative">
                <img
                  src={src}
                  alt={`${project.name} — imagen ${idx + 1}`}
                  className="w-full rounded-xl object-cover"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-all duration-500 rounded-xl" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}