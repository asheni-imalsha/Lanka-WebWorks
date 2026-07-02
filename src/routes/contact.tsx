import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Send, MessageCircle, Clock, Sparkles, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../components/site/SectionLabel";
import { TikTokIcon } from "../components/site/TikTokIcon";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lanka WebWorks" },
      { name: "description", content: "Get in touch with Lanka WebWorks. Call, WhatsApp, email or request a free consultation." },
      { property: "og:title", content: "Contact — Lanka WebWorks" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      {/* HERO — editorial with animated blobs */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-primary/40 blur-3xl animate-blob" />
        <div aria-hidden className="pointer-events-none absolute top-10 right-0 h-[360px] w-[360px] rounded-full bg-foreground/10 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />

        <div className="container-edge relative pt-10 md:pt-16">
          <Reveal><SectionLabel>CONTACT / SAY HELLO</SectionLabel></Reveal>
          <Reveal delay={80} direction="rotate">
            <h1 className="mt-6 font-display text-[16vw] leading-[0.85] md:text-[11rem]">
              LET'S BUILD<br />
              <span className="inline-block relative">
                <span className="relative z-10 bg-primary px-3 text-primary-foreground">SOMETHING</span>
              </span>{" "}
              <span className="italic font-light">real.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Free 15-minute consultation. Tell us about your business and we'll recommend the right approach — no pressure, no sales fluff.
            </p>
          </Reveal>

          {/* Quick contact chips */}
          <Reveal delay={220} className="mt-10 flex flex-wrap gap-3">
            <a href="https://wa.me/94729911398" target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-heading text-xs tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white/70 animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              WHATSAPP NOW
            </a>
            <a href="tel:+94729911398" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-heading text-xs tracking-[0.2em] transition hover:-translate-y-0.5 hover:bg-foreground hover:text-background">
              <Phone className="h-3.5 w-3.5" /> 072 991 1398
            </a>
            <a href="mailto:lankawebworks@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-heading text-xs tracking-[0.2em] transition hover:-translate-y-0.5 hover:bg-foreground hover:text-background">
              <Mail className="h-3.5 w-3.5" /> EMAIL
            </a>
          </Reveal>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="container-edge mt-20 grid gap-8 md:mt-28 lg:grid-cols-[0.95fr_1.35fr]">
        {/* Info column — bento */}
        <aside className="space-y-6">
          <Reveal direction="left">
            <div className="tilt-3d group relative overflow-hidden border border-border bg-surface p-8">
              <div className="bento-num">01</div>
              <div className="tilt-layer">
                <p className="font-heading text-[11px] tracking-[0.25em] text-muted-foreground">DIRECT LINE</p>
                <a href="tel:+94729911398" className="mt-5 block font-display text-5xl md:text-6xl leading-none transition-colors hover:text-primary">
                  072<br />991 1398
                </a>
                <p className="mt-4 text-sm text-muted-foreground">Mon — Sat • 9AM to 6PM</p>
              </div>
              <div className="bento-shine" />
            </div>
          </Reveal>

          <Reveal direction="left" delay={90}>
            <a href="mailto:lankawebworks@gmail.com" className="group relative flex items-center justify-between gap-4 border border-border bg-primary p-7 text-primary-foreground transition hover:-translate-y-1">
              <div>
                <p className="font-heading text-[11px] tracking-[0.25em] opacity-70">EMAIL US</p>
                <p className="mt-2 font-display text-2xl">lankawebworks<br />@gmail.com</p>
              </div>
              <ArrowUpRight className="h-8 w-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>

          <Reveal direction="left" delay={160}>
            <div className="border border-border bg-foreground p-7 text-background">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4" />
                <p className="font-heading text-[11px] tracking-[0.25em] text-background/60">BUSINESS HOURS</p>
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  ["Mon — Fri", "9:00 — 18:00"],
                  ["Saturday", "10:00 — 16:00"],
                  ["Sunday", "Closed"],
                ].map(([d, t]) => (
                  <li key={d} className="skew-hover flex items-center justify-between border-b border-background/15 pb-2 last:border-0">
                    <span>{d}</span>
                    <span className={t === "Closed" ? "opacity-50" : ""}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="left" delay={230}>
            <div className="border border-border bg-surface p-7">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <p className="font-heading text-[11px] tracking-[0.25em] text-muted-foreground">STUDIO</p>
              </div>
              <p className="mt-4 font-display text-3xl">COLOMBO<br />SRI LANKA</p>
              <p className="mt-2 text-sm text-muted-foreground">Serving clients across Sri Lanka & the Indian Ocean region.</p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={300}>
            <div>
              <p className="font-heading text-[11px] tracking-[0.25em] text-muted-foreground">FOLLOW THE STUDIO</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  { label: "Facebook", href: "https://www.facebook.com/share/18w3gizhHS/", icon: <Facebook className="h-4 w-4" /> },
                  { label: "Instagram", href: "https://www.instagram.com/lankawebworks?igsh=MTd5aXVlYmdoZHVudQ%3D%3D&utm_source=qr", icon: <Instagram className="h-4 w-4" /> },
                  { label: "TikTok", href: "https://www.tiktok.com/@lanka.webworks?_r=1&_t=ZS-97VIc9yozlk", icon: <TikTokIcon className="h-4 w-4" /> },
                  { label: "WhatsApp", href: "https://wa.me/94729911398", icon: <MessageCircle className="h-4 w-4" /> },
                ].map((s) => (
                  <a key={s.label} aria-label={s.label} href={s.href} target="_blank" rel="noreferrer" className="group grid h-12 w-12 place-items-center rounded-full border border-border transition hover:-translate-y-1 hover:rotate-6 hover:bg-foreground hover:text-background">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </aside>

        {/* Form column */}
        <Reveal direction="right" delay={100}>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch within 24 hours."); }}
            className="relative overflow-hidden border border-border bg-background p-7 md:p-12"
          >
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-float-slow" />

            <div className="flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-primary" />
              <p className="font-heading text-[11px] tracking-[0.25em] text-muted-foreground">PROJECT BRIEF</p>
            </div>
            <h2 className="mt-3 font-display text-5xl md:text-6xl">START YOUR<br />PROJECT.</h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">A few quick questions and we'll respond within 24 hours with next steps.</p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Business Type" name="biz" />
              <div className="md:col-span-2 field-3d">
                <label className="font-heading text-[10px] tracking-[0.25em] text-muted-foreground">BUDGET RANGE</label>
                <select className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-base outline-none transition focus:border-foreground">
                  {["Below Rs. 30,000", "Rs. 30,000 – 60,000", "Rs. 60,000 – 100,000", "Rs. 100,000+", "Let's discuss"].map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2 field-3d">
                <label className="font-heading text-[10px] tracking-[0.25em] text-muted-foreground">TELL US ABOUT YOUR PROJECT *</label>
                <textarea required rows={5} className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent py-3 text-base outline-none transition focus:border-foreground" placeholder="Goals, timeline, references, anything we should know..." />
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">By sending you agree to be contacted about your enquiry.</p>
              <button type="submit" className="group relative overflow-hidden rounded-full bg-foreground px-7 py-4 font-heading text-xs tracking-[0.25em] text-background transition hover:bg-primary hover:text-primary-foreground">
                <span className="relative z-10 inline-flex items-center gap-3">SEND ENQUIRY <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </button>
            </div>
          </form>
        </Reveal>
      </section>

      {/* PROCESS STRIP */}
      <section className="container-edge mt-24 md:mt-32">
        <Reveal><SectionLabel>WHAT HAPPENS NEXT</SectionLabel></Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { n: "01", t: "You send", d: "Fill the brief or WhatsApp us." },
            { n: "02", t: "We reply", d: "Within 24 hours with next steps." },
            { n: "03", t: "Free call", d: "15 minutes to align on scope." },
            { n: "04", t: "Proposal", d: "Timeline, deliverables & fixed price." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 80} direction="up">
              <div className="tilt-3d group relative h-full border border-border bg-surface p-6">
                <p className="font-display text-6xl text-primary/70 transition group-hover:text-primary">{s.n}</p>
                <p className="mt-4 font-heading text-sm tracking-widest">{s.t.toUpperCase()}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Location strip */}
      <section className="container-edge mt-24 md:mt-32">
        <Reveal direction="scale">
          <div className="relative aspect-[16/7] overflow-hidden border border-border bg-foreground text-background">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div aria-hidden className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/40 blur-3xl animate-blob" />
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <p className="font-heading text-[11px] tracking-[0.25em] text-background/60">LOCATION</p>
                <p className="mt-3 font-display text-6xl md:text-8xl">COLOMBO<span className="text-primary">.</span> SL</p>
                <p className="mt-4 text-sm text-background/60">Working with clients across the island 🇱🇰</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="py-20" />
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="field-3d">
      <label htmlFor={name} className="font-heading text-[10px] tracking-[0.25em] text-muted-foreground">{label.toUpperCase()}{required && " *"}</label>
      <input id={name} name={name} type={type} required={required} className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-base outline-none transition focus:border-foreground" />
    </div>
  );
}
