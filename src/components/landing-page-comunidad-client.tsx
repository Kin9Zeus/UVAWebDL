"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const BeforeAfter = ({ before, after, title }: { before: string, after: string, title: string }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div 
      className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-[#333] hover:border-[#5865F2] transition-colors shadow-lg group"
      onClick={() => setIsRevealed(!isRevealed)}
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      role="button"
      aria-pressed={isRevealed}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsRevealed(!isRevealed);
        }
      }}
    >
      {/* Imagen "Antes" */}
      <Image src={before} alt={`${title} Antes`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      
      {/* Imagen "Después" e indicativo de IA */}
      <div 
        className={`absolute inset-0 z-10 transition-opacity duration-500 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}
      >
        <Image src={after} alt={`${title} Después`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        <div className="absolute bottom-4 right-4 bg-[#5865F2] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          Resultado IA
        </div>
      </div>

      {/* Etiqueta "Modelo Original" */}
      <div 
        className={`absolute bottom-4 left-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md transition-opacity duration-500 ${isRevealed ? 'opacity-0' : 'opacity-100'}`}
      >
        Modelo 3D Original
      </div>

      {/* Indicador visual para móviles (Solo visible en pantallas pequeñas cuando no está revelado) */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full pointer-events-none md:hidden transition-opacity duration-300 ${isRevealed ? 'opacity-0' : 'opacity-100'}`}>
        Toca para ver la magia ✨
      </div>
    </div>
  );
};

export default function LandingPageComunidadClient() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.link/zudao0";
  const discordColor = "#5865F2"; // Discord Blurple
  const discordColorLight = "#7983F5"; // Lighter shade

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-[#5865F2] selection:text-white overflow-x-hidden">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* Top Urgent Banner */}
      <div className="relative bg-gradient-to-r from-[#404EED] via-[#5865F2] to-[#404EED] text-white text-xs md:text-sm font-bold text-center py-2 sticky top-0 z-50 shadow-lg overflow-hidden">
        <div className="absolute inset-0 animate-shimmer bg-[length:200%_100%] z-0"></div>
        <span className="relative z-10">🔥 ÚNETE A NUESTRO GRUPO PRIVADO EN DISCORD - PRECIO ESPECIAL DE LANZAMIENTO!</span>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#5865F2]/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#222] border border-[#5865F2]/30 rounded-full px-4 py-1 text-[#9FA6FF] text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#5865F2] animate-pulse"></span>
            Comunidad Exclusiva de Arquitectura
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none animate-fade-in" style={{ animationDelay: '0.1s' }}>
            ÚNETE A NUESTRO <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5865F2] via-[#9FA6FF] to-[#5865F2] drop-shadow-[0_0_15px_rgba(88,101,242,0.5)]">
              GRUPO PRIVADO
            </span> <br />
            EN DISCORD
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Crece con tu empresa y llega a otro nivel. Asesoría, recursos y networking en tiempo real.
          </p>
          
          <div className="pt-8 flex flex-col md:flex-row justify-center items-center gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative bg-[#5865F2] text-white text-xl font-black px-10 py-5 rounded-full hover:bg-[#4752C4] transition-all hover:scale-105 shadow-[0_0_40px_rgba(88,101,242,0.5)] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                UNIRME AHORA
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
              <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
            </a>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="text-[#5865F2]">✓</span> Acceso Inmediato
              <span className="text-[#5865F2] ml-2">✓</span> Sin cláusula de permanencia
            </p>
          </div>
        </div>
      </section>

      {/* Video Section - High Impact */}
      <section className="py-12 px-4 bg-[#161616] relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1 space-y-8">
              <div className="space-y-4">
                 <h3 className="text-[#9FA6FF] font-bold tracking-widest uppercase text-sm">Comunidad Activa</h3>
                 <h2 className="text-4xl font-bold leading-tight">No estás solo, estás <span className="text-white border-b-4 border-[#5865F2]">Conectado</span></h2>
                 <p className="text-gray-400 text-lg">
                   Accede a una red de profesionales donde resolvemos dudas en tiempo real, compartimos oportunidades y crecemos juntos.
                 </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#222] p-4 rounded-lg border-l-4 border-[#5865F2]">
                   <div className="text-3xl font-bold text-white mb-1">24/7</div>
                   <div className="text-sm text-gray-400">Asesoría Constante</div>
                </div>
                <div className="bg-[#222] p-4 rounded-lg border-l-4 border-[#5865F2]">
                   <div className="text-3xl font-bold text-white mb-1">+500</div>
                   <div className="text-sm text-gray-400">Recursos Exclusivos</div>
                </div>
              </div>
           </div>

           <div className="order-1 md:order-2 flex justify-center">
             <div className="relative w-full max-w-[300px] rounded-2xl overflow-hidden border-4 border-[#333] shadow-[0_20px_50px_rgba(88,101,242,0.3)] bg-black animate-float">
                <div className="absolute top-0 inset-x-0 h-6 bg-[#222] z-10 flex justify-center items-center">
                   <div className="w-16 h-1 bg-[#444] rounded-full"></div>
                </div>
                <video 
                  controls 
                  className="w-full h-auto aspect-[9/16] object-cover"
                  poster="/Humanizar/UVADiscordImg.jpeg" 
                >
                  <source src="/Humanizar/UVADiscordVideo.mov" type="video/quicktime" />
                  <source src="/Humanizar/UVADiscordVideo.mov" type="video/mp4" />
                </video>
             </div>
           </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
            Todo lo que incluye tu membresía
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Asesoría 24/7", desc: "Mi equipo y yo te ayudamos a resolver dudas de tus proyectos en tiempo real.", icon: "👷‍♂️" },
              { title: "Ofertas Laborales", desc: "Publicamos vacantes y oportunidades de trabajo todos los lunes y jueves.", icon: "💼" },
              { title: "Documentos y Plantillas", desc: "Acceso a contratos, presupuestos y formatos listos para usar.", icon: "📑" },
              { title: "Charlas Semanales", desc: "Sesiones en vivo con expertos sobre temas clave de la profesión.", icon: "🎤" },
              { title: "Diplomados Incluidos", desc: "Acceso a contenido educativo premium sin costo adicional.", icon: "🎓" },
              { title: "Biblioteca Digital", desc: "Más de 500 libros y 200 archivos útiles para tu crecimiento.", icon: "📚" }
            ].map((card, i) => (
              <div key={i} className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#333] hover:border-[#5865F2] transition-colors group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Render Section */}
      <section className="py-24 bg-[#161616] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5865F2]/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9FA6FF]/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#9FA6FF] font-bold tracking-widest uppercase text-sm">Innovación Tecnológica</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Renderizado con <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5865F2] to-[#9FA6FF]">IA Exclusivo</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Desarrollada por el equipo de diseño de <strong className="text-white">UVA Arquitectura</strong> junto a nuestro Ingeniero de Software e IA, <strong className="text-[#9FA6FF]">Aleck Martinez</strong>. Hemos entrenado un algoritmo capaz de interpretar tus modelos 3D básicos y transformarlos en renders hiperrealistas en segundos. Solo envía una imagen de tu modelo a nuestro bot en Discord y recibe el resultado final.
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-[#333] shadow-2xl bg-black">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src="/Humanizar/Casa_explotando%20en_render.mp4" type="video/mp4" />
                </video>
              </div>
              <h3 className="text-xl font-bold text-white text-center">Generación Inteligente</h3>
              <p className="text-gray-400 text-center text-sm px-4">El algoritmo analiza la geometría, materiales e iluminación de tu modelo 3D paso a paso para construir un render físicamente exacto.</p>
            </div>
            <div className="space-y-4">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-[#333] shadow-2xl bg-black">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src="/Humanizar/Bouncy_Scale_Animation_Living_room.mp4" type="video/mp4" />
                </video>
              </div>
              <h3 className="text-xl font-bold text-white text-center">Animación Dinámica</h3>
              <p className="text-gray-400 text-center text-sm px-4">No solo imágenes estáticas. La IA es capaz de procesar y generar secuencias dinámicas para dar vida a tus espacios interiores y exteriores.</p>
            </div>
          </div>

          {/* Before / After Grid */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Transformación Inmediata</h3>
              <p className="text-gray-400 text-sm">Pasa el cursor (o toca en móvil) sobre las imágenes para ver la magia de la IA en acción.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <BeforeAfter 
                before="/Humanizar/Casa_exterior_antes.png" 
                after="/Humanizar/Casa_exterior_despues.png" 
                title="Exterior Residencial" 
              />
              <BeforeAfter 
                before="/Humanizar/Living_room_antes.png" 
                after="/Humanizar/Living_room_despues.png" 
                title="Sala de Estar" 
              />
              <BeforeAfter 
                before="/Humanizar/BBQ_antes.png" 
                after="/Humanizar/BBQ_despues.png" 
                title="Zona BBQ" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Offer Section */}
      <section id="pricing" className="py-24 px-4 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#222] to-[#111]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
           <div className="bg-[#1a1a1a] border border-[#5865F2]/50 rounded-3xl p-8 md:p-16 shadow-[0_0_60px_rgba(88,101,242,0.15)] relative overflow-hidden text-center">
             
             {/* Metallic Shine Effect */}
             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fff] to-transparent opacity-50"></div>
             
             <div className="absolute top-8 right-8 rotate-12 bg-gradient-to-r from-[#5865F2] to-[#404EED] text-white text-sm font-bold px-4 py-1 rounded shadow-lg hidden md:block">
               OFERTA LIMITADA
             </div>
             
             <h2 className="text-3xl md:text-5xl font-black mb-2">ÚNETE A LA COMUNIDAD</h2>
             <p className="text-gray-400 mb-8">Empieza hoy mismo a transformar tu carrera profesional</p>

             <div className="space-y-2 mb-8">
               <p className="text-gray-500 text-xl line-through">Precio Regular: $20 USD/mes</p>
               <div className="flex items-center justify-center gap-2">
                 <span className="text-7xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_10px_rgba(88,101,242,0.8)]">$7</span>
                 <div className="flex flex-col items-start">
                    <span className="text-2xl font-bold text-[#5865F2]">USD</span>
                    <span className="text-sm text-gray-400">/mes</span>
                 </div>
               </div>
               <p className="text-[#5865F2] font-bold text-lg bg-[#5865F2]/10 inline-block px-4 py-1 rounded-full">
                 Sin cláusula de permanencia
               </p>
             </div>

             <div className="max-w-md mx-auto space-y-6">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 w-full rounded-full bg-[#5865F2] px-5 py-3 text-white font-bold text-center hover:bg-[#4752C4] transition-colors shadow-lg shadow-[#5865F2]/20"
                >
                  Unirme Ahora
                </a>
                
                <div className="flex items-center justify-center gap-4 opacity-70">
                   <div className="flex -space-x-2">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-[#1a1a1a]"></div>
                     ))}
                   </div>
                   <p className="text-xs text-gray-400">Únete a cientos de arquitectos conectados</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Sticky Bottom CTA (Mobile/Tablet) */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#222] border-t border-[#5865F2]/30 p-4 z-50 transform transition-transform duration-300 md:hidden ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-400">Suscripción mensual</p>
            <p className="text-lg font-bold text-white">$7 USD</p>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#5865F2] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#4752C4]">
            Unirme
          </a>
        </div>
      </div>
    </div>
  );
}