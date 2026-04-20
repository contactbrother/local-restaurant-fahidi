import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, ChevronRight, Sparkles, Landmark, Heart, Award } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";

import { RESTAURANT } from "@/lib/restaurant";
import { fetchMenu, type MenuCategory } from "@/lib/menu-data";
import heroImg from "@/assets/hero-courtyard.jpg";
import feastImg from "@/assets/emirati-feast.jpg";
import camelBurger from "@/assets/dish-camel-burger.jpg";
import camelBiryani from "@/assets/dish-camel-biryani.jpg";
import saloona from "@/assets/dish-saloona.jpg";
import breakfast from "@/assets/dish-breakfast.jpg";
import dessert from "@/assets/dish-dessert.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Local House Restaurant — Authentic Emirati Dining in Al Fahidi, Old Dubai" },
      {
        name: "description",
        content:
          "Heritage Emirati restaurant in Al Fahidi, Bur Dubai. Camel burger, camel biryani, saloona, traditional Emirati breakfast and Arabic coffee.",
      },
      { property: "og:title", content: "Local House Restaurant — Heritage Emirati Dining" },
      {
        property: "og:description",
        content: "Authentic Emirati cuisine in the historical heart of Old Dubai.",
      },
    ],
  }),
  component: HomePage,
});

const signatureDishes = [
  {
    name: "Camel Burger",
    description: "Slow-aged camel patty, smoky onion jam, on a sesame brioche bun.",
    img: camelBurger,
  },
  {
    name: "Camel Biryani",
    description: "Fragrant basmati layered with saffron, cardamom and tender camel.",
    img: camelBiryani,
  },
  {
    name: "Saloona Camel",
    description: "A heritage stew of camel, root vegetables and warming Gulf spices.",
    img: saloona,
  },
  {
    name: "Emirati Breakfast",
    description: "Balaleet, chebab, khameer, dates, cheese and freshly poured Arabic coffee.",
    img: breakfast,
  },
  {
    name: "Traditional Desserts",
    description: "Golden luqaimat drizzled with date syrup, sesame and rose.",
    img: dessert,
  },
];

const reasons = [
  {
    icon: Sparkles,
    title: "Authentic Emirati Cuisine",
    body: "Recipes passed down through generations of Emirati families, prepared the way they were meant to be tasted.",
  },
  {
    icon: Landmark,
    title: "Heritage Location",
    body: "Set inside the sand-coloured walls of the Al Fahidi historical neighbourhood, the soul of Old Dubai.",
  },
  {
    icon: Award,
    title: "Unique Heritage Dishes",
    body: "From camel burger to saloona, we serve specialities you will rarely find anywhere else in the city.",
  },
  {
    icon: Heart,
    title: "Cultural Experience",
    body: "More than a meal — a window into Emirati hospitality, conversation and the rhythm of a true majlis.",
  },
];

function HomePage() {
  const [preview, setPreview] = useState<MenuCategory[]>([]);

  useEffect(() => {
    fetchMenu()
      .then((d) => setPreview(d.categories.filter((c) => c.items.length).slice(0, 3)))
      .catch(() => setPreview([]));
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-16 md:-mt-20 min-h-[92vh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Traditional Emirati majlis interior in Al Fahidi"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative container-prose pb-16 md:pb-28 pt-32 md:pt-40">
          <div className="max-w-2xl text-cream fade-up">
            <div className="flex items-center gap-3 text-gold mb-6">
              <span className="gold-divider !bg-gold" />
              <span className="text-xs tracking-[0.3em] uppercase">Al Fahidi · Bur Dubai</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-cream">
              A Heritage Table in the Heart of Old Dubai
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-cream/85 max-w-xl">
              Tucked between the wind towers and coral-stone alleys of Al Fahidi, Local House
              welcomes you to the table of an Emirati home. Slow-cooked classics, golden
              cardamom-laced rice, and the unhurried generosity of true Khaleeji hospitality —
              served the way our grandmothers intended.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold-deep text-cream px-7 py-3.5 text-sm tracking-wide hover:bg-gold transition-colors shadow-gold"
              >
                <Phone className="h-4 w-4" /> Call to Reserve
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full border border-cream/40 text-cream px-7 py-3.5 text-sm tracking-wide hover:bg-cream/10 transition-colors"
              >
                View the Menu <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs tracking-[0.3em] uppercase text-gold-deep mb-3">Signatures</div>
            <h2 className="font-display text-3xl md:text-5xl">The Dishes We Are Known For</h2>
            <p className="mt-4 text-muted-foreground">
              Five plates that tell the story of Emirati cooking — from the desert kitchens of
              the interior to the trading homes of the Bur Dubai creek.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {signatureDishes.map((d, i) => (
              <article
                key={d.name}
                className={`group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 border border-border ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className={`overflow-hidden ${i === 0 ? "aspect-[16/11]" : "aspect-[4/3]"}`}>
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <h3 className={`font-display ${i === 0 ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                    {d.name}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE / STORY */}
      <section className="py-20 md:py-28 bg-sand/40">
        <div className="container-prose grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-[4/5] rounded-xl overflow-hidden shadow-warm">
            <img src={feastImg} alt="Traditional Emirati feast on brass tray" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold-deep mb-3">The Experience</div>
            <h2 className="font-display text-3xl md:text-5xl">A Meal That Remembers Where It Comes From</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Step inside Local House and the city falls quiet. Coral-stone walls hold the warmth
                of the afternoon sun, lanterns cast soft gold across hand-woven cushions, and the
                scent of cardamom-spiced coffee greets you long before the menu does.
              </p>
              <p>
                Every dish is a small act of remembrance — harees stirred patiently for hours,
                machboos perfumed with bezar and dried lime, luqaimat dropped into hot oil and
                bathed in date syrup. We cook the way Emirati families have cooked for centuries,
                because some flavours deserve to be protected.
              </p>
              <p>
                Whether you arrive for a leisurely breakfast of balaleet and chebab, or settle in
                for a long evening of camel biryani and Arabic coffee, you are welcomed not as a
                customer but as a guest of the house.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs tracking-[0.3em] uppercase text-gold-deep mb-3">Why Local House</div>
            <h2 className="font-display text-3xl md:text-5xl">Four Reasons to Sit at Our Table</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="group bg-card border border-border rounded-xl p-7 hover:border-gold-deep/40 hover:shadow-warm transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center text-cream shadow-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl mt-5">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MENU PREVIEW (DYNAMIC) */}
      {preview.length > 0 && (
        <section className="py-20 md:py-28 bg-sand/40">
          <div className="container-prose">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <div className="text-xs tracking-[0.3em] uppercase text-gold-deep mb-3">From the Menu</div>
                <h2 className="font-display text-3xl md:text-5xl max-w-xl">A Glimpse of What Awaits You</h2>
              </div>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 text-gold-deep hover:text-charcoal transition-colors text-sm tracking-wide"
              >
                Explore the full menu <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {preview.map((cat) => (
                <div key={cat.id} className="bg-card rounded-xl border border-border p-6 shadow-soft">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="gold-divider" />
                    <h3 className="font-display text-2xl">{cat.name}</h3>
                  </div>
                  <ul className="space-y-4">
                    {cat.items.slice(0, 4).map((item) => (
                      <li key={item.id} className="flex justify-between gap-4 text-sm">
                        <span className="text-charcoal">{item.name}</span>
                        <span className="text-gold-deep tabular-nums whitespace-nowrap">
                          AED {(item.discount_price ?? item.price).toFixed(0)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-charcoal text-cream">
        <div className="container-prose text-center max-w-3xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Visit Us Today</div>
          <h2 className="font-display text-3xl md:text-5xl text-cream">
            Come Sit With Us in the Old City
          </h2>
          <p className="mt-5 text-cream/75 leading-relaxed">
            Open daily from morning coffee to late dinner. Walk in, or call ahead to reserve a
            quiet corner of the majlis for your family and friends.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold-deep px-7 py-3.5 text-sm hover:bg-gold transition-colors shadow-gold"
            >
              <Phone className="h-4 w-4" /> {RESTAURANT.phone}
            </a>
            <a
              href={`https://wa.me/${RESTAURANT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm hover:bg-cream/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
