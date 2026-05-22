import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, MessageSquare } from "lucide-react";
import { getProductBySlug, getProductsByCategory, getAverageRating } from "@/lib/catalog";
import { StarRatingDisplay } from "@/components/shared/StarRating";
import { ProductBadge } from "@/components/shared/ProductBadge";
import { ProductGrid } from "@/components/product/ProductGrid";
import { RatingSection } from "@/components/product/RatingSection";
import { formatCOP } from "@/lib/format";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado | IDAGIZI" };
  return {
    title: `${product.name} | IDAGIZI`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const avg = getAverageRating(product);
  const fallbackMark = product.brand.slice(0, 3).toUpperCase();
  const related = (await getProductsByCategory(product.category))
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8 flex-wrap">
        <Link href="/" className="hover:text-[var(--gold)] transition-colors">Inicio</Link>
        <span>/</span>
        <Link href={`/categorias/${product.category}`} className="hover:text-[var(--gold)] transition-colors capitalize">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-[var(--text)] line-clamp-1">{product.name}</span>
      </nav>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Image panel */}
        <div className="relative bg-[#f7f7f7] border border-[var(--gold)]/15 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
          <ProductBadge badge={product.badge} />
          {product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain p-10"
              priority
            />
          ) : (
            <span className="text-[140px] select-none leading-none" role="img" aria-label={product.name}>
              {fallbackMark}
            </span>
          )}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.04),transparent_70%)] pointer-events-none" />
        </div>

        {/* Info panel */}
        <div className="flex flex-col">
          {/* Brand + category */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-black tracking-[0.2em] uppercase text-[var(--gold)]">{product.brand}</span>
            <span className="text-[var(--text-muted)]/30">Â·</span>
            <Link
              href={`/categorias/${product.category}`}
              className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors capitalize"
            >
              {product.category}
            </Link>
          </div>

          <h1 className="font-heading text-[clamp(28px,4vw,48px)] leading-none tracking-wide text-[var(--text)] mb-4">
            {product.name}
          </h1>

          {/* Rating summary */}
          <div className="flex items-center gap-3 mb-4">
            <StarRatingDisplay score={avg} count={product.ratings.length} size="md" />
            <a href="#resenas" className="text-xs text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors flex items-center gap-1">
              <MessageSquare size={12} />
              {product.ratings.length > 0
                ? `Ver ${product.ratings.length} reseÃ±a${product.ratings.length !== 1 ? "s" : ""}`
                : "Se el primero en resenar"}
            </a>
          </div>

          {/* Short desc */}
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 border-l-2 border-[var(--gold)]/30 pl-4">
            {product.shortDescription}
          </p>

          {/* Price */}
          <div className="flex items-end gap-4 mb-6">
            {product.originalPrice && (
              <span className="text-[var(--text-muted)] line-through text-lg">
                {formatCOP(product.originalPrice)}
              </span>
            )}
            <span className="font-heading text-5xl text-[var(--gold)] tracking-wide leading-none">
              {formatCOP(product.price)}
            </span>
          </div>

          {/* Stock */}
          <p className={`text-xs font-semibold tracking-widest uppercase mb-6 ${product.stock > 0 ? "text-emerald-600" : "text-red-600"}`}>
            {product.stock > 0 ? ` En stock (${product.stock} disponibles)` : " Agotado"}
          </p>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap mb-8">
            <button className="btn-primary flex items-center gap-2 flex-1 justify-center">
              <ShoppingCart size={16} />
              Agregar al carrito
            </button>
            <Link href="/cotizacion" className="btn-outline flex items-center gap-2 flex-1 justify-center">
              Cotizar
            </Link>
          </div>

          {/* Quick specs */}
          <div className="bg-white border border-[var(--gold)]/15 rounded-xl p-5 shadow-sm">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-[var(--gold)] mb-4">
              Especificaciones principales
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {Object.entries(product.specs).slice(0, 6).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <dt className="text-[10px] font-semibold tracking-wider uppercase text-[var(--text-muted)]">{key}</dt>
                  <dd className="text-sm text-[var(--text)] font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Full description + all specs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2">
          <h2 className="font-heading text-3xl tracking-wide text-[var(--text)] mb-4">DescripciÃ³n</h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">{product.description}</p>
        </div>

        <div>
          <h2 className="font-heading text-3xl tracking-wide text-[var(--text)] mb-4">Especificaciones</h2>
          <dl className="flex flex-col gap-3">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex flex-col border-b border-[var(--gold)]/8 pb-3 last:border-0 last:pb-0">
                <dt className="text-[10px] font-black tracking-[0.15em] uppercase text-[var(--text-muted)]">{key}</dt>
                <dd className="text-sm text-[var(--text)]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Ratings & reviews */}
      <div id="resenas">
        <RatingSection ratings={product.ratings} avgScore={avg} />
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-heading text-3xl tracking-wide text-[var(--text)] mb-8">
            Productos relacionados
          </h2>
          <ProductGrid products={related} columns={4} />
        </section>
      )}
    </div>
  );
}
