"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al registrarse");
      router.push("/perfil");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Error al registrarse";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[70vh]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--color-tertiary)]">Crea tu cuenta</h1>
            <p className="mt-2 text-neutral-600">De UVA para todxs: aprende, conecta y crece con contenido de alto valor.</p>
            <form onSubmit={onSubmit} className="mt-8 grid gap-4">
              <Input name="name" label="Nombre completo" value={form.name} onChange={onChange} />
              <Input name="email" label="Correo electrónico" value={form.email} onChange={onChange} type="email" />
              <Input name="password" label="Contraseña" value={form.password} onChange={onChange} type="password" />
              {error && <p className="text-sm text-red-600">{error}</p>}
              <Button loading={loading} className="bg-[var(--color-secondary)] text-white" type="submit">Registrarme</Button>
              <p className="text-sm">¿Ya tienes cuenta? <a href="/login" className="text-[var(--color-secondary)]">Inicia sesión</a></p>
            </form>
          </div>
          <div className="hidden md:block relative">
            <div className="relative h-[70vh] rounded-2xl overflow-hidden">
              <Image
                src="/bg-auth.jpg"
                alt="Residencia Lepore"
                fill
                sizes="(max-width: 768px) 0px, 50vw"
                className="transition-transform duration-500 hover:scale-[1.02]"
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="absolute left-4 top-4 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-[var(--color-tertiary)]">Residencia Lepore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
