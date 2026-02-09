"use client";
import Rating from "@/components/rating";
import { courses } from "@/lib/data/courses";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function CursosPage() {
  const [query, setQuery] = useState("");
  const normalize = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const filtered = useMemo(() => {
    const q = normalize(query).trim();
    if (!q) return courses;
    const tokens = q.split(/\s+/);
    return courses.filter((c) => {
      const hay = normalize(`${c.title} ${c.description} ${c.category} ${c.level} ${c.priceDisplay ?? ""}`);
      return tokens.every((t) => hay.includes(t));
    });
  }, [query]);
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--color-tertiary)]">Cursos y diplomados UVA</h1>
        <p className="mt-2 text-neutral-600 max-w-2xl">
          Explora cursos profesionales de arquitectura. Usa el buscador para encontrar el contenido ideal.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar cursos..." className="w-full sm:w-80 rounded border border-neutral-300 px-3 py-2" />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((c) => (
            <div key={c.id} className="flex flex-col h-full rounded-lg border border-neutral-200 p-6">
              <div className="relative h-32 w-full rounded overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src={c.cover}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: c.cover.endsWith(".svg") ? "contain" : "cover", padding: c.cover.endsWith(".svg") ? "1rem" : undefined }}
                  className={c.cover.endsWith(".svg") ? "opacity-60" : ""}
                />
              </div>
              <h3 className="font-medium text-[var(--color-tertiary)]">{c.title}</h3>
              <p className="text-sm text-neutral-600 mb-4">{c.description}</p>
              <div className="mt-auto flex items-center justify-between">
                <Rating rating={c.rating} />
                <span className="text-[var(--color-tertiary)] font-semibold">{c.priceDisplay ?? `$${c.price} USD`}</span>
              </div>
              <div className="mt-4 flex gap-2">
                <Link href={`/cursos/${c.id}`} className="rounded-full bg-[var(--color-secondary)] px-4 py-2 text-white text-sm w-full text-center">Ver detalles</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
