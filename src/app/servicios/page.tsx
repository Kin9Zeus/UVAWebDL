"use client";
import { useState } from "react";
import Image from "next/image";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

const SERVICES = [
  { id: "consultoria", name: "Consultoría en proyectos", desc: "Acompañamiento técnico y estratégico para definir alcance, tiempos y costos." },
  { id: "diseno-arquitectonico", name: "Diseño arquitectónico", desc: "Conceptualización y desarrollo integral desde idea hasta anteproyecto." },
  { id: "diseno-urbano", name: "Diseño urbano", desc: "Soluciones de planificación y espacio público con enfoque sostenible." },
  { id: "desarrollo-constructivo", name: "Desarrollo constructivo", desc: "Detalle técnico, materiales y coordinación para ejecución eficiente." },
  { id: "diseno-interior", name: "Diseño interior", desc: "Espacios funcionales y estéticos adaptados a cada usuario." },
  { id: "marca-concepto", name: "Diseño de marca y concepto", desc: "Identidad visual y narrativa que conectan tu proyecto con su audiencia." },
  { id: "asesorias-1a1", name: "Asesorías 1 a 1", desc: "Sesiones personalizadas para resolver dudas y potenciar resultados." },
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative min-h-[48vh] sm:min-h-[56vh] lg:min-h-[64vh]">
            <Image src="/Humanizar/Srv.jpg" alt="Servicios UVA" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />
          <div className="absolute inset-0 flex items-end p-6 sm:p-10">
            <div className="text-white max-w-2xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Servicios UVA</h1>
              <p className="mt-2 text-sm sm:text-base opacity-90">Diseño arquitectónico, urbano e interior. Consultoría y construcción con excelencia.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#contacto" className="rounded-full bg-[var(--color-secondary)] px-5 py-2 text-white">Solicitar propuesta</a>
                <a href="/proyectos" className="rounded-full border border-white/70 px-5 py-2 text-white hover:bg-white/10">Ver proyectos</a>
              </div>
            </div>
          </div>
        </div>
        <header className="text-center mt-10">
          <p className="text-neutral-600 max-w-2xl mx-auto">Selecciona un servicio y cuéntanos tu idea. Te contactaremos para una propuesta a medida.</p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Selección de servicios */}
          <div>
            <p className="text-lg font-semibold text-[var(--color-tertiary)]">Paso 1: Elige el servicio que necesitas.</p>
            <div className="mt-3 grid gap-6 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(s.id)}
                  className={`group text-left rounded-2xl border p-6 bg-white transition hover:shadow-md hover:-translate-y-0.5 ${selected===s.id?"border-[var(--color-secondary)] ring-2 ring-[var(--color-secondary)]":"border-neutral-200"}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">★</span>
                    <h3 className="font-semibold text-[var(--color-tertiary)]">{s.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Formulario de contacto */}
          <div id="contacto" className="rounded-2xl border border-neutral-200 p-6 bg-white">
            <h2 className="text-lg font-semibold text-[var(--color-tertiary)]">Paso 2: Cuéntanos sobre tu proyecto</h2>
            <form onSubmit={onSubmit} className="mt-4 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Nombre completo" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
                <Input label="Correo" type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Teléfono" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />
                <Input label="Ciudad" value={form.city} onChange={(e)=>setForm({...form, city:e.target.value})} />
              </div>
              <label className="block">
                <span className="text-sm text-neutral-600">Mensaje</span>
                <textarea className="mt-1 w-full rounded border border-neutral-300 px-3 py-2 h-28" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
              </label>
              <div className="grid gap-4 sm:grid-cols-3 items-center">
                <div>
                  <label className="text-sm text-neutral-600">Presupuesto (COP)</label>
                  <input type="range" min={50000000} max={500000000} step={5000000} value={form.budget} onChange={(e)=>setForm({...form, budget:Number(e.target.value)})} className="w-full" />
                  <p className="text-xs text-neutral-500">≈ {new Intl.NumberFormat("es-CO").format(Number(form.budget))}</p>
                </div>
                <div>
                  <label className="text-sm text-neutral-600">Plazo</label>
                  <select className="mt-1 w-full rounded border border-neutral-300 px-3 py-2" value={form.timeline} onChange={(e)=>setForm({...form, timeline:e.target.value})}>
                    {["1-3 meses","3-6 meses","6-12 meses","+12 meses"].map((t)=>(<option key={t} value={t}>{t}</option>))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-neutral-600">Contacto preferido</label>
                  <select className="mt-1 w-full rounded border border-neutral-300 px-3 py-2" value={form.contactMethod} onChange={(e)=>setForm({...form, contactMethod:e.target.value})}>
                    {["email","teléfono","WhatsApp"].map((m)=>(<option key={m} value={m}>{m}</option>))}
                  </select>
                </div>
              </div>
              {selected && <p className="text-xs text-neutral-500">Servicio seleccionado: {SERVICES.find(s=>s.id===selected)?.name}</p>}
              {error && <p className="text-sm text-red-600">{error}</p>}
              {ok && <p className="text-sm text-green-600">Gracias por tu interés. Te contactaremos pronto.</p>}
              <div className="flex">
                <Button loading={sending} type="submit" className="bg-[var(--color-secondary)] text-white">Enviar solicitud</Button>
              </div>
              <p className="text-xs text-neutral-400">Protegemos tus datos conforme a la Ley 1581 de 2012 (Colombia).</p>
            </form>
          </div>
        </div>

        {/* Tips / Innovación */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white/60">
            <h3 className="font-semibold text-[var(--color-tertiary)]">¿Por qué UVA?</h3>
            <p className="mt-2 text-sm text-neutral-600">Diseño elegante, funcional y sostenible. Acompañamiento experto y procesos transparentes.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white/60">
            <h3 className="font-semibold text-[var(--color-tertiary)]">Cómo trabajamos</h3>
            <p className="mt-2 text-sm text-neutral-600">Brief inicial, propuesta, iteraciones y entrega. Te mantenemos informado en cada paso.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
