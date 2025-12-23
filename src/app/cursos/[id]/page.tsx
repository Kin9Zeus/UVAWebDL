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

            {/* Bloque de Video Principal (Solo si existe fuera del syllabus) */}
            {course.videoUrl && (
            <div className="mt-8 rounded-lg border border-neutral-200 p-6">
              <h3 className="font-medium">Video del Curso</h3>
              {isPurchased ? (
                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-2 p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">¡Gracias por tu compra! Aquí tienes acceso al contenido:</span>
                  </div>
                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg relative group">
                       <iframe 
                        src={course.videoUrl} 
                        className="w-full h-full" 
                        allow="autoplay; fullscreen" 
                        allowFullScreen
                       />
                    </div>
                </div>
              ) : (
                <>
                  <p className="text-sm text-neutral-600">Disponible sólo para usuarios con acceso activo.</p>
                  <div className="mt-3 aspect-video rounded bg-neutral-100 flex flex-col items-center justify-center gap-2 border border-neutral-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-neutral-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <p className="text-neutral-500 font-medium">Contenido bloqueado</p>
                    <p className="text-xs text-neutral-400">Adquiere el curso para ver los videos</p>
                  </div>
                </>
              )}
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

            <p className="mt-4 text-xs text-neutral-500">Acceso válido por 6 meses. Certificado descargable.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}