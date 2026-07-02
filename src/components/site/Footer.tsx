import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { TikTokIcon } from "./TikTokIcon";

const INSTAGRAM_URL = "https://www.instagram.com/lankawebworks?igsh=MTd5aXVlYmdoZHVudQ%3D%3D&utm_source=qr";
const TIKTOK_URL = "https://www.tiktok.com/@lanka.webworks?_r=1&_t=ZS-97VIc9yozlk";
const FACEBOOK_URL = "https://www.facebook.com/share/18w3gizhHS/";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-[#0f0f0f] text-white">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="container-edge relative">
        {/* Massive type */}
        <div className="border-b border-white/10 py-16 md:py-24">
          <p className="font-heading text-xs tracking-[0.25em] text-white/60">★ LET'S BUILD SOMETHING</p>
          <h2 className="mt-4 font-display text-[18vw] leading-[0.85] tracking-tight md:text-[14vw] lg:text-[200px]">
            LANKA<br />
            <span className="text-primary">WEBWORKS</span>
          </h2>
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-white/70">Your digital presence starts here. Modern websites, built for Sri Lankan businesses ready to grow online.</p>
            <Link to="/contact" className="inline-flex w-fit items-center gap-3 rounded-full bg-primary px-6 py-3 font-heading text-xs tracking-[0.2em] text-primary-foreground transition hover:bg-white hover:text-black">
              Start a Project →
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo className="text-white [&_span]:text-white" />
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Professional website design and digital solutions for Sri Lankan businesses.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a aria-label="Facebook" href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:-translate-y-0.5 hover:bg-primary hover:text-black"><Facebook className="h-4 w-4" /></a>
              <a aria-label="Instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:-translate-y-0.5 hover:bg-primary hover:text-black"><Instagram className="h-4 w-4" /></a>
              <a aria-label="TikTok" href={TIKTOK_URL} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:-translate-y-0.5 hover:bg-primary hover:text-black"><TikTokIcon className="h-4 w-4" /></a>
              <a aria-label="Email" href="mailto:lankawebworks@gmail.com" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:-translate-y-0.5 hover:bg-primary hover:text-black"><Mail className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <p className="font-heading text-[11px] tracking-[0.25em] text-white/50">NAVIGATE</p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["/", "Home"], ["/pricing", "Pricing"], ["/about", "About"],
                ["/works", "Works"], ["/faq", "FAQ"], ["/contact", "Contact"], ["/privacy", "Privacy"],
              ].map(([to, label]) => (
                <li key={to}><Link to={to} className="text-white/70 transition hover:text-primary">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-[11px] tracking-[0.25em] text-white/50">CONTACT</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /><a href="tel:+94729911398">072 991 1398</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-primary" /><a href="mailto:lankawebworks@gmail.com">lankawebworks@gmail.com</a></li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-primary" /> Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/50 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Lanka WebWorks — All rights reserved.</p>
          <p className="font-heading tracking-[0.2em]">DESIGNED & BUILT IN SRI LANKA 🇱🇰</p>
        </div>
      </div>
    </footer>
  );
}
