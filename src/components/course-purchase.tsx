"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface PurchaseButtonProps {
  courseId: string;
  price: number;
  isAuthenticated: boolean;
}

export default function PurchaseButton({ courseId, price, isAuthenticated }: PurchaseButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleBuy = async () => {
    if (!isAuthenticated) {
      router.push(`/login?redirect=/cursos/${courseId}`);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/payment/create-preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId }),
      });

      const data = await res.json();

      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert("Error al iniciar el pago");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("Error al conectar con el servidor");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className="mt-4 w-full rounded-full bg-[var(--color-secondary)] px-5 py-3 text-white disabled:opacity-50 hover:opacity-90 transition-opacity"
    >
      {loading ? "Procesando..." : "Comprar"}
    </button>
  );
}
