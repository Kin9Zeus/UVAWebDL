"use client";
import { useState } from "react";
import Image from "next/image";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

const SERVICES = [
  { id: "consultoria", name: "Consultoría en proyectos", desc: "Acompañamiento técnico y estratégico para definir alcance, tiempos y costos.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> },
  { id: "diseno-arquitectonico", name: "Diseño arquitectónico", desc: "Conceptualización y desarrollo integral desde idea hasta anteproyecto.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9"/><path d="M3 21v-3l9-9"/><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-1-1L12 13"/></svg> },
  { id: "diseno-urbano", name: "Diseño urbano", desc: "Soluciones de planificación y espacio público con enfoque sostenible.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg> },
  { id: "desarrollo-constructivo", name: "Desarrollo constructivo", desc: "Detalle técnico, materiales y coordinación para ejecución eficiente.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg> },
  { id: "diseno-interior", name: "Diseño interior", desc: "Espacios funcionales y estéticos adaptados a cada usuario.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="m12 12 8-4.5"/><path d="M12 12v9"/><path d="M12 12 4 7.5"/></svg> },
  { id: "marca-concepto", name: "Diseño de marca y concepto", desc: "Identidad visual y narrativa que conectan tu proyecto con su audiencia.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/></svg> },
  { id: "asesorias-1a1", name: "Asesorías 1 a 1", desc: "Sesiones personalizadas para resolver dudas y potenciar resultados.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
];

export default function ServiciosPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    budget: 150000000,
    timeline: "3-6 meses",
    contactMethod: "email",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) { setError("Selecciona un servicio."); return; }
    setSending(true); setError(null); setOk(false);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service: selected, ...form, budget: Number(form.budget) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "No se pudo enviar");
      setOk(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "No se pudo enviar";
      setError(message);
    } finally {
      setSending(false);
    }
  };

  return (
    <section>
      {/* Hero Banner */}
      <div className="relative overflow-hidden">
        <div className="relative min-h-[50vh] sm:min-h-[56vh] lg:min-h-[64vh]">
          <Image src="/Humanizar/Srv.jpg" alt="Servicios UVA" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="hero-gradient absolute inset-0" />
        <div className="grain-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <div className="text-white max-w-2xl animate-reveal-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[var(--color-accent)]" />
                <span className="text-xs uppercase tracking-[0.15em] text-white/50">Servicios profesionales</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Servicios UVA</h1>
              <p className="mt-3 text-sm sm:text-base text-white/70 max-w-lg">Diseño arquitectónico, urbano e interior. Consultoría y construcción con excelencia.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contacto" className="btn-primary rounded-full px-6 py-3 text-sm font-medium">Solicitar propuesta</a>
                <a href="/proyectos" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] backdrop-blur-sm px-6 py-3 text-sm text-white transition-all duration-300 hover:bg-white/15 hover:border-white/40">Ver proyectos</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Intro */}
        <header className="text-center">
          <p className="text-[var(--neutral-500)] max-w-2xl mx-auto">Selecciona un servicio y cuéntanos tu idea. Te contactaremos para una propuesta a medida.</p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Services Selection */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-secondary)] text-white text-sm font-bold">1</span>
              <p className="text-lg font-semibold text-[var(--foreground)]">Elige el servicio que necesitas</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(s.id)}
                  className={`group text-left rounded-2xl border p-5 bg-[var(--surface)] transition-all duration-300 hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 ${selected===s.id ? "border-[var(--color-secondary)] ring-2 ring-[var(--color-secondary)]/20 shadow-[var(--shadow-glow)]" : "border-[var(--neutral-200)]"}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`mt-0.5 flex items-center justify-center w-9 h-9 rounded-xl shrink-0 transition-colors duration-300 ${selected===s.id ? "bg-[var(--color-secondary)] text-white" : "bg-[var(--color-secondary)]/[0.08] text-[var(--color-secondary)]"}`}>
                      {s.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold text-sm text-[var(--foreground)]">{s.name}</h3>
                      <p className="mt-1 text-xs text-[var(--neutral-500)] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div id="contacto" className="rounded-2xl border border-[var(--neutral-200)] p-6 sm:p-8 bg-[var(--surface)]">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-accent)] text-white text-sm font-bold">2</span>
              <h2 className="text-lg font-semibold text-[var(--foreground)]">Cuéntanos sobre tu proyecto</h2>
            </div>
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Nombre completo" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
                <Input label="Correo" type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Teléfono" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />
                <Input label="Ciudad" value={form.city} onChange={(e)=>setForm({...form, city:e.target.value})} />
              </div>
              <label className="block">
                <span className="text-sm font-medium text-[var(--neutral-600)]">Mensaje</span>
                <textarea className="mt-1.5 w-full rounded-xl border border-[var(--neutral-200)] bg-[var(--surface-warm)] px-4 py-3 h-28 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all duration-300" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
              </label>
              <div className="grid gap-4 sm:grid-cols-3 items-start">
                <div>
                  <label className="text-sm font-medium text-[var(--neutral-600)]">Presupuesto (COP)</label>
                  <input type="range" min={50000000} max={500000000} step={5000000} value={form.budget} onChange={(e)=>setForm({...form, budget:Number(e.target.value)})} className="mt-2 w-full accent-[var(--color-secondary)]" />
                  <p className="text-xs text-[var(--neutral-400)] mt-1">≈ {new Intl.NumberFormat("es-CO").format(Number(form.budget))}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-[var(--neutral-600)]">Plazo</label>
                  <select className="mt-1.5 w-full rounded-xl border border-[var(--neutral-200)] bg-[var(--surface-warm)] px-3 py-2.5 text-sm focus:ring-2 focus:ring-[var(--color-secondary)] focus:outline-none" value={form.timeline} onChange={(e)=>setForm({...form, timeline:e.target.value})}>
                    {["1-3 meses","3-6 meses","6-12 meses","+12 meses"].map((t)=>(<option key={t} value={t}>{t}</option>))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-[var(--neutral-600)]">Contacto preferido</label>
                  <select className="mt-1.5 w-full rounded-xl border border-[var(--neutral-200)] bg-[var(--surface-warm)] px-3 py-2.5 text-sm focus:ring-2 focus:ring-[var(--color-secondary)] focus:outline-none" value={form.contactMethod} onChange={(e)=>setForm({...form, contactMethod:e.target.value})}>
                    {["email","teléfono","WhatsApp"].map((m)=>(<option key={m} value={m}>{m}</option>))}
                  </select>
                </div>
              </div>
              {selected && (
                <div className="flex items-center gap-2 text-xs text-[var(--color-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                  Servicio: {SERVICES.find(s=>s.id===selected)?.name}
                </div>
              )}
              {error && <p className="text-sm text-red-600">{error}</p>}
              {ok && <p className="text-sm text-green-600">Gracias por tu interés. Te contactaremos pronto.</p>}
              <div className="flex">
                <Button loading={sending} type="submit" className="btn-primary text-white">Enviar solicitud</Button>
              </div>
              <p className="text-xs text-[var(--neutral-400)]">Protegemos tus datos conforme a la Ley 1581 de 2012 (Colombia).</p>
            </form>
          </div>
        </div>

        {/* Why UVA */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          <div className="group rounded-2xl border border-[var(--neutral-200)] p-6 sm:p-8 bg-[var(--surface)] card-lift">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent)]/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </span>
              <h3 className="font-semibold text-[var(--foreground)]">¿Por qué UVA?</h3>
            </div>
            <p className="text-sm text-[var(--neutral-500)] leading-relaxed">Diseño elegante, funcional y sostenible. Acompañamiento experto y procesos transparentes.</p>
          </div>
          <div className="group rounded-2xl border border-[var(--neutral-200)] p-6 sm:p-8 bg-[var(--surface)] card-lift">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </span>
              <h3 className="font-semibold text-[var(--foreground)]">Cómo trabajamos</h3>
            </div>
            <p className="text-sm text-[var(--neutral-500)] leading-relaxed">Brief inicial, propuesta, iteraciones y entrega. Te mantenemos informado en cada paso.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
