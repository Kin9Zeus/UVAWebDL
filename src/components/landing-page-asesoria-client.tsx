"use client";

import { useState, useEffect } from "react";
import { Course } from "@/lib/data/courses";

interface Props {
  course: Course;
}

export default function LandingPageAsesoriaClient({ course }: Props) {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.link/r7u7qs";

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-[#f3c609] selection:text-white overflow-x-hidden">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* Top Urgent Banner */}
      <div className="relative bg-gradient-to-r from-[#b39000] via-[#f3c609] to-[#b39000] text-black text-xs md:text-sm font-bold text-center py-2 sticky top-0 z-50 shadow-lg overflow-hidden">
        <div className="absolute inset-0 animate-shimmer bg-[length:200%_100%] z-0"></div>
        <span className="relative z-10">🔥 AGENDA TU SESIÓN ESTRATÉGICA - CUPOS LIMITADOS POR MES</span>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#f3c609]/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-600/20 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#222] border border-[#f3c609]/30 rounded-full px-4 py-1 text-[#ffe570] text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#f3c609] animate-pulse"></span>
            Método UVA 1 a 1
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none animate-fade-in" style={{ animationDelay: '0.1s' }}>
            ASESORÍA <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3c609] via-[#fff5c0] to-[#f3c609] drop-shadow-[0_0_15px_rgba(243,198,9,0.5)]">
              PERSONALIZADA
            </span> <br />
            PARA TU EMPRESA
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Acompañamiento estratégico para proyectos y empresas de arquitectura, diseño y construcción. Enfocado en presupuesto, estructura arquitectónica y control económico.
          </p>
          
          <div className="pt-8 flex flex-col md:flex-row justify-center items-center gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative bg-[#f3c609] text-black text-xl font-black px-10 py-5 rounded-full hover:bg-[#d4ac00] transition-all hover:scale-105 shadow-[0_0_40px_rgba(243,198,9,0.5)] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                COMPRAR AHORA
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
              <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
            </a>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="text-[#f3c609]">✓</span> 100% Personalizado
              <span className="text-[#f3c609] ml-2">✓</span> Resultados Medibles
            </p>
          </div>
        </div>
      </section>

      {/* Video Section - High Impact */}
      <section className="py-12 px-4 bg-[#161616] relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1 space-y-8">
              <div className="space-y-4">
                 <h3 className="text-[#ffe570] font-bold tracking-widest uppercase text-sm">Método Probado</h3>
                 <h2 className="text-4xl font-bold leading-tight">Decisiones con <span className="text-white border-b-4 border-[#f3c609]">Números Claros</span></h2>
                 <p className="text-gray-400 text-lg">
                   No tomes decisiones basadas en la intuición. Te ayudamos a estructurar tu empresa con criterio profesional para asegurar la rentabilidad de cada proyecto.
                 </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#222] p-4 rounded-lg border-l-4 border-[#f3c609]">
                   <div className="text-3xl font-bold text-white mb-1">1 a 1</div>
                   <div className="text-sm text-gray-400">Sesiones Privadas</div>
                </div>
                <div className="bg-[#222] p-4 rounded-lg border-l-4 border-[#f3c609]">
                   <div className="text-3xl font-bold text-white mb-1">ROI</div>
                   <div className="text-sm text-gray-400">Retorno de Inversión</div>
                </div>
              </div>
           </div>

           <div className="order-1 md:order-2 flex justify-center">
             <div className="relative w-full max-w-[300px] rounded-2xl overflow-hidden border-4 border-[#333] shadow-[0_20px_50px_rgba(243,198,9,0.3)] bg-black animate-float">
                <div className="absolute top-0 inset-x-0 h-6 bg-[#222] z-10 flex justify-center items-center">
                   <div className="w-16 h-1 bg-[#444] rounded-full"></div>
                </div>
                <video 
                  controls 
                  className="w-full h-auto aspect-[9/16] object-cover"
                  poster="/Humanizar/asesoria_1a1.jpeg" 
                >
                  <source src="/Humanizar/asesoria_1a1.mov" type="video/quicktime" />
                  <source src="/Humanizar/asesoria_1a1.mov" type="video/mp4" />
                </video>
             </div>
           </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pricing" className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
            Elige tu Plan de Acción
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Package 1 */}
            <div className="bg-[#1a1a1a] rounded-3xl border border-[#333] p-8 hover:border-[#f3c609] transition-all group flex flex-col">
               <div className="mb-6">
                 <span className="bg-[#222] text-[#f3c609] text-xs font-bold px-3 py-1 rounded-full border border-[#f3c609]/30">PAQUETE 1</span>
                 <h3 className="text-2xl font-bold text-white mt-4 mb-2">SESIÓN ESTRATÉGICA</h3>
                 <p className="text-gray-400 text-sm">Ideal para destrabar un problema puntual o validar decisiones clave.</p>
               </div>
               
               <div className="mb-8">
                 <div className="flex items-end gap-1">
                   <span className="text-4xl font-bold text-white">$80</span>
                   <span className="text-xl font-bold text-[#f3c609] mb-1">USD</span>
                 </div>
                 <p className="text-sm text-gray-500 mt-1">Duración: 1 Hora</p>
               </div>

               <ul className="space-y-4 mb-8 flex-1">
                 {[
                   "Revisión rápida de tu proyecto o empresa",
                   "Diagnóstico presupuestal y económico",
                   "Análisis de viabilidad arquitectónica",
                   "Recomendaciones claras y accionables",
                   "Sesión 100% personalizada (1 a 1)"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                     <span className="text-[#f3c609] mt-0.5">✓</span>
                     {item}
                   </li>
                 ))}
               </ul>

               <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#333] hover:bg-[#f3c609] hover:text-black text-white text-center font-bold py-4 rounded-xl transition-all">
                 Agendar Sesión
               </a>
            </div>

            {/* Package 2 - Highlighted */}
            <div className="bg-[#1a1a1a] rounded-3xl border-2 border-[#f3c609] p-8 shadow-[0_0_30px_rgba(243,198,9,0.15)] relative transform md:-translate-y-4 flex flex-col">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f3c609] text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                 MÁS POPULAR
               </div>
               
               <div className="mb-6">
                 <span className="bg-[#f3c609]/20 text-[#f3c609] text-xs font-bold px-3 py-1 rounded-full">PAQUETE 2</span>
                 <h3 className="text-2xl font-bold text-white mt-4 mb-2">ACOMPAÑAMIENTO PROFESIONAL</h3>
                 <p className="text-gray-400 text-sm">Pensado para estructurar correctamente un proyecto o mejorar rentabilidad.</p>
               </div>
               
               <div className="mb-8">
                 <div className="flex items-end gap-1">
                   <span className="text-4xl font-bold text-white">$380</span>
                   <span className="text-xl font-bold text-[#f3c609] mb-1">USD</span>
                 </div>
                 <p className="text-sm text-gray-500 mt-1">Duración: 5 Horas</p>
               </div>

               <ul className="space-y-4 mb-8 flex-1">
                 {[
                   "Análisis profundo de presupuestos y costos",
                   "Optimización de diseño y decisiones",
                   "Estrategia de control financiero",
                   "Ajustes en honorarios y cobro",
                   "Acompañamiento personalizado paso a paso"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-white text-sm font-medium">
                     <span className="text-[#f3c609] mt-0.5">✓</span>
                     {item}
                   </li>
                 ))}
               </ul>

               <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#f3c609] hover:bg-[#d4ac00] text-black text-center font-bold py-4 rounded-xl transition-all shadow-lg">
                 Agendar Acompañamiento
               </a>
            </div>

            {/* Package 3 */}
            <div className="bg-[#1a1a1a] rounded-3xl border border-[#333] p-8 hover:border-[#f3c609] transition-all group flex flex-col">
               <div className="mb-6">
                 <span className="bg-[#222] text-[#f3c609] text-xs font-bold px-3 py-1 rounded-full border border-[#f3c609]/30">PAQUETE 3</span>
                 <h3 className="text-2xl font-bold text-white mt-4 mb-2">MENTORÍA ESTRATÉGICA UVA</h3>
                 <p className="text-gray-400 text-sm">Para quienes quieren orden, claridad y crecimiento real a largo plazo.</p>
               </div>
               
               <div className="mb-8">
                 <div className="flex items-end gap-1">
                   <span className="text-4xl font-bold text-white">$760</span>
                   <span className="text-xl font-bold text-[#f3c609] mb-1">USD</span>
                 </div>
                 <p className="text-sm text-gray-500 mt-1">Duración: 10 Horas</p>
               </div>

               <ul className="space-y-4 mb-8 flex-1">
                 {[
                   "Diagnóstico completo de empresa/proyecto",
                   "Estructuración total de presupuestos",
                   "Estrategia alineada con rentabilidad",
                   "Corrección de errores (pérdidas)",
                   "Acompañamiento estratégico continuo",
                   "Visión clara para escalar"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                     <span className="text-[#f3c609] mt-0.5">✓</span>
                     {item}
                   </li>
                 ))}
               </ul>

               <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#333] hover:bg-[#f3c609] hover:text-black text-white text-center font-bold py-4 rounded-xl transition-all">
                 Agendar Mentoría
               </a>
            </div>

          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA (Mobile/Tablet) */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#222] border-t border-[#f3c609]/30 p-4 z-50 transform transition-transform duration-300 md:hidden ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-400">Desde</p>
            <p className="text-lg font-bold text-white">$80 USD</p>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#f3c609] text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-[#d4ac00]">
            Comprar ahora
          </a>
        </div>
      </div>
    </div>
  );
}
