import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { RESTAURANT } from "@/lib/restaurant";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/contact", label: "Visit" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-xl border-b border-border/70 shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-prose flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-deep/40 bg-cream/60 font-display text-base text-gold-deep">
            L
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg md:text-xl text-charcoal">Local House</span>
            <span className="mt-1 text-[9px] md:text-[10px] tracking-[0.32em] uppercase text-gold-deep/80">
              Al Fahidi · Est. Heritage
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-gold-deep after:scale-x-100" }}
              activeOptions={{ exact: true }}
              className="relative text-sm tracking-wide text-charcoal/75 hover:text-gold-deep transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold-deep after:transition-transform after:duration-500"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${RESTAURANT.whatsapp}?text=Hello%20Local%20House,%20I%20would%20like%20to%20reserve%20a%20table.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-5 py-2.5 text-sm tracking-wide hover:bg-gold-deep transition-colors shadow-soft"
          >
            <MessageCircle className="h-4 w-4" />
            Reserve via WhatsApp
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-cream/95 backdrop-blur-xl fade-in">
          <nav className="container-prose py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-gold-deep bg-sand/60" }}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-charcoal hover:bg-sand/60 tracking-wide"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${RESTAURANT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal text-cream px-5 py-3 text-sm"
            >
              <MessageCircle className="h-4 w-4" /> Reserve on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
