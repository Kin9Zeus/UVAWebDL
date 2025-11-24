export default function ComunidadPage() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--color-tertiary)]">Comunidad UVA</h1>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            Contenido exclusivo, mentorías y una red profesional para crecer en arquitectura y diseño.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.patreon.com/UVAArquitectura/membership"
              className="rounded-full bg-[var(--color-secondary)] px-6 py-3 text-white font-medium hover:opacity-90 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unirme en Patreon
            </a>
          </div>
        </header>

        {/* Beneficios */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--color-tertiary)]">Qué incluye</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Clases y pildoras exclusivas","Material descargable","Sesiones Q&A en vivo","Mentorías grupales","Networking y comunidad","Descuentos en cursos"].map((item) => (
              <div key={item} className="rounded-xl border border-neutral-200 p-4 bg-white/60 hover:bg-white transition">
                <p className="text-sm text-neutral-700">{item}</p>
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
              <div key={t.title} className="group rounded-2xl border border-neutral-200 p-6 bg-white hover:shadow-sm transition">
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