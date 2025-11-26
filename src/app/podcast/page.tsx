import YouTubeLatest from "@/components/youtube-latest";
import Image from "next/image";
import Link from "next/link";

export default function PodcastPage() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative min-h-[48vh] sm:min-h-[56vh] lg:min-h-[64vh]">
            <Image src="/Humanizar/OficialPodcast.jpg" alt="Podcast UVA" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end p-6 sm:p-10">
            <div className="text-white max-w-2xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Píldora UVA — Arquitectura, bienestar y estrategia</h1>
              <p className="mt-2 text-sm sm:text-base opacity-90">Conversaciones y reflexiones para arquitectos, diseñadores y constructores.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://open.spotify.com/show/0JGnY0rLz1CJHhQ4gYeRva" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[var(--color-secondary)] px-5 py-2 text-white">Escuchar en Spotify</a>
                <a href="https://youtube.com/@uvarq" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/70 px-5 py-2 text-white hover:bg-white/10">Ver canal en YouTube</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 text-xs text-neutral-600 sm:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 bg-white p-3">Arquitectura y oficio</div>
          <div className="rounded-lg border border-neutral-200 bg-white p-3">Estrategia y negocio</div>
          <div className="rounded-lg border border-neutral-200 bg-white p-3">Bienestar y hábitos</div>
        </div>

        <div className="mt-12 relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent" />
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
            <Link href="https://open.spotify.com/show/0JGnY0rLz1CJHhQ4gYeRva" target="_blank" className="group snap-center rounded-xl overflow-hidden border border-neutral-200 bg-white min-w-[85%] sm:min-w-[50%] lg:min-w-[33%]">
              <div className="relative transition-transform duration-300 group-hover:scale-[1.02]" style={{ aspectRatio: "16 / 10" }}>
                <Image src="/Humanizar/Pod1.jpg" alt="Episodios Píldora UVA" fill sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white font-medium">Píldora UVA</p>
              </div>
              <div className="p-4 text-sm text-neutral-700">Episodios cortos para activar tu práctica profesional.</div>
            </Link>
            <Link href="https://open.spotify.com/show/0JGnY0rLz1CJHhQ4gYeRva" target="_blank" className="group snap-center rounded-xl overflow-hidden border border-neutral-200 bg-white min-w-[85%] sm:min-w-[50%] lg:min-w-[33%]">
              <div className="relative transition-transform duration-300 group-hover:scale-[1.02]" style={{ aspectRatio: "16 / 10" }}>
                <Image src="/Humanizar/Pod2.jpg" alt="Historias y procesos" fill sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white font-medium">Historias de proceso</p>
              </div>
              <div className="p-4 text-sm text-neutral-700">Aprendizajes reales: diseño, obra, clientes y equipo.</div>
            </Link>
            <Link href="https://open.spotify.com/show/0JGnY0rLz1CJHhQ4gYeRva" target="_blank" className="group snap-center rounded-xl overflow-hidden border border-neutral-200 bg-white min-w-[85%] sm:min-w-[50%] lg:min-w-[33%]">
              <div className="relative transition-transform duration-300 group-hover:scale-[1.02]" style={{ aspectRatio: "16 / 10" }}>
                <Image src="/Humanizar/Seb.jpg" alt="Reflexiones y bienestar" fill sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white font-medium">Reflexiones y bienestar</p>
              </div>
              <div className="p-4 text-sm text-neutral-700">Arquitectura con sentido humano, hábitos y mentalidad.</div>
            </Link>
            <Link href="https://open.spotify.com/show/0JGnY0rLz1CJHhQ4gYeRva" target="_blank" className="group snap-center rounded-xl overflow-hidden border border-neutral-200 bg-white min-w-[85%] sm:min-w-[50%] lg:min-w-[33%]">
              <div className="relative transition-transform duration-300 group-hover:scale-[1.02]" style={{ aspectRatio: "16 / 10" }}>
                <Image src="/Humanizar/Seb2.jpg" alt="Detrás del micrófono" fill sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white font-medium">Detrás del micrófono</p>
              </div>
              <div className="p-4 text-sm text-neutral-700">Conoce al arquitecto detrás del podcast y su visión.</div>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-4 bg-white">
            <p className="text-sm text-neutral-500 mb-3">Spotify</p>
            <iframe
              title="Píldora UVA (Video del show)"
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/show/0JGnY0rLz1CJHhQ4gYeRva/video?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4 bg-white">
            <YouTubeLatest max={4} />
          </div>
        </div>
      </div>
    </section>
  );
}
