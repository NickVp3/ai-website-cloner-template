import Link from "next/link";
import { getFeaturedProducts } from "@/lib/catalog";
import { ProductGrid } from "@/components/product/ProductGrid";

export async function FeaturedSection() {
  const products = await getFeaturedProducts();

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="flex items-end justify-between mb-10 gap-4">
        <div>
          <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--gold)] mb-2">
            <span className="w-6 h-px bg-[var(--gold)]" />
            SelecciÃ³n especial
          </p>
          <h2 className="font-heading text-[clamp(28px,4vw,48px)] tracking-wider text-[var(--text)] leading-none">
            Productos Destacados
          </h2>
        </div>
        <Link href="/categorias/celulares" className="see-all-link shrink-0">
          Ver todo
        </Link>
      </div>

      <ProductGrid products={products} columns={4} />
    </section>
  );
}
