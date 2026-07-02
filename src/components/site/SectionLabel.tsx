export function SectionLabel({ number, children }: { number?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-heading text-[11px] tracking-[0.3em] text-foreground/60">
      {number && <span className="text-primary-foreground bg-foreground px-2 py-1">{number}</span>}
      <span className="h-px w-10 bg-foreground/30" />
      <span>{children}</span>
    </div>
  );
}
