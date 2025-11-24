"use client";
import { useState } from "react";
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
        <header className="text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--color-tertiary)]">Servicios de Arquitectura</h1>
          <p className="mt-2 text-neutral-600 max-w-2xl mx-auto">Selecciona un servicio y cuéntanos tu idea. Te contactaremos para una propuesta a medida.</p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Selección de servicios */}
          <div>
            <div className="grid gap-6 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(s.id)}
                  className={`text-left rounded-2xl border p-6 transition hover:shadow-sm ${selected===s.id?"border-[var(--color-secondary)] ring-2 ring-[var(--color-secondary)]":"border-neutral-200"}`}
                >
                  <h3 className="font-semibold text-[var(--color-tertiary)]">{s.name}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs text-neutral-500">Paso 1: Elige el servicio que necesitas.</p>
          </div>

          {/* Formulario de contacto */}
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
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
