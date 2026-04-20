import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { DishPlaceholder } from "@/components/site/DishPlaceholder";
import { fetchMenu, type MenuCategory } from "@/lib/menu-data";
import { RESTAURANT } from "@/lib/restaurant";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Local House Restaurant, Al Fahidi Dubai" },
      {
        name: "description",
        content:
          "Explore our full menu of authentic Emirati dishes — camel burger, camel biryani, saloona, traditional breakfast and Arabic desserts in Bur Dubai.",
      },
      { property: "og:title", content: "Menu — Local House Restaurant" },
      {
        property: "og:description",
        content: "Heritage Emirati menu featuring camel specialities and traditional Khaleeji dishes.",
      },
    ],
  }),
  component: MenuPage,
});

const SIGNATURE_KEYWORDS = ["camel burger", "camel biryani", "saloona"];
const POPULAR_KEYWORDS = ["machboos", "harees", "luqaimat", "balaleet", "chebab", "karak"];

function getBadge(name: string): { label: string; tone: "gold" | "sand" } | null {
  const n = name.toLowerCase();
  if (SIGNATURE_KEYWORDS.some((k) => n.includes(k))) return { label: "Signature", tone: "gold" };
  if (POPULAR_KEYWORDS.some((k) => n.includes(k))) return { label: "Popular", tone: "sand" };
  return null;
}

function MenuPage() {
  const [categories, setCategories] = useState<MenuCategory[] | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    fetchMenu()
      .then((d) => {
        const nonEmpty = d.categories.filter((c) => c.items.length > 0);
        setCategories(nonEmpty);
        if (nonEmpty[0]) setActiveId(nonEmpty[0].id);
      })
      .catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    if (!categories || categories.length === 0) return;
    const onScroll = () => {
      const y = window.scrollY + 160;
      let current = categories[0].id;
      for (const c of categories) {
        const el = sectionsRef.current[c.id];
        if (el && el.offsetTop <= y) current = c.id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [categories]);

  const handleNav = (id: string) => {
    const el = sectionsRef.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
    }
  };

  const totalDishes = useMemo(
    () => (categories ?? []).reduce((sum, c) => sum + c.items.length, 0),
    [categories],
  );

  const empty = categories !== null && categories.length === 0;
  const loading = categories === null;

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative bg-gradient-warm border-b border-border grain-overlay">
        <div className="container-prose py-20 md:py-28 text-center">
          <span className="eyebrow justify-center">Our Menu</span>
          <h1 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">
            A taste of the Emirates,<br />
            <span className="italic text-gold-deep font-normal">served the old way.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Heritage recipes prepared each morning from scratch — slow-cooked camel, fragrant
            biryanis, traditional breakfast and the sweet end of every Khaleeji table.
          </p>
          {!loading && !empty && (
            <div className="mt-7 inline-flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-charcoal/60">
              <span className="h-px w-8 bg-gold-deep/60" />
              {categories!.length} categories · {totalDishes} dishes
              <span className="h-px w-8 bg-gold-deep/60" />
            </div>
          )}
        </div>
      </section>

      {/* Sticky category bar (mobile + desktop top) */}
      {categories && categories.length > 0 && (
        <div className="sticky top-16 md:top-20 z-30 bg-cream/85 backdrop-blur-xl border-b border-border/70">
          <div className="container-prose">
            <nav className="flex gap-2 overflow-x-auto py-3 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-none">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleNav(c.id)}
                  className={`whitespace-nowrap text-sm px-4 py-2 rounded-full border transition-all ${
                    activeId === c.id
                      ? "bg-charcoal text-cream border-charcoal shadow-soft"
                      : "bg-cream text-charcoal/75 border-border hover:border-gold-deep/50 hover:text-gold-deep"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      <section className="py-12 md:py-20">
        <div className="container-prose">
          {loading && (
            <div className="text-center text-muted-foreground py-20 fade-in">
              <div className="inline-block h-8 w-8 rounded-full border-2 border-gold-deep/30 border-t-gold-deep animate-spin" />
              <div className="mt-4 text-sm tracking-wide">Preparing the menu…</div>
            </div>
          )}

          {empty && (
            <div className="text-center max-w-md mx-auto py-20">
              <h2 className="font-display text-2xl">Menu coming soon</h2>
              <p className="mt-3 text-muted-foreground">
                We are putting the final touches on our digital menu. Please call us for today's
                offerings.
              </p>
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-6 py-3 text-sm"
              >
                <Phone className="h-4 w-4" /> {RESTAURANT.phone}
              </a>
            </div>
          )}

          {categories && categories.length > 0 && (
            <div className="space-y-24">
              {categories.map((cat) => (
                <section
                  key={cat.id}
                  ref={(el) => {
                    sectionsRef.current[cat.id] = el;
                  }}
                  className="scroll-mt-36"
                >
                  <div className="text-center mb-12 max-w-2xl mx-auto">
                    <span className="eyebrow justify-center">Category</span>
                    <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">
                      {cat.name}
                    </h2>
                    <div className="mt-4 flex items-center justify-center gap-3 text-gold-deep/60">
                      <span className="h-px w-10 bg-current" />
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      <span className="h-px w-10 bg-current" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                    {cat.items.map((item) => {
                      const hasDiscount =
                        item.discount_price != null && item.discount_price < item.price;
                      const badge = getBadge(item.name);
                      return (
                        <article
                          key={item.id}
                          className="group relative flex gap-4 md:gap-5 bg-card rounded-2xl border border-border/70 p-4 md:p-5 shadow-card hover-lift"
                        >
                          <div className="relative shrink-0 h-28 w-28 md:h-32 md:w-32 rounded-xl overflow-hidden">
                            {item.image_url ? (
                              <img
                                src={item.image_url}
                                alt={item.name}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                            ) : (
                              <DishPlaceholder className="h-full w-full rounded-xl" />
                            )}
                            {hasDiscount && (
                              <span className="absolute top-2 left-2 rounded-full bg-gold-deep text-cream px-2 py-0.5 text-[9px] tracking-[0.18em] uppercase">
                                Offer
                              </span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0 flex flex-col">
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                {badge && (
                                  <span
                                    className={`inline-flex items-center gap-1 mb-1.5 rounded-full px-2 py-0.5 text-[9px] tracking-[0.2em] uppercase border ${
                                      badge.tone === "gold"
                                        ? "bg-gold-deep/10 text-gold-deep border-gold-deep/30"
                                        : "bg-sand text-charcoal/70 border-border"
                                    }`}
                                  >
                                    {badge.tone === "gold" && <Sparkles className="h-2.5 w-2.5" />}
                                    {badge.label}
                                  </span>
                                )}
                                <h3 className="font-display text-lg md:text-xl leading-tight text-charcoal">
                                  {item.name}
                                </h3>
                              </div>
                              <div className="text-right shrink-0">
                                {hasDiscount ? (
                                  <>
                                    <div className="text-gold-deep font-medium tabular-nums text-base">
                                      {item.discount_price!.toFixed(0)}
                                      <span className="text-[10px] text-muted-foreground tracking-wider ml-1">AED</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground line-through tabular-nums">
                                      {item.price.toFixed(0)}
                                    </div>
                                  </>
                                ) : (
                                  <div className="text-gold-deep font-medium tabular-nums text-base">
                                    {item.price.toFixed(0)}
                                    <span className="text-[10px] text-muted-foreground tracking-wider ml-1">AED</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            {item.description && (
                              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Reserve callout */}
      {categories && categories.length > 0 && (
        <section className="py-16 md:py-20 bg-charcoal text-cream">
          <div className="container-prose flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="text-[10px] tracking-[0.32em] uppercase text-gold mb-2">Ready to dine?</div>
              <h3 className="font-display text-2xl md:text-3xl text-cream">Reserve your majlis seat tonight.</h3>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://wa.me/${RESTAURANT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-gold-deep px-6 py-3 text-sm hover:bg-gold transition-colors shadow-gold"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm hover:bg-cream/10 transition-colors"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
