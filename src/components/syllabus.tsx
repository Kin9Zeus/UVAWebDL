"use client";

import { useState } from "react";

interface SyllabusItem {
  title: string;
  items?: string[];
  videoUrl?: string;
}

interface SyllabusProps {
  syllabus: SyllabusItem[];
  isPurchased: boolean;
}

export default function Syllabus({ syllabus, isPurchased }: SyllabusProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleSession = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mt-8">
      <h3 className="font-medium text-lg text-[var(--color-tertiary)] mb-4">Temario del Curso</h3>
      <div className="space-y-3">
        {syllabus.map((session, index) => {
          const isOpen = expandedIndex === index;
          return (
            <div
              key={index}
              className={`overflow-hidden rounded-lg border transition-all duration-300 ${
                isOpen ? "border-[var(--color-secondary)] bg-white shadow-md" : "border-neutral-200 bg-neutral-50"
              }`}
            >
              <button
                onClick={() => toggleSession(index)}
                className="flex w-full items-center justify-between px-4 py-3 text-left focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xl transition-transform duration-300 ${isOpen ? "scale-110" : "scale-100 grayscale"}`}>
                    🟣
                  </span>
                  <h4 className={`font-semibold transition-colors ${isOpen ? "text-[var(--color-secondary)]" : "text-neutral-700"}`}>
                    {session.title.split(":")[0]} {/* Muestra "SESIÓN X" */}
                  </h4>
                </div>
                <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-neutral-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 pt-0">
                   {/* Título completo descriptivo */}
                   <p className="mb-2 text-sm font-medium text-neutral-800 border-b border-neutral-100 pb-2">
                     {session.title.split(":").slice(1).join(":").trim() || session.title}
                   </p>
                  {session.items && (
                    <ul className="list-disc pl-6 text-sm text-neutral-600 space-y-2">
                      {session.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* Video/Resource Section */}
                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    {isPurchased ? (
                      session.videoUrl ? (
                        session.videoUrl.includes("drive.google.com") && !session.videoUrl.includes("preview") ? (
                          // Es un link de descarga/recurso (ej: PDF)
                          <div className="space-y-2">
                             <p className="text-xs font-semibold text-green-600 flex items-center gap-1">
                               <span>📖</span> Recurso Digital Disponible
                             </p>
                             <a 
                               href={session.videoUrl} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors group"
                             >
                               <div className="p-2 bg-white rounded-full text-green-600 shadow-sm group-hover:scale-110 transition-transform">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                 </svg>
                               </div>
                               <div>
                                 <p className="font-semibold text-green-800">Descargar Material</p>
                                 <p className="text-xs text-green-600">Haz clic para acceder al contenido</p>
                               </div>
                             </a>
                          </div>
                        ) : (
                          // Es un video (Youtube o Drive Preview)
                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-[var(--color-secondary)] flex items-center gap-1">
                              <span>🎥</span> Clase Grabada Disponible
                            </p>
                            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg">
                              <iframe
                                src={session.videoUrl}
                                className="w-full h-full"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        )
                      ) : (
                        <p className="text-xs text-neutral-400 italic">Contenido no disponible aún.</p>
                      )
                    ) : (
                      <div className="flex items-center gap-2 p-3 bg-neutral-100 rounded border border-neutral-200 text-neutral-500 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                        </svg>
                        <span>Compra para acceder al contenido.</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 rounded-lg bg-[var(--color-tertiary)]/5 p-4 border border-[var(--color-tertiary)]/10 text-sm text-neutral-700 space-y-2">
        <p>✅ <strong>Dirigido a:</strong> Arquitectos, Diseñadores, Ingenieros, Empíricos y Principiantes</p>
        <p>🎥 Clases Online en vivo vía Zoom (grabadas)</p>
        <p>📖 Incluye Documentos y Material de Trabajo</p>
        <p>📑 Incluye Certificado y grupo de Mentorías</p>
      </div>
    </div>
  );
}
