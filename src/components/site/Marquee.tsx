export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-foreground py-5 text-background">
      <div className="marquee font-display text-3xl tracking-wide md:text-5xl">
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t} <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
