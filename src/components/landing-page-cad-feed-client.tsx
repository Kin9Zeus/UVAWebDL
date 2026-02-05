"use client";

import { useState, useEffect } from "react";
import { Course } from "@/lib/data/courses";

interface Props {
  course: Course;
}

export default function LandingPageCadFeedClient({ course }: Props) {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-[#fa9b18] selection:text-white overflow-x-hidden">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* Top Urgent Banner */}
      <div className="bg-gradient-to-r from-[#c06b00] via-[#fa9b18] to-[#c06b00] text-white text-xs md:text-sm font-bold text-center py-2 sticky top-0 z-50 shadow-lg animate-shimmer bg-[length:200%_100%]">
        🔥 GUÍA DIGITAL + CURSO EN VIDEO - PRECIO PROMOCIONAL POR TIEMPO LIMITADO
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#fa9b18]/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/20 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#222] border border-[#fa9b18]/30 rounded-full px-4 py-1 text-[#ffc67a] text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#fa9b18] animate-pulse"></span>
            Libro Digital Recomendado
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none animate-fade-in" style={{ animationDelay: '0.1s' }}>
            DEL CAD <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fa9b18] via-[#ffdcb0] to-[#fa9b18] drop-shadow-[0_0_15px_rgba(250,155,24,0.5)]">
              AL FEED
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            ¿Eres arquitecto, diseñador o creativo y sientes que publicas en redes pero no vendes? No es falta de talento. Es falta de estrategia.
          </p>
          
          <div className="pt-8 flex flex-col md:flex-row justify-center items-center gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="#pricing" className="group relative bg-[#fa9b18] text-white text-xl font-black px-10 py-5 rounded-full hover:bg-[#d67e05] transition-all hover:scale-105 shadow-[0_0_40px_rgba(250,155,24,0.5)] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                DESCARGAR GUÍA AHORA
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </span>
              <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
            </a>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="text-[#fa9b18]">✓</span> Entrega Digital Inmediata
              <span className="text-[#fa9b18] ml-2">✓</span> Guía + Curso
            </p>
          </div>
        </div>
      </section>

      {/* Video Section - High Impact */}
      <section className="py-12 px-4 bg-[#161616] relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1 space-y-8">
              <div className="space-y-4">
                 <h3 className="text-[#ffc67a] font-bold tracking-widest uppercase text-sm">Contenido Práctico</h3>
                 <h2 className="text-4xl font-bold leading-tight">No es teoría vacía, es <span className="text-white border-b-4 border-[#fa9b18]">Experiencia Aplicada</span></h2>
                 <p className="text-gray-400 text-lg">
                   Esta es la guía práctica que te enseña cómo pasar del diseño al contenido y del contenido a las ventas. Ideal para quienes quieren dejar de improvisar.
                 </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#222] p-4 rounded-lg border-l-4 border-[#fa9b18]">
                   <div className="text-3xl font-bold text-white mb-1">244</div>
                   <div className="text-sm text-gray-400">Páginas de Contenido</div>
                </div>
                <div className="bg-[#222] p-4 rounded-lg border-l-4 border-[#fa9b18]">
                   <div className="text-3xl font-bold text-white mb-1">100%</div>
                   <div className="text-sm text-gray-400">Estrategia Real</div>
                </div>
              </div>
           </div>

           <div className="order-1 md:order-2 flex justify-center">
             <div className="relative w-full max-w-[300px] rounded-2xl overflow-hidden border-4 border-[#333] shadow-[0_20px_50px_rgba(250,155,24,0.3)] bg-black animate-float">
                <div className="absolute top-0 inset-x-0 h-6 bg-[#222] z-10 flex justify-center items-center">
                   <div className="w-16 h-1 bg-[#444] rounded-full"></div>
                </div>
                <video 
                  controls 
                  className="w-full h-auto aspect-[9/16] object-cover"
                  poster="/Humanizar/del_cad_al_feed.png" 
                >
                  <source src="/Humanizar/del_cad_al_feed.mov" type="video/quicktime" />
                  <source src="/Humanizar/del_cad_al_feed.mov" type="video/mp4" />
                </video>
             </div>
           </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
            ¿Qué aprenderás?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Instagram Pro", desc: "Cómo usar Instagram de forma profesional y no como un aficionado.", icon: "📱" },
              { title: "Reels con Alcance", desc: "Qué tipo de Reels generan alcance real y atraen miradas.", icon: "🎥" },
              { title: "Estrategia de Publicación", desc: "Cuándo publicar y por qué. Deja de adivinar horarios.", icon: "📅" },
              { title: "Hooks Efectivos", desc: "Ganchos para captar la atención de tu cliente ideal en segundos.", icon: "🪝" },
              { title: "Viralidad con Autoridad", desc: "Crea contenido viral sin perder tu postura profesional.", icon: "🚀" },
              { title: "Meta Ads", desc: "Pautas pagas efectivas para dejar de quemar dinero.", icon: "💸" },
              { title: "Canva para Redes", desc: "Diseño ágil y estético aplicado específicamente a redes sociales.", icon: "🎨" },
              { title: "IA para Crecer", desc: "Usa inteligencia artificial para crear más contenido en menos tiempo.", icon: "🤖" },
              { title: "Monetización Real", desc: "Cómo monetizar tus redes de forma real, convirtiendo seguidores en clientes.", icon: "💰" }
            ].map((card, i) => (
              <div key={i} className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#333] hover:border-[#fa9b18] transition-colors group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus / Content List */}
      <section className="pt-8 pb-24 bg-[#161616]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#ffc67a] font-bold tracking-wider">CONTENIDO</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Lo que incluye la guía</h2>
          </div>
          
          <div className="bg-[#222] rounded-3xl border border-[#333] p-8 md:p-12 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#fa9b18]/10 rounded-full blur-[80px] -z-10"></div>
             
             <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
               {course.syllabus?.[0].items?.map((item, idx) => (
                 <div key={idx} className="flex items-start gap-3">
                   <span className="text-[#fa9b18] font-bold mt-1">✅</span>
                   <p className="text-gray-300 text-lg">{item}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Pricing / Offer Section */}
      <section id="pricing" className="py-24 px-4 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#222] to-[#111]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
           <div className="bg-[#1a1a1a] border border-[#fa9b18]/50 rounded-3xl p-8 md:p-16 shadow-[0_0_60px_rgba(250,155,24,0.15)] relative overflow-hidden text-center">
             
             {/* Metallic Shine Effect */}
             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fff] to-transparent opacity-50"></div>
             
             <div className="absolute top-8 right-8 rotate-12 bg-gradient-to-r from-[#fa9b18] to-[#c06b00] text-white text-sm font-bold px-4 py-1 rounded shadow-lg">
               -53% OFF
             </div>
             
             <h2 className="text-3xl md:text-5xl font-black mb-2">OBTÉN TU COPIA HOY</h2>
             <p className="text-gray-400 mb-8">Acceso inmediato a la guía + curso</p>

             <div className="space-y-2 mb-8">
               <p className="text-gray-500 text-xl line-through">Precio Regular: $85 USD</p>
               <div className="flex items-center justify-center gap-2">
                 <span className="text-7xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_10px_rgba(250,155,24,0.8)]">${course.price}</span>
                 <span className="text-2xl font-bold text-[#fa9b18]">USD</span>
               </div>
               <p className="text-[#fa9b18] font-bold text-lg bg-[#fa9b18]/10 inline-block px-4 py-1 rounded-full">
                 ¡Ahorras $45 USD!
               </p>
             </div>

             <div className="max-w-md mx-auto space-y-6">
               {course.hotmartLink ? (
                  <a 
                    href={course.hotmartLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 w-full rounded-full bg-[#fa9b18] px-5 py-3 text-white font-bold text-center hover:bg-[#d67e05] transition-colors"
                  >
                    COMPRAR AHORA
                  </a>
               ) : (
                 <a 
                   href="/contacto"
                   className="block mt-4 w-full rounded-full bg-[#fa9b18] px-5 py-3 text-white text-center font-bold hover:opacity-90 transition-opacity"
                 >
                   Más Información
                 </a>
               )}
                
                <div className="flex items-center justify-center gap-4 opacity-70">
                   <div className="flex -space-x-2">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-[#1a1a1a]"></div>
                     ))}
                   </div>
                   <p className="text-xs text-gray-400">Únete a cientos de arquitectos que ya lo aplicaron</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Sticky Bottom CTA (Mobile/Tablet) */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#222] border-t border-[#fa9b18]/30 p-4 z-50 transform transition-transform duration-300 md:hidden ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-400">Precio Promocional</p>
            <p className="text-lg font-bold text-white">${course.price} USD</p>
          </div>
          <a href="#pricing" className="bg-[#fa9b18] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#d67e05]">
            Descargar
          </a>
        </div>
      </div>
    </div>
  );
}
