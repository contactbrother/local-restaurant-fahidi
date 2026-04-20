import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { RESTAURANT } from "@/lib/restaurant";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-prose flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="font-display text-xl md:text-2xl text-charcoal leading-tight">
            Local House
          </span>
          <span className="hidden sm:inline-block w-px h-5 bg-gold-deep/50" />
          <span className="hidden sm:inline-block text-[10px] tracking-[0.2em] uppercase text-gold-deep font-sans">
            Al Fahidi
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-gold-deep" }}
              activeOptions={{ exact: true }}
              className="text-sm tracking-wide text-charcoal/80 hover:text-gold-deep transition-colors relative"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${RESTAURANT.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-5 py-2.5 text-sm tracking-wide hover:bg-gold-deep transition-colors"
          >
            <Phone className="h-4 w-4" />
            Reserve
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
        <div className="md:hidden border-t border-border bg-cream">
          <nav className="container-prose py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-gold-deep bg-sand/60" }}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-charcoal hover:bg-sand/60"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal text-cream px-5 py-3 text-sm"
            >
              <Phone className="h-4 w-4" /> Call {RESTAURANT.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
