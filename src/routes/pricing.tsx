import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles, Zap } from "lucide-react";
import { SectionLabel } from "../components/site/SectionLabel";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Lanka WebWorks" },
      { name: "description", content: "Transparent website design pricing for Sri Lankan businesses. Starter, Business, Premium, Enterprise & custom packages." },
      { property: "og:title", content: "Pricing — Lanka WebWorks" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const PACKAGES = [
  {
    name: "Starter", orig: "35,000", price: "25,000", delivery: "3–5 Days", addPage: "Rs. 3,500",
    features: ["Up to 3 Pages", "Mobile Responsive Design", "Modern Professional Design", "WhatsApp Integration", "Contact Form", "Google Maps Integration", "Social Media Integration", "Basic SEO Setup", "Google Search Console Setup", "Free SSL Certificate", "1 Professional Business Email", "Fast Loading", "Contact Buttons"],
  },
  {
    name: "Business", orig: "60,000", price: "45,000", delivery: "5–10 Days", addPage: "Rs. 4,500",
    features: ["Up to 6 Pages", "Premium Modern Design", "Fully Mobile Responsive", "Advanced Contact Form", "Newsletter Signup", "Blog Section Setup", "WhatsApp + Call Integration", "Google Business Profile Setup", "Advanced On-Page SEO", "Schema Markup", "Free SSL Certificate", "3 Professional Business Emails", "Image Optimisation", "1 Round of Revisions"],
  },
  {
    name: "Premium", orig: "95,000", price: "75,000", delivery: "7–14 Days", addPage: "Rs. 5,000", featured: true,
    features: ["Up to 10 Pages", "Editorial Premium Design", "Custom Animations & Interactions", "Advanced Booking / Inquiry Forms", "Multi-language Ready", "Blog + Categories", "Complete SEO Package", "Google Analytics + Search Console", "Performance Optimisation", "Free SSL + Security Headers", "5 Professional Business Emails", "Premium Hosting Setup Guidance", "Social Media Integration", "3 Months Free Maintenance", "2 Rounds of Revisions"],
  },
  {
    name: "Enterprise", price: "150,000+", delivery: "Custom",
    features: ["Unlimited Pages", "Bespoke Design System", "Custom Functionality", "E-Commerce / Booking Engine", "Custom Integrations & APIs", "Multi-language Support", "Advanced SEO Strategy", "Dedicated Project Manager", "6 Months Free Maintenance", "Priority Support", "Performance Audit & Optimisation"],
  },
];

const ADDONS = [
  ["Additional Page", "Rs. 3,500+"], ["Logo Design", "Rs. 8,000"], ["Brand Identity Pack", "Rs. 25,000"],
  ["Professional Copywriting", "Rs. 2,500 / page"], ["Custom Photography Direction", "Rs. 15,000"],
  ["E-Commerce Module", "Rs. 35,000+"], ["Multi-language Setup", "Rs. 12,000"], ["Monthly Maintenance", "Rs. 5,000 / mo"],
  ["Hosting Setup", "Rs. 5,000"], ["Domain Registration", "Rs. 3,500 / yr"], ["Business Email (per inbox)", "Rs. 2,500"],
  ["SEO Booster Package", "Rs. 15,000 / mo"],
];

function Pricing() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div aria-hidden className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary/40 blur-3xl animate-blob" />
        <div aria-hidden className="pointer-events-none absolute top-40 -left-24 h-[360px] w-[360px] rounded-full bg-foreground/10 blur-3xl animate-blob" style={{ animationDelay: "-5s" }} />
        <div className="container-edge relative pt-10 md:pt-16">
          <Reveal><SectionLabel>PRICING / TRANSPARENT</SectionLabel></Reveal>
          <Reveal delay={80} direction="rotate">
            <h1 className="mt-6 font-display text-[18vw] leading-[0.85] md:text-[11rem]">
              PICK YOUR<br />
              <span className="bg-primary px-3 text-primary-foreground">PACKAGE.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
              Launch offers are active. Every package includes professional design, mobile optimisation, and ongoing support. Need something different? Build your own below.
            </p>
          </Reveal>
          <Reveal delay={220} className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-heading text-[10px] tracking-[0.25em] text-foreground">
            <Zap className="h-3.5 w-3.5 text-primary" /> LAUNCH OFFERS · LIMITED TIME
          </Reveal>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="container-edge mt-16 grid gap-6 md:mt-20 lg:grid-cols-2 xl:grid-cols-4">
        {PACKAGES.map((p, i) => (
          <Reveal key={p.name} delay={i * 90} direction="up">
            <article className={`tilt-3d group relative flex h-full flex-col overflow-hidden border p-7 md:p-8 ${p.featured ? "border-foreground bg-foreground text-background" : "border-border bg-surface"}`}>
              {p.featured && (
                <>
                  <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl animate-float-slow" />
                  <span className="absolute -top-3 left-7 z-10 bg-primary px-3 py-1 font-heading text-[10px] tracking-widest text-primary-foreground shadow-lg">★ MOST POPULAR</span>
                </>
              )}
              <div className="bento-shine" />
              <div className="tilt-layer relative flex h-full flex-col">
                <p className="font-heading text-[11px] tracking-[0.25em] opacity-60">{p.name.toUpperCase()} PACKAGE</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-sm">Rs.</span>
                  <span className="font-display text-6xl">{p.price}</span>
                </div>
                {p.orig && <p className="mt-1 text-xs"><span className="line-through opacity-50">Rs. {p.orig}</span> <span className="ml-1 bg-primary px-1.5 py-0.5 font-heading text-[10px] tracking-widest text-primary-foreground">LAUNCH</span></p>}
                <p className="mt-4 font-heading text-[11px] tracking-[0.2em] opacity-70">DELIVERY · {p.delivery}</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {p.features.map((f, fi) => (
                    <li key={f} className="flex gap-2 opacity-0 animate-fade-up" style={{ animationDelay: `${200 + fi * 40}ms`, animationFillMode: "forwards" }}>
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                {p.addPage && <p className="mt-6 text-xs opacity-60">Additional page: {p.addPage}</p>}
                <Link to="/contact" className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 font-heading text-xs tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 ${p.featured ? "bg-primary text-primary-foreground hover:bg-background hover:text-foreground" : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"}`}>
                  GET STARTED →
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* BUILD YOUR OWN */}
      <section className="container-edge mt-24 md:mt-32">
        <Reveal direction="scale">
          <div className="relative overflow-hidden border border-border bg-surface p-8 md:p-14">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-blob" />
            <SectionLabel>BUILD YOUR OWN</SectionLabel>
            <h2 className="mt-6 font-display text-5xl md:text-7xl">
              CUSTOM PACKAGE<br /><span className="text-foreground/40">FROM RS. 20,000</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">Pick only the features you need. We'll send a tailored quote within 24 hours.</p>
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {["Home Page", "Inner Pages", "Blog Setup", "Booking Form", "WhatsApp Integration", "SEO Setup", "Google Analytics", "Business Email", "Hosting Setup", "Logo Design", "Brand Identity", "Copywriting", "Photography Direction", "Multi-language", "E-Commerce", "Maintenance Plan"].map((f, i) => (
                <Reveal key={f} delay={(i % 6) * 40}>
                  <label className="group flex cursor-pointer items-center gap-3 border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:shadow-lg">
                    <input type="checkbox" className="h-4 w-4 accent-foreground" />
                    <span className="text-sm transition-transform group-hover:translate-x-0.5">{f}</span>
                  </label>
                </Reveal>
              ))}
            </div>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-4 font-heading text-xs tracking-[0.2em] text-background transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground">
              <Sparkles className="h-4 w-4" /> REQUEST CUSTOM QUOTE →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ADD-ONS */}
      <section className="container-edge mt-24 md:mt-32">
        <Reveal><SectionLabel>ADD-ONS</SectionLabel></Reveal>
        <Reveal delay={80}><h2 className="mt-6 font-display text-5xl md:text-7xl">EXTRAS.</h2></Reveal>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {ADDONS.map(([t, p], i) => (
            <Reveal key={t} delay={i * 30} direction="left">
              <div className="skew-hover group flex items-center justify-between py-5 transition-colors hover:bg-surface md:px-4">
                <span className="font-display text-2xl transition-colors group-hover:text-primary">{t}</span>
                <span className="font-heading text-sm tracking-[0.15em] text-muted-foreground">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-edge py-24 md:py-32">
        <Reveal direction="scale">
          <div className="relative overflow-hidden border border-border bg-foreground p-10 text-background md:p-16">
            <div aria-hidden className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl animate-blob" />
            <h2 className="relative font-display text-5xl md:text-7xl">NOT SURE WHICH<br /><span className="text-primary">FITS BEST?</span></h2>
            <p className="relative mt-4 max-w-xl text-background/70">Hop on a free 15-minute call. We'll listen, then recommend.</p>
            <Link to="/contact" className="relative mt-8 inline-flex rounded-full bg-primary px-6 py-4 font-heading text-xs tracking-[0.2em] text-primary-foreground transition hover:-translate-y-0.5">BOOK FREE CALL →</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
