import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import alFahidi from "@/assets/al-fahidi.jpg";
import feast from "@/assets/emirati-feast.jpg";
import hero from "@/assets/hero-courtyard.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Local House Restaurant, Al Fahidi Heritage Dining" },
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

function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative -mt-16 md:-mt-20 min-h-[70vh] flex items-end overflow-hidden">
        <img src={hero} alt="Inside Local House Restaurant" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative container-prose pb-16 md:pb-24 pt-32">
          <div className="max-w-2xl text-cream">
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Story</div>
            <h1 className="font-display text-4xl md:text-6xl text-cream leading-tight">
              Born of the Old City. Grown by Old Recipes.
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-prose grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="text-xs tracking-[0.3em] uppercase text-gold-deep mb-3">A Heritage Cuisine</div>
            <h2 className="font-display text-3xl md:text-5xl">The Roots of Emirati Cooking</h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Long before the city's skyline rose from the desert, the people of these shores
              cooked with what the land and sea quietly offered. Date palms, dried lime, fresh
              fish from the creek, slow-roasted camel from the inland routes — these were the
              ingredients of survival, and in time, the ingredients of celebration.
            </p>
            <p>
              Emirati cuisine is a layered story. It carries the spice trails of India, the
              perfumes of Persia, the smoke of Bedouin fires and the salt of the Arabian Gulf.
              Recipes were never written down; they passed from mother to daughter, host to
              guest, through tasting and tending. At Local House, we cook in that same lineage —
              not as a performance of tradition, but as an honest continuation of it.
            </p>
            <p>
              Our kitchen begins each day with whole spices crushed by hand: cardamom, black
              lime, cumin, cinnamon and clove, blended into the bezar that perfumes our
              machboos and saloona. Our rice is rinsed and rested. Our breads are baked on iron
              tava through the morning. Nothing is rushed, because nothing in true Emirati
              cooking ever was.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 md:py-28 bg-sand/40">
        <div className="container-prose grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-warm order-2 md:order-1">
            <img src={alFahidi} alt="Al Fahidi historical neighbourhood, Bur Dubai" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="order-1 md:order-2">
            <div className="text-xs tracking-[0.3em] uppercase text-gold-deep mb-3">The Neighbourhood</div>
            <h2 className="font-display text-3xl md:text-5xl">Set Inside Al Fahidi, Old Dubai</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                The Al Fahidi historical neighbourhood is one of the last surviving pieces of
                pre-oil Dubai. Coral-stone walls, sand-coloured courtyards and the iconic
                barjeel wind towers still stand as they did when this district was the trading
                heart of the city, where pearl merchants, sailors and travellers crossed paths
                along the creek.
              </p>
              <p>
                We chose to open our doors here for one reason: a heritage cuisine deserves a
                heritage home. The same walls that once sheltered Emirati families from the
                afternoon heat now hold our majlis, our brass dallah, and the steady aroma of
                cardamom-laced coffee. To eat with us is to eat where Dubai began.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality */}
      <section className="py-20 md:py-28">
        <div className="container-prose grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold-deep mb-3">Our Hospitality</div>
            <h2 className="font-display text-3xl md:text-5xl">Welcomed as a Guest, Never as a Customer</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                In Emirati culture, a guest is a blessing. Coffee is poured before questions are
                asked. Dates are offered before menus appear. The first cup is always for you;
                the second is shared in conversation. These are not rituals we perform — they
                are simply how we host.
              </p>
              <p>
                Our team are storytellers as much as servers. Ask about the dish in front of
                you and you'll hear where it travelled from, which family kept it alive, and how
                a grandmother in Ras Al Khaimah might have done it differently. We believe a
                meal tastes richer when you know its history.
              </p>
              <p>
                Whether you are visiting Dubai for the first time, or you grew up here and
                miss your mother's harees, our table is set for you. Stay as long as you like.
                That is the way it has always been done.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-warm">
            <img src={feast} alt="Traditional Emirati feast" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-charcoal text-cream">
        <div className="container-prose text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl text-cream">
            Come Taste the Story for Yourself
          </h2>
          <p className="mt-5 text-cream/75">
            The best way to understand Emirati hospitality is to sit at our table.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 justify-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-gold-deep px-7 py-3.5 text-sm hover:bg-gold transition-colors shadow-gold"
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
