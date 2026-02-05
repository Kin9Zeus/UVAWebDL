import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutContent from "@/components/layout-content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UVA — Unidad Vectorial de Arquitectura",
  description: "Cursos, proyectos y servicios de arquitectura en Colombia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <LayoutContent>
          {children}
        </LayoutContent>
      </body>
    </html>
  );
}
