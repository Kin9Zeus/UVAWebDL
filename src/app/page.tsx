import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ════════ HERO SECTION ════════ */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Portada-Arenas_v2.jpg"
            alt="UVA Arquitectura — Proyecto destacado"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-gradient absolute inset-0" />
          <div className="grain-overlay absolute inset-0" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
            {/* Badge */}
            <div className="animate-reveal-up">
              <span className="badge badge-glass">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                Arquitectura · Diseño · Educación
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-4xl animate-reveal-up animate-reveal-up-delay-1">
              UVA — Unidad Vectorial
              <br />
              <span className="text-white/70">de Arquitectura</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-white/65 max-w-xl leading-relaxed animate-reveal-up animate-reveal-up-delay-2">
              Plataforma profesional para aprender arquitectura, explorar proyectos y acceder a servicios de diseño de alto nivel.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4 animate-reveal-up animate-reveal-up-delay-3">
              <Link
                href="/cursos"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all"
              >
                Ver cursos
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/15 hover:border-white/40"
              >
                Servicios de arquitectura
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8 sm:gap-12 animate-reveal-up animate-reveal-up-delay-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>+50</span>
                <div className="w-px h-8 bg-white/15" />
                <span className="text-xs text-white/45 uppercase tracking-[0.15em]">Proyectos</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>+10K</span>
                <div className="w-px h-8 bg-white/15" />
                <span className="text-xs text-white/45 uppercase tracking-[0.15em]">Estudiantes</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>+13</span>
                <div className="w-px h-8 bg-white/15" />
                <span className="text-xs text-white/45 uppercase tracking-[0.15em]">Años</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ════════ FEATURE CARDS ════════ */}
      <section className="relative bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          {/* Section intro */}
          <div className="flex items-center gap-4 mb-12">
            <div className="line-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--neutral-500)]">Explora</span>
          </div>

          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Cursos */}
            <Link href="/cursos" className="group card-lift-gold rounded-2xl border border-[var(--neutral-200)] p-6 bg-[var(--surface)] relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-secondary)]/[0.08]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </span>
                <h3 className="font-semibold text-[var(--foreground)]">Cursos y diplomados</h3>
              </div>
              <p className="text-sm text-[var(--neutral-500)] leading-relaxed">Formación profesional en arquitectura y gestión de proyectos.</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explorar
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </Link>

            {/* Proyectos */}
            <Link href="/proyectos" className="group card-lift-gold rounded-2xl border border-[var(--neutral-200)] p-6 bg-[var(--surface)] relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent)]/[0.08]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                </span>
                <h3 className="font-semibold text-[var(--foreground)]">Proyectos UVA</h3>
              </div>
              <p className="text-sm text-[var(--neutral-500)] leading-relaxed">Galería profesional de arquitectura, diseño y urbanismo.</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Ver galería
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </Link>

            {/* Servicios */}
            <Link href="/servicios" className="group card-lift-gold rounded-2xl border border-[var(--neutral-200)] p-6 bg-[var(--surface)] relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--neutral-100)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--neutral-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </span>
                <h3 className="font-semibold text-[var(--foreground)]">Servicios</h3>
              </div>
              <p className="text-sm text-[var(--neutral-500)] leading-relaxed">Diseño arquitectónico, urbano e interior con excelencia.</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[var(--neutral-600)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Descubrir
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </Link>

            {/* Podcast */}
            <Link href="/podcast" className="group card-lift-gold rounded-2xl border border-[var(--neutral-200)] p-6 bg-[var(--surface)] relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-secondary)]/[0.08]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                </span>
                <h3 className="font-semibold text-[var(--foreground)]">Podcast</h3>
              </div>
              <p className="text-sm text-[var(--neutral-500)] leading-relaxed">Conversaciones sobre arquitectura, estrategia y práctica.</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Escuchar
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ QUIÉNES SOMOS ════════ */}
      <section className="bg-[var(--surface-warm)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="line-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--neutral-500)]">Nosotros</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)] max-w-2xl">
            Quiénes somos
          </h2>
          <p className="mt-4 text-[var(--neutral-500)] max-w-xl">
            Un estudio creativo y multidisciplinar con más de una década de trayectoria en arquitectura, diseño y educación.
          </p>
          <div className="separator-gold mt-10" />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* UVA Arquitectura Card */}
            <article className="group rounded-2xl border border-[var(--neutral-200)] bg-[var(--surface)] overflow-hidden card-lift">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src="/projects/La-Mahaus/5.jpg"
                  alt="UVA Arquitectura — Proyecto La Mahaus"
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                {/* Decorative corner line */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[var(--color-accent)]/60" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="line-accent" />
                  <span className="badge badge-accent text-[10px]">Estudio</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">
                  UVA Arquitectura — Diseño, innovación y construcción con propósito
                </h3>
                <div className="mt-4 space-y-3 text-sm text-[var(--neutral-600)] leading-relaxed">
                  <p>UVA Arquitectura es un estudio creativo y multidisciplinar fundado y dirigido por el Arquitecto, Magister en Arquitectura y Urbanismo, Sebastián Arias Duque, especializado en arquitectura residencial, comercial y urbana con enfoque estratégico. Nuestro propósito es transformar espacios en experiencias memorables que potencien el estilo de vida, la productividad y el valor patrimonial.</p>
                  <p>Desde el diseño conceptual hasta la entrega final, trabajamos con una visión integral: arquitectura, diseño interior, construcción, gestión de costos, marketing inmobiliario y desarrollo de marca. Cada proyecto es una oportunidad para generar soluciones reales, eficientes y emocionalmente conectadas con la esencia del usuario.</p>

                  <h4 className="font-semibold text-[var(--foreground)] pt-2">Qué nos hace distintos</h4>
                  <ul className="space-y-2 pl-0">
                    <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" /><span>Arquitectura estratégica: no solo diseñamos espacios; diseñamos experiencias rentables que funcionan en el tiempo.</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" /><span>Metodología UVA: procesos claros, asesoría honesta, acompañamiento completo y comunicación constante.</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" /><span>Ejecución profesional: control técnico, presupuestos detallados, APUs, dirección de obra y garantías reales.</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" /><span>Diseño con identidad: estética contemporánea, materiales nobles, innovación y carácter.</span></li>
                  </ul>

                  <h4 className="font-semibold text-[var(--foreground)] pt-2">Servicios UVA Arquitectura</h4>
                  <ul className="space-y-2 pl-0">
                    <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" /><span>Diseño arquitectónico residencial y premium. Proyectos urbanos, parcelaciones, casas campestres y vivienda de alto nivel.</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" /><span>Arquitectura comercial y branding espacial. Restaurantes, oficinas, retail, clínicas, hoteles y puntos de experiencia de marca.</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" /><span>Diseño interior y amoblamiento a medida. Optimización espacial, iluminación, mobiliario, recorridos y percepción de usuario.</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" /><span>Construcción y remodelación integral. Llave en mano, administración delegada, dirección de obra y control técnico-financiero.</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" /><span>Urbanismo y territorio. Diseño vial, paisajismo, movilidad, perfiles viales y planificación sostenible.</span></li>
                  </ul>

                  <h4 className="font-semibold text-[var(--foreground)] pt-2">Ecosistema UVA</h4>
                  <p>UVA no es solo un estudio, es un ecosistema de conocimiento, contenido y crecimiento profesional. Desarrollamos libros de arquitectura y marketing, diplomados, consultorías, acompañamiento a arquitectos y alianzas estratégicas con marcas y entidades públicas.</p>

                  <h4 className="font-semibold text-[var(--foreground)] pt-2">Nuestro ADN</h4>
                  <ul className="space-y-2 pl-0">
                    <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" /><span>Diseñamos para transformar vidas.</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" /><span>Creemos en la arquitectura como vehículo de evolución humana, económica y social.</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" /><span>Cada proyecto que entregamos refleja nuestro compromiso con la estética, la función y la rentabilidad.</span></li>
                  </ul>

                  <p>Trabajamos donde estés: Con presencia en Pereira, Medellín, Bogotá y el Eje Cafetero, operamos en todo el territorio colombiano y proyectos internacionales.</p>
                  <p className="font-medium text-[var(--foreground)] border-l-2 border-[var(--color-accent)] pl-4 italic">
                    UVA Arquitectura — Arquitectura con alma. Diseño con carácter. Construcción con visión. Crecemos contigo, construimos tu mundo.
                  </p>
                </div>
              </div>
            </article>

            {/* Sebastián Card */}
            <article className="group rounded-2xl border border-[var(--neutral-200)] bg-[var(--surface)] overflow-hidden card-lift">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src="/Sebastian2.jpg"
                  alt="Sebastián Arias Duque — Arquitecto fundador de UVA"
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[var(--color-accent)]/60" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="line-accent" />
                  <span className="badge badge-accent text-[10px]">Fundador</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">
                  Sebastián Arias Duque — Arquitecto fundador
                </h3>
                <div className="mt-4 space-y-3 text-sm text-[var(--neutral-600)] leading-relaxed">
                  <p>Sebastián Arias Duque es arquitecto y magíster en Arquitectura y Urbanismo, fundador de UVA Arquitectura, una firma que integra diseño, estrategia empresarial y formación académica. A lo largo de su trayectoria ha desarrollado proyectos de vivienda en el sector privado, así como intervenciones comerciales, clínicas y públicas.</p>
                  <p>Ha participado en iniciativas de impacto territorial como el programa &quot;Risaralda, Pueblos con Encanto&quot;, liderado por la Gobernación de Risaralda, donde aportó desde la arquitectura al fortalecimiento del turismo, el espacio público y la identidad cultural de distintas poblaciones del departamento.</p>
                  <p>En 2014, fue reconocido en el World Urban Forum de la ONU, obteniendo el segundo lugar internacional por su propuesta de enfoque urbano y social.</p>
                  <p>Además de su labor como proyectista, Sebastián es creador de contenido, embajador de marcas como Homecenter y Attmosferas, y un referente en el ecosistema digital arquitectónico de habla hispana. Lidera UVA no solo como un despacho de arquitectura que atiende proyectos del día a día, sino como una plataforma integral, orientada a formar arquitectos, diseñadores y constructores en áreas como marca personal, estrategias digitales y crecimiento empresarial.</p>
                  <p>Desde UVA se ofrecen diplomados, asesorías y contenidos académicos, acompañados de una mirada humana y consciente. También explora temáticas como la Bioneuroemoción, a través de su podcast &quot;Píldora UVA&quot; y su canal de YouTube &quot;UVA en Línea&quot;, donde combina arquitectura, bienestar y desarrollo personal.</p>
                  <p>Es autor del libro &quot;Vendiendo arquitectura de 0 a 100&quot;, una guía práctica para transformar la arquitectura en una empresa rentable, con propósito y proyección.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
