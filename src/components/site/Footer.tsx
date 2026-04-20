import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";
import { RESTAURANT } from "@/lib/restaurant";

export function Footer() {
  return (
    <footer className="mt-24 bg-charcoal text-cream/85 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      {/* CTA strip */}
      <div className="container-prose pt-16 pb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-12 border-b border-cream/10">
          <div>
            <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-3">
              Heritage hospitality
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-cream max-w-md leading-tight">
              Reserve your table — the majlis is warm and the coffee is poured.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${RESTAURANT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-gold-deep px-6 py-3 text-sm text-cream hover:bg-gold transition-colors shadow-gold"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm hover:bg-cream/10 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>
        </div>
      </div>

      <div className="container-prose pb-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 font-display text-base text-gold">L</span>
            <div>
              <div className="font-display text-2xl text-cream leading-none">Local House</div>
              <div className="mt-1.5 text-[10px] tracking-[0.32em] uppercase text-gold">
                Restaurant · Al Fahidi
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/65">
            An authentic Emirati table set in the sand-coloured alleys of Old Dubai. Slow-cooked
            heritage dishes, hand-poured Arabic coffee and the unhurried generosity of a true
            majlis.
          </p>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-cream text-[11px] tracking-[0.28em] uppercase mb-5">Visit</h4>
          <ul className="space-y-3.5 text-sm text-cream/75">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>{RESTAURANT.address}</span></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>{RESTAURANT.hours}</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /><a href={`tel:${RESTAURANT.phoneRaw}`} className="hover:text-gold">{RESTAURANT.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /><a href={`mailto:${RESTAURANT.email}`} className="hover:text-gold break-all">{RESTAURANT.email}</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-cream text-[11px] tracking-[0.28em] uppercase mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-cream/75">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/menu" className="hover:text-gold transition-colors">Menu</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Visit & Contact</Link></li>
            <li>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${RESTAURANT.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Navigation className="h-3.5 w-3.5" /> Directions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-prose py-6 text-xs text-cream/50 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Local House Restaurant. All rights reserved.</span>
          <span className="tracking-wider">Heritage dining · Al Fahidi, Dubai</span>
        </div>
      </div>
    </footer>
  );
}
