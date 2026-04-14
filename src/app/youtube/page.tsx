import YouTubeLatest from "@/components/youtube-latest";
import Image from "next/image";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.uvarq.com";

export const metadata: Metadata = {
  title: "Canal de YouTube UVA — Arquitectura y Diseño",
  description:
    "Descubre los videos de UVA Arquitectura en YouTube: tutoriales, vlogs, análisis de proyectos y herramientas de diseño para arquitectos.",
  openGraph: {
    title: "Canal de YouTube UVA | Arquitectura",
    description:
      "Tutoriales, reflexiones y recursos sobre arquitectura, diseño y emprendimiento en formato audiovisual.",
    url: `${BASE_URL}/youtube`,
    type: "website",
    images: [{ url: "/Humanizar/Seb.jpg", alt: "YouTube UVA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canal de YouTube UVA",
    description: "Arquitectura, diseño y emprendimiento en video.",
    images: ["/Humanizar/Seb.jpg"],
  },
  alternates: { canonical: `${BASE_URL}/youtube` },
};


export default function YouTubePage() {
  return (
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-[#FF0000] selection:text-white">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF0000]/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-900/20 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-5xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#222] border border-[#FF0000]/30 rounded-full px-4 py-1 text-[#FF0000] text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse"></span>
            Canal Oficial
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none animate-fade-in" style={{ animationDelay: '0.1s' }}>
            UVA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] via-[#ff4d4d] to-[#FF0000] drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]">
              ARQUITECTURA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Tutoriales, herramientas y reflexiones. Aprende nuevas técnicas y descubre cómo gestionamos nuestros proyectos.
          </p>

          <div className="pt-4 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a 
              href="https://youtube.com/@uvarq" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative bg-[#FF0000] text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-[#cc0000] transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,0,0,0.3)] overflow-hidden flex items-center gap-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              <span className="relative z-10">SUSCRIBIRSE AL CANAL</span>
              <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative z-10 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          
          {/* Featured Video */}
          <div className="mb-20 animate-reveal-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-white">Video Destacado</h2>
              <div className="h-px bg-[#333] flex-grow"></div>
            </div>
            
            <div className="bg-[#1a1a1a] rounded-3xl border border-[#333] p-2 md:p-4 hover:border-[#FF0000]/50 transition-colors shadow-2xl">
              <iframe
                title="Video Destacado UVA"
                className="w-full aspect-video rounded-2xl bg-[#111]"
                src="https://www.youtube.com/embed/QuLbxdf6ty4?autoplay=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
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
                { title: "Tutoriales y Software", desc: "Aprende a dominar Revit, D5 Render, IA y herramientas clave para tu flujo de trabajo.", icon: "💻" },
                { title: "Emprendimiento", desc: "Cómo vender, conseguir clientes y gestionar un estudio de arquitectura rentable.", icon: "🚀" },
                { title: "Reflexiones", desc: "Análisis de proyectos, vlogs de obra y pensamiento crítico sobre el diseño.", icon: "💡" }
              ].map((topic, i) => (
                <div key={i} className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#333] hover:border-[#FF0000] transition-all group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)]">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{topic.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF0000] transition-colors">{topic.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{topic.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Videos Grid */}
          <div className="animate-reveal-up">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-white">Últimos Videos</h2>
              <div className="h-px bg-[#333] flex-grow"></div>
            </div>

            <div className="bg-[#1a1a1a] rounded-3xl border border-[#333] p-6 hover:border-[#FF0000]/30 transition-colors">
              <YouTubeLatest max={8} />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
