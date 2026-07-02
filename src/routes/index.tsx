import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Star } from "lucide-react";
import { Marquee } from "../components/site/Marquee";
import { SectionLabel } from "../components/site/SectionLabel";
import { Reveal } from "../components/site/Reveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import fineDine from "../assets/works/fine-dine-byob.jpg.asset.json";
import roseRetreat from "../assets/works/rose-retreat.jpg.asset.json";
import tropicalHaven from "../assets/works/tropical-haven.jpg.asset.json";
import titanGym from "../assets/works/titan-gym.jpg.asset.json";
import excelJourney from "../assets/works/excel-journey.jpg.asset.json";
import beautyQueen from "../assets/works/beauty-queen.jpg.asset.json";
import wagWellness from "../assets/works/wag-wellness.jpg.asset.json";
import ceylonSparkle from "../assets/works/ceylon-sparkle.jpg.asset.json";
import crestline from "../assets/works/crestline.jpg.asset.json";
import oceanWhisper from "../assets/works/ocean-whisper.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lanka WebWorks — Your Digital Presence Starts Here" },
      { name: "description", content: "Premium website design and digital solutions for Sri Lankan businesses. Modern, fast, mobile-friendly websites built to grow your brand." },
      { property: "og:title", content: "Lanka WebWorks — Your Digital Presence Starts Here" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

type Service = { name: string; short: string; long: string; deliverables: string[] };

const SERVICES: Service[] = [
  { name: "Website Design", short: "Custom, editorial-grade design for your brand.", long: "Bespoke website design shaped around your business goals, brand story and target audience. Every layout is handcrafted — no templates — with a focus on hierarchy, typography and conversion.", deliverables: ["Custom UI/UX design", "Responsive layouts", "Brand-aligned typography", "Style guide"] },
  { name: "Landing Pages", short: "High-conversion single pages for campaigns.", long: "Focused single-page websites engineered for campaigns, product launches or ad traffic. Fast, persuasive, and optimised for a single call-to-action.", deliverables: ["Conversion-focused copy layout", "Fast load times", "Analytics ready", "A/B testable sections"] },
  { name: "Business Websites", short: "Multi-page sites for established brands.", long: "Complete multi-page business websites with services, portfolio, about, contact and blog — built to grow with you and rank on Google.", deliverables: ["5–10+ pages", "CMS-ready", "SEO foundations", "Contact forms"] },
  { name: "Portfolio Sites", short: "Editorial portfolios for creatives.", long: "Portfolio websites for photographers, designers, architects and studios — designed to showcase your work with cinematic presentation.", deliverables: ["Case study templates", "Image galleries", "Client testimonials", "Enquiry form"] },
  { name: "Hotel Websites", short: "Immersive hotel & villa experiences.", long: "Luxury hotel and villa websites with room showcases, gallery-driven storytelling and direct booking flows to reduce OTA commissions.", deliverables: ["Room pages", "Gallery grids", "Booking/enquiry", "Multi-language ready"] },
  { name: "Restaurant Sites", short: "Menus, reservations, and brand storytelling.", long: "Restaurant websites featuring digital menus, reservation forms, chef stories and delivery integrations — designed to drive covers.", deliverables: ["Menu system", "Reservation form", "Delivery links", "Location & hours"] },
  { name: "Tourism Websites", short: "Tours, safaris, and travel bookings.", long: "Tourism and travel websites with itineraries, tour packages, gallery-driven experiences and secure enquiry systems.", deliverables: ["Tour packages", "Itinerary pages", "Booking forms", "Multi-currency ready"] },
  { name: "Educational Sites", short: "Institutes, courses, and online enrollment.", long: "Websites for schools, tuition centers and training institutes — course catalogs, instructor profiles and online enrollment.", deliverables: ["Course pages", "Instructor bios", "Enrollment forms", "News & events"] },
  { name: "Google Business Setup", short: "Rank locally on Google Maps.", long: "Complete Google Business Profile setup and optimization so your business appears in local search and Maps with photos, hours and reviews.", deliverables: ["Profile creation", "Category optimization", "Photo uploads", "Review response setup"] },
  { name: "SEO Setup", short: "Technical + on-page SEO foundations.", long: "Full technical SEO foundations: schema markup, sitemap, meta tags, Search Console, keyword research and on-page optimization.", deliverables: ["Meta & schema", "Sitemap & robots", "Search Console", "Keyword strategy"] },
  { name: "Website Maintenance", short: "Ongoing care, updates and support.", long: "Monthly website maintenance covering updates, backups, security patches, content edits and priority support.", deliverables: ["Monthly backups", "Content updates", "Security patches", "Priority support"] },
  { name: "Business Email", short: "Professional email @yourdomain.", long: "Professional business email setup on your own domain with reliable delivery, spam protection and mobile sync.", deliverables: ["Custom @domain email", "Mobile setup", "Spam protection", "Signature templates"] },
];

type BentoWork = { url: string; title: string; tag: string; img: string; className: string; tint: string; desc: string };

/*
 Editorial bento — asymmetric 4-col grid on desktop.
 col-span/row-span mixed for magazine feel; images stay object-cover object-top
 so screenshots read consistently across all sizes.
*/
const WORKS: BentoWork[] = [
  { url: "https://fine-dine-byob.lovable.app/", title: "Fine Dine BYOB", tag: "Restaurant", img: fineDine.url, tint: "#c2410c", desc: "Modern BYOB restaurant with reservations & signature menu.", className: "md:col-span-2 md:row-span-2" },
  { url: "https://elegant-rose-retreat.lovable.app/", title: "Rose Retreat", tag: "Beauty", img: roseRetreat.url, tint: "#be185d", desc: "Luxury salon & spa with online booking.", className: "md:col-span-1 md:row-span-1" },
  { url: "https://tropical-haven-webs.lovable.app/", title: "Tropical Haven", tag: "Hotel", img: tropicalHaven.url, tint: "#0f766e", desc: "Boutique villa with immersive gallery & direct booking.", className: "md:col-span-1 md:row-span-2" },
  { url: "https://titan-gym-build.lovable.app/", title: "Titan Gym", tag: "Fitness", img: titanGym.url, tint: "#1e293b", desc: "Fitness studio with membership & class scheduling.", className: "md:col-span-1 md:row-span-1" },
  { url: "https://excel-journey-site.lovable.app/", title: "Excel Journey", tag: "Education", img: excelJourney.url, tint: "#1d4ed8", desc: "Tuition institute promoting courses & enrollment.", className: "md:col-span-1 md:row-span-1" },
  { url: "https://ocean-whisper-adventures.lovable.app/", title: "Ocean Whisper", tag: "Tourism", img: oceanWhisper.url, tint: "#0284c7", desc: "Coastal surf, diving & boat tour experiences.", className: "md:col-span-2 md:row-span-1" },
  { url: "https://beautyqueenfashion.com/", title: "Beauty Queen", tag: "Fashion", img: beautyQueen.url, tint: "#a21caf", desc: "Fashion & beauty eCommerce with 3D printing.", className: "md:col-span-1 md:row-span-1" },
  { url: "https://wag-and-wellness-co.lovable.app/", title: "Wag & Wellness", tag: "Pet Care", img: wagWellness.url, tint: "#d97706", desc: "Veterinary, grooming & boarding online booking.", className: "md:col-span-1 md:row-span-1" },
  { url: "https://ceylon-sparkle-site.lovable.app/", title: "Ceylon Sparkle", tag: "Jewelry", img: ceylonSparkle.url, tint: "#7c2d12", desc: "Certified gemstones & luxury jewelry showcase.", className: "md:col-span-1 md:row-span-1" },
  { url: "https://crestline-developments.lovable.app/", title: "Crestline Developments", tag: "Construction", img: crestline.url, tint: "#334155", desc: "Premium construction & property portfolios.", className: "md:col-span-2 md:row-span-1" },
];

const REVIEWS = [
  { name: "Kasun Perera", role: "Restaurant Owner, Colombo", text: "Our new website tripled reservations in two months. The design feels truly premium." },
  { name: "Nimali Fernando", role: "Hotel Manager, Kandy", text: "Lanka WebWorks understood our brand instantly. Beautiful, fast, and easy to update." },
  { name: "Ravi Jayasinghe", role: "Tour Operator, Galle", text: "Professional from day one. Mobile experience is flawless and bookings have grown." },
  { name: "Shamika Silva", role: "Boutique Owner", text: "Our customers compliment the website daily. Worth every rupee." },
  { name: "Dr. Anuradha", role: "Education Director", text: "Reliable, communicative, and the SEO setup brought us to page one in three months." },
  { name: "Tharindu Wijesinghe", role: "Salon Owner, Negombo", text: "Bookings doubled in the first month. The team handled every detail." },
  { name: "Iresha Bandara", role: "Wellness Retreat, Ella", text: "Stunning visuals and lightning-fast pages. Guests notice the polish immediately." },
  { name: "Manoj De Silva", role: "Construction MD", text: "From brief to launch in under two weeks. Communication was top class." },
  { name: "Saumya Karunaratne", role: "Boutique Hotelier", text: "They treat your brand like their own. Highly recommended for serious businesses." },
];

function useParallax() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const progress = 1 - rect.top / window.innerHeight;
        el.style.setProperty("--pxy", `${Math.max(-40, Math.min(40, progress * 40 - 20))}px`);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return ref;
}


function Home() {
  const [openService, setOpenService] = useState<Service | null>(null);
  const heroVisualRef = useParallax();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
        <div className="container-edge relative grid gap-12 pb-16 pt-10 md:pb-24 md:pt-16 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="relative z-10">
            <SectionLabel number="01">INTRODUCING / CREATIVE DIGITAL STUDIO</SectionLabel>
            <h1 className="mt-6 font-display text-[16vw] leading-[0.85] tracking-tight md:text-[12vw] lg:text-[11rem]">
              LANKA<br />
              WEB<span className="bg-primary px-3 text-primary-foreground">WORKS</span>
            </h1>
            <p className="mt-8 max-w-xl font-heading text-base tracking-[0.18em] text-foreground/80">
              ★ YOUR DIGITAL PRESENCE STARTS HERE
            </p>
            <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
              Professional website design for Sri Lankan businesses. Modern, fast, mobile-friendly websites — engineered to grow your brand and convert visitors into customers.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/pricing" className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-4 font-heading text-xs tracking-[0.2em] text-background transition hover:bg-primary hover:text-primary-foreground">
                VIEW PACKAGES <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-foreground px-6 py-4 font-heading text-xs tracking-[0.2em] text-foreground transition hover:bg-foreground hover:text-background">
                FREE CONSULTATION
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              {["SEO Friendly", "Mobile Responsive", "Fast Loading", "Secure SSL", "Google Ready"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary-foreground bg-foreground rounded-full p-0.5" /> {b}</span>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div ref={heroVisualRef} className="relative aspect-square w-full max-w-[560px] justify-self-end" style={{ transform: "translateY(var(--pxy, 0))" }}>

            <div className="absolute inset-0 animate-spin-slow rounded-full border border-foreground/15" />
            <div className="absolute inset-8 rounded-full border border-foreground/10" />
            <div className="absolute inset-16 rounded-full border border-foreground/5" />
            {/* Yellow disc */}
            <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 animate-float rounded-full bg-primary shadow-[0_30px_80px_-20px_rgba(239,255,0,0.5)]" />
            {/* Glossy black sphere */}
            <div className="absolute right-2 top-6 h-28 w-28 rounded-full bg-gradient-to-br from-foreground via-foreground to-foreground/70 shadow-2xl md:h-36 md:w-36">
              <div className="absolute left-4 top-4 h-6 w-10 rounded-full bg-white/20 blur-sm" />
            </div>
            {/* Floating card */}
            <div className="absolute bottom-4 left-0 w-56 rotate-[-6deg] rounded-md border border-border bg-background p-4 shadow-2xl">
              <p className="font-heading text-[10px] tracking-[0.2em] text-foreground/50">CLIENT / LIVE</p>
              <p className="mt-2 font-display text-xl">+ 250% organic</p>
              <p className="text-xs text-muted-foreground">Search growth in 90 days</p>
            </div>
            {/* small badge */}
            <div className="absolute right-0 bottom-16 grid h-20 w-20 animate-spin-slow place-items-center rounded-full bg-foreground text-background">
              <span className="font-heading text-[9px] tracking-widest">★ AWARD ★ STUDIO ★</span>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container-edge relative grid grid-cols-2 gap-6 border-y border-border py-8 md:grid-cols-4 md:py-10">
          {[
            ["50+", "Designs Created"],
            ["100%", "Mobile Friendly"],
            ["1st", "Page SEO Targets"],
            ["3-5d", "Fast Delivery"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-5xl md:text-6xl">{v}</p>
              <p className="mt-1 font-heading text-[10px] tracking-[0.2em] text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <Marquee items={["Website Design", "SEO Setup", "Brand Identity", "E-Commerce", "Maintenance", "Hosting"]} />

      {/* SERVICES */}
      <section className="container-edge py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:items-end">
          <div>
            <SectionLabel number="02">SERVICES</SectionLabel>
            <h2 className="mt-6 font-display text-6xl leading-[0.9] md:text-8xl">
              WHAT WE<br /><span className="text-foreground/30">CRAFT.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground md:text-xl">
            From a single landing page to a full digital ecosystem — we design, build and maintain websites that your customers love and Google notices.
          </p>
        </div>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {SERVICES.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setOpenService(s)}
              className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-6 py-6 text-left transition-colors hover:bg-foreground hover:text-background md:py-8"
            >
              <span className="font-heading text-sm tracking-[0.2em] opacity-60">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-3xl tracking-wide transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">{s.name}</h3>
              <span className="flex items-center gap-3">
                <span className="hidden font-heading text-[10px] tracking-[0.25em] opacity-0 transition-opacity duration-500 group-hover:opacity-70 md:inline">VIEW DETAILS</span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45 md:h-7 md:w-7" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* SERVICE DIALOG */}
      <Dialog open={!!openService} onOpenChange={(o) => !o && setOpenService(null)}>
        <DialogContent className="max-w-2xl overflow-hidden border-2 border-foreground p-0 sm:rounded-none bg-background">
          {/* Hero band with animated gradient */}
          <div className="relative overflow-hidden bg-foreground px-8 py-8">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary blur-3xl opacity-70 animate-float-slow" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-primary/40 blur-2xl" />
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
            <div className="relative">
              <p className="font-heading text-[10px] tracking-[0.3em] text-primary">◆ SERVICE / DETAIL</p>
              <DialogTitle className="mt-3 font-display text-5xl leading-[0.9] text-background md:text-6xl">
                {openService?.name}
              </DialogTitle>
              <p className="mt-3 font-heading text-[11px] tracking-[0.2em] text-background/60">
                {openService?.short}
              </p>
            </div>
          </div>

          <div className="grid gap-6 px-8 pb-8 pt-6 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="font-heading text-[10px] tracking-[0.25em] text-muted-foreground">OVERVIEW</p>
              <DialogDescription className="mt-2 text-base text-foreground/80">
                {openService?.long}
              </DialogDescription>
            </div>
            <div className="border-l-0 md:border-l md:pl-6">
              <p className="font-heading text-[10px] tracking-[0.25em] text-muted-foreground">WHAT'S INCLUDED</p>
              <ul className="mt-3 space-y-2.5">
                {openService?.deliverables.map((d, i) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 text-sm animate-fade-up"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-primary p-1 text-primary-foreground" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-border bg-surface px-8 py-5">
            <Link to="/contact" onClick={() => setOpenService(null)} className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 font-heading text-[11px] tracking-[0.2em] text-background transition hover:bg-primary hover:text-primary-foreground">
              REQUEST QUOTE <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link to="/pricing" onClick={() => setOpenService(null)} className="inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-3 font-heading text-[11px] tracking-[0.2em] transition hover:bg-foreground hover:text-background">
              SEE PACKAGES
            </Link>
          </div>
        </DialogContent>
      </Dialog>


      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-[#0f0f0f] py-24 text-white md:py-32">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
        <div className="container-edge relative">
          <div className="flex items-end justify-between">
            <div>
              <SectionLabel number="03">WHY US</SectionLabel>
              <h2 className="mt-6 font-display text-6xl text-white md:text-8xl">
                BUILT TO<br /><span className="text-primary">PERFORM.</span>
              </h2>
            </div>
          </div>
          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
            {[
              ["Modern Design", "Editorial layouts that feel premium and memorable."],
              ["Mobile First", "Pixel-perfect on phones, tablets, and ultra-wide screens."],
              ["Lightning Fast", "Optimised for Core Web Vitals — sub-second loads."],
              ["SEO Foundations", "Schema, sitemap and search-console ready out of the box."],
              ["WhatsApp Built-In", "Direct messaging buttons for instant customer contact."],
              ["Local Support", "Sri Lankan team, Sri Lankan timezone, real conversations."],
              ["Transparent Pricing", "Clear packages. No surprise invoices. Ever."],
              ["Priority Service", "Quick turnarounds, honest updates, calm execution."],
              ["Affordable", "Premium quality at prices that respect your budget."],
            ].map(([t, d]) => (
              <div key={t} className="group bg-[#0f0f0f] p-8 transition-colors hover:bg-[#151515] md:p-10">
                <div className="flex items-center gap-3 text-primary"><span className="h-px w-8 bg-primary" /> <span className="font-heading text-[10px] tracking-[0.25em]">●</span></div>
                <h3 className="mt-4 font-display text-3xl">{t}</h3>
                <p className="mt-3 text-sm text-white/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section className="container-edge py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel number="04">SELECTED WORK</SectionLabel>
            <h2 className="mt-6 font-display text-6xl md:text-8xl">RECENT<br />PROJECTS.</h2>
          </div>
          <Link to="/works" className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] link-underline">
            VIEW ALL <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[minmax(190px,1fr)] md:grid-cols-4 md:grid-flow-dense md:gap-5">
          {WORKS.map((w, i) => {
            const isFeature = w.className.includes("row-span-2") && w.className.includes("col-span-2");
            return (
              <Reveal
                key={w.url}
                delay={(i % 4) * 80}
                className={`${w.className} min-h-[280px] md:min-h-0`}
              >
                <a
                  href={w.url}
                  target="_blank"
                  rel="noreferrer"
                  className="tilt-3d group relative block h-full w-full overflow-hidden border border-border bg-foreground"
                >
                  <img
                    src={w.img}
                    alt={`${w.title} — live website preview`}
                    loading="lazy"
                    decoding="async"
                    className="tilt-layer absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.09]"
                  />
                  {/* Category color tint (multiply on hover) */}
                  <div className="bento-tint" style={{ backgroundColor: w.tint }} />
                  {/* Dark gradient for legibility */}
                  <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                  {/* Shine sweep on hover */}
                  <div className="bento-shine" />
                  {/* Editorial big number in corner */}
                  <span className="bento-num">{String(i + 1).padStart(2, "0")}</span>
                  {/* Tag chip */}
                  <span
                    className="absolute left-4 top-4 z-[4] px-3 py-1 font-heading text-[10px] tracking-[0.25em] text-white shadow-sm md:left-5 md:top-5"
                    style={{ backgroundColor: w.tint }}
                  >
                    {w.tag.toUpperCase()}
                  </span>
                  {/* Arrow */}
                  <span className="absolute right-4 top-4 z-[4] grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-500 group-hover:rotate-12 group-hover:opacity-100 md:right-5 md:top-5 md:h-12 md:w-12">
                    <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                  </span>
                  {/* Bottom title / caption */}
                  <div className="tilt-layer absolute inset-x-0 bottom-0 z-[4] p-5 text-white md:p-6">
                    <p className="font-heading text-[10px] tracking-[0.3em] text-white/70">VIEW LIVE SITE →</p>
                    <p className={`mt-1 font-display leading-none ${isFeature ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"}`}>
                      {w.title}
                    </p>
                    <p className="mt-2 max-w-md text-xs text-white/70 line-clamp-2 md:text-sm">
                      {w.desc}
                    </p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="container-edge py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:items-end">
          <div>
            <SectionLabel number="05">PRICING</SectionLabel>
            <h2 className="mt-6 font-display text-6xl md:text-8xl">PACKAGES.</h2>
          </div>
          <p className="text-lg text-muted-foreground">Transparent pricing. Launch offers active. Pick a package or build your own.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Starter", price: "25,000", orig: "35,000", desc: "Up to 3 pages, perfect for small businesses." },
            { name: "Business", price: "45,000", orig: "60,000", desc: "Growing brands needing room to expand.", featured: false },
            { name: "Premium", price: "75,000", orig: "95,000", desc: "Full editorial site with advanced SEO.", featured: true },
            { name: "Enterprise", price: "150,000+", desc: "Custom builds for complex requirements." },
          ].map((p) => (
            <div key={p.name} className={`relative border p-7 ${p.featured ? "border-foreground bg-foreground text-background" : "border-border"}`}>
              {p.featured && <span className="absolute -top-3 left-7 bg-primary px-3 py-1 font-heading text-[10px] tracking-widest text-primary-foreground">FEATURED</span>}
              <p className="font-heading text-[10px] tracking-[0.25em] opacity-60">{p.name.toUpperCase()}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-xs">Rs.</span>
                <span className="font-display text-5xl">{p.price}</span>
              </div>
              {p.orig && <p className="mt-1 text-xs line-through opacity-50">Rs. {p.orig}</p>}
              <p className="mt-6 text-sm opacity-80">{p.desc}</p>
              <Link to="/pricing" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 font-heading text-[11px] tracking-[0.2em] ${p.featured ? "bg-primary text-primary-foreground" : "border border-foreground text-foreground hover:bg-foreground hover:text-background"} transition`}>
                EXPLORE →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-edge">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel number="06">CLIENT WORDS</SectionLabel>
              <h2 className="mt-6 font-display text-6xl md:text-8xl">LOVED.<br /><span className="text-foreground/30">BY CLIENTS.</span></h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-foreground stroke-foreground" />)}</div>
              <span className="font-heading text-xs tracking-[0.2em] text-muted-foreground">5.0 / 50+ HAPPY CLIENTS</span>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 100}>
                <figure className="flex h-full flex-col border border-border bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:border-foreground hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-foreground stroke-foreground" />)}
                  </div>
                  <blockquote className="mt-6 flex-1 font-display text-2xl leading-tight">"{r.text}"</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground font-display text-background">{r.name[0]}</span>
                    <span>
                      <span className="block font-heading text-xs tracking-[0.18em]">{r.name}</span>
                      <span className="block text-xs text-muted-foreground">{r.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-edge py-24 md:py-32">
        <div className="relative overflow-hidden border border-border bg-foreground p-10 text-background md:p-20">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-end">
            <h2 className="font-display text-6xl leading-[0.9] md:text-8xl">
              READY TO BUILD<br />
              YOUR <span className="text-primary">ONLINE PRESENCE?</span>
            </h2>
            <div>
              <p className="text-background/70">Let's create a website that helps your business stand out and bring in more customers.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="rounded-full bg-primary px-6 py-4 font-heading text-xs tracking-[0.2em] text-primary-foreground">FREE CONSULTATION</Link>
                <a href="tel:+94729911398" className="rounded-full border border-background/30 px-6 py-4 font-heading text-xs tracking-[0.2em]">CALL NOW</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
