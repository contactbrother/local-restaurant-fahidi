import { UtensilsCrossed } from "lucide-react";

export function DishPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-warm text-gold-deep/60 ${className}`}
    >
      <UtensilsCrossed className="h-10 w-10" />
    </div>
  );
}
