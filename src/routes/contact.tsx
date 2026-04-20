import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { RESTAURANT } from "@/lib/restaurant";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit & Reserve — Local House Restaurant, Al Fahidi Dubai" },
      {
        name: "description",
        content:
          "Visit Local House Restaurant at 51 Al Fahidi Historical Neighbourhood, Bur Dubai. Open daily 8:00 AM – 11:00 PM. Reserve via WhatsApp or call +971 54 471 1100.",
      },
      { property: "og:title", content: "Contact Local House Restaurant — Al Fahidi, Bur Dubai" },
      {
        property: "og:description",
        content: "Find us in the Al Fahidi historical neighbourhood. Reserve, call, WhatsApp and directions.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${RESTAURANT.mapsQuery}`;
  const mapEmbed = `https://www.google.com/maps?q=${RESTAURANT.mapsQuery}&output=embed`;
  const reserveMsg = encodeURIComponent("Hello Local House, I would like to reserve a table.");

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-gradient-warm border-b border-border grain-overlay">
        <div className="container-prose py-20 md:py-28 text-center">
          <span className="eyebrow justify-center">Visit Us</span>
          <h1 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">
            Find Local House,<br />
            <span className="italic text-gold-deep font-normal">in the heart of Al Fahidi.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Tucked into the sand-coloured alleys of Old Dubai, just a short walk from the Dubai
            Museum and the Bur Dubai abra station.
          </p>
        </div>
      </section>

      {/* Reserve callout */}
      <section className="py-12 md:py-16">
        <div className="container-prose">
          <div className="relative overflow-hidden rounded-2xl bg-charcoal text-cream p-8 md:p-12 shadow-elevated">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-gold opacity-25 blur-3xl" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-3">Reserve a table</div>
                <h2 className="font-display text-2xl md:text-4xl text-cream leading-tight max-w-xl">
                  Tell us when you'd like to dine — we'll prepare your majlis seat.
                </h2>
                <p className="mt-3 text-cream/70 text-sm md:text-base max-w-md">
                  WhatsApp is the fastest way to confirm. We reply within minutes during opening hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:min-w-[220px]">
                <a
                  href={`https://wa.me/${RESTAURANT.whatsapp}?text=${reserveMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-gold-deep px-6 py-3.5 text-sm hover:bg-gold transition-colors shadow-gold"
                >
                  <MessageCircle className="h-4 w-4" /> Reserve on WhatsApp
                </a>
                <a
                  href={`tel:${RESTAURANT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm hover:bg-cream/10 transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-prose grid md:grid-cols-2 gap-10 md:gap-12">
          {/* Info */}
          <div className="space-y-4">
            <InfoCard icon={MapPin} title="Address" body={RESTAURANT.address} />
            <InfoCard
              icon={Phone}
              title="Phone"
              body={
                <a href={`tel:${RESTAURANT.phoneRaw}`} className="hover:text-gold-deep transition-colors">
                  {RESTAURANT.phone}
                </a>
              }
            />
            <InfoCard
              icon={Mail}
              title="Email"
              body={
                <a href={`mailto:${RESTAURANT.email}`} className="hover:text-gold-deep break-all transition-colors">
                  {RESTAURANT.email}
                </a>
              }
            />
            <InfoCard icon={Clock} title="Opening Hours" body={RESTAURANT.hours} />

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-2xl border border-charcoal/15 bg-cream px-6 py-4 hover:border-gold-deep/40 transition-colors group"
            >
              <span className="flex items-center gap-3 text-charcoal">
                <Navigation className="h-4 w-4 text-gold-deep" />
                <span className="font-display text-base">Get directions in Maps</span>
              </span>
              <span className="text-gold-deep transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border/70 shadow-elevated bg-card min-h-[420px] md:min-h-full">
            <iframe
              title="Local House Restaurant location map"
              src={mapEmbed}
              loading="lazy"
              className="w-full h-full min-h-[420px]"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Group / private */}
      <section className="py-16 md:py-20 bg-sand/40 border-t border-border">
        <div className="container-prose grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-cream shadow-soft">
              <Users className="h-6 w-6" />
            </span>
          </div>
          <div className="max-w-xl">
            <span className="eyebrow">Private & Groups</span>
            <h2 className="mt-2 font-display text-2xl md:text-3xl leading-tight">
              Planning a group, family gathering or cultural dining experience?
            </h2>
            <p className="mt-3 text-muted-foreground">
              For larger parties or private majlis seating, message us and we will tailor your visit
              — menu, timing and a quiet corner of the house.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <a
              href={`https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent("Hello, I would like to plan a group dining experience.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-6 py-3 text-sm hover:bg-gold-deep transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Message Us
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 p-5 md:p-6 rounded-2xl bg-card border border-border/70 shadow-card hover-lift">
      <div className="h-11 w-11 shrink-0 rounded-full bg-gradient-gold flex items-center justify-center text-cream">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-[10px] tracking-[0.28em] uppercase text-gold-deep">{title}</div>
        <div className="mt-1.5 text-charcoal leading-relaxed">{body}</div>
      </div>
    </div>
  );
}
