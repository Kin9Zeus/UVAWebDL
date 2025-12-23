import { courses } from "@/lib/data/courses";
import Rating from "@/components/rating";
import { getAuthToken, verifyToken } from "@/lib/auth";
import { dbConnect } from "@/lib/db";
import User from "@/models/User";
import PurchaseButton from "@/components/course-purchase";
import { verifyAndEnrollUser } from "@/lib/payment";
import Syllabus from "@/components/syllabus";

type Props = { 
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function CursoDetallePage({ params, searchParams }: Props) {
  const { id } = await params;
  const { status, payment_id } = await searchParams;
  
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

  // Auth Check
  const token = await getAuthToken();
  const payload = verifyToken(token || "");
  const isAuthenticated = !!payload;
  let isPurchased = false;

  // Auto-verify payment on return (Sync logic for localhost/fallback)
  if (isAuthenticated && status === "success" && payment_id && typeof payment_id === "string") {
    await verifyAndEnrollUser(payment_id);
  }

  if (payload) {
    await dbConnect();
    const user = await User.findById(payload.uid);
    if (user && user.purchases) {
      isPurchased = user.purchases.some(
        (p: any) => 
          p.courseId === course.id && 
          p.status === "active" && 
          new Date(p.expiresAt) > new Date()
      );
    }
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
            
            {isPurchased ? (
               <button disabled className="mt-4 w-full rounded-full bg-green-600 px-5 py-3 text-white cursor-default">
                 Ya tienes este curso
               </button>
            ) : (
               <PurchaseButton 
                 courseId={course.id} 
                 price={course.price} 
                 isAuthenticated={isAuthenticated} 
               />
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