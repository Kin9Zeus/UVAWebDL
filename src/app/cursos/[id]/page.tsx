import { courses } from "@/lib/data/courses";
import Rating from "@/components/rating";

type Props = { params: { id: string } };

export default function CursoDetallePage({ params }: Props) {
  const course = courses.find((c) => c.id === params.id);
  if (!course) {
    return (
      <section>
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-2xl font-semibold">Curso no encontrado</h1>
          <p className="text-neutral-600">Verifica el enlace o vuelve al catálogo.</p>
        </div>
      </section>
    );
  }
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-semibold text-[var(--color-tertiary)]">{course.title}</h1>
            <div className="mt-2 flex items-center gap-3">
              <Rating rating={course.rating} />
              <span className="text-sm text-neutral-600">Nivel {course.level} · {course.category}</span>
            </div>
            <p className="mt-6 text-neutral-700">{course.description}</p>
            <div className="mt-8 rounded-lg border border-neutral-200 p-6">
              <h3 className="font-medium">Temario</h3>
              <ul className="mt-2 list-disc pl-6 text-sm text-neutral-700">
                <li>Módulo 1: Introducción</li>
                <li>Módulo 2: Conceptos clave</li>
                <li>Módulo 3: Caso práctico</li>
              </ul>
            </div>
            <div className="mt-8 rounded-lg border border-neutral-200 p-6">
              <h3 className="font-medium">Videos</h3>
              <p className="text-sm text-neutral-600">Disponible sólo para usuarios con acceso activo.</p>
              <div className="mt-3 aspect-video rounded bg-neutral-100" />
            </div>
          </div>
          <aside className="rounded-lg border border-neutral-200 p-6 h-fit">
            <p className="text-sm text-neutral-600">Precio</p>
            <p className="text-2xl font-semibold text-[var(--color-tertiary)]">${"" + course.price}</p>
            <button className="mt-4 w-full rounded-full bg-[var(--color-secondary)] px-5 py-3 text-white">Comprar</button>
            <p className="mt-4 text-xs text-neutral-500">Acceso válido por 6 meses. Certificado descargable.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}