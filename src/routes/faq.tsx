import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Minus, Plus, Search, MessageCircle } from "lucide-react";
import { SectionLabel } from "../components/site/SectionLabel";
import { Reveal } from "../components/site/Reveal";

const FAQS = [
  { q: "How much does a website cost?", a: "Our packages start at Rs. 25,000 for the Starter plan (launch offer). Business is Rs. 45,000, Premium Rs. 75,000, and Enterprise from Rs. 150,000. You can also build a custom package starting at Rs. 20,000." },
  { q: "Do you provide hosting?", a: "We don't host directly, but we'll set you up on premium reliable hosting (we recommend providers based on your needs) and handle the entire deployment." },
  { q: "Do you register domains?", a: "Yes, domain registration is available as an add-on starting at Rs. 3,500 per year. We can register .lk, .com, and most other extensions." },
  { q: "Will my site rank on Google?", a: "Every site ships with SEO foundations: schema markup, sitemap, search console setup and on-page optimisation. Ranking depends on competition, but you'll start with the technical advantage." },
  { q: "How long does delivery take?", a: "Starter: 3–5 days. Business: 5–10 days. Premium: 7–14 days. Enterprise is custom timeline. We always communicate clear milestones." },
  { q: "Do you offer website maintenance?", a: "Yes — monthly maintenance is Rs. 5,000/month and covers updates, backups, security patches and minor content changes." },
  { q: "Can I update the website myself?", a: "Absolutely. We can build with editable content sections and provide a short training video so you can update text and images yourself." },
  { q: "Do you set up business emails?", a: "Yes. Starter includes 1 professional email, Business includes 3, Premium includes 5. Additional inboxes are Rs. 2,500 each." },
  { q: "Is the website mobile responsive?", a: "Every website is mobile-first and tested across phones, tablets, laptops and ultra-wide displays. No exceptions." },
  { q: "Will my website rank in local searches?", a: "We optimise for local Sri Lankan search and set up your Google Business Profile so customers in your area find you first." },
  { q: "What support do you offer after launch?", a: "Premium includes 3 months free maintenance, Enterprise includes 6 months. After that, optional monthly plans keep your site healthy." },
  { q: "Who owns the website?", a: "You do. 100%. All code, content and access transfer to you upon final payment." },
  { q: "Is the website secure?", a: "Every site ships with free SSL, security headers, and modern hosting. Premium and Enterprise also include hardened security configurations." },
  { q: "What payment methods do you accept?", a: "Bank transfer, online transfer, and cash. 50% upfront to begin, 50% on completion. Enterprise projects use milestone payments." },
  { q: "Can you build custom features?", a: "Yes — booking engines, e-commerce, member areas, API integrations, multi-language, anything. Custom features are quoted individually." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Lanka WebWorks" },
      { name: "description", content: "Common questions about pricing, hosting, domains, SEO, delivery, maintenance and more." },
      { property: "og:title", content: "FAQ — Lanka WebWorks" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return FAQS.map((f, i) => ({ ...f, i }));
    return FAQS.map((f, i) => ({ ...f, i })).filter((f) => f.q.toLowerCase().includes(needle) || f.a.toLowerCase().includes(needle));
  }, [q]);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div aria-hidden className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary/40 blur-3xl animate-blob" />
        <div aria-hidden className="pointer-events-none absolute top-40 -left-24 h-[340px] w-[340px] rounded-full bg-foreground/10 blur-3xl animate-blob" style={{ animationDelay: "-5s" }} />
        <div className="container-edge relative pt-10 md:pt-16">
          <Reveal><SectionLabel>FAQ / ANSWERS</SectionLabel></Reveal>
          <Reveal delay={80} direction="rotate">
            <h1 className="mt-6 font-display text-[16vw] leading-[0.85] md:text-[11rem]">
              QUESTIONS<br />
              <span className="text-foreground/30 italic font-light">answered.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Common things people ask us. Can't find what you're looking for? Just reach out.</p>
          </Reveal>

          {/* Search */}
          <Reveal delay={220} className="mt-10 max-w-xl">
            <div className="field-3d group flex items-center gap-3 border-b border-border py-2 transition-colors focus-within:border-foreground">
              <Search className="h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search questions..."
                className="w-full bg-transparent py-2 text-base outline-none placeholder:text-muted-foreground/60"
              />
              {q && (
                <button onClick={() => setQ("")} className="font-heading text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground">CLEAR</button>
              )}
            </div>
            <p className="mt-2 font-heading text-[10px] tracking-[0.25em] text-muted-foreground">{list.length} / {FAQS.length} SHOWING</p>
          </Reveal>
        </div>
      </section>

      {/* LIST */}
      <section className="container-edge mt-16 md:mt-20">
        {list.length === 0 ? (
          <Reveal>
            <div className="border border-border bg-surface p-12 text-center">
              <p className="font-display text-3xl">Nothing matches "{q}".</p>
              <p className="mt-3 text-muted-foreground">Try a different keyword or reach out directly.</p>
              <Link to="/contact" className="mt-6 inline-flex rounded-full bg-foreground px-5 py-3 font-heading text-xs tracking-[0.2em] text-background">ASK US DIRECTLY →</Link>
            </div>
          </Reveal>
        ) : (
          <div key={q} className="divide-y divide-border border-y border-border">
            {list.map((f, idx) => {
              const isOpen = open === f.i;
              return (
                <Reveal key={f.q} delay={Math.min(idx, 8) * 40} direction="up">
                  <div className={`group relative overflow-hidden transition-colors ${isOpen ? "bg-surface" : ""}`}>
                    {/* Sliding accent bar */}
                    <span
                      aria-hidden
                      className={`absolute left-0 top-0 h-full w-1 origin-top bg-primary transition-transform duration-500 ${isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"}`}
                    />
                    <button
                      onClick={() => setOpen(isOpen ? null : f.i)}
                      className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 pl-4 pr-2 text-left md:gap-8 md:py-8"
                    >
                      <span className="font-heading text-xs tracking-[0.2em] text-muted-foreground md:text-sm">{String(f.i + 1).padStart(2, "0")}</span>
                      <span className={`font-display text-2xl transition-all duration-500 md:text-4xl ${isOpen ? "translate-x-2 text-primary" : "group-hover:translate-x-1"}`}>{f.q}</span>
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-500 ${isOpen ? "rotate-180 border-primary bg-primary text-primary-foreground scale-110" : "border-foreground group-hover:rotate-90 group-hover:bg-foreground group-hover:text-background"}`}>
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <div
                      className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="grid grid-cols-[auto_1fr_auto] gap-4 pb-8 pl-4 md:gap-8">
                          <span />
                          <p
                            className="max-w-3xl text-base text-muted-foreground transition-all duration-700 md:text-lg"
                            style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? "translateY(0)" : "translateY(-8px)", filter: isOpen ? "blur(0)" : "blur(4px)" }}
                          >
                            {f.a}
                          </p>
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="container-edge py-24 md:py-32">
        <Reveal direction="scale">
          <div className="relative overflow-hidden border border-border bg-foreground p-10 text-background md:p-14">
            <div aria-hidden className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-primary/40 blur-3xl animate-blob" />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-background/20 px-3 py-1 font-heading text-[10px] tracking-[0.25em] text-background/70">
                  <MessageCircle className="h-3.5 w-3.5" /> STILL CURIOUS?
                </div>
                <h2 className="mt-4 font-display text-5xl md:text-6xl">GOT A QUESTION<br /><span className="text-primary">WE MISSED?</span></h2>
              </div>
              <Link to="/contact" className="inline-flex rounded-full bg-primary px-6 py-4 font-heading text-xs tracking-[0.2em] text-primary-foreground transition hover:-translate-y-0.5">TALK TO US →</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
