"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/cursos", label: "Academia" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/podcast", label: "Podcast" },
  { href: "/youtube", label: "YouTube" },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/servicios", label: "Servicios" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-black/[0.03]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ${scrolled ? "py-2.5" : "py-3.5"}`}>
        {/* Logo */}
        <Link
          href="/"
          aria-label="Inicio UVA"
          className="flex items-center group"
        >
          <Image
            src="/logo-uva.png"
            alt="Logo UVA"
            width={120}
            height={120}
            className={`w-auto transition-all duration-500 group-hover:opacity-80 ${scrolled ? "h-7 md:h-8" : "h-8 md:h-10"}`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive(link.href)
                  ? "text-[var(--color-secondary)]"
                  : "text-[var(--neutral-600)] hover:text-[var(--foreground)] hover:bg-black/[0.03]"
              }`}
            >
              {link.label}
              {/* Active indicator dot */}
              {isActive(link.href) && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--color-secondary)] animate-scale-in" />
              )}
            </Link>
          ))}
          {/* CTA Contact */}
          <Link
            href="/contacto"
            className={`ml-2 px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              isActive("/contacto")
                ? "bg-[var(--color-secondary)] text-white shadow-[var(--shadow-glow)]"
                : "bg-[var(--color-secondary)] text-white hover:shadow-[var(--shadow-glow)] hover:-translate-y-[1px]"
            }`}
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-[var(--neutral-200)] bg-white/80 transition-colors hover:bg-[var(--neutral-100)]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-[1.5px] bg-[var(--foreground)] rounded-full transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-[var(--foreground)] rounded-full transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-[var(--foreground)] rounded-full transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden animate-slide-down border-t border-black/[0.03] bg-white/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-4 py-4 grid gap-1 stagger-children">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? "bg-[var(--color-secondary)]/5 text-[var(--color-secondary)]"
                    : "text-[var(--neutral-700)] hover:bg-[var(--neutral-100)]"
                }`}
              >
                {isActive(link.href) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                )}
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-2 flex items-center justify-center px-5 py-3 rounded-full bg-[var(--color-secondary)] text-white text-sm font-medium"
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}