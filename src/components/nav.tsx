"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" aria-label="Inicio UVA" className="flex items-center">
          <Image src="/logo-uva.png" alt="Logo UVA" width={120} height={120} className="h-8 md:h-10 w-auto" priority />
        </Link>
        <button
          className="sm:hidden rounded p-2 border border-neutral-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
        <nav className="hidden sm:flex gap-4 text-sm">
          <Link href="/" className="hover:text-[var(--color-secondary)] transition-colors">Inicio</Link>
          <Link href="/cursos" className="hover:text-[var(--color-secondary)] transition-colors">Cursos</Link>
          <Link href="/proyectos" className="hover:text-[var(--color-secondary)] transition-colors">Proyectos</Link>
          <Link href="/podcast" className="hover:text-[var(--color-secondary)] transition-colors">Podcast</Link>
          <Link href="/comunidad" className="hover:text-[var(--color-secondary)] transition-colors">Comunidad</Link>
          <Link href="/servicios" className="hover:text-[var(--color-secondary)] transition-colors">Servicios</Link>
          <Link href="/contacto" className="hover:text-[var(--color-secondary)] transition-colors">Contacto</Link>
          <Link href="/login" className="hover:text-[var(--color-secondary)] transition-colors">Entrar</Link>
        </nav>
      </div>
      {open && (
        <div className="sm:hidden border-t border-black/5 bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-3 grid gap-2 text-sm">
            <Link href="/" className="py-1">Inicio</Link>
            <Link href="/cursos" className="py-1">Cursos</Link>
            <Link href="/proyectos" className="py-1">Proyectos</Link>
            <Link href="/podcast" className="py-1">Podcast</Link>
            <Link href="/comunidad" className="py-1">Comunidad</Link>
            <Link href="/servicios" className="py-1">Servicios</Link>
            <Link href="/contacto" className="py-1">Contacto</Link>
            <Link href="/login" className="py-1">Entrar</Link>
          </nav>
        </div>
      )}
    </header>
  );
}