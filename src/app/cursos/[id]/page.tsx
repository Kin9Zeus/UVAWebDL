import { courses } from "@/lib/data/courses";
import Link from "next/link";
import Rating from "@/components/rating";
import Syllabus from "@/components/syllabus";
import JsonLd from "@/components/json-ld";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://uvarq.com";

type Props = { 
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) return { title: "Curso no encontrado" };

  const url = `${BASE_URL}/cursos/${id}`;
  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: `${course.title} | UVA Arquitectura`,
      description: course.description,
      url,
      images: [{ url: course.cover, alt: course.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description,
      images: [course.cover],
    },
    alternates: { canonical: url },
  };
}

export default async function CursoDetallePage({ params }: Props) {
  const { id } = await params;
  
  const course = courses.find((c) => c.id === id);

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

  const isPurchased = false;

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
            
            {course.syllabus ? (
              <Syllabus syllabus={course.syllabus} isPurchased={isPurchased} />
            ) : (
              <div className="mt-8 rounded-lg border border-neutral-200 p-6">
                <h3 className="font-medium">Temario</h3>
                <ul className="mt-2 list-disc pl-6 text-sm text-neutral-700">
                  <li>Módulo 1: Introducción</li>
                  <li>Módulo 2: Conceptos clave</li>
                  <li>Módulo 3: Caso práctico</li>
                </ul>
              </div>
            )}
          </div>
          <aside className="rounded-lg border border-neutral-200 p-6 h-fit">
            <p className="text-sm text-neutral-600">Precio</p>
            <p className="text-2xl font-semibold text-[var(--color-tertiary)]">${"" + course.price} USD</p>
            
            {course.hotmartLink ? (
                <a 
                    href={course.hotmartLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-4 w-full rounded-full bg-yellow-500 px-5 py-3 text-black font-bold hover:bg-yellow-400 transition-colors"
                >
                    Comprar
                </a>
            ) : course.id === "diplomado-gerencia-proyectos" ? (
               <Link 
                 href="/cursos/diplomado-gerencia-proyectos"
                 className="block text-center mt-4 w-full rounded-full bg-[var(--color-secondary)] px-5 py-3 text-white hover:opacity-90 transition-opacity"
               >
                 Ver Detalles
               </Link>
            ) : course.id === "diplomado-d5-render" ? (
               <Link 
                 href="/cursos/diplomado-d5-render"
                 className="block text-center mt-4 w-full rounded-full bg-[var(--color-secondary)] px-5 py-3 text-white hover:opacity-90 transition-opacity"
               >
                 Ver Detalles
               </Link>
            ) : course.id === "abriendo-oficina-arquitectura" ? (
               <Link 
                 href="/cursos/abriendo-oficina-arquitectura"
                 className="block text-center mt-4 w-full rounded-full bg-[var(--color-secondary)] px-5 py-3 text-white hover:opacity-90 transition-opacity"
               >
                 Ver Detalles
               </Link>
            ) : course.id === "libro-vendiendo-arquitectura" ? (
               <Link 
                 href="/cursos/libro-vendiendo-arquitectura"
                 className="block text-center mt-4 w-full rounded-full bg-[var(--color-secondary)] px-5 py-3 text-white hover:opacity-90 transition-opacity"
               >
                 Ver Detalles
               </Link>
            ) : course.id === "diplomado-redes-ia" ? (
               <Link 
                 href="/cursos/diplomado-redes-ia"
                 className="block text-center mt-4 w-full rounded-full bg-[var(--color-secondary)] px-5 py-3 text-white hover:opacity-90 transition-opacity"
               >
                 Ver Detalles
               </Link>
            ) : (
               <Link 
                 href="/contacto"
                 className="block text-center mt-4 w-full rounded-full bg-[var(--color-secondary)] px-5 py-3 text-white hover:opacity-90 transition-opacity"
               >
                 Más Información
               </Link>
            )}

            <p className="mt-4 text-xs text-neutral-500">
              {course.accessDuration || "Acceso válido por 6 meses"}. Certificado descargable.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
