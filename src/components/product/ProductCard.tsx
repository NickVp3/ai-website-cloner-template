"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import type { Product } from "@/types";
import { getAverageRating } from "@/data/products";
import { ProductBadge } from "@/components/shared/ProductBadge";
import { StarRatingDisplay } from "@/components/shared/StarRating";
import { formatCOP } from "@/lib/format";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const avg = getAverageRating(product);
  const count = product.ratings.length;
  const image = product.images[0];
  const fallbackMark = product.brand.slice(0, 3).toUpperCase();

  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group block bg-white border border-[var(--gold)]/15 rounded-xl overflow-hidden hover:border-[var(--gold)]/45 hover:-translate-y-1 transition-all duration-200 shadow-sm"
    >
      {/* Image area */}
      <div className="relative aspect-square bg-[#f7f7f7] flex items-center justify-center border-b border-[var(--gold)]/10">
        <ProductBadge badge={product.badge} />
        <button
          className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/85 border border-[var(--gold)]/20 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all"
          onClick={(e) => e.preventDefault()}
          aria-label="Favorito"
        >
          <Heart size={14} />
        </button>
        {image ? (
          <Image
            src={image}
            alt={product.name}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-contain p-7 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span
            className="text-6xl select-none pointer-events-none group-hover:scale-110 transition-transform duration-300"
            role="img"
            aria-label={product.name}
          >
            {fallbackMark}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[var(--gold-dim)] mb-1">
          {product.brand}
        </p>
        <p className="text-sm font-medium text-[var(--text)] leading-snug mb-2 line-clamp-2">
          {product.name}
        </p>

        {/* Rating */}
        <div className="mb-3">
          {count > 0 ? (
            <StarRatingDisplay score={avg} count={count} />
          ) : (
            <span className="text-xs text-[var(--text-muted)]/50">Sin calificaciones aún</span>
          )}
        </div>

        {/* Price + Add */}
        <div className="flex items-end justify-between">
          <div>
            {product.originalPrice && (
              <span className="block text-[11px] text-[var(--text-muted)] line-through leading-none mb-0.5">
                {formatCOP(product.originalPrice)}
              </span>
            )}
            <span className="font-heading text-xl tracking-wide text-[var(--gold)]">
              {formatCOP(product.price)}
            </span>
          </div>
          <button
            className="w-8 h-8 rounded-md bg-[var(--gold)]/12 border border-[var(--gold)]/25 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[#111111] flex items-center justify-center text-lg font-bold transition-all"
            onClick={(e) => e.preventDefault()}
            aria-label="Agregar al carrito"
          >
            +
          </button>
        </div>
      </div>
    </Link>
  );
}
