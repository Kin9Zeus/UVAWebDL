"use client";
import { useEffect, useState } from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  occupation?: string;
  age?: number;
  profession?: string;
  city?: string;
  country?: string;
  gender?: string;
};

export default function PerfilPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        setUser(data.user);
      } catch (e) {
        setError("Error cargando perfil");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user) return;
    setUser({ ...user, [e.target.name]: e.target.type === "number" ? Number(e.target.value) : e.target.value });
  };

  const onSave = async () => {
    if (!user) return;
    setSaving(true);
    try {
      const res = await fetch("/api/users/me", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          occupation: user.occupation,
          age: user.age,
          profession: user.profession,
          city: user.city,
          country: user.country,
          gender: user.gender,
        }),
      });
      if (!res.ok) throw new Error("No se pudo guardar");
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "No se pudo guardar";
      setError(message);
    } finally {
      setSaving(false);
    }
  };

  const onLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/";
  };

  if (loading) return <div className="mx-auto max-w-6xl px-4 py-12">Cargando...</div>;
  if (!user) return <div className="mx-auto max-w-6xl px-4 py-12">Inicia sesión para ver tu perfil.</div>;

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-[var(--color-tertiary)]">Perfil</h1>
          <Button onClick={onLogout} className="border border-neutral-300">Cerrar sesión</Button>
        </div>
        <p className="mt-2 text-neutral-600">Edita tu información personal.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="grid gap-4">
            <Input name="name" label="Nombre completo" value={user.name} onChange={onChange} />
            <Input name="email" label="Correo" value={user.email} disabled />
            <Input name="occupation" label="Ocupación" value={user.occupation ?? ""} onChange={onChange} />
            <Input name="age" label="Edad" value={String(user.age ?? "")} onChange={onChange} type="number" />
            <Input name="profession" label="Profesión" value={user.profession ?? ""} onChange={onChange} />
            <Input name="city" label="Ciudad" value={user.city ?? ""} onChange={onChange} />
            <Input name="country" label="País" value={user.country ?? ""} onChange={onChange} />
            <Input name="gender" label="Género" value={user.gender ?? ""} onChange={onChange} />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <div className="flex gap-3">
              <Button loading={saving} onClick={onSave} className="bg-[var(--color-secondary)] text-white">Guardar cambios</Button>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 p-6">
            <h3 className="font-medium">Historial de cursos</h3>
            <p className="text-sm text-neutral-600">Se mostrará aquí el estado de acceso (activo o vencido) y certificados.</p>
            <div className="mt-3 text-sm text-neutral-500">(Pendiente integración de pagos y certificados)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
