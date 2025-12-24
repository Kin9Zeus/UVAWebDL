import Image from "next/image";
// no-op

export default function ComunidadPage() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative min-h-[48vh] sm:min-h-[56vh] lg:min-h-[64vh]">
            <Image src="/Humanizar/Comunity1.jpg" alt="Comunidad UVA" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end p-6 sm:p-10">
            <div className="text-white max-w-2xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Comunidad UVA</h1>
              <p className="mt-2 text-sm sm:text-base opacity-90">Contenido, mentorías y una red para crecer en arquitectura y diseño.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://www.patreon.com/UVAArquitectura/membership" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[var(--color-secondary)] px-5 py-2 text-white">Unirme en Patreon</a>
                <a href="https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c9380849385c5cf0193a7d1fa260f55" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#009EE3] px-5 py-2 text-white hover:opacity-90">Unirme con Mercadopago</a>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--color-tertiary)]">Qué incluye</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Clases y pildoras exclusivas","Material descargable","Sesiones Q&A en vivo","Mentorías grupales","Networking y comunidad","Descuentos en cursos"].map((item) => (
              <div key={item} className="group rounded-xl border border-neutral-200 p-5 bg-white hover:shadow-sm transition">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">★</span>
                  <p className="font-medium text-[var(--color-tertiary)]">{item}</p>
                </div>
                <p className="mt-2 text-sm text-neutral-600">Beneficio exclusivo para miembros.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Niveles de membresía */}
        <section className="mt-12">
          <div className="mt-6">
            <div className="group rounded-2xl border border-neutral-200 p-8 bg-white hover:shadow-md transition w-full text-center">
              <h3 className="text-2xl font-semibold text-[var(--color-tertiary)]">Miembro UVA</h3>
              <p className="mt-2 text-neutral-600">Acceso total a la comunidad, recursos y mentorías.</p>
              
              <div className="my-6 text-left space-y-3 bg-neutral-50 p-4 rounded-xl">
                 <p className="font-semibold text-[var(--color-secondary)]">🚀 ¡Únete a la Comunidad de UVA Arquitectura en Discord! 🎓✨</p>
                 <p className="text-sm font-medium">🔥 Por solo 5 USD al mes (sin cláusula de permanencia) obtienes:</p>
                 <ul className="text-sm space-y-2 text-neutral-700 mt-2">
                    <li>📌 <strong>Beneficios exclusivos:</strong></li>
                    <li>👷‍♂️ Asesoría en tus proyectos 24/7 (mi equipo y yo te ayudamos en tiempo real)</li>
                    <li>📑 Documentos y plantillas listas para usar</li>
                    <li>💼 Ofertas laborales todos los lunes y jueves</li>
                    <li>📚 Más de 500 libros de arquitectura, diseño y negocios</li>
                    <li>🗂️ Más de 200 archivos útiles</li>
                    <li>🎤 Diplomados y charlas con expertos</li>
                    <li>💸 Descuentos en todos nuestros productos por ser miembro</li>
                 </ul>
                 <p className="text-xs text-neutral-500 mt-4">👉 Solo necesitas descargar la app Discord, registrarte y listo ✅</p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c9380849385c5cf0193a7d1fa260f55"
                  className="inline-flex justify-center rounded-full bg-[#009EE3] px-5 py-3 text-white font-medium hover:opacity-90 transition w-full items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suscribirse con Mercado Pago
                </a>
                <a
                  href="https://www.patreon.com/UVAArquitectura/membership"
                  className="inline-flex justify-center rounded-full bg-[var(--color-secondary)] px-5 py-3 text-white font-medium hover:opacity-90 transition w-full items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suscribirse con Patreon
                </a>
              </div>
              <p className="mt-3 text-xs text-neutral-500">
                ⚡ Te apoyamos en redes sociales, presupuestos, proyectos y mucho más.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--color-tertiary)]">Destacados de la comunidad</h2>
          <div className="mt-6 relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent" />
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
              {[{img:"/Humanizar/Seb.jpg",title:"Sesión en vivo"},{img:"/Humanizar/Seb2.jpg",title:"Detrás de cámaras"},{img:"/libro-uva.jpg",title:"Recursos y materiales"}].map((c)=>(
                <div key={c.title} className="snap-center rounded-xl overflow-hidden border border-neutral-200 bg-white min-w-[85%] sm:min-w-[50%] lg:min-w-[33%]">
                  <div className="relative" style={{ aspectRatio: "16 / 10" }}>
                    <Image src={c.img} alt={c.title} fill sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    <p className="absolute bottom-3 left-3 text-white font-medium">{c.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--color-tertiary)]">Preguntas frecuentes</h2>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            {[
              {q:"¿Cómo funciona la suscripción?",a:"La membresía se gestiona en Patreon. Al suscribirte, obtienes acceso inmediato al contenido y a la comunidad privada."},
              {q:"¿Qué plataforma se usa para la comunidad?",a:"Gestionamos la comunidad en Discord, con canales exclusivos por temas y sesiones en vivo."},
              {q:"¿Puedo cancelar cuando quiera?",a:"Sí. Puedes cancelar o cambiar de nivel desde tu perfil de Patreon en cualquier momento."},
              {q:"¿Recibiré beneficios en los cursos de UVA?",a:"Sí. Los miembros obtienen descuentos y acceso adelantado a nuevos cursos y diplomados."},
            ].map((f)=> (
              <details key={f.q} className="rounded-xl border border-neutral-200 p-4 bg-white">
                <summary className="cursor-pointer font-medium text-[var(--color-tertiary)]">{f.q}</summary>
                <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>


      </div>
    </section>
  );
}
