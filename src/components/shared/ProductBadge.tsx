import { cn } from "@/lib/utils";
import type { Product } from "@/types";

const BADGE_STYLES: Record<NonNullable<Product["badge"]>, string> = {
  nuevo: "bg-[var(--gold)] text-[#111111]",
  oferta: "bg-red-600 text-white",
  hot: "bg-orange-500 text-white",
  agotado: "bg-[var(--dark-5)] text-[var(--text-muted)]",
};

const BADGE_LABELS: Record<NonNullable<Product["badge"]>, string> = {
  nuevo: "Nuevo",
  oferta: "Oferta",
  hot: "Alta demanda",
  agotado: "Agotado",
};

interface ProductBadgeProps {
  badge: Product["badge"];
  className?: string;
}

export function ProductBadge({ badge, className }: ProductBadgeProps) {
  if (!badge) return null;
  return (
    <span
      className={cn(
        "absolute top-3 left-3 z-10 text-[10px] font-black tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm",
        BADGE_STYLES[badge],
        className
      )}
    >
      {BADGE_LABELS[badge]}
    </span>
  );
}
