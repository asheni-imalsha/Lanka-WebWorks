import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`} aria-label="Lanka WebWorks home">
      <span className="relative grid h-9 w-9 place-items-center bg-foreground text-background">
        <span className="absolute inset-0 m-1 bg-primary" aria-hidden />
        <span className="relative font-display text-lg leading-none">L</span>
      </span>
      <span className="font-display text-xl leading-none tracking-wide">
        LANKA<span className="text-foreground/40"> / </span>WEBWORKS
      </span>
    </Link>
  );
}
