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
                <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/70 px-5 py-2 text-white hover:bg-white/10">Entrar a Discord</a>
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
          <h2 className="text-xl font-semibold text-[var(--color-tertiary)]">Niveles de membresía</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {title:"Miembro",desc:"Acceso a contenido exclusivo, comunidad y recursos."},
              {title:"Pro",desc:"Todo lo anterior + mentorías grupales y revisión de proyectos."},
              {title:"Mentoría 1:1",desc:"Sesiones personalizadas para acelerar tu crecimiento profesional."},
            ].map((t)=> (
              <div key={t.title} className="group rounded-2xl border border-neutral-200 p-6 bg-white hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-[var(--color-tertiary)]">{t.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{t.desc}</p>
                <a
                  href="https://www.patreon.com/UVAArquitectura/membership"
                  className="mt-4 inline-flex rounded-full bg-[var(--color-secondary)] px-5 py-2 text-white text-sm group-hover:opacity-90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unirme en Patreon
                </a>
              </div>
            ))}
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

        {/* CTA final */}
        <section className="mt-12 text-center">
          <a
            href="https://www.patreon.com/UVAArquitectura/membership"
            className="inline-flex rounded-full bg-[var(--color-secondary)] px-6 py-3 text-white font-medium hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unirme a la comunidad privada
          </a>
          <p className="mt-2 text-xs text-neutral-500">Pagos seguros vía Patreon · Cancela cuando quieras</p>
        </section>
      </div>
    </section>
  );
}
