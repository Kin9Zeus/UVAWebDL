'use client';

import { useAnalytics } from '@/hooks/use-analytics';
import Image from 'next/image';
import Link from 'next/link';

const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/";
const youtube = process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/@uvarq?si=DK8V8qn2uPUYFZpQ";
const spotify = process.env.NEXT_PUBLIC_SPOTIFY_URL || "https://open.spotify.com/";

const FOOTER_LINKS = [
  { href: "/cursos", label: "Cursos" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/podcast", label: "Podcast" },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/contacto", label: "Contacto" },
];

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    url: instagram,
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
        <path d="M6 2h8a4 4 0 014 4v8a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4zm0 2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6zm9 1a1 1 0 110 2 1 1 0 010-2zM10 7a3 3 0 110 6 3 3 0 010-6z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: youtube,
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
        <path d="M19.3 6.4a2 2 0 00-1.4-1.4C16.6 4.5 10 4.5 10 4.5s-6.6 0-7.9.5A2 2 0 00.7 6.4C.5 7.7.5 10 .5 10s0 2.3.2 3.6a2 2 0 001.4 1.4c1.3.5 7.9.5 7.9.5s6.6 0 7.9-.5a2 2 0 001.4-1.4c.2-1.3.2-3.6.2-3.6s0-2.3-.2-3.6zM8 13.5v-7l5 3.5-5 3.5z"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    url: whatsapp,
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a8 8 0 00-6.9 12.3L2 18l3.8-1A8 8 0 1010 2zm0 2a6 6 0 016 6 6 6 0 01-8.4 5.4l-.3-.1-.2.1-.9.2.2-.9v-.2l-.1-.2A6 6 0 0110 4zm-3 3c.2-.5.4-.6.8-.6h.3c.2 0 .4.1.5.5l.3.7c.2.4.1.5-.1.8l-.3.3c-.2.2-.2.4 0 .7.3.5.8 1.2 1.4 1.6.3.3.5.3.7.1l.4-.4c.2-.2.5-.3.8 0l.7.3c.3.1.5.3.5.5 0 .3-.1.6-.4.8-.3.3-.7.5-1.2.5-.8 0-1.7-.4-2.6-1.2a7.7 7.7 0 01-1.6-2.1c-.2-.6-.2-1 .1-1.4L7 9l.1-.1c.2-.1.4-.4.6-.9z"/>
      </svg>
    ),
  },
  {
    name: "Spotify",
    url: spotify,
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.7 11.6a.7.7 0 01-.9.4c-2.4-1.5-5.5-1.8-9.1-.8a.7.7 0 11-.4-1.3c4-.9 7.5-.6 10.2 1.1.3.2.4.6.2.9zm1.2-2.5a.8.8 0 01-1 .4c-2.8-1.7-6.9-2.2-10.2-1a.8.8 0 11-.5-1.5c3.7-1.3 8.3-.7 11.4 1.2.4.3.6.8.3 1.2zm.2-2.8a1 1 0 01-1.2.4c-3.2-1.9-8.1-2.2-11.5-.9a1 1 0 11-.7-1.8c3.9-1.4 9.2-1 12.9 1.1.5.2.7.8.5 1.2z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const { trackEvent } = useAnalytics();

  const handleSocialClick = (platform: string, url: string) => {
    trackEvent('SocialClick', { platform, url });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[var(--neutral-900)] to-[#111110] text-white/80 pb-32 md:pb-0">
      {/* Top gold separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Image
              src="/logo-uva.png"
              alt="Logo UVA"
              width={120}
              height={120}
              className="h-10 w-auto brightness-0 invert opacity-90"
            />
            <p className="mt-4 text-sm text-white/50 max-w-sm leading-relaxed">
              Arquitectura con alma. Diseño con carácter. Construcción con visión.
              Plataforma profesional para aprender, crear y transformar.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  onClick={() => handleSocialClick(social.name, social.url)}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/60 transition-all duration-300 hover:bg-[var(--color-secondary)] hover:text-white hover:border-[var(--color-secondary)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-4">
              Navegación
            </h3>
            <ul className="grid gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 link-underline link-underline-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-4">
              Oficina
            </h3>
            <div className="space-y-3 text-sm text-white/50">
              <p>Calle 14 #23-71, Oficina 501</p>
              <p>Edificio Alturia</p>
              <p>Pereira, Risaralda, Colombia</p>
            </div>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full border border-white/10 text-white/60 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 00-6.9 12.3L2 18l3.8-1A8 8 0 1010 2z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom separator */}
        <div className="mt-12 h-px bg-white/[0.06]" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} UVA — Unidad Vectorial de Arquitectura. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            Developed by{" "}
            <a
              href="https://www.devleck.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Devleck website"
              className="font-bold px-2 py-0.5 rounded-md bg-black text-[#EFFF00] shadow-[0_0_10px_rgba(239,255,0,0.5)] border border-[#EFFF00]/20 tracking-wide hover:bg-[#EFFF00] hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,255,0,0.8)] focus:outline-none focus:ring-2 focus:ring-[#EFFF00] focus:ring-offset-2"
            >
              Devleck
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
