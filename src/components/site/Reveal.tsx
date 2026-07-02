import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "rotate" | "blur";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  direction?: Direction;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 28,
  className = "",
  as: Tag = "div",
  direction = "up",
  once = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const hidden = (() => {
    switch (direction) {
      case "down": return `translate3d(0,-${y}px,0)`;
      case "left": return `translate3d(${x}px,0,0)`;
      case "right": return `translate3d(-${x}px,0,0)`;
      case "scale": return `scale(0.92)`;
      case "rotate": return `perspective(900px) rotateX(18deg) translate3d(0,${y}px,0)`;
      case "blur": return `translate3d(0,${y}px,0)`;
      default: return `translate3d(0,${y}px,0)`;
    }
  })();

  const style: CSSProperties = {
    transform: shown ? "translate3d(0,0,0)" : hidden,
    opacity: shown ? 1 : 0,
    filter: direction === "blur" && !shown ? "blur(10px)" : "none",
    transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, filter 0.9s ease ${delay}ms`,
    willChange: "opacity, transform, filter",
  };

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={className} style={style}>{children}</Tag>;
}
