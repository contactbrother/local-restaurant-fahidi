import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, ChevronRight, MessageCircle, MapPin, Clock, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";

import { RESTAURANT } from "@/lib/restaurant";
import { fetchMenu, type MenuCategory } from "@/lib/menu-data";
import heroImg from "@/assets/hero-courtyard.jpg";
import feastImg from "@/assets/emirati-feast.jpg";
import alFahidiImg from "@/assets/al-fahidi.jpg";
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
          "Heritage Emirati restaurant in Al Fahidi, Bur Dubai. Camel burger, camel biryani, saloona, traditional Emirati breakfast and Arabic coffee. Reserve via WhatsApp.",
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
    description: "Slow-aged camel patty, smoky onion jam, sesame brioche bun.",
    img: camelBurger,
    tag: "Signature",
  },
  {
    name: "Camel Biryani",
    description: "Saffron basmati layered with cardamom and tender camel.",
    img: camelBiryani,
    tag: "Most Loved",
  },
  {
    name: "Saloona Camel",
    description: "Heritage stew of camel, root vegetables and warming Gulf spices.",
    img: saloona,
  },
  {
    name: "Emirati Breakfast",
    description: "Balaleet, chebab, khameer, dates and freshly poured Arabic coffee.",
    img: breakfast,
  },
  {
    name: "Luqaimat",
    description: "Golden dough drops drizzled with date syrup, sesame and rose.",
    img: dessert,
  },
];

const pillars = [
  {
    n: "01",
    title: "Heritage Recipes",
    body: "Cooked the way Emirati grandmothers intended — bezar ground at dawn, rice rested, breads baked on iron tava.",
  },
  {
    n: "02",
    title: "Inside Old Dubai",
    body: "A coral-stone home in the Al Fahidi historical district, steps from the creek and the wind towers.",
  },
  {
    n: "03",
    title: "True Khaleeji Hospitality",
    body: "Coffee before questions, dates before menus. You are welcomed as a guest, not a customer.",
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
      <section className="relative -mt-16 md:-mt-20 min-h-[94vh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Traditional Emirati majlis interior in Al Fahidi"
          className="absolute inset-0 h-full w-full object-cover ken-burns"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/80 to-transparent" />

        <div className="relative container-prose pb-20 md:pb-28 pt-32 md:pt-40">
          <div className="max-w-2xl text-cream fade-up-soft">
            <div className="flex items-center gap-3 text-gold mb-7">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] tracking-[0.36em] uppercase">
                Al Fahidi · Bur Dubai · Est. Heritage
              </span>
            </div>
            <h1 className="font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-cream">
              An Emirati Table,<br />
              <span className="italic text-gold/95 font-normal">tucked inside the old city.</span>
            </h1>
            <p className="mt-7 text-base md:text-lg leading-relaxed text-cream/85 max-w-xl">
              Slow-cooked camel, saffron biryani, hand-poured Arabic coffee — served the way
              they have been for generations, between the coral-stone walls of Old Dubai.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${RESTAURANT.whatsapp}?text=Hello%20Local%20House,%20I%20would%20like%20to%20reserve%20a%20table.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-gold-deep text-cream px-7 py-3.5 text-sm tracking-wide hover:bg-gold transition-colors shadow-gold"
              >
                <MessageCircle className="h-4 w-4" /> Reserve on WhatsApp
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full border border-cream/40 text-cream px-7 py-3.5 text-sm tracking-wide hover:bg-cream/10 transition-colors backdrop-blur-sm"
              >
                View the Menu <ChevronRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full text-cream/80 px-4 py-3.5 text-sm tracking-wide hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4" /> {RESTAURANT.phone}
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-cream/70 text-xs tracking-[0.18em] uppercase">
              <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-gold" /> Al Fahidi, Bur Dubai</span>
              <span className="hidden sm:block h-3 w-px bg-cream/20" />
              <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-gold" /> Open daily 8am – 11pm</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-cream border-b border-border/60">
        <div className="container-prose py-6 md:py-7 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          {[
            { k: "Heritage", v: "Old Dubai" },
            { k: "Cuisine", v: "Authentic Emirati" },
            { k: "Specialities", v: "Camel · Biryani · Saloona" },
            { k: "Service", v: "Daily 8am – 11pm" },
          ].map((s) => (
            <div key={s.k} className="px-2">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-deep">{s.k}</div>
              <div className="mt-1.5 font-display text-base md:text-lg text-charcoal">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="eyebrow">Signatures</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
                Five plates that tell the story of Emirati cooking.
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-gold-deep hover:text-charcoal transition-colors text-sm tracking-wide group"
            >
              See the full menu
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {signatureDishes.map((d, i) => (
              <article
                key={d.name}
                className={`group hover-lift bg-card rounded-2xl overflow-hidden border border-border/70 shadow-card ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/11]" : "aspect-[4/3]"}`}>
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                  />
                  {d.tag && (
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-cream/90 backdrop-blur px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-gold-deep border border-gold-deep/20">
                      <Star className="h-3 w-3 fill-gold-deep text-gold-deep" /> {d.tag}
                    </span>
                  )}
                </div>
                <div className="p-6 md:p-7">
                  <h3 className={`font-display ${i === 0 ? "text-3xl md:text-4xl" : "text-2xl"} leading-tight`}>
                    {d.name}
                  </h3>
                  <p className="mt-2.5 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE / STORY */}
      <section className="py-20 md:py-28 bg-sand/40 grain-overlay">
        <div className="container-prose grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img src={feastImg} alt="Traditional Emirati feast on brass tray" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="hidden md:block absolute -bottom-8 -right-6 w-48 bg-cream rounded-xl p-5 shadow-elevated border border-border">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-deep">Since opening</div>
              <div className="mt-1 font-display text-2xl text-charcoal">A guest of the house</div>
              <div className="mt-2 text-xs text-muted-foreground">Coffee before questions. Dates before menus.</div>
            </div>
          </div>
          <div className="md:col-span-6">
            <span className="eyebrow">The Experience</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
              A meal that remembers where it comes from.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-[15px] md:text-base">
              Coral-stone walls hold the warmth of the afternoon sun. Lanterns cast soft gold across
              hand-woven cushions. The scent of cardamom-spiced coffee greets you long before the
              menu does.
            </p>
            <ul className="mt-8 space-y-5">
              {pillars.map((p) => (
                <li key={p.n} className="flex gap-5">
                  <span className="font-display text-2xl text-gold-deep tabular-nums leading-none pt-1">{p.n}</span>
                  <div>
                    <div className="font-display text-lg text-charcoal">{p.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW (DYNAMIC) */}
      {preview.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="container-prose">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-xl">
                <span className="eyebrow">From the Menu</span>
                <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
                  A glimpse of what awaits you.
                </h2>
              </div>
              <Link
                to="/menu"
                className="inline-flex items-center gap-1.5 text-gold-deep hover:text-charcoal transition-colors text-sm tracking-wide group"
              >
                Explore the full menu
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
              {preview.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-card rounded-2xl border border-border/70 p-7 shadow-card hover-lift"
                >
                  <div className="flex items-baseline justify-between mb-6">
                    <h3 className="font-display text-2xl">{cat.name}</h3>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gold-deep">
                      {cat.items.length} dishes
                    </span>
                  </div>
                  <ul className="space-y-3.5">
                    {cat.items.slice(0, 4).map((item) => (
                      <li key={item.id} className="flex items-end gap-2 text-sm">
                        <span className="text-charcoal truncate">{item.name}</span>
                        <span className="price-dots" />
                        <span className="text-gold-deep tabular-nums whitespace-nowrap font-medium">
                          {(item.discount_price ?? item.price).toFixed(0)} <span className="text-[10px] text-muted-foreground tracking-wider">AED</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/menu"
                    className="mt-6 inline-flex items-center gap-1 text-xs tracking-[0.2em] uppercase text-gold-deep hover:text-charcoal transition-colors"
                  >
                    See all <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LOCATION TEASER */}
      <section className="py-20 md:py-28 bg-sand/40">
        <div className="container-prose grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="eyebrow">The Neighbourhood</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
              Set inside Al Fahidi —<br />where Dubai began.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Coral-stone walls, sand-coloured courtyards and the iconic barjeel wind towers.
              A short walk from the creek, the abra station and the Dubai Museum.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-6 py-3 text-sm hover:bg-gold-deep transition-colors"
              >
                <MapPin className="h-4 w-4" /> Visit & Directions
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal/25 text-charcoal px-6 py-3 text-sm hover:bg-cream transition-colors"
              >
                Read Our Story
              </Link>
            </div>
          </div>
          <div className="relative aspect-[5/4] rounded-2xl overflow-hidden shadow-elevated">
            <img src={alFahidiImg} alt="Al Fahidi historical neighbourhood, Bur Dubai" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-cream">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Old Dubai</div>
              <div className="mt-1 font-display text-2xl">Al Fahidi Historical District</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImg} alt="" className="h-full w-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative container-prose text-center max-w-3xl mx-auto">
          <span className="eyebrow !text-gold">Visit Us Today</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-cream leading-tight">
            Come sit with us in the old city.
          </h2>
          <p className="mt-5 text-cream/75 leading-relaxed max-w-xl mx-auto">
            Open daily from morning coffee to late dinner. Walk in, or reserve a quiet corner
            of the majlis for your family and friends.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a
              href={`https://wa.me/${RESTAURANT.whatsapp}?text=Hello%20Local%20House,%20I%20would%20like%20to%20reserve%20a%20table.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-gold-deep px-7 py-3.5 text-sm hover:bg-gold transition-colors shadow-gold"
            >
              <MessageCircle className="h-4 w-4" /> Reserve on WhatsApp
            </a>
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm hover:bg-cream/10 transition-colors"
            >
              <Phone className="h-4 w-4" /> {RESTAURANT.phone}
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
