import Rating from "@/components/rating";
import { courses } from "@/lib/data/courses";
import Link from "next/link";

export default function CursosPage() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--color-tertiary)]">Cursos y diplomados UVA</h1>
        <p className="mt-2 text-neutral-600 max-w-2xl">
          Explora cursos profesionales de arquitectura. Usa el buscador y filtros para encontrar el contenido ideal.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input placeholder="Buscar cursos..." className="w-full sm:w-80 rounded border border-neutral-300 px-3 py-2" />
          <div className="flex flex-wrap gap-2 text-sm">
            <button className="rounded-full border border-neutral-300 px-3 py-2">Todos</button>
            <button className="rounded-full border border-neutral-300 px-3 py-2">Arquitectura</button>
            <button className="rounded-full border border-neutral-300 px-3 py-2">Diseño</button>
            <button className="rounded-full border border-neutral-300 px-3 py-2">Urbanismo</button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((c) => (
            <div key={c.id} className="rounded-lg border border-neutral-200 p-6">
              <div className="h-32 w-full rounded overflow-hidden bg-neutral-100 mb-4">
                <img
                  src={c.cover}
                  alt={c.title}
                  className={`w-full h-full ${c.cover.endsWith(".svg") ? "object-contain p-4 opacity-60" : "object-cover"}`}
                />
              </div>
              <h3 className="font-medium text-[var(--color-tertiary)]">{c.title}</h3>
              <p className="text-sm text-neutral-600">{c.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <Rating rating={c.rating} />
                <span className="text-[var(--color-tertiary)] font-semibold">{c.priceDisplay ?? "$80 USD"}</span>
              </div>
              <div className="mt-4 flex gap-2">
                <Link href={`/cursos/${c.id}`} className="rounded-full bg-[var(--color-secondary)] px-4 py-2 text-white text-sm">Ver detalles</Link>
                <button className="rounded-full border border-neutral-300 px-4 py-2 text-sm">Comprar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
