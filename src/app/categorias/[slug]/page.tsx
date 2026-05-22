import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductsByCategory, getCategoryMeta } from "@/lib/catalog";
import { CATEGORIES } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import type { Category } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const meta = getCategoryMeta(slug as Category);
  if (!meta) return { title: "Categoría | IDAGIZI" };
  return { title: `${meta.label} | IDAGIZI`, description: meta.description };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const meta = getCategoryMeta(slug as Category);
  if (!meta) notFound();

  const products = await getProductsByCategory(slug as Category);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8">
        <Link href="/" className="hover:text-[var(--gold)] transition-colors">Inicio</Link>
        <span>/</span>
        <span className="text-[var(--text)]">{meta.label}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <p className="section-tag">{meta.label}</p>
        <h1 className="font-heading text-[clamp(36px,6vw,72px)] leading-none tracking-wide text-[var(--text)] mb-3">
          {meta.label}
        </h1>
        <p className="text-sm text-[var(--text-muted)] max-w-lg">{meta.description}</p>
      </div>

      {/* Category pills */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide mb-10">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categorias/${cat.slug}`}
            className={`px-5 py-2 border rounded text-sm font-semibold tracking-widest uppercase whitespace-nowrap transition-all duration-200 ${
              cat.slug === slug
                ? "border-[var(--gold)] text-[var(--gold)] bg-[var(--gold)]/8"
                : "border-[var(--gold)]/15 text-[var(--text-muted)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
            }`}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {/* Count */}
      <p className="text-xs text-[var(--text-muted)] tracking-widest uppercase mb-6">
        {products.length} producto{products.length !== 1 ? "s" : ""}
      </p>

      <ProductGrid products={products} columns={4} />
    </div>
  );
}
