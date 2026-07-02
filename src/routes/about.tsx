import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Award, Rocket, Sparkles } from "lucide-react";
import { SectionLabel } from "../components/site/SectionLabel";
import { Reveal } from "../components/site/Reveal";
import asheniImg from "../assets/asheni.jpg";
import oshadhaImg from "../assets/oshadha.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lanka WebWorks" },
      { name: "description", content: "Meet the team behind Lanka WebWorks — software engineering undergraduates crafting digital experiences for Sri Lankan businesses." },
      { property: "og:title", content: "About — Lanka WebWorks" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const FOUNDERS = [
  { name: "Asheni Imalsha", role: "Co-Founder & Web Developer", edu: "BSc (Hons) IT — Software Engineering, SLIIT", portfolio: "https://asheni-portfolio.vercel.app/", img: asheniImg },
  { name: "Oshada Mihiran", role: "Co-Founder & Web Developer", edu: "BSc (Hons) IT — Software Engineering, SLIIT", portfolio: "https://mihiran.vercel.app/", img: oshadhaImg },
];

const VALUES: [string, string][] = [
  ["Quality", "Premium craft on every pixel."],
  ["Performance", "Engineered for speed and search."],
  ["Innovation", "Modern tools, modern thinking."],
  ["Transparency", "Honest pricing, clear updates."],
  ["Satisfaction", "Your win is the only win."],
  ["Technology", "Always shipping the latest stack."],
];

const STATS = [
  { n: "16+", l: "Live Projects" },
  { n: "100%", l: "Handcrafted" },
  { n: "24h", l: "Reply Time" },
  { n: "3–14d", l: "Delivery" },
];

function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-24 h-[440px] w-[440px] rounded-full bg-primary/40 blur-3xl animate-blob" />
        <div aria-hidden className="pointer-events-none absolute top-40 -left-20 h-[360px] w-[360px] rounded-full bg-foreground/10 blur-3xl animate-blob" style={{ animationDelay: "-7s" }} />
        <div className="container-edge relative pt-10 md:pt-16">
          <Reveal><SectionLabel>ABOUT / STUDIO</SectionLabel></Reveal>
          <Reveal delay={80} direction="rotate">
            <h1 className="mt-6 font-display text-[14vw] leading-[0.85] md:text-[10rem]">
              MEET THE TEAM<br />
              <span className="text-foreground/30">BEHIND THE WORK.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Lanka WebWorks is a young studio founded by two software engineering undergraduates. We obsess over modern, fast, beautiful websites for Sri Lankan businesses ready to grow online.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="container-edge mt-16 md:mt-20">
        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 80} direction="up">
              <div className="group h-full bg-background p-8 transition-colors hover:bg-foreground hover:text-background">
                <p className="font-display text-6xl transition-transform group-hover:scale-110 group-hover:text-primary">{s.n}</p>
                <p className="mt-2 font-heading text-[10px] tracking-[0.25em] opacity-70">{s.l.toUpperCase()}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="container-edge mt-24 md:mt-32">
        <Reveal><SectionLabel number="01">CO-FOUNDERS</SectionLabel></Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 120} direction={i === 0 ? "left" : "right"}>
              <article className="tilt-3d group relative h-full overflow-hidden border border-border bg-surface">
                <div className="bento-shine" />
                <div className="relative aspect-[4/5] overflow-hidden bg-foreground tilt-layer">
                  <img
                    src={f.img}
                    alt={`${f.name} portrait`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-[900ms] group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
                  <div className="absolute left-6 top-6 flex items-center gap-2 font-heading text-[10px] tracking-[0.25em] text-background/90">
                    <span className="h-px w-8 bg-primary" /> LWW / FOUNDER · 0{i + 1}
                  </div>
                  <div className="absolute inset-x-6 bottom-6 text-background">
                    <h3 className="font-display text-5xl md:text-6xl transition-transform duration-500 group-hover:-translate-y-1">{f.name}</h3>
                    <p className="mt-2 font-heading text-[11px] tracking-[0.2em] text-background/80">{f.role.toUpperCase()}</p>
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-7">
                  <p className="text-sm text-muted-foreground">{f.edu}</p>
                  <a
                    href={f.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${f.name} portfolio`}
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-foreground transition-all duration-300 hover:rotate-45 hover:bg-primary hover:text-primary-foreground group-hover:bg-foreground group-hover:text-background"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MISSION / STORY */}
      <section className="container-edge mt-24 md:mt-32">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal direction="left">
            <div className="sticky top-24">
              <SectionLabel number="02">STORY</SectionLabel>
              <h2 className="mt-6 font-display text-6xl md:text-7xl leading-[0.9]">
                MODERN CRAFT.<br />
                <span className="text-primary italic font-light">Sri Lankan</span><br />
                <span className="text-foreground/30">roots.</span>
              </h2>
            </div>
          </Reveal>
          <div className="space-y-6">
            {[
              { icon: <Rocket className="h-5 w-5" />, t: "Built for growth", d: "Every site we ship is engineered for speed, SEO and conversion — the fundamentals that turn visitors into customers." },
              { icon: <Award className="h-5 w-5" />, t: "Handcrafted, never templated", d: "We start every project with a blank canvas and design around your brand — no off-the-shelf themes, no cookie-cutter layouts." },
              { icon: <Sparkles className="h-5 w-5" />, t: "Personal, not corporate", d: "You work directly with the founders. No account managers, no hand-offs — just clear communication and fast turnarounds." },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 100} direction="right">
                <div className="group flex gap-5 border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-foreground hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.3)]">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-12">{b.icon}</div>
                  <div>
                    <p className="font-display text-2xl">{b.t}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-edge mt-24 md:mt-32">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end">
          <Reveal direction="left">
            <div>
              <SectionLabel number="03">VALUES</SectionLabel>
              <h2 className="mt-6 font-display text-6xl md:text-8xl">WHAT WE<br />STAND FOR.</h2>
            </div>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <p className="text-lg text-muted-foreground">Six principles that shape every project we touch.</p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {VALUES.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 80} direction="up">
              <div className="tilt-3d group relative h-full overflow-hidden bg-background p-8 transition-colors hover:bg-foreground hover:text-background md:p-10">
                <div className="bento-shine" />
                <div className="tilt-layer relative">
                  <p className="font-heading text-[11px] tracking-[0.25em] opacity-50">/ 0{i + 1}</p>
                  <h3 className="mt-3 font-display text-4xl">{t}</h3>
                  <p className="mt-3 text-sm opacity-80">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-edge py-24 md:py-32">
        <Reveal direction="scale">
          <div className="relative overflow-hidden border border-border bg-foreground p-10 text-background md:p-16">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/40 blur-3xl animate-blob" />
            <h2 className="relative font-display text-5xl md:text-7xl">LET'S WORK<br /><span className="text-primary">TOGETHER.</span></h2>
            <Link to="/contact" className="relative mt-8 inline-flex rounded-full bg-primary px-6 py-4 font-heading text-xs tracking-[0.2em] text-primary-foreground transition hover:-translate-y-0.5">START A PROJECT →</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
