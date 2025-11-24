"use client";
import { useState } from "react";

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
    // TODO: integrar envío real vía API/Email (Node.js + Express/Firebase)
    setOk(true);
  };

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--color-tertiary)]">Contacto</h1>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">Hablemos de tu proyecto — respuesta en 24–48 horas.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm hover:bg-neutral-50 transition transform hover:scale-[1.01]"
            >
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm hover:bg-neutral-50 transition transform hover:scale-[1.01]"
            >
              Instagram
            </a>
          </div>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Formulario */}
          <form onSubmit={onSubmit} className="rounded-xl border border-neutral-200 p-6 bg-white/60">
            <h2 className="text-lg font-semibold text-[var(--color-tertiary)]">Envíanos un mensaje</h2>
            <div className="mt-4 grid gap-4">
              <div>
                <label className="text-sm text-neutral-600">Nombre completo</label>
                <input name="nombre" value={form.nombre} onChange={onChange} className="mt-1 w-full rounded border border-neutral-300 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm text-neutral-600">Correo electrónico</label>
                <input name="email" value={form.email} onChange={onChange} type="email" className="mt-1 w-full rounded border border-neutral-300 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm text-neutral-600">Mensaje</label>
                <textarea name="mensaje" value={form.mensaje} onChange={onChange} className="mt-1 w-full rounded border border-neutral-300 px-3 py-2 h-32" />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              {ok && <p className="text-sm text-green-600">Mensaje validado. Implementa el envío en el backend.</p>}
              <button className="mt-2 rounded-full bg-[var(--color-secondary)] px-5 py-3 text-white transition hover:opacity-90" type="submit">Enviar</button>
              <p className="text-xs text-neutral-400">Protegemos tus datos conforme a la Ley 1581 de 2012 (Colombia).</p>
            </div>
          </form>

          {/* Mapa y info */}
          <aside>
            <div className="rounded-xl border border-neutral-200 p-6 bg-white">
              <h2 className="text-lg font-semibold text-[var(--color-tertiary)]">Ubicación</h2>
              <p className="text-sm text-neutral-500 mt-1">Calle 14 #23-71, Oficina 501, Edificio Alturia, Pereira, Risaralda, Colombia</p>
              <iframe
                title="Oficinas UVA — Edificio Alturia"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d496.9780638564267!2d-75.69202625813875!3d4.80016390355737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCalle%2014%20%2323-71%2C%20oficina%20501%2C%20edificio%20Alturia%2C%20Pereira%2C%20Risaralda%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1761172317167!5m2!1ses-419!2sco"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: 12 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="mt-3 flex gap-3">
                <a href="https://maps.google.com/?q=Calle%2014%20%2323-71%2C%20Oficina%20501%2C%20Edificio%20Alturia%2C%20Pereira" target="_blank" rel="noopener noreferrer" className="text-sm rounded-full border border-neutral-300 px-4 py-2 hover:bg-neutral-50 transition">Ver en Google Maps</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm rounded-full border border-neutral-300 px-4 py-2 hover:bg-neutral-50 transition">WhatsApp</a>
              </div>
            </div>
          </aside>
        </div>

        {/* CTA final */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600">¿Prefieres mensaje directo? Contáctanos ahora mismo.</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-[var(--color-secondary)] px-6 py-3 text-white font-medium hover:opacity-90 transition">Escribir por WhatsApp</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-neutral-300 px-6 py-3 text-sm hover:bg-neutral-50 transition">Ir a Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}