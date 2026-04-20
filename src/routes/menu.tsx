import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { DishPlaceholder } from "@/components/site/DishPlaceholder";
import { fetchMenu, type MenuCategory } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Local House Restaurant, Al Fahidi Dubai" },
      {
        name: "description",
        content:
          "Explore our full menu of authentic Emirati dishes — camel burger, camel biryani, saloona, biryani, traditional breakfast and Arabic desserts in Bur Dubai.",
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

  const handleNav = (id: string) => {
    const el = sectionsRef.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
    }
  };

  const empty = categories !== null && categories.length === 0;
  const loading = categories === null;

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative bg-gradient-warm border-b border-border">
        <div className="container-prose py-20 md:py-28 text-center">
          <div className="text-xs tracking-[0.3em] uppercase text-gold-deep mb-4">Our Menu</div>
          <h1 className="font-display text-4xl md:text-6xl">A Taste of the Emirates</h1>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Heritage recipes prepared each morning from scratch — slow-cooked camel, fragrant
            biryanis, traditional breakfast and the sweet end of every Khaleeji table.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-prose">
          {loading && (
            <div className="text-center text-muted-foreground py-20">Loading our menu…</div>
          )}

          {empty && (
            <div className="text-center max-w-md mx-auto py-20">
              <h2 className="font-display text-2xl">Menu coming soon</h2>
              <p className="mt-3 text-muted-foreground">
                We are putting the final touches on our digital menu. Please call us for today's
                offerings.
              </p>
            </div>
          )}

          {categories && categories.length > 0 && (
            <div className="grid md:grid-cols-[220px_1fr] gap-10 lg:gap-16">
              {/* Category nav */}
              <aside className="md:sticky md:top-24 md:self-start">
                <div className="text-xs tracking-[0.3em] uppercase text-gold-deep mb-4 hidden md:block">
                  Categories
                </div>
                <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible -mx-5 md:mx-0 px-5 md:px-0 pb-2 md:pb-0">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleNav(c.id)}
                      className={`whitespace-nowrap text-left px-4 py-2.5 rounded-full md:rounded-md text-sm transition-colors border md:border-0 ${
                        activeId === c.id
                          ? "bg-charcoal text-cream md:bg-transparent md:text-gold-deep md:font-medium border-charcoal"
                          : "bg-card text-charcoal/70 border-border hover:text-gold-deep"
                      }`}
                    >
                      <span className="md:flex md:items-center md:gap-3">
                        <span
                          className={`hidden md:inline-block h-px transition-all ${
                            activeId === c.id ? "w-8 bg-gold-deep" : "w-4 bg-border"
                          }`}
                        />
                        {c.name}
                      </span>
                    </button>
                  ))}
                </nav>
              </aside>

              {/* Sections */}
              <div className="space-y-20">
                {categories.map((cat) => (
                  <section
                    key={cat.id}
                    ref={(el) => {
                      sectionsRef.current[cat.id] = el;
                    }}
                    className="scroll-mt-28"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <span className="gold-divider" />
                      <h2 className="font-display text-3xl md:text-4xl">{cat.name}</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                      {cat.items.map((item) => {
                        const hasDiscount =
                          item.discount_price != null && item.discount_price < item.price;
                        return (
                          <article
                            key={item.id}
                            className="group flex gap-4 md:gap-5 bg-card rounded-xl border border-border p-4 md:p-5 hover:shadow-warm hover:border-gold-deep/30 transition-all duration-300"
                          >
                            <div className="shrink-0 h-24 w-24 md:h-28 md:w-28 rounded-lg overflow-hidden">
                              {item.image_url ? (
                                <img
                                  src={item.image_url}
                                  alt={item.name}
                                  loading="lazy"
                                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              ) : (
                                <DishPlaceholder className="h-full w-full rounded-lg" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-3">
                                <h3 className="font-display text-lg md:text-xl leading-tight">
                                  {item.name}
                                </h3>
                                <div className="text-right shrink-0">
                                  {hasDiscount ? (
                                    <>
                                      <div className="text-gold-deep font-medium tabular-nums">
                                        AED {item.discount_price!.toFixed(0)}
                                      </div>
                                      <div className="text-xs text-muted-foreground line-through tabular-nums">
                                        AED {item.price.toFixed(0)}
                                      </div>
                                    </>
                                  ) : (
                                    <div className="text-gold-deep font-medium tabular-nums">
                                      AED {item.price.toFixed(0)}
                                    </div>
                                  )}
                                </div>
                              </div>
                              {item.description && (
                                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-3">
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
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
