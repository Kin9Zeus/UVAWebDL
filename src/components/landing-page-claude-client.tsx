"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Course } from "@/lib/data/courses";
import { useAnalytics } from "@/hooks/use-analytics";

interface Props {
  course: Course;
}

export default function LandingPageClaudeClient({ course }: Props) {
  const [showSticky, setShowSticky] = useState(false);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Track ViewContent on mount
    trackEvent('ViewContent', {
      content_name: course.title,
      content_ids: [course.id],
      content_type: 'product',
      value: course.price,
      currency: 'USD'
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [course.id, course.price, course.title, trackEvent]);

  const handleInitiateCheckout = () => {
    trackEvent('InitiateCheckout', {
      content_name: course.title,
      content_ids: [course.id],
      content_type: 'product',
      value: course.price,
      currency: 'USD'
    });
  };

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-[#d97757] selection:text-white overflow-x-hidden">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* Top Urgent Banner */}
      <div className="relative bg-gradient-to-r from-[#a35338] via-[#d97757] to-[#a35338] text-white text-xs md:text-sm font-bold text-center py-2 sticky top-0 z-50 shadow-lg overflow-hidden">
        <div className="absolute inset-0 animate-shimmer bg-[length:200%_100%] z-0"></div>
        <span className="relative z-10">🔥 ÚLTIMOS CUPOS DISPONIBLES PARA ESTA EDICIÓN - CIERRE DE INSCRIPCIONES PRONTO</span>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#d97757]/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-900/20 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#222] border border-[#d97757]/30 rounded-full px-4 py-1 text-[#f29f83] text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#d97757] animate-pulse"></span>
            Certificación Profesional UVA
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none animate-fade-in" style={{ animationDelay: '0.1s' }}>
            DIPLOMADO EN CLAUDE IA PARA <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d97757] via-[#f09678] to-[#d97757] break-words">
              PRESUPUESTOS Y ADMINISTRACIÓN DE OBRA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            ¿Sigues perdiendo horas haciendo presupuestos, redactando documentos y administrando obras de forma manual? <br/>
            Aprende a convertir a Claude en tu asistente profesional.
          </p>
          
          <div className="pt-8 flex flex-col md:flex-row justify-center items-center gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#pricing" 
              onClick={() => trackEvent('Click', { category: 'CTA', label: 'Hero - Access Now' })}
              className="group relative bg-[#d97757] text-white text-xl font-black px-10 py-5 rounded-full hover:bg-[#c26143] transition-all hover:scale-105 shadow-[0_0_40px_rgba(217,119,87,0.5)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                COMPRAR AHORA
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
              <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
            </a>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="text-[#d97757]">✓</span> Pago 100% Seguro
              <span className="text-[#d97757] ml-2">✓</span> Acceso Inmediato
            </p>
          </div>
        </div>
      </section>

      {/* Video Section - High Impact */}
      <section className="py-12 px-4 bg-[#161616] relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1 space-y-8">
              <div className="space-y-4">
                 <h3 className="text-[#f29f83] font-bold tracking-widest uppercase text-sm">El Asistente Perfecto</h3>
                 <h2 className="text-4xl font-bold leading-tight">Trabaja más rápido, con mayor precisión y sin <span className="text-white border-b-4 border-[#d97757]">empezar de cero</span></h2>
                 <p className="text-gray-400 text-lg">
                   Aprende a usar Claude en tu trabajo real, sin tecnicismos y con resultados desde la primera clase. Deja que la IA haga el trabajo pesado por ti.
                 </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#222] p-4 rounded-lg border-l-4 border-[#d97757]">
                   <div className="text-xl font-bold text-white mb-1">5 Sesiones</div>
                   <div className="text-sm text-gray-400">Virtuales en vivo</div>
                </div>
                <div className="bg-[#222] p-4 rounded-lg border-l-4 border-[#d97757]">
                   <div className="text-xl font-bold text-white mb-1">Prompts</div>
                   <div className="text-sm text-gray-400">Biblioteca exclusiva</div>
                </div>
                <div className="bg-[#222] p-4 rounded-lg border-l-4 border-[#d97757]">
                   <div className="text-xl font-bold text-white mb-1">Certificado</div>
                   <div className="text-sm text-gray-400">10 horas certificadas</div>
                </div>
                <div className="bg-[#222] p-4 rounded-lg border-l-4 border-[#d97757]">
                   <div className="text-xl font-bold text-white mb-1">Grabado</div>
                   <div className="text-sm text-gray-400">Acceso por 3 meses</div>
                </div>
              </div>
           </div>

           <div className="order-1 md:order-2 flex justify-center">
             <div className="relative w-full max-w-[300px] rounded-2xl overflow-hidden border-4 border-[#333] shadow-[0_20px_50px_rgba(217,119,87,0.3)] bg-black animate-float">
                <div className="absolute top-0 inset-x-0 h-6 bg-[#222] z-10 flex justify-center items-center">
                   <div className="w-16 h-1 bg-[#444] rounded-full"></div>
                </div>
                <video 
                  controls 
                  className="w-full h-auto aspect-[9/16] object-cover"
                  poster="/Humanizar/portada_video.jpeg" 
                >
                  <source src="/Humanizar/claude_video.MOV" type="video/quicktime" />
                  <source src="/Humanizar/claude_video.MOV" type="video/mp4" />
                </video>
             </div>
           </div>
        </div>
      </section>

      {/* Pain Points Cards */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
            ¿Qué vas a lograr?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Presupuestos Inteligentes", desc: "Genera, analiza y optimiza presupuestos de obra automáticamente utilizando el poder analítico de Claude.", icon: "💰" },
              { title: "Administración Eficiente", desc: "Lleva el control de costos y estimaciones en tiempo real sin perderte en hojas de cálculo complejas.", icon: "🏗️" },
              { title: "Gestión Automatizada", desc: "Redacta contratos, actas, correos y documentos formales en segundos, manteniendo un tono profesional.", icon: "📋" }
            ].map((card, i) => (
              <div key={i} className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#333] hover:border-[#d97757] transition-colors group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus - Accordion Style */}
      <section className="pt-8 pb-24 bg-[#161616]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#d97757] font-bold tracking-wider">EL MAPA DE RUTA</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Temario Detallado</h2>
          </div>
          
          <div className="space-y-4">
            {course.syllabus?.map((session, idx) => (
              <details key={idx} className="group bg-[#222] rounded-xl overflow-hidden border border-[#333] open:border-[#d97757]/50 transition-all">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none hover:bg-[#2a2a2a] transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#333] text-[#d97757] font-bold group-open:bg-[#d97757] group-open:text-white transition-colors">
                      {idx + 1}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white">{session.title}</h3>
                  </div>
                  <span className="transform group-open:rotate-180 transition-transform text-[#d97757]">▼</span>
                </summary>
                <div className="px-6 pb-6 pt-0 ml-14">
                  <ul className="space-y-3 text-gray-400 border-l-2 border-[#333] pl-6">
                    {session.items?.map((item, i) => (
                      <li key={i} className="text-sm md:text-base">• {item}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>

          {/* Instructors Section directly in the syllabus block to match context */}
          <div className="mt-16 bg-[#222] p-8 rounded-2xl border border-[#333] text-center">
            <span className="text-[#f29f83] text-sm font-bold uppercase tracking-widest mb-2 block">Quién imparte</span>
            <h3 className="text-2xl font-bold text-white">Aleck Martínez</h3>
            <p className="text-[#d97757] font-bold mt-1 mb-4">Ingeniero de Software y director de Desarrollo en UVA</p>
            <p className="text-gray-400 max-w-2xl mx-auto">Experto en implementación de Inteligencia Artificial para el sector de la construcción y diseño. Aprenderás a dominar la herramienta sin tecnicismos innecesarios, enfocado al 100% en la productividad.</p>
          </div>
        </div>
      </section>

      {/* Pricing / Offer Section */}
      <section id="pricing" className="py-24 px-4 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#222] to-[#111]"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-8">
             <h2 className="text-4xl md:text-6xl font-black leading-tight">
               AUTOMATIZA TU <br/> <span className="text-[#d97757]">EMPRESA HOY</span>
             </h2>
             <p className="text-xl text-gray-300">
               Adquiere la ventaja competitiva definitiva. Trabaja más inteligente, no más duro.
             </p>
             
             <div className="space-y-4">
               <h3 className="font-bold text-white uppercase tracking-wider">¿QUÉ INCLUYE?</h3>
               <ul className="space-y-3">
                 {[
                   "Certificado de 10 horas",
                   "Biblioteca exclusiva de prompts",
                   "Plantillas listas para usar",
                   "Casos reales del sector constructor",
                   "Acceso a comunidad privada de apoyo",
                   "Virtual en vivo + grabaciones por 3 meses"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-300">
                     <div className="w-6 h-6 rounded-full bg-[#d97757]/20 flex items-center justify-center text-[#d97757] text-xs">✓</div>
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
           </div>

           <div className="bg-[#1a1a1a] border border-[#d97757]/30 rounded-3xl p-8 md:p-12 shadow-2xl relative">
             <div className="absolute top-0 right-0 bg-[#d97757] text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-xl">
               OFERTA ESPECIAL
             </div>
             
             <div className="text-center space-y-2 mb-8">
               <p className="text-gray-500 text-lg line-through">Precio Normal: $350 USD</p>
               <div className="flex items-center justify-center gap-2">
                 <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">${course.price}</span>
                 <span className="text-xl font-bold text-[#d97757]">USD</span>
               </div>
               <p className="text-[#f09678] font-medium bg-[#f09678]/10 inline-block px-3 py-1 rounded-full text-sm">
                 Ahorras ${350 - course.price} USD hoy
               </p>
             </div>

             <div className="space-y-4">
               {course.hotmartLink ? (
                  <a 
                    href={course.hotmartLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleInitiateCheckout}
                    className="block mt-4 w-full rounded-full bg-[#d97757] px-5 py-3 text-white font-bold text-center hover:bg-[#c26143] transition-colors"
                  >
                    COMPRAR AHORA
                  </a>
               ) : (
                 <a 
                   href="/contacto"
                   className="block mt-4 w-full rounded-full bg-[#d97757] px-5 py-3 text-white text-center font-bold hover:opacity-90 transition-opacity"
                 >
                   COMPRAR AHORA
                 </a>
               )}
                <p className="text-xs text-center text-gray-500">
                  *Acceso inmediato enviado a tu correo electrónico.
                </p>
             </div>

             {/* Guarantee Badge */}
             <div className="mt-8 pt-8 border-t border-[#333] flex items-center justify-center gap-4 opacity-70">
                <div className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center text-2xl">🛡️</div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-bold uppercase">Garantía de Calidad</p>
                  <p className="text-[10px] text-gray-500">Contenido profesional verificado</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Necesito conocimientos previos sobre Inteligencia Artificial?", a: "No, el diplomado está diseñado para llevarte desde cero hasta la implementación profesional sin usar tecnicismos." },
              { q: "¿Debo pagar una suscripción a Claude para hacer el curso?", a: "Te enseñaremos cómo utilizar Claude en sus versiones disponibles. Explicaremos los beneficios de la versión PRO, pero podrás aplicar los conocimientos base de inmediato." },
              { q: "¿Cómo accedo al contenido?", a: "Inmediatamente después del pago recibes un correo con tus credenciales de acceso para las clases en vivo y materiales." },
              { q: "¿Las clases quedan grabadas?", a: "Sí, tendrás acceso a las grabaciones por 3 meses para repasar todo el contenido a tu propio ritmo." }
            ].map((faq, i) => (
              <details key={i} className="group border-b border-[#333] pb-4">
                <summary className="flex justify-between items-center cursor-pointer list-none text-lg font-medium hover:text-[#d97757] transition-colors">
                  {faq.q}
                  <span className="text-[#d97757] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA (Mobile/Tablet) */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#222] border-t border-[#d97757]/30 p-4 z-50 transform transition-transform duration-300 md:hidden ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-400">Oferta por tiempo limitado</p>
            <p className="text-lg font-bold text-white">${course.price} USD</p>
          </div>
          <a 
            href={course.hotmartLink || "#pricing"} 
            target={course.hotmartLink ? "_blank" : "_self"}
            rel={course.hotmartLink ? "noopener noreferrer" : ""}
            onClick={course.hotmartLink ? handleInitiateCheckout : undefined}
            className="bg-[#d97757] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#c26143]"
          >
            COMPRAR AHORA
          </a>
        </div>
      </div>
    </div>
  );
}