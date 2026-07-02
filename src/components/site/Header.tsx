import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useTheme } from "../theme-provider";
import { Menu, Moon, Phone, Sun, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/works", label: "Works" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-edge flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-underline font-heading text-[13px] tracking-[0.18em] text-foreground/80 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition hover:bg-foreground hover:text-background"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="tel:+94729911398"
            className="hidden h-10 items-center gap-2 rounded-full border border-border px-4 font-heading text-[12px] tracking-[0.18em] transition hover:bg-foreground hover:text-background md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
          <Link
            to="/contact"
            className="hidden h-10 items-center gap-2 rounded-full bg-foreground px-5 font-heading text-[12px] tracking-[0.18em] text-background transition hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            Get Quote →
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-background">
          <div className="container-edge flex h-16 items-center justify-between md:h-20">
            <Logo />
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-border"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="container-edge flex flex-col gap-4 pt-10">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-display text-5xl leading-none tracking-wide hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-10 flex gap-3">
              <a href="tel:+94729911398" className="flex-1 rounded-full border border-border py-3 text-center font-heading text-xs tracking-widest">CALL NOW</a>
              <Link to="/contact" onClick={() => setOpen(false)} className="flex-1 rounded-full bg-foreground py-3 text-center font-heading text-xs tracking-widest text-background">GET QUOTE</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
