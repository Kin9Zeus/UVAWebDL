import YouTubeLatest from "@/components/youtube-latest";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.uvarq.com";

export const metadata: Metadata = {
  title: "Podcast Píldora UVA — Arquitectura y Diseño",
  description:
    "Escucha el podcast de UVA Arquitectura: conversaciones sobre arquitectura, diseño, productividad y emprendimiento para arquitectos.",
  openGraph: {
    title: "Podcast Píldora UVA | Arquitectura",
    description:
      "Podcast sobre arquitectura, diseño y emprendimiento. Disponible en YouTube y Spotify.",
    url: `${BASE_URL}/podcast`,
    type: "website",
    images: [{ url: "/Humanizar/OficialPodcast.jpg", alt: "Podcast UVA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podcast Píldora UVA",
    description: "Arquitectura, diseño y emprendimiento en audio.",
    images: ["/Humanizar/OficialPodcast.jpg"],
  },
  alternates: { canonical: `${BASE_URL}/podcast` },
};


export default function PodcastPage() {
  return (
    <section>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="relative min-h-[50vh] sm:min-h-[56vh] lg:min-h-[64vh]">
          <Image src="/Humanizar/OficialPodcast.jpg" alt="Podcast UVA" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="hero-gradient absolute inset-0" />
        <div className="grain-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <div className="text-white max-w-2xl animate-reveal-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[var(--color-accent)]" />
                <span className="text-xs uppercase tracking-[0.15em] text-white/50">Podcast</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Píldora UVA
              </h1>
              <p className="mt-1 text-lg sm:text-xl text-white/50 font-light">Arquitectura, bienestar y estrategia</p>
              <p className="mt-3 text-sm sm:text-base text-white/65 max-w-lg">Conversaciones y reflexiones para arquitectos, diseñadores y constructores.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://open.spotify.com/show/0JGnY0rLz1CJHhQ4gYeRva" target="_blank" rel="noopener noreferrer" className="btn-primary rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.7 11.6a.7.7 0 01-.9.4c-2.4-1.5-5.5-1.8-9.1-.8a.7.7 0 11-.4-1.3c4-.9 7.5-.6 10.2 1.1.3.2.4.6.2.9z"/></svg>
                  Escuchar en Spotify
                </a>
                <a href="https://youtube.com/@uvarq" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] backdrop-blur-sm px-6 py-3 text-sm text-white transition-all duration-300 hover:bg-white/15 hover:border-white/40">
                  Ver canal en YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Topic Pills */}
        <div className="flex flex-wrap gap-3">
          <span className="badge badge-outline">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
            Arquitectura y oficio
          </span>
          <span className="badge badge-outline">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            Estrategia y negocio
          </span>
          <span className="badge badge-outline">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Bienestar y hábitos
          </span>
        </div>

        {/* Episode Carousel */}
        <div className="mt-12">
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none" style={{ scrollbarWidth: "none" }}>
            {[
              { img: "/Humanizar/Pod1.jpg", title: "Píldora UVA", desc: "Episodios cortos para activar tu práctica profesional." },
              { img: "/Humanizar/Pod2.jpg", title: "Historias de proceso", desc: "Aprendizajes reales: diseño, obra, clientes y equipo." },
              { img: "/Humanizar/Seb.jpg", title: "Reflexiones y bienestar", desc: "Arquitectura con sentido humano, hábitos y mentalidad." },
              { img: "/Humanizar/Seb2.jpg", title: "Detrás del micrófono", desc: "Conoce al arquitecto detrás del podcast y su visión." },
            ].map((ep) => (
              <Link
                key={ep.title}
                href="https://open.spotify.com/show/0JGnY0rLz1CJHhQ4gYeRva"
                target="_blank"
                className="group snap-center rounded-2xl overflow-hidden border border-[var(--neutral-200)] bg-[var(--surface)] min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] card-lift"
              >
                <div className="relative image-hover" style={{ aspectRatio: "16 / 10" }}>
                  <Image src={ep.img} alt={ep.title} fill sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 30vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-4 text-white font-semibold text-sm">{ep.title}</p>
                  {/* Play icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </div>
                <div className="p-4 text-sm text-[var(--neutral-500)]">{ep.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Embeds */}
        <div className="mt-16">
          <div className="separator-gold mb-12" />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[var(--neutral-200)] p-5 bg-[var(--surface)]">
              <div className="flex items-center gap-2 mb-4">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="var(--color-secondary)"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.7 11.6a.7.7 0 01-.9.4c-2.4-1.5-5.5-1.8-9.1-.8a.7.7 0 11-.4-1.3c4-.9 7.5-.6 10.2 1.1.3.2.4.6.2.9z"/></svg>
                <span className="text-sm font-medium text-[var(--foreground)]">Spotify</span>
              </div>
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
            <div className="rounded-2xl border border-[var(--neutral-200)] p-5 bg-[var(--surface)]">
              <div className="flex items-center gap-2 mb-4">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="var(--color-secondary)"><path d="M19.3 6.4a2 2 0 00-1.4-1.4C16.6 4.5 10 4.5 10 4.5s-6.6 0-7.9.5A2 2 0 00.7 6.4C.5 7.7.5 10 .5 10s0 2.3.2 3.6a2 2 0 001.4 1.4c1.3.5 7.9.5 7.9.5s6.6 0 7.9-.5a2 2 0 001.4-1.4c.2-1.3.2-3.6.2-3.6s0-2.3-.2-3.6zM8 13.5v-7l5 3.5-5 3.5z"/></svg>
                <span className="text-sm font-medium text-[var(--foreground)]">YouTube</span>
              </div>
              <YouTubeLatest max={4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
