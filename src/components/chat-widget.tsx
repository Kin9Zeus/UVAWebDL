"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ─── Types ─────────────────────────────────────────────── */

interface Message {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: number;
}

interface ChatHistory {
  role: "user" | "model";
  parts: { text: string }[];
}

/* ─── Constants ─────────────────────────────────────────── */

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "model",
  text: "¡Hola! 👋 Soy el asistente de **UVA Arquitectura**. Puedo ayudarte con información sobre nuestros cursos, servicios de arquitectura, asesorías y más. ¿En qué puedo ayudarte hoy?",
  timestamp: Date.now(),
};

const QUICK_ACTIONS = [
  { label: "Servicios", value: "¿Qué servicios de arquitectura ofrecen?" },
  { label: "Cursos", value: "¿Qué cursos tienen disponibles?" },
  { label: "Asesoría", value: "Quiero agendar una asesoría 1 a 1" },
  { label: "Contacto", value: "¿Cómo puedo contactar al equipo?" },
];

/* ─── Helpers ───────────────────────────────────────────── */

function formatText(text: string): string {
  const linkStyle = 'color:var(--color-secondary);text-decoration:underline;word-break:break-all;';
  return text
    // 1. Convert markdown links [text](url) → clickable anchor
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
      `<a href="$2" target="_blank" rel="noopener noreferrer" style="${linkStyle}">$1</a>`
    )
    // 2. Bold **text**
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // 3. Newlines
    .replace(/\n/g, "<br />")
    // 4. Auto-link plain URLs (not already inside href="")
    .replace(
      /(?<!href="|">)(https?:\/\/[^\s<,;]+[^\s<,;.)"\]])/g,
      `<a href="$1" target="_blank" rel="noopener noreferrer" style="${linkStyle}">$1</a>`
    );
}

function generateId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

/* ─── Component ─────────────────────────────────────────── */

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
      setHasUnread(false);
    }
  }, [isOpen]);

  // Build history for API
  const buildHistory = useCallback((): ChatHistory[] => {
    return messages
      .filter((m) => m.id !== "welcome")
      .map((m) => ({
        role: m.role,
        parts: [{ text: m.text }],
      }));
  }, [messages]);

  // Send message
  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

      const userMsg: Message = {
        id: generateId(),
        role: "user",
        text: text.trim(),
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: text.trim(),
            history: buildHistory(),
          }),
        });

        const data = await res.json();

        const botMsg: Message = {
          id: generateId(),
          role: "model",
          text: data.reply || data.error || "Lo siento, ocurrió un error.",
          timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, botMsg]);

        if (!isOpen) setHasUnread(true);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: generateId(),
            role: "model",
            text: "No pude conectarme al servidor. Intenta de nuevo en un momento.",
            timestamp: Date.now(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, buildHistory, isOpen]
  );

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  // Handle Enter key (Shift+Enter for newline)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  // Auto-resize textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 100) + "px";
  };

  return (
    <>
      {/* ═══ Floating Button ═══ */}
      {/* On mobile: bottom-24 to clear sticky CTA banners on landing pages.
          On md+: bottom-5 (normal position, no sticky banner). */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-24 md:bottom-5 right-5 z-[60] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group"
        style={{
          background: "linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))",
          boxShadow: "0 4px 20px rgba(102,97,171,0.35), 0 2px 8px rgba(0,0,0,0.15)",
        }}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat de asistencia"}
      >
        {/* Chat icon / Close icon */}
        <div className="relative w-6 h-6 text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className={`absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>

        {/* Unread badge */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[var(--color-accent)] border-2 border-white animate-pulse" />
        )}
      </button>

      {/* ═══ Chat Window ═══ */}
      {/* On mobile: bottom-[7.5rem] (above the raised button).
          On md+: bottom-24 (above the normal-positioned button). */}
      <div
        className={`fixed bottom-[7.5rem] md:bottom-24 right-5 z-[60] w-[360px] max-w-[calc(100vw-2.5rem)] flex flex-col rounded-2xl overflow-hidden transition-all duration-400 ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
        style={{
          height: "min(520px, calc(100vh - 180px))",
          boxShadow: "0 12px 50px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.08)",
          border: "1px solid var(--neutral-200)",
        }}
        role="dialog"
        aria-label="Chat de asistencia UVA"
      >
        {/* ─── Header ─── */}
        <div
          className="shrink-0 px-5 py-4 flex items-center gap-3"
          style={{
            background: "linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))",
          }}
        >
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-sm leading-tight">UVA Asistente</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/60 text-[11px]">En línea</span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200"
            aria-label="Minimizar chat"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14" />
            </svg>
          </button>
        </div>

        {/* ─── Messages ─── */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[var(--surface-warm)]"
          style={{ scrollbarWidth: "thin" }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[var(--color-secondary)] text-white rounded-br-md"
                    : "bg-[var(--surface)] border border-[var(--neutral-200)] text-[var(--foreground)] rounded-bl-md"
                }`}
                style={
                  msg.role === "user"
                    ? { boxShadow: "0 2px 8px rgba(102,97,171,0.2)" }
                    : { boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }
                }
              >
                <div dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[var(--surface)] border border-[var(--neutral-200)] rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[var(--neutral-400)] animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-[var(--neutral-400)] animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-[var(--neutral-400)] animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* ─── Quick Actions (only at start) ─── */}
        {messages.length <= 1 && !isLoading && (
          <div className="shrink-0 px-4 py-2 bg-[var(--surface-warm)] border-t border-[var(--neutral-200)]/50 flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {QUICK_ACTIONS.map((action) => (
              <button
                key={action.label}
                onClick={() => sendMessage(action.value)}
                className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--neutral-200)] bg-[var(--surface)] text-[var(--neutral-600)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/[0.04] transition-all duration-200"
              >
                {action.label}
              </button>
            ))}
          </div>
        )}

        {/* ─── Input ─── */}
        <form
          onSubmit={handleSubmit}
          className="shrink-0 px-3 py-3 bg-[var(--surface)] border-t border-[var(--neutral-200)] flex items-end gap-2"
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje..."
            maxLength={500}
            rows={1}
            className="flex-1 resize-none rounded-xl border border-[var(--neutral-200)] bg-[var(--surface-warm)] px-3.5 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--neutral-400)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all duration-200"
            style={{ maxHeight: 100, scrollbarWidth: "thin" }}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 active:scale-95"
            style={{
              background: "linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))",
            }}
            aria-label="Enviar mensaje"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </form>

        {/* ─── Footer branding ─── */}
        <div className="shrink-0 px-4 py-1.5 bg-[var(--surface)] text-center">
          <span className="text-[10px] text-[var(--neutral-400)]">
            Powered by <span className="font-medium text-[var(--color-secondary)]">UVA</span> · Respuestas generadas por IA
          </span>
        </div>
      </div>
    </>
  );
}
