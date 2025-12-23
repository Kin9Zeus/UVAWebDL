"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function UserMenu() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    setIsOpen(false);
    window.location.href = "/";
  };

  if (loading) return <div className="h-5 w-20 bg-neutral-200 animate-pulse rounded"></div>;

  if (!user) {
    return (
      <Link href="/login" className="hover:text-[var(--color-secondary)] transition-colors font-medium">
        Entrar
      </Link>
    );
  }

  const firstName = user.name.split(" ")[0];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:text-[var(--color-secondary)] transition-colors font-medium focus:outline-none"
      >
        <span>Bienvenido, {firstName}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-out z-50 ${
          isOpen ? "transform opacity-100 scale-100" : "transform opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="px-4 py-2 border-b border-neutral-100">
          <p className="text-sm font-medium text-neutral-900 truncate">{user.name}</p>
          <p className="text-xs text-neutral-500 truncate">{user.email}</p>
        </div>
        
        <Link
          href="/perfil"
          className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-[var(--color-secondary)] transition-colors"
          onClick={() => setIsOpen(false)}
        >
          👤 Mi Perfil
        </Link>
        
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
        >
          🚪 Cerrar sesión
        </button>
      </div>
    </div>
  );
}
