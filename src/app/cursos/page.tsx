"use client";
import { courses } from "@/lib/data/courses";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function CursosPage() {
  const [query, setQuery] = useState("");
  const normalize = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const filtered = useMemo(() => {
    const q = normalize(query).trim();
    if (!q) return courses;
    const tokens = q.split(/\s+/);
    return courses.filter((c) => {
      const hay = normalize(`${c.title} ${c.description} ${c.category} ${c.level} ${c.priceDisplay ?? ""}`);
      return tokens.every((t) => hay.includes(t));
    });
  }, [query]);

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-[#f3c609] selection:text-black">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#f3c609]/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-900/20 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-5xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#222] border border-[#f3c609]/30 rounded-full px-4 py-1 text-[#ffe570] text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#f3c609] animate-pulse"></span>
            Formación Profesional
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none animate-fade-in" style={{ animationDelay: '0.1s' }}>
            EXPLORA NUESTROS <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3c609] via-[#fff5c0] to-[#f3c609] drop-shadow-[0_0_15px_rgba(243,198,9,0.5)]">
              CURSOS Y DIPLOMADOS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Contenido de alto impacto diseñado para arquitectos y diseñadores que quieren escalar su carrera y negocio.
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-md">
              <input 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Buscar cursos..." 
                className="w-full bg-[#1a1a1a] border border-[#333] text-white rounded-full px-6 py-3 focus:outline-none focus:border-[#f3c609] transition-colors placeholder-gray-500"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((c) => (
              <div key={c.id} className="flex flex-col h-full bg-[#1a1a1a] rounded-2xl border border-[#333] p-6 hover:border-[#f3c609] transition-all group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(243,198,9,0.1)]">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#111] mb-4">
                  <Image
                    src={c.cover}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-[#f3c609] text-xs font-bold px-2 py-1 rounded border border-[#f3c609]/30">
                    {c.category.toUpperCase()}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white leading-tight mb-2 group-hover:text-[#f3c609] transition-colors">{c.title}</h3>
                <p className="text-sm text-gray-400 mb-6 line-clamp-3 flex-grow">{c.description}</p>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-center justify-between pt-4 border-t border-[#333]">
                    <span className="text-gray-400 text-sm">Inversión:</span>
                    <span className="text-[#f3c609] font-bold text-xl">{c.priceDisplay ?? `$${c.price} USD`}</span>
                  </div>
                  
                  <Link 
                    href={c.href || `/cursos/${c.id}`} 
                    className="block w-full rounded-full bg-[#f3c609] px-4 py-3 text-black text-sm font-bold text-center hover:bg-[#d4ac00] transition-colors relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10">VER DETALLES</span>
                    <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No se encontraron cursos que coincidan con tu búsqueda.</p>
              <button onClick={() => setQuery("")} className="mt-4 text-[#f3c609] hover:underline">Ver todos los cursos</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
