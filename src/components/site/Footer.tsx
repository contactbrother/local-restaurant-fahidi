import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { RESTAURANT } from "@/lib/restaurant";

export function Footer() {
  return (
    <footer className="mt-24 bg-charcoal text-cream/85">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-cream">Local House Restaurant</div>
          <div className="mt-1 text-xs tracking-[0.25em] uppercase text-gold">Al Fahidi · Bur Dubai</div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
            An authentic Emirati table set in the sand-coloured alleys of Old Dubai. Slow-cooked
            heritage dishes, hand-poured Arabic coffee and the unhurried hospitality of a true majlis.
          </p>
        </div>

        <div>
          <h4 className="text-cream text-sm tracking-[0.2em] uppercase mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-cream/75">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>{RESTAURANT.address}</span></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>{RESTAURANT.hours}</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream text-sm tracking-[0.2em] uppercase mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-cream/75">
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /><a href={`tel:${RESTAURANT.phoneRaw}`} className="hover:text-gold">{RESTAURANT.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /><a href={`mailto:${RESTAURANT.email}`} className="hover:text-gold break-all">{RESTAURANT.email}</a></li>
          </ul>
          <div className="mt-6 flex gap-4 text-sm">
            <Link to="/menu" className="hover:text-gold">Menu</Link>
            <Link to="/about" className="hover:text-gold">About</Link>
            <Link to="/contact" className="hover:text-gold">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-prose py-6 text-xs text-cream/50 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Local House Restaurant. All rights reserved.</span>
          <span>Heritage dining · Al Fahidi, Dubai</span>
        </div>
      </div>
    </footer>
  );
}
