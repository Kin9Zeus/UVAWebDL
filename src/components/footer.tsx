'use client';

import { useAnalytics } from '@/hooks/use-analytics';

const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/";
const youtube = process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/@uvarq?si=DK8V8qn2uPUYFZpQ";
const spotify = process.env.NEXT_PUBLIC_SPOTIFY_URL || "https://open.spotify.com/";

export default function Footer() {
  const { trackEvent } = useAnalytics();

  const handleSocialClick = (platform: string, url: string) => {
    trackEvent('SocialClick', {
      platform,
      url
    });
  };

  return (
    <footer className="border-t border-black/5 bg-white pb-32 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-neutral-600 grid gap-6 sm:grid-cols-3 items-center">
        <div>
          <p className="font-medium text-[var(--color-tertiary)]">UVA — Unidad Vectorial de Arquitectura</p>
          <p className="text-neutral-500">Calle 14 #23-71, Oficina 501, Edificio Alturia, Pereira, Risaralda, Colombia</p>
          <p className="mt-2 text-neutral-500">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-neutral-500">
            Elegante, minimalista y funcional. Arquitectura con propósito.
          </p>
          <p className="mt-2 text-xs text-neutral-400 flex items-center justify-center gap-1">
            Developed by <span className="font-bold px-2 py-0.5 rounded-md bg-black text-[#EFFF00] shadow-[0_0_10px_rgba(239,255,0,0.5)] border border-[#EFFF00]/20 tracking-wide">Devleck</span>
          </p>
        </div>
        <div className="flex justify-center sm:justify-end gap-3">
          <a 
            href={instagram} 
            onClick={() => handleSocialClick('Instagram', instagram)}
            aria-label="Instagram" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--color-tertiary)] hover:text-[var(--color-secondary)] transition"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2h8a4 4 0 014 4v8a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4zm0 2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6zm9 1a1 1 0 110 2 1 1 0 010-2zM10 7a3 3 0 110 6 3 3 0 010-6z"/>
            </svg>
          </a>
          <a 
            href={youtube} 
            onClick={() => handleSocialClick('YouTube', youtube)}
            aria-label="YouTube" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--color-tertiary)] hover:text-[var(--color-secondary)] transition"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.3 6.4a2 2 0 00-1.4-1.4C16.6 4.5 10 4.5 10 4.5s-6.6 0-7.9.5A2 2 0 00.7 6.4C.5 7.7.5 10 .5 10s0 2.3.2 3.6a2 2 0 001.4 1.4c1.3.5 7.9.5 7.9.5s6.6 0 7.9-.5a2 2 0 001.4-1.4c.2-1.3.2-3.6.2-3.6s0-2.3-.2-3.6zM8 13.5v-7l5 3.5-5 3.5z"/>
            </svg>
          </a>
          <a 
            href={whatsapp} 
            onClick={() => handleSocialClick('WhatsApp', whatsapp)}
            aria-label="WhatsApp" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--color-tertiary)] hover:text-[var(--color-secondary)] transition"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2a8 8 0 00-6.9 12.3L2 18l3.8-1A8 8 0 1010 2zm0 2a6 6 0 016 6 6 6 0 01-8.4 5.4l-.3-.1-.2.1-.9.2.2-.9v-.2l-.1-.2A6 6 0 0110 4zm-3 3c.2-.5.4-.6.8-.6h.3c.2 0 .4.1.5.5l.3.7c.2.4.1.5-.1.8l-.3.3c-.2.2-.2.4 0 .7.3.5.8 1.2 1.4 1.6.3.3.5.3.7.1l.4-.4c.2-.2.5-.3.8 0l.7.3c.3.1.5.3.5.5 0 .3-.1.6-.4.8-.3.3-.7.5-1.2.5-.8 0-1.7-.4-2.6-1.2a7.7 7.7 0 01-1.6-2.1c-.2-.6-.2-1 .1-1.4L7 9l.1-.1c.2-.1.4-.4.6-.9z"/>
            </svg>
          </a>
          <a 
            href={spotify} 
            onClick={() => handleSocialClick('Spotify', spotify)}
            aria-label="Spotify" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--color-tertiary)] hover:text-[var(--color-secondary)] transition"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.7 11.6a.7.7 0 01-.9.4c-2.4-1.5-5.5-1.8-9.1-.8a.7.7 0 11-.4-1.3c4-.9 7.5-.6 10.2 1.1.3.2.4.6.2.9zm1.2-2.5a.8.8 0 01-1 .4c-2.8-1.7-6.9-2.2-10.2-1a.8.8 0 11-.5-1.5c3.7-1.3 8.3-.7 11.4 1.2.4.3.6.8.3 1.2zm.2-2.8a1 1 0 01-1.2.4c-3.2-1.9-8.1-2.2-11.5-.9a1 1 0 11-.7-1.8c3.9-1.4 9.2-1 12.9 1.1.5.2.7.8.5 1.2z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
