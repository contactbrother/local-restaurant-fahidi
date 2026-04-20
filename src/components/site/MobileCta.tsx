import { Phone, MessageCircle } from "lucide-react";
import { RESTAURANT } from "@/lib/restaurant";

export function MobileCta() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-cream/95 backdrop-blur-xl shadow-warm">
      <div className="grid grid-cols-2">
        <a
          href={`tel:${RESTAURANT.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-charcoal active:bg-sand/60"
        >
          <Phone className="h-4 w-4 text-gold-deep" /> Call
        </a>
        <a
          href={`https://wa.me/${RESTAURANT.whatsapp}?text=Hello%20Local%20House,%20I%20would%20like%20to%20reserve%20a%20table.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-cream bg-charcoal active:bg-gold-deep"
        >
          <MessageCircle className="h-4 w-4 text-gold" /> Reserve · WhatsApp
        </a>
      </div>
    </div>
  );
}
