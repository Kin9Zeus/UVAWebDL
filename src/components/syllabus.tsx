"use client";

import { useState } from "react";

interface SyllabusItem {
  title: string;
  items?: string[];
}

interface SyllabusProps {
  syllabus: SyllabusItem[];
}

export default function Syllabus({ syllabus }: SyllabusProps) {
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
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
