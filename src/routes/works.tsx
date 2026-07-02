import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, LayoutGrid } from "lucide-react";
import { SectionLabel } from "../components/site/SectionLabel";
import { Reveal } from "../components/site/Reveal";

import fineDine from "../assets/works/fine-dine-byob.jpg";
import excelJourney from "../assets/works/excel-journey.jpg";
import elegantEdibles from "../assets/works/elegant-edibles.jpg";
import roseRetreat from "../assets/works/rose-retreat.jpg";
import editorialDream from "../assets/works/editorial-dream.jpg";
import titanGym from "../assets/works/titan-gym.jpg";
import tropicalHaven from "../assets/works/tropical-haven.jpg";
import wildWheel from "../assets/works/wild-wheel.jpg";
import radiantRetreat from "../assets/works/radiant-retreat.jpg";
import ceylonSparkle from "../assets/works/ceylon-sparkle.jpg";
import oceanWhisper from "../assets/works/ocean-whisper.jpg";
import artisanTales from "../assets/works/artisan-tales.jpg";
import trustedWheel from "../assets/works/trusted-wheel.jpg";
import beautyQueen from "../assets/works/beauty-queen.jpg";
import wagWellness from "../assets/works/wag-wellness.jpg";
import crestline from "../assets/works/crestline.jpg";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Works — Lanka WebWorks" },
      { name: "description", content: "Selected website projects by Lanka WebWorks — restaurants, hotels, tourism, education, beauty, fashion and more." },
      { property: "og:title", content: "Works — Lanka WebWorks" },
      { property: "og:url", content: "/works" },
    ],
    links: [{ rel: "canonical", href: "/works" }],
  }),
  component: Works,
});

type Project = { url: string; title: string; tag: string; desc: string; img: string; year?: string };

const PROJECTS: Project[] = [
  { url: "https://fine-dine-byob.lovable.app/", title: "Fine Dine BYOB", tag: "Restaurant", img: fineDine, year: "2025", desc: "A modern BYOB restaurant experience with elegant dining, signature menus and online reservations." },
  { url: "https://excel-journey-site.lovable.app/", title: "Excel Journey", tag: "Education", img: excelJourney, year: "2025", desc: "Professional tuition site promoting courses, expert instructors and online enrollment." },
  { url: "https://elegant-edibles-hub.lovable.app/", title: "Elegant Edibles", tag: "Restaurant", img: elegantEdibles, year: "2025", desc: "Premium cake and bakery showcase — custom cakes, desserts and celebration packages." },
  { url: "https://tropical-haven-webs.lovable.app/", title: "Tropical Haven", tag: "Hotel", img: tropicalHaven, year: "2025", desc: "Luxury boutique hotel and villa site with immersive galleries and direct booking." },
  { url: "https://editorial-dream-web.lovable.app/", title: "Editorial Dream", tag: "Portfolio", img: editorialDream, year: "2025", desc: "Creative photography portfolio with visual storytelling, featured galleries and testimonials." },
  { url: "https://titan-gym-build.lovable.app/", title: "Titan Gym", tag: "Fitness", img: titanGym, year: "2025", desc: "Modern fitness center site with membership plans, trainers and class schedules." },
  { url: "https://elegant-rose-retreat.lovable.app/", title: "Rose Retreat", tag: "Beauty", img: roseRetreat, year: "2025", desc: "Premium salon and beauty studio showcasing luxury treatments and online appointments." },
  { url: "https://wild-wheel-adventures.lovable.app/", title: "Wild Wheel", tag: "Tourism", img: wildWheel, year: "2025", desc: "Adventure tourism with vehicle rentals, safari tours and chauffeur services." },
  { url: "https://radiant-retreat-builder.lovable.app/", title: "Radiant Retreat", tag: "Wellness", img: radiantRetreat, year: "2025", desc: "Luxury Ayurveda, yoga and wellness retreat featuring holistic healing programs." },
  { url: "https://ceylon-sparkle-site.lovable.app/", title: "Ceylon Sparkle", tag: "Jewelry", img: ceylonSparkle, year: "2025", desc: "Elegant gem and jewelry showcase — certified gemstones and luxury craftsmanship." },
  { url: "https://ocean-whisper-adventures.lovable.app/", title: "Ocean Whisper", tag: "Tourism", img: oceanWhisper, year: "2025", desc: "Coastal adventure: surf camps, diving, whale watching, boat tours and bookings." },
  { url: "https://srilanka-artisan-tales.lovable.app/", title: "Artisan Tales", tag: "Culture", img: artisanTales, year: "2025", desc: "Cultural crafts celebrating authentic Sri Lankan handmade products and heritage." },
  { url: "https://trusted-wheel-pro.lovable.app/", title: "Trusted Wheel", tag: "Construction", img: trustedWheel, year: "2025", desc: "Construction company presenting services, completed projects and quote requests." },
  { url: "https://beautyqueenfashion.com/", title: "Beauty Queen", tag: "Fashion", img: beautyQueen, year: "2025", desc: "Stylish fashion and beauty eCommerce featuring 3D printing and seamless shopping." },
  { url: "https://wag-and-wellness-co.lovable.app/", title: "Wag & Wellness Co", tag: "Pet Care", img: wagWellness, year: "2025", desc: "Modern pet care combining veterinary services, grooming, boarding and online booking." },
  { url: "https://crestline-developments.lovable.app/", title: "Crestline Developments", tag: "Construction", img: crestline, year: "2025", desc: "Premium construction and property development with residential and commercial portfolios." },
];

const TAGS = Array.from(new Set(PROJECTS.map((p) => p.tag))).sort();
const FILTERS = ["All", ...TAGS];

function Works() {
  const [filter, setFilter] = useState("All");
  const list = PROJECTS.filter((p) => filter === "All" || p.tag === filter);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-20 h-[420px] w-[420px] rounded-full bg-primary/40 blur-3xl animate-blob" />
        <div aria-hidden className="pointer-events-none absolute top-20 right-0 h-[360px] w-[360px] rounded-full bg-foreground/10 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="container-edge relative pt-10 md:pt-16">
          <Reveal><SectionLabel>WORKS / ARCHIVE</SectionLabel></Reveal>
          <Reveal delay={80} direction="rotate">
            <h1 className="mt-6 font-display text-[16vw] leading-[0.85] md:text-[11rem]">
              SELECTED<br />
              <span className="bg-primary px-3 text-primary-foreground">PROJECTS.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">A look at recent websites we've shipped across industries — every project handcrafted, fast and built for growth.</p>
          </Reveal>

          {/* Meta row */}
          <Reveal delay={220} className="mt-10 flex flex-wrap items-center gap-6 border-y border-border py-4 text-sm">
            <span className="inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.25em] text-muted-foreground">
              <LayoutGrid className="h-3.5 w-3.5" /> {list.length} PROJECTS
            </span>
            <span className="font-heading text-[11px] tracking-[0.25em] text-muted-foreground">/ FILTER BY INDUSTRY</span>
          </Reveal>

          {/* Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            {FILTERS.map((f, i) => (
              <Reveal key={f} delay={i * 30}>
                <button
                  onClick={() => setFilter(f)}
                  className={`relative overflow-hidden rounded-full border px-4 py-2 font-heading text-[11px] tracking-[0.2em] transition-all duration-300 ${filter === f ? "border-foreground bg-foreground text-background scale-[1.05] shadow-lg" : "border-border hover:border-foreground hover:-translate-y-0.5 hover:bg-surface"}`}
                >
                  {f.toUpperCase()}
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GRID — key on filter to retrigger reveal animations */}
      <section key={filter} className="container-edge mt-16 grid gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <Reveal key={p.url} delay={Math.min(i, 6) * 70} direction="up">
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="tilt-3d group relative block h-full overflow-hidden border border-border bg-surface transition-shadow duration-500 hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]"
            >
              <div className="bento-shine" />
              <div className="relative aspect-[16/10] overflow-hidden bg-foreground">
                <img
                  src={p.img}
                  alt={`${p.title} — website preview`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-foreground/0 opacity-60 transition-opacity duration-500 group-hover:opacity-95" />
                <span className="absolute left-4 top-4 bg-background px-3 py-1 font-heading text-[10px] tracking-[0.2em] shadow-md">{p.tag.toUpperCase()}</span>
                {p.year && <span className="absolute right-4 top-4 font-display text-3xl text-background opacity-0 transition-all duration-500 group-hover:opacity-90">{p.year}</span>}
                <span className="absolute right-4 bottom-4 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45 group-hover:scale-110">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="line-clamp-2 text-sm text-background/90">{p.desc}</p>
                </div>
              </div>
              <div className="tilt-layer relative flex items-start justify-between gap-4 p-6">
                <div>
                  <p className="font-heading text-[10px] tracking-[0.25em] text-muted-foreground">VIEW LIVE SITE</p>
                  <p className="mt-1 font-display text-2xl transition-colors group-hover:text-primary">{p.title}</p>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:rotate-45 group-hover:text-primary" />
              </div>
            </a>
          </Reveal>
        ))}
      </section>

      <div className="container-edge py-24" />
    </>
  );
}
