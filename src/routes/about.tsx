import { createFileRoute, Link } from "@tanstack/react-router";
import { Coffee, Flame, Wind, Heart } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import alFahidi from "@/assets/al-fahidi.jpg";
import feast from "@/assets/emirati-feast.jpg";
import hero from "@/assets/hero-courtyard.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Local House Restaurant, Al Fahidi Heritage Dining" },
      {
        name: "description",
        content:
          "The story of Local House — an authentic Emirati restaurant in the Al Fahidi historical district of Bur Dubai, preserving the flavours and hospitality of Old Dubai.",
      },
      { property: "og:title", content: "About Local House — Heritage Emirati Dining in Old Dubai" },
      {
        property: "og:description",
        content: "Discover the story behind our Al Fahidi restaurant, our Emirati cuisine and the heritage we honour with every dish.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Flame, title: "Slow-cooked", body: "Bezar ground at dawn. Saloona simmered for hours." },
  { icon: Coffee, title: "Hand-poured", body: "Cardamom-laced gahwa from a brass dallah." },
  { icon: Wind, title: "Old Dubai", body: "Wind towers, coral stone and the quiet of Al Fahidi." },
  { icon: Heart, title: "True hospitality", body: "Welcomed as a guest, never as a customer." },
];

function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative -mt-16 md:-mt-20 min-h-[72vh] flex items-end overflow-hidden">
        <img src={hero} alt="Inside Local House Restaurant" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative container-prose pb-16 md:pb-24 pt-32">
          <div className="max-w-2xl text-cream fade-up-soft">
            <div className="flex items-center gap-3 text-gold mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.36em] uppercase">Our Story</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-cream leading-[1.05]">
              Born of the old city.<br />
              <span className="italic text-gold/95 font-normal">Grown by old recipes.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-cream border-b border-border/60">
        <div className="container-prose py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand text-gold-deep">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-display text-base text-charcoal">{v.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed mt-0.5">{v.body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-prose grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
            <span className="eyebrow">A Heritage Cuisine</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
              The roots of Emirati cooking.
            </h2>
            <div className="mt-6 hairline w-16" />
          </div>
          <div className="md:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-[15px] md:text-base">
            <p className="first-letter:font-display first-letter:text-5xl first-letter:text-gold-deep first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
              Long before the city's skyline rose from the desert, the people of these shores cooked
              with what the land and sea quietly offered. Date palms, dried lime, fresh fish from the
              creek, slow-roasted camel from the inland routes — these were the ingredients of
              survival, and in time, the ingredients of celebration.
            </p>
            <p>
              Emirati cuisine is a layered story. It carries the spice trails of India, the perfumes
              of Persia, the smoke of Bedouin fires and the salt of the Arabian Gulf. Recipes were
              never written down; they passed from mother to daughter, host to guest, through tasting
              and tending.
            </p>
            <blockquote className="my-8 border-l-2 border-gold-deep pl-6 font-display text-xl md:text-2xl text-charcoal italic">
              "We cook in that same lineage — not as a performance of tradition, but as an honest
              continuation of it."
            </blockquote>
            <p>
              Our kitchen begins each day with whole spices crushed by hand: cardamom, black lime,
              cumin, cinnamon and clove, blended into the bezar that perfumes our machboos and
              saloona. Our rice is rinsed and rested. Our breads are baked on iron tava through the
              morning. Nothing is rushed, because nothing in true Emirati cooking ever was.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 md:py-28 bg-sand/40 grain-overlay">
        <div className="container-prose grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated order-2 md:order-1">
            <img src={alFahidi} alt="Al Fahidi historical neighbourhood, Bur Dubai" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent text-cream">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Established Heritage</div>
              <div className="mt-1 font-display text-2xl">Al Fahidi District</div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="eyebrow">The Neighbourhood</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
              Set inside Al Fahidi, Old Dubai.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                The Al Fahidi historical neighbourhood is one of the last surviving pieces of pre-oil
                Dubai. Coral-stone walls, sand-coloured courtyards and the iconic barjeel wind towers
                still stand as they did when this district was the trading heart of the city.
              </p>
              <p>
                We chose to open our doors here for one reason: a heritage cuisine deserves a heritage
                home. The same walls that once sheltered Emirati families from the afternoon heat now
                hold our majlis, our brass dallah, and the steady aroma of cardamom-laced coffee.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { k: "District", v: "Al Fahidi" },
                { k: "City", v: "Bur Dubai" },
                { k: "Era", v: "Pre-oil Dubai" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl bg-cream/60 border border-border/60 p-4">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-gold-deep">{s.k}</div>
                  <div className="mt-1 font-display text-base text-charcoal">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality */}
      <section className="py-20 md:py-28">
        <div className="container-prose grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="eyebrow">Our Hospitality</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
              Welcomed as a guest, never as a customer.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                In Emirati culture, a guest is a blessing. Coffee is poured before questions are
                asked. Dates are offered before menus appear. The first cup is always for you;
                the second is shared in conversation.
              </p>
              <p>
                Our team are storytellers as much as servers. Ask about the dish in front of you and
                you'll hear where it travelled from, which family kept it alive, and how a
                grandmother in Ras Al Khaimah might have done it differently.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
            <img src={feast} alt="Traditional Emirati feast" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-charcoal text-cream">
        <div className="container-prose text-center max-w-2xl mx-auto">
          <span className="eyebrow !text-gold justify-center">Visit Local House</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-cream leading-tight">
            Come taste the story for yourself.
          </h2>
          <p className="mt-5 text-cream/75">
            The best way to understand Emirati hospitality is to sit at our table.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link
              to="/menu"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-gold-deep px-7 py-3.5 text-sm hover:bg-gold transition-colors shadow-gold"
            >
              View the Menu
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm hover:bg-cream/10 transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
