import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid items-center gap-10 lg:gap-16 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">
              <span>Arquitectura</span>
              <span>·</span>
              <span>Diseño</span>
              <span>·</span>
              <span>Educación</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-tertiary)]">
              UVA — Unidad Vectorial de Arquitectura
            </h1>
            <p className="mt-4 text-neutral-600 max-w-xl">
              Plataforma profesional para aprender arquitectura, explorar proyectos y acceder a servicios de diseño.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cursos" className="rounded-full bg-[var(--color-secondary)] px-5 py-3 text-white hover:opacity-90 transition">Ver cursos</Link>
              <Link href="/servicios" className="rounded-full border border-neutral-300 px-5 py-3 text-[var(--color-tertiary)] hover:bg-neutral-50 transition">Servicios de arquitectura</Link>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-neutral-600">
              <div className="rounded-lg border border-neutral-200 p-3">
                <p className="font-medium text-[var(--color-tertiary)]">+50</p>
                <p>Proyectos</p>
              </div>
              <div className="rounded-lg border border-neutral-200 p-3">
                <p className="font-medium text-[var(--color-tertiary)]">+10000</p>
                <p>Estudiantes</p>
              </div>
              <div className="rounded-lg border border-neutral-200 p-3">
                <p className="font-medium text-[var(--color-tertiary)]">+13</p>
                <p>Años</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-white to-neutral-100" />
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
              <Image
                src="/Portada-Arenas.jpg"
                alt="Portada"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 40vw"
                className="shadow-sm transition-transform duration-500 hover:scale-[1.02]"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/cursos" className="group rounded-2xl border border-neutral-200 p-6 bg-white hover:shadow-sm transition">
            <div className="flex items-center gap-3">
              <Image src="/file.svg" alt="Cursos" width={24} height={24} className="h-6 w-6" />
              <p className="font-medium text-[var(--color-tertiary)]">Cursos y diplomados</p>
            </div>
            <p className="mt-2 text-sm text-neutral-600">Formación profesional en arquitectura y gestión.</p>
          </Link>
          <Link href="/proyectos" className="group rounded-2xl border border-neutral-200 p-6 bg-white hover:shadow-sm transition">
            <div className="flex items-center gap-3">
              <Image src="/window.svg" alt="Proyectos" width={24} height={24} className="h-6 w-6" />
              <p className="font-medium text-[var(--color-tertiary)]">Proyectos UVA</p>
            </div>
            <p className="mt-2 text-sm text-neutral-600">Galería profesional de arquitectura y diseño.</p>
          </Link>
          <Link href="/servicios" className="group rounded-2xl border border-neutral-200 p-6 bg-white hover:shadow-sm transition">
            <div className="flex items-center gap-3">
              <Image src="/globe.svg" alt="Servicios" width={24} height={24} className="h-6 w-6" />
              <p className="font-medium text-[var(--color-tertiary)]">Servicios</p>
            </div>
            <p className="mt-2 text-sm text-neutral-600">Diseño arquitectónico, urbano e interior.</p>
          </Link>
          <Link href="/podcast" className="group rounded-2xl border border-neutral-200 p-6 bg-white hover:shadow-sm transition">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                <path d="M12 14a3 3 0 003-3V6a3 3 0 10-6 0v5a3 3 0 003 3zm-7-3a7 7 0 0014 0h-2a5 5 0 01-10 0H5zm7 8a6 6 0 006-6h-2a4 4 0 11-8 0H6a6 6 0 006 6zm-1 3h2v-3h-2v3z"/>
              </svg>
              <p className="font-medium text-[var(--color-tertiary)]">Podcast</p>
            </div>
            <p className="mt-2 text-sm text-neutral-600">Conversaciones sobre arquitectura y práctica.</p>
          </Link>
        </div>

        <section className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-tertiary)]">Quiénes somos</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "4 / 5" }}>
                <Image src="/projects/La-Mahaus/5.jpg" alt="UVA Arquitectura" fill sizes="(max-width: 768px) 100vw, 640px" style={{ objectFit: "cover" }} />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-[var(--color-tertiary)]">UVA Arquitectura — Diseño, innovación y construcción con propósito</h3>
                <div className="mt-3 space-y-3 text-sm text-neutral-700">
                  <p>UVA Arquitectura es un estudio creativo y multidisciplinar fundado y dirigido por el Arquitecto, Magister en Arquitectura y Urbanismo, Sebastián Arias Duque, especializado en arquitectura residencial, comercial y urbana con enfoque estratégico. Nuestro propósito es transformar espacios en experiencias memorables que potencien el estilo de vida, la productividad y el valor patrimonial.</p>
                  <p>Desde el diseño conceptual hasta la entrega final, trabajamos con una visión integral: arquitectura, diseño interior, construcción, gestión de costos, marketing inmobiliario y desarrollo de marca. Cada proyecto es una oportunidad para generar soluciones reales, eficientes y emocionalmente conectadas con la esencia del usuario.</p>
                  <h4 className="font-medium text-[var(--color-tertiary)]">Qué nos hace distintos</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Arquitectura estratégica: no solo diseñamos espacios; diseñamos experiencias rentables que funcionan en el tiempo.</li>
                    <li>Metodología UVA: procesos claros, asesoría honesta, acompañamiento completo y comunicación constante.</li>
                    <li>Ejecución profesional: control técnico, presupuestos detallados, APUs, dirección de obra y garantías reales.</li>
                    <li>Diseño con identidad: estética contemporánea, materiales nobles, innovación y carácter.</li>
                  </ul>
                  <h4 className="font-medium text-[var(--color-tertiary)]">Servicios UVA Arquitectura</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Diseño arquitectónico residencial y premium. Proyectos urbanos, parcelaciones, casas campestres y vivienda de alto nivel.</li>
                    <li>Arquitectura comercial y branding espacial. Restaurantes, oficinas, retail, clínicas, hoteles y puntos de experiencia de marca.</li>
                    <li>Diseño interior y amoblamiento a medida. Optimización espacial, iluminación, mobiliario, recorridos y percepción de usuario.</li>
                    <li>Construcción y remodelación integral. Llave en mano, administración delegada, dirección de obra y control técnico-financiero.</li>
                    <li>Urbanismo y territorio. Diseño vial, paisajismo, movilidad, perfiles viales y planificación sostenible.</li>
                  </ul>
                  <h4 className="font-medium text-[var(--color-tertiary)]">Ecosistema UVA</h4>
                  <p>UVA no es solo un estudio, es un ecosistema de conocimiento, contenido y crecimiento profesional. Desarrollamos libros de arquitectura y marketing, diplomados, consultorías, acompañamiento a arquitectos y alianzas estratégicas con marcas y entidades públicas.</p>
                  <h4 className="font-medium text-[var(--color-tertiary)]">Nuestro ADN</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Diseñamos para transformar vidas.</li>
                    <li>Creemos en la arquitectura como vehículo de evolución humana, económica y social.</li>
                    <li>Cada proyecto que entregamos refleja nuestro compromiso con la estética, la función y la rentabilidad.</li>
                  </ul>
                  <p>Trabajamos donde estés: Con presencia en Pereira, Medellín, Bogotá y el Eje Cafetero, operamos en todo el territorio colombiano y proyectos internacionales.</p>
                  <p className="font-medium">UVA Arquitectura — Arquitectura con alma. Diseño con carácter. Construcción con visión. Crecemos contigo, construimos tu mundo.</p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "4 / 5" }}>
                <Image src="/Sebastian2.jpg" alt="Sebastián Arias Duque" fill sizes="(max-width: 768px) 100vw, 640px" style={{ objectFit: "cover" }} />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-[var(--color-tertiary)]">Sebastián Arias Duque — Arquitecto fundador</h3>
                <div className="mt-3 space-y-3 text-sm text-neutral-700">
                  <p>Sebastián Arias Duque es arquitecto y magíster en Arquitectura y Urbanismo, fundador de UVA Arquitectura, una firma que integra diseño, estrategia empresarial y formación académica. A lo largo de su trayectoria ha desarrollado proyectos de vivienda en el sector privado, así como intervenciones comerciales, clínicas y públicas.</p>
                  <p>Ha participado en iniciativas de impacto territorial como el programa “Risaralda, Pueblos con Encanto”, liderado por la Gobernación de Risaralda, donde aportó desde la arquitectura al fortalecimiento del turismo, el espacio público y la identidad cultural de distintas poblaciones del departamento.</p>
                  <p>En 2014, fue reconocido en el World Urban Forum de la ONU, obteniendo el segundo lugar internacional por su propuesta de enfoque urbano y social.</p>
                  <p>Además de su labor como proyectista, Sebastián es creador de contenido, embajador de marcas como Homecenter y Attmosferas, y un referente en el ecosistema digital arquitectónico de habla hispana. Lidera UVA no solo como un despacho de arquitectura que atiende proyectos del día a día, sino como una plataforma integral, orientada a formar arquitectos, diseñadores y constructores en áreas como marca personal, estrategias digitales y crecimiento empresarial.</p>
                  <p>Desde UVA se ofrecen diplomados, asesorías y contenidos académicos, acompañados de una mirada humana y consciente. También explora temáticas como la Bioneuroemoción, a través de su podcast “Píldora UVA” y su canal de YouTube “UVA en Línea”, donde combina arquitectura, bienestar y desarrollo personal.</p>
                  <p>Es autor del libro “Vendiendo arquitectura de 0 a 100”, una guía práctica para transformar la arquitectura en una empresa rentable, con propósito y proyección.</p>
                </div>
              </div>
            </article>
          </div>
        </section>

      </div>
    </section>
  );
}
