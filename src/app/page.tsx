import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid items-center gap-10 lg:gap-16 md:grid-cols-2">
          <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-tertiary)]">
                UVA — Unidad Vectorial de Arquitectura
              </h1>
              <p className="mt-4 text-neutral-600 max-w-xl">
                Plataforma profesional para aprender arquitectura, explorar proyectos y acceder a
                servicios de diseño. Contenido moderno, accesible y con enfoque práctico.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/cursos"
                  className="rounded-full bg-[var(--color-secondary)] px-5 py-3 text-white hover:opacity-90 transition"
                >
                  Ver cursos
                </Link>
                <Link
                  href="/servicios"
                  className="rounded-full border border-neutral-300 px-5 py-3 text-[var(--color-tertiary)] hover:bg-neutral-50 transition"
                >
                  Servicios de arquitectura
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
               <img
                 src="/Portada-Arenas.jpg"
                 alt="Casa Liévano"
                 className="rounded-2xl w-full aspect-square object-contain shadow-sm transition-transform duration-500 hover:scale-[1.02]"
               />
               <span className="absolute left-4 top-4 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-[var(--color-tertiary)]">Casa Liévano</span>
             </div>
        </div>
      </div>
    </section>
  );
}
