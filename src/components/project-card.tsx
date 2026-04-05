"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data/projects";

/* ─── Lightbox Component ──────────────────────────────────── */

function Lightbox({
  images,
  projectName,
  initialIndex,
  onClose,
}: {
  images: string[];
  projectName: string;
  initialIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initialIndex);

  const goNext = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);
  const goPrev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    // Lock scroll on both html and body to prevent any bleed-through
    const html = document.documentElement;
    const scrollY = window.scrollY;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, goNext, goPrev]);

  return (
    <div
      className="fixed top-0 left-0 z-[100] isolate flex items-center justify-center"
      style={{ width: "100vw", height: "100dvh" }}
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${projectName}`}
    >
      {/* Backdrop — full coverage */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/95 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300"
        aria-label="Cerrar galería"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-20 text-white/50 text-sm" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
        <span className="text-white font-medium">{String(current + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(images.length).padStart(2, "0")}</span>
      </div>

      {/* Prev */}
      <button
        onClick={goPrev}
        className="absolute left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300"
        aria-label="Imagen anterior"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      {/* Image */}
      <div className="relative z-10 max-w-[90vw] max-h-[80vh] animate-scale-in flex items-center justify-center">
        <img
          src={images[current]}
          alt={`${projectName} — imagen ${current + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          draggable={false}
        />
      </div>

      {/* Next */}
      <button
        onClick={goNext}
        className="absolute right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300"
        aria-label="Imagen siguiente"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      {/* Thumbnail strip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 max-w-[90vw] overflow-x-auto px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setCurrent(i)}
            className={`shrink-0 w-10 h-10 rounded-md overflow-hidden border-2 transition-all duration-300 ${
              i === current
                ? "border-[var(--color-accent)] opacity-100 scale-110"
                : "border-transparent opacity-50 hover:opacity-80"
            }`}
            aria-label={`Ver imagen ${i + 1}`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Project Card Component ──────────────────────────────── */

const INITIAL_GALLERY_COUNT = 6;

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const featuredImage = project.images[0];
  const galleryImages = project.images.slice(1);
  const visibleGallery = expanded ? galleryImages : galleryImages.slice(0, INITIAL_GALLERY_COUNT);
  const hiddenCount = galleryImages.length - INITIAL_GALLERY_COUNT;
  const isEven = index % 2 === 0;

  return (
    <>
      <article className="group" id={`project-${project.id}`}>
        {/* ─── Hero Section: Featured Image + Info ─── */}
        <div className={`grid gap-6 lg:gap-0 lg:grid-cols-2 ${isEven ? "" : "lg:direction-rtl"}`}>
          {/* Featured Image */}
          <div
            className={`relative overflow-hidden rounded-2xl lg:rounded-none cursor-pointer ${
              isEven ? "lg:rounded-l-2xl" : "lg:rounded-r-2xl lg:order-2"
            }`}
            style={{ aspectRatio: "4 / 3" }}
            onClick={() => setLightboxIndex(0)}
            role="button"
            tabIndex={0}
            aria-label={`Ver galería de ${project.name}`}
            onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(0)}
          >
            <Image
              src={featuredImage}
              alt={`${project.name} — imagen principal`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              priority={index < 2}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Zoom icon */}
            <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
            </div>
            {/* Image count badge */}
            <div className="absolute top-4 left-4">
              <span className="badge badge-glass text-[10px]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                {project.images.length} fotos
              </span>
            </div>
          </div>

          {/* Info Panel */}
          <div
            className={`flex flex-col justify-center lg:p-10 xl:p-14 ${
              isEven ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {/* Index + Category */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-3xl font-bold text-[var(--neutral-200)] leading-none"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="w-8 h-px bg-[var(--neutral-300)]" />
              {project.category && (
                <span className="badge badge-accent text-[10px]">{project.category}</span>
              )}
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--foreground)] tracking-tight leading-tight">
              {project.name}
            </h2>

            {/* Gold line */}
            <div className="line-accent mt-4 mb-5" />

            {/* Description */}
            <p className="text-sm sm:text-base text-[var(--neutral-500)] leading-relaxed max-w-lg">
              {project.description}
            </p>

            {/* CTA to gallery */}
            <button
              onClick={() => setLightboxIndex(0)}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] hover:text-[var(--color-secondary-dark)] transition-colors duration-300 w-fit group/btn"
            >
              Ver galería completa
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="transition-transform duration-300 group-hover/btn:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* ─── Gallery Grid ─── */}
        <div className="mt-6">
          {/* Desktop: Bento grid */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-2">
            {visibleGallery.map((src, idx) => {
              // Make first 2 thumbnails larger for visual hierarchy
              const isLarge = idx < 2;
              return (
                <figure
                  key={src}
                  className={`relative overflow-hidden rounded-xl cursor-pointer group/img ${
                    isLarge && idx === 0 ? "col-span-2 row-span-2" : ""
                  } ${isLarge && idx === 1 ? "col-span-1 row-span-2" : ""}`}
                  onClick={() => setLightboxIndex(idx + 1)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver imagen ${idx + 2} de ${project.name}`}
                  onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(idx + 1)}
                >
                  <div
                    className="relative w-full h-full"
                    style={{ aspectRatio: isLarge ? (idx === 0 ? "1 / 1" : "3 / 4") : "4 / 3" }}
                  >
                    <Image
                      src={src}
                      alt={`${project.name} — imagen ${idx + 2}`}
                      fill
                      sizes={isLarge ? "(max-width: 1024px) 50vw, 33vw" : "(max-width: 1024px) 33vw, 25vw"}
                      className="object-cover transition-transform duration-500 ease-out group-hover/img:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-500 flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all duration-300 scale-75 group-hover/img:scale-100">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                      </div>
                    </div>
                  </div>
                </figure>
              );
            })}

            {/* "Show more" tile */}
            {!expanded && hiddenCount > 0 && (
              <button
                onClick={() => setExpanded(true)}
                className="relative overflow-hidden rounded-xl bg-[var(--surface-warm)] border border-[var(--neutral-200)] flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:bg-[var(--neutral-100)] hover:border-[var(--color-accent)] group/more"
                style={{ aspectRatio: "4 / 3" }}
              >
                <div className="flex -space-x-2">
                  {galleryImages.slice(INITIAL_GALLERY_COUNT, INITIAL_GALLERY_COUNT + 3).map((src) => (
                    <div key={src} className="w-8 h-8 rounded-full overflow-hidden border-2 border-[var(--surface-warm)]">
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-semibold text-[var(--foreground)]">+{hiddenCount}</span>
                <span className="text-xs text-[var(--neutral-500)]">Ver más fotos</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neutral-400)" strokeWidth="2" strokeLinecap="round" className="transition-transform duration-300 group-hover/more:translate-y-0.5"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            )}
          </div>

          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden relative">
            <div className="flex gap-2.5 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4" style={{ scrollbarWidth: "none" }}>
              {galleryImages.map((src, idx) => (
                <div
                  key={src}
                  className="snap-start shrink-0 w-64 sm:w-72 rounded-xl overflow-hidden cursor-pointer group/img relative"
                  onClick={() => setLightboxIndex(idx + 1)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver imagen ${idx + 2} de ${project.name}`}
                  onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(idx + 1)}
                >
                  <div className="relative" style={{ aspectRatio: "4 / 3" }}>
                    <Image
                      src={src}
                      alt={`${project.name} — imagen ${idx + 2}`}
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
            {/* Scroll fade indicators */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-[var(--background)] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-[var(--background)] to-transparent" />
          </div>

          {/* Collapse button */}
          {expanded && hiddenCount > 0 && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setExpanded(false)}
                className="inline-flex items-center gap-2 text-xs font-medium text-[var(--neutral-500)] hover:text-[var(--foreground)] transition-colors duration-300"
              >
                Mostrar menos
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="rotate-180"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            </div>
          )}
        </div>

        {/* ─── Bottom separator ─── */}
        <div className="separator-gold mt-12 sm:mt-16" />
      </article>

      {/* ─── Lightbox ─── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          projectName={project.name}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}