"use client";
import { useState, Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";
  const [form, setForm] = useState({ email: "", password: "" });
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
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al iniciar sesión");
      
      // Force a hard reload to update auth state in UI
      window.location.href = redirectUrl;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Error al iniciar sesión";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--color-tertiary)]">Bienvenido a UVA</h1>
      <p className="mt-2 text-neutral-600">Únete y accede a cursos, comunidad y mentorías profesionales.</p>
      <form onSubmit={onSubmit} className="mt-8 grid gap-4">
        <Input name="email" label="Correo electrónico" value={form.email} onChange={onChange} type="email" />
        <Input name="password" label="Contraseña" value={form.password} onChange={onChange} type="password" />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button loading={loading} className="bg-[var(--color-secondary)] text-white" type="submit">Entrar</Button>
        <p className="text-sm">¿No tienes cuenta? <a href="/register" className="text-[var(--color-secondary)]">Regístrate</a></p>
      </form>
    </div>
  );
}

export default function LoginPage() {
  return (
    <section className="min-h-[70vh]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <Suspense fallback={<div>Cargando...</div>}>
            <LoginForm />
          </Suspense>
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
