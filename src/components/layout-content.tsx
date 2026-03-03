"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide Nav and Footer on course landing pages
  // Logic: Starts with "/cursos/" but is not exactly "/cursos"
  const isCourseLanding = pathname?.startsWith("/cursos/") && pathname !== "/cursos";

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
      {!isCourseLanding && <Nav />}
      <main className="flex-1">
        {children}
      </main>
      {!isCourseLanding && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
}
