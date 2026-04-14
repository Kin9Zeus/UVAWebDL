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
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-[#1DB954] selection:text-black">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1DB954]/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-900/20 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-5xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#222] border border-[#1DB954]/30 rounded-full px-4 py-1 text-[#1DB954] text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse"></span>
            Podcast Oficial
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none animate-fade-in" style={{ animationDelay: '0.1s' }}>
            PÍLDORA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB954] via-[#4ade80] to-[#1DB954] drop-shadow-[0_0_15px_rgba(29,185,84,0.5)]">
              UVA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Arquitectura, bienestar y estrategia. Conversaciones y reflexiones para arquitectos, diseñadores y constructores.
          </p>

          <div className="pt-4 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a 
              href="https://open.spotify.com/show/0JGnY0rLz1CJHhQ4gYeRva" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative bg-[#1DB954] text-black text-lg font-bold px-8 py-4 rounded-full hover:bg-[#1ed760] transition-all hover:scale-105 shadow-[0_0_30px_rgba(29,185,84,0.3)] overflow-hidden flex items-center gap-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.3 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.841.241 1.2zM19.08 9.3C14.759 6.721 8.52 6.541 4.92 7.621c-.6.18-1.2-.181-1.38-.781-.18-.6.18-1.2.78-1.381 4.2-1.2 11.04-1.02 15.96 1.98.54.3.72 1.02.42 1.56-.3.541-1.02.72-1.62.3z"/></svg>
              <span className="relative z-10">ESCUCHAR EN SPOTIFY</span>
              <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative z-10 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          
          {/* Featured Episode / Spotify Player */}
          <div className="mb-20 animate-reveal-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-white">Episodio Destacado</h2>
              <div className="h-px bg-[#333] flex-grow"></div>
            </div>
            
            <div className="bg-[#1a1a1a] rounded-3xl border border-[#333] p-2 md:p-4 hover:border-[#1DB954]/50 transition-colors shadow-2xl">
              <iframe
                title="Píldora UVA (Video del show)"
                style={{ borderRadius: 16 }}
                src="https://open.spotify.com/embed/show/0JGnY0rLz1CJHhQ4gYeRva/video?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full bg-[#111]"
              />
            </div>
          </div>

          {/* Topics Grid */}
          <div className="mb-20 animate-reveal-up">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-white">Temáticas</h2>
              <div className="h-px bg-[#333] flex-grow"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Arquitectura y oficio", desc: "El día a día del arquitecto, diseño, obra y trato con clientes.", icon: "🏗️" },
                { title: "Estrategia y negocio", desc: "Ventas, marketing, posicionamiento y gestión de estudios de arquitectura.", icon: "📈" },
                { title: "Bienestar y hábitos", desc: "Productividad, salud mental y equilibrio entre vida y profesión.", icon: "🧘‍♂️" }
              ].map((topic, i) => (
                <div key={i} className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#333] hover:border-[#1DB954] transition-all group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(29,185,84,0.1)]">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{topic.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1DB954] transition-colors">{topic.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{topic.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Episode Gallery */}
          <div className="animate-reveal-up">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-white">Galería de Episodios</h2>
              <div className="h-px bg-[#333] flex-grow"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: "/Humanizar/Pod1.jpg", title: "Píldora UVA", desc: "Episodios cortos para activar tu práctica profesional.", link: "https://open.spotify.com/show/0JGnY0rLz1CJHhQ4gYeRva" },
                { img: "/Humanizar/Pod2.jpg", title: "Historias de proceso", desc: "Aprendizajes reales: diseño, obra, clientes y equipo.", link: "https://open.spotify.com/episode/2eYmhjvHH9VsaOTpPD6fps?si=9a99b930a1e448b5" },
                { img: "/Humanizar/Seb.jpg", title: "Reflexiones y bienestar", desc: "Arquitectura con sentido humano, hábitos y mentalidad.", link: "https://open.spotify.com/episode/1gPq42iMlvdGT06PytRL9v?si=dcf59b8a21d74433" },
                { img: "/Humanizar/Seb2.jpg", title: "Detrás del micrófono", desc: "Conoce al arquitecto detrás del podcast y su visión.", link: "https://open.spotify.com/episode/5sn5DL7nx1uYJu2z2pZpOE?si=a0e796fe9281491c" },
              ].map((ep, idx) => (
                <Link
                  key={idx}
                  href={ep.link}
                  target="_blank"
                  className="group flex flex-col bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#333] hover:border-[#1DB954] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(29,185,84,0.1)]"
                >
                  <div className="relative w-full aspect-square overflow-hidden bg-[#111]">
                    <Image 
                      src={ep.img} 
                      alt={ep.title} 
                      fill 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    {/* Spotify Icon overlay */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[#1DB954] text-black flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.3 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.841.241 1.2zM19.08 9.3C14.759 6.721 8.52 6.541 4.92 7.621c-.6.18-1.2-.181-1.38-.781-.18-.6.18-1.2.78-1.381 4.2-1.2 11.04-1.02 15.96 1.98.54.3.72 1.02.42 1.56-.3.541-1.02.72-1.62.3z"/></svg>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-white mb-2 group-hover:text-[#1DB954] transition-colors line-clamp-1">{ep.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{ep.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
