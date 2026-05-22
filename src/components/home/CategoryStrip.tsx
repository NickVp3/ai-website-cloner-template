import Link from "next/link";
import { CATEGORIES } from "@/data/products";

export function CategoryStrip() {
  return (
    <div className="bg-[#fafafa] border-y border-[var(--gold)]/15">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categorias/${cat.slug}`}
              className="flex items-center gap-2 px-5 py-2.5 border border-[var(--gold)]/20 rounded text-[var(--text-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] hover:bg-[var(--gold)]/6 font-semibold text-sm tracking-wider uppercase whitespace-nowrap transition-all duration-200"
            >
              {cat.label}
            </Link>
          ))}
          <Link
            href="/cotizacion"
            className="flex items-center gap-2 px-5 py-2.5 border border-[var(--gold)]/20 rounded text-[var(--text-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] hover:bg-[var(--gold)]/6 font-semibold text-sm tracking-wider uppercase whitespace-nowrap transition-all duration-200"
          >
            Cotización
          </Link>
        </div>
      </div>
    </div>
  );
}
