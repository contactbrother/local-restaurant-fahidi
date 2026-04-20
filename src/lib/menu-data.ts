import { supabase } from "@/integrations/supabase/client";
import { RESTAURANT } from "./restaurant";

export type MenuItem = {
  id: string;
  category_id: string | null;
  name: string;
  description: string | null;
  price: number;
  discount_price: number | null;
  image_url: string | null;
  sort_order: number;
};

export type MenuCategory = {
  id: string;
  name: string;
  sort_order: number;
  items: MenuItem[];
};

export type MenuData = {
  restaurantId: string | null;
  categories: MenuCategory[];
};

export async function fetchMenu(): Promise<MenuData> {
  const { data: restaurant } = await supabase
    .from("restaurants")
    .select("id")
    .eq("slug", RESTAURANT.slug)
    .eq("is_active", true)
    .maybeSingle();

  if (!restaurant) return { restaurantId: null, categories: [] };

  const [{ data: cats }, { data: items }] = await Promise.all([
    supabase
      .from("categories")
      .select("id, name, sort_order")
      .eq("restaurant_id", restaurant.id)
      .eq("is_active", true)
      .order("sort_order", { ascending: true }),
    supabase
      .from("menu_items")
      .select("id, category_id, name, description, price, discount_price, image_url, sort_order")
      .eq("restaurant_id", restaurant.id)
      .eq("is_available", true)
      .order("sort_order", { ascending: true }),
  ]);

  const categories: MenuCategory[] = (cats ?? []).map((c) => ({
    id: c.id,
    name: c.name,
    sort_order: c.sort_order,
    items: (items ?? [])
      .filter((i) => i.category_id === c.id)
      .map((i) => ({
        ...i,
        price: Number(i.price),
        discount_price: i.discount_price != null ? Number(i.discount_price) : null,
      })),
  }));

  return { restaurantId: restaurant.id, categories };
}
