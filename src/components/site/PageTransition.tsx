import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [key, setKey] = useState(pathname);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    if (pathname === key) return;
    setPhase("out");
    const t = setTimeout(() => {
      setKey(pathname);
      setPhase("in");
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, 220);
    return () => clearTimeout(t);
  }, [pathname, key]);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[55] origin-top bg-foreground"
        style={{
          transform: phase === "out" ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: phase === "out" ? "top" : "bottom",
          transition: "transform 0.55s cubic-bezier(0.83, 0, 0.17, 1)",
        }}
      />
      <div
        key={key}
        style={{
          opacity: phase === "in" ? 1 : 0,
          transform: phase === "in" ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {children}
      </div>
    </>
  );
}
