import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-primary transition-[width] duration-100 ease-out shadow-[0_0_12px_var(--primary)]"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}
