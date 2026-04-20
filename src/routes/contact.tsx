import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { RESTAURANT } from "@/lib/restaurant";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — Local House Restaurant, Al Fahidi Dubai" },
      {
        name: "description",
        content:
          "Visit Local House Restaurant at 51 Al Fahidi Historical Neighbourhood, Bur Dubai. Open daily 8:00 AM – 11:00 PM. Call +971 54 471 1100 or message us on WhatsApp.",
      },
      { property: "og:title", content: "Contact Local House Restaurant — Al Fahidi, Bur Dubai" },
      {
        property: "og:description",
        content: "Find us in the Al Fahidi historical neighbourhood. Phone, WhatsApp and directions.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${RESTAURANT.mapsQuery}`;
  const mapEmbed = `https://www.google.com/maps?q=${RESTAURANT.mapsQuery}&output=embed`;

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-gradient-warm border-b border-border">
        <div className="container-prose py-20 md:py-28 text-center">
          <div className="text-xs tracking-[0.3em] uppercase text-gold-deep mb-4">Visit Us</div>
          <h1 className="font-display text-4xl md:text-6xl">Find Local House</h1>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Tucked into the sand-coloured alleys of Al Fahidi, just a short walk from the Dubai
            Museum and the Bur Dubai abra station.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-prose grid md:grid-cols-2 gap-10 md:gap-14">
          {/* Info */}
          <div className="space-y-6">
            <InfoCard
              icon={MapPin}
              title="Address"
              body={RESTAURANT.address}
            />
            <InfoCard
              icon={Phone}
              title="Phone"
              body={
                <a href={`tel:${RESTAURANT.phoneRaw}`} className="hover:text-gold-deep">
                  {RESTAURANT.phone}
                </a>
              }
            />
            <InfoCard
              icon={Mail}
              title="Email"
              body={
                <a href={`mailto:${RESTAURANT.email}`} className="hover:text-gold-deep break-all">
                  {RESTAURANT.email}
                </a>
              }
            />
            <InfoCard icon={Clock} title="Opening Hours" body={RESTAURANT.hours} />

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal text-cream px-6 py-3.5 text-sm hover:bg-gold-deep transition-colors"
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
              <a
                href={`https://wa.me/${RESTAURANT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-deep text-cream px-6 py-3.5 text-sm hover:bg-gold transition-colors shadow-gold"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/30 text-charcoal px-6 py-3.5 text-sm hover:bg-sand/60 transition-colors"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-border shadow-warm bg-card min-h-[400px] md:min-h-full">
            <iframe
              title="Local House Restaurant location map"
              src={mapEmbed}
              loading="lazy"
              className="w-full h-full min-h-[400px]"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-sand/40 border-t border-border">
        <div className="container-prose text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl md:text-4xl">Planning a Group or Special Occasion?</h2>
          <p className="mt-4 text-muted-foreground">
            For larger parties, private majlis seating or cultural dining experiences, please reach
            out to us by phone or WhatsApp and we will tailor your visit.
          </p>
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
    <div className="flex gap-5 p-5 md:p-6 rounded-xl bg-card border border-border shadow-soft">
      <div className="h-11 w-11 shrink-0 rounded-full bg-gradient-gold flex items-center justify-center text-cream">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs tracking-[0.25em] uppercase text-gold-deep">{title}</div>
        <div className="mt-1.5 text-charcoal leading-relaxed">{body}</div>
      </div>
    </div>
  );
}
