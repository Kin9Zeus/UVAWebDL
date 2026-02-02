"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PurchaseButton from "@/components/course-purchase";
import { Course } from "@/lib/data/courses";

interface Props {
  course: Course;
  isAuthenticated: boolean;
}

export default function LandingPageClient({ course, isAuthenticated }: Props) {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* Top Urgent Banner */}
      <div className="bg-yellow-500 text-black text-xs md:text-sm font-bold text-center py-2 sticky top-0 z-50 shadow-lg">
        🔥 ÚLTIMOS CUPOS DISPONIBLES PARA ESTA EDICIÓN - CIERRE DE INSCRIPCIONES PRONTO
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-900/20 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#222] border border-yellow-500/30 rounded-full px-4 py-1 text-yellow-400 text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Certificación Profesional UVA
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none animate-fade-in" style={{ animationDelay: '0.1s' }}>
            DOMINA EL NEGOCIO DE LA <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500">
              VIVIENDA MODULAR
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            La metodología exacta para diseñar, gestionar y <strong className="text-white bg-yellow-600/20 px-1">VENDER</strong> proyectos arquitectónicos sin competir por precio.
          </p>
          
          <div className="pt-8 flex flex-col md:flex-row justify-center items-center gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="#pricing" className="group relative bg-yellow-400 text-black text-xl font-black px-10 py-5 rounded-full hover:bg-yellow-300 transition-all hover:scale-105 shadow-[0_0_40px_rgba(250,204,21,0.5)] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                SÍ, QUIERO ACCEDER AHORA
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
              <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
            </a>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="text-green-500">✓</span> Pago 100% Seguro
              <span className="text-green-500 ml-2">✓</span> Acceso Inmediato
            </p>
          </div>
        </div>
      </section>

      {/* Video Section - High Impact */}
      <section className="py-12 px-4 bg-[#161616] relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1 space-y-8">
              <div className="space-y-4">
                 <h3 className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Prueba Social</h3>
                 <h2 className="text-4xl font-bold leading-tight">No es teoría, son <span className="text-white border-b-4 border-yellow-500">Resultados</span></h2>
                 <p className="text-gray-400 text-lg">
                   Mira cómo aplicamos esta metodología en proyectos reales. No te enseñamos "qué hacer", te mostramos "cómo lo hacemos nosotros".
                 </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#222] p-4 rounded-lg border-l-4 border-yellow-500">
                   <div className="text-3xl font-bold text-white mb-1">+50</div>
                   <div className="text-sm text-gray-400">Proyectos Gestionados</div>
                </div>
                <div className="bg-[#222] p-4 rounded-lg border-l-4 border-yellow-500">
                   <div className="text-3xl font-bold text-white mb-1">100%</div>
                   <div className="text-sm text-gray-400">Metodología Práctica</div>
                </div>
              </div>
           </div>

           <div className="order-1 md:order-2 flex justify-center">
             <div className="relative w-full max-w-[300px] rounded-2xl overflow-hidden border-4 border-[#333] shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black animate-float">
                <div className="absolute top-0 inset-x-0 h-6 bg-[#222] z-10 flex justify-center items-center">
                   <div className="w-16 h-1 bg-[#444] rounded-full"></div>
                </div>
                <video 
                  controls 
                  className="w-full h-auto aspect-[9/16] object-cover"
                  poster="/Desarrollodevivienda.jpg" 
                >
                  <source src="/Humanizar/CYP ARQUITECTOS.mov" type="video/quicktime" />
                  <source src="/Humanizar/CYP ARQUITECTOS.mov" type="video/mp4" />
                </video>
             </div>
           </div>
        </div>
      </section>

      {/* Pain Points Cards */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
            ¿Te identificas con esto?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Cliente Fantasma", desc: "Envías cotizaciones y nunca más te responden. No sabes si cobraste mucho o muy poco.", icon: "👻" },
              { title: "Caos en Obra", desc: "Los imprevistos se comen tu utilidad. Terminas pagando por trabajar.", icon: "📉" },
              { title: "Marketing Nulo", desc: "Dependes del 'boca a boca'. No tienes un sistema predecible para conseguir clientes.", icon: "📢" }
            ].map((card, i) => (
              <div key={i} className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#333] hover:border-yellow-500 transition-colors group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof Section */}
      <section className="py-20 bg-[#161616] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
          <span className="text-yellow-500 font-bold tracking-wider uppercase">Experiencias Reales</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Nuestros estudiantes <span className="text-yellow-400">facturan</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            No solo aprenden teoría, aplican estrategias que generan dinero real y proyectos tangibles.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
           {/* Gradients to fade edges */}
           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#161616] to-transparent z-10 pointer-events-none"></div>
           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#161616] to-transparent z-10 pointer-events-none"></div>

           <div className="flex w-max animate-scroll">
              {/* Double the items for seamless loop */}
              {[...[
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.54 (1).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.54.jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.55 (1).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.55 (2).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.55 (3).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.55 (4).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.55 (5).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.55 (6).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.55.jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.56 (1).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.56.jpeg"
              ], ...[
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.54 (1).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.54.jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.55 (1).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.55 (2).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.55 (3).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.55 (4).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.55 (5).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.55 (6).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.55.jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.56 (1).jpeg",
                "/Humanizar/WhatsApp Image 2026-01-27 at 22.46.56.jpeg"
              ]].map((src, i) => (
                <div key={i} className="mx-4 w-[280px] md:w-[320px] flex-shrink-0 transition-transform hover:scale-105">
                  <div className="bg-[#222] p-2 rounded-xl border border-[#333] shadow-lg">
                    {/* Chat Header Simulation */}
                    <div className="flex items-center gap-3 mb-2 px-2 pt-1 opacity-70">
                       <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-500 to-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                         WS
                       </div>
                       <div className="text-xs text-gray-400">
                         Mensaje recibido
                       </div>
                    </div>
                    <img 
                      src={src} 
                      alt={`Testimonio estudiante ${i}`} 
                      className="w-full h-auto rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Syllabus - Accordion Style */}
      <section className="py-24 bg-[#161616]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold tracking-wider">EL MAPA DE RUTA</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Lo que vas a dominar</h2>
          </div>
          
          <div className="space-y-4">
            {course.syllabus?.map((session, idx) => (
              <details key={idx} className="group bg-[#222] rounded-xl overflow-hidden border border-[#333] open:border-yellow-500/50 transition-all">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none hover:bg-[#2a2a2a] transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#333] text-yellow-500 font-bold group-open:bg-yellow-500 group-open:text-black transition-colors">
                      {idx + 1}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white">{session.title}</h3>
                  </div>
                  <span className="transform group-open:rotate-180 transition-transform text-yellow-500">▼</span>
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
        </div>
      </section>

      {/* Pricing / Offer Section */}
      <section id="pricing" className="py-24 px-4 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#222] to-[#111]"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-8">
             <h2 className="text-4xl md:text-6xl font-black leading-tight">
               INVIERTE EN TU <br/> <span className="text-yellow-400">FUTURO PROFESIONAL</span>
             </h2>
             <p className="text-xl text-gray-300">
               Todo lo que necesitas para transformar tu práctica profesional en un negocio rentable y escalable.
             </p>
             
             <div className="space-y-4">
               <h3 className="font-bold text-white uppercase tracking-wider">¿Qué incluye?</h3>
               <ul className="space-y-3">
                 {[
                   "Acceso de por vida al contenido",
                   "Plantillas de contratos y presupuestos",
                   "Acceso a la comunidad privada UVA",
                   "Soporte directo para dudas",
                   "Certificado de finalización"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-300">
                     <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 text-xs">✓</div>
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
           </div>

           <div className="bg-[#1a1a1a] border border-yellow-500/30 rounded-3xl p-8 md:p-12 shadow-2xl relative">
             <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-xl">
               OFERTA ESPECIAL
             </div>
             
             <div className="text-center space-y-2 mb-8">
               <p className="text-gray-500 text-lg line-through">Precio Normal: $120 USD</p>
               <div className="flex items-center justify-center gap-2">
                 <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">${course.price}</span>
                 <span className="text-xl font-bold text-yellow-500">USD</span>
               </div>
               <p className="text-green-500 font-medium bg-green-500/10 inline-block px-3 py-1 rounded-full text-sm">
                 Ahorras $40 USD hoy
               </p>
             </div>

             <div className="space-y-4">
                <PurchaseButton 
                  courseId={course.id} 
                  price={course.price} 
                  isAuthenticated={isAuthenticated}
                  redirectPath="/diplomado-vivienda"
                />
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
              { q: "¿Necesito conocimientos previos?", a: "No, el diplomado va desde conceptos básicos hasta avanzados." },
              { q: "¿Cómo accedo al contenido?", a: "Inmediatamente después del pago recibes un correo con tus credenciales de acceso." },
              { q: "¿El pago es seguro?", a: "Sí, utilizamos MercadoPago, la plataforma más segura de Latinoamérica." },
              { q: "¿Puedo ver las clases desde el celular?", a: "Sí, nuestra plataforma es 100% responsiva." }
            ].map((faq, i) => (
              <details key={i} className="group border-b border-[#333] pb-4">
                <summary className="flex justify-between items-center cursor-pointer list-none text-lg font-medium hover:text-yellow-400 transition-colors">
                  {faq.q}
                  <span className="text-yellow-500 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA (Mobile/Tablet) */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#222] border-t border-yellow-500/30 p-4 z-50 transform transition-transform duration-300 md:hidden ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-400">Oferta por tiempo limitado</p>
            <p className="text-lg font-bold text-white">${course.price} USD</p>
          </div>
          <a href="#pricing" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-yellow-300">
            Inscribirme
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-12 text-center text-gray-600 text-sm bg-black">
        <p>© 2024 Web UVA. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
