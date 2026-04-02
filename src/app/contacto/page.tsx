"use client";
import { useState } from "react";
import Image from "next/image";

const WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/";
const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setOk(false);
    if (!form.nombre || !form.email || !form.mensaje) {
      setError("Por favor completa todos los campos.");
      return;
    }
    const emailOk = /.+@.+\..+/.test(form.email);
    if (!emailOk) {
      setError("Correo electrónico inválido.");
      return;
    }
    setOk(true);
  };

  return (
    <section>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="relative min-h-[50vh] sm:min-h-[56vh] lg:min-h-[64vh]">
          <Image src="/Humanizar/Contacto1.jpg" alt="Contacto UVA" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="hero-gradient absolute inset-0" />
        <div className="grain-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <div className="text-white max-w-2xl animate-reveal-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[var(--color-accent)]" />
                <span className="text-xs uppercase tracking-[0.15em] text-white/50">Hablemos</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Contacto</h1>
              <p className="mt-3 text-sm sm:text-base text-white/65 max-w-lg">Hablemos de tu proyecto — respuesta en 24–48 horas.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#form-contacto" className="btn-primary rounded-full px-6 py-3 text-sm font-medium">Escribir mensaje</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] backdrop-blur-sm px-6 py-3 text-sm text-white transition-all duration-300 hover:bg-white/15 hover:border-white/40">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 00-6.9 12.3L2 18l3.8-1A8 8 0 1010 2z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Instagram CTA */}
        <div className="text-center">
          <p className="text-[var(--neutral-500)]">También puedes contactarnos por Instagram.</p>
          <div className="mt-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--neutral-200)] px-5 py-3 text-sm font-medium text-[var(--foreground)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-all duration-300 card-lift"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path d="M6 2h8a4 4 0 014 4v8a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4zm0 2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6zm9 1a1 1 0 110 2 1 1 0 010-2zM10 7a3 3 0 110 6 3 3 0 010-6z"/></svg>
              Instagram
            </a>
          </div>
        </div>

        <div className="separator-gold my-12" />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <form id="form-contacto" onSubmit={onSubmit} className="rounded-2xl border border-[var(--neutral-200)] p-6 sm:p-8 bg-[var(--surface)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="line-accent" />
              <h2 className="text-lg font-semibold text-[var(--foreground)]">Envíanos un mensaje</h2>
            </div>
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium text-[var(--neutral-600)]">Nombre completo</label>
                <input name="nombre" value={form.nombre} onChange={onChange} className="mt-1.5 w-full rounded-xl border border-[var(--neutral-200)] bg-[var(--surface-warm)] px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none transition-all duration-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-[var(--neutral-600)]">Correo electrónico</label>
                <input name="email" value={form.email} onChange={onChange} type="email" className="mt-1.5 w-full rounded-xl border border-[var(--neutral-200)] bg-[var(--surface-warm)] px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none transition-all duration-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-[var(--neutral-600)]">Mensaje</label>
                <textarea name="mensaje" value={form.mensaje} onChange={onChange} className="mt-1.5 w-full rounded-xl border border-[var(--neutral-200)] bg-[var(--surface-warm)] px-4 py-3 h-32 text-sm focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none transition-all duration-300 resize-none" />
              </div>
              {error && <p className="text-sm text-red-600 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500" />{error}</p>}
              {ok && <p className="text-sm text-green-600 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Mensaje validado. Implementa el envío en el backend.</p>}
              <button className="btn-primary mt-2 rounded-full px-6 py-3.5 text-sm font-medium w-fit" type="submit">Enviar</button>
              <p className="text-xs text-[var(--neutral-400)]">Protegemos tus datos conforme a la Ley 1581 de 2012 (Colombia).</p>
            </div>
          </form>

          {/* Map & Location */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-[var(--neutral-200)] p-6 sm:p-8 bg-[var(--surface)] card-lift">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[var(--color-accent)]/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <h2 className="text-lg font-semibold text-[var(--foreground)]">Ubicación</h2>
              </div>
              <p className="text-sm text-[var(--neutral-500)] leading-relaxed">Calle 14 #23-71, Oficina 501, Edificio Alturia, Pereira, Risaralda, Colombia</p>
              <div className="mt-4 rounded-xl overflow-hidden">
                <iframe
                  title="Oficinas UVA — Edificio Alturia"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d496.9780638564267!2d-75.69202625813875!3d4.80016390355737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCalle%2014%20%2323-71%2C%20oficina%20501%2C%20edificio%20Alturia%2C%20Pereira%2C%20Risaralda%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1761172317167!5m2!1ses-419!2sco"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: 12 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://maps.google.com/?q=Calle%2014%20%2323-71%2C%20Oficina%20501%2C%20Edificio%20Alturia%2C%20Pereira" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm rounded-full px-4 py-2.5 inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  Ver en Google Maps
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm rounded-full px-4 py-2.5 inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 00-6.9 12.3L2 18l3.8-1A8 8 0 1010 2z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="separator-gold mb-8 mx-auto max-w-xs" />
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">
            ¿Prefieres mensaje directo?
          </h3>
          <p className="mt-2 text-[var(--neutral-500)]">Contáctanos ahora mismo.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 00-6.9 12.3L2 18l3.8-1A8 8 0 1010 2z"/></svg>
              Escribir por WhatsApp
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path d="M6 2h8a4 4 0 014 4v8a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4zm0 2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6zm9 1a1 1 0 110 2 1 1 0 010-2zM10 7a3 3 0 110 6 3 3 0 010-6z"/></svg>
              Ir a Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
