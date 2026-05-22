import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryStrip } from "@/components/home/CategoryStrip";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { PromoBanners } from "@/components/home/PromoBanners";
import { TrustFeatures, BrandsStrip } from "@/components/home/TrustFeatures";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Logos3 } from "@/components/ui/logos3";
import { getProductsByCategory } from "@/lib/catalog";
import { CATEGORIES } from "@/data/products";

export default async function Home() {
  const categorySections = await Promise.all(
    CATEGORIES.map(async (cat) => ({
      cat,
      products: (await getProductsByCategory(cat.slug)).slice(0, 4),
    })),
  );

  return (
    <>
      <HeroSection />
      <CategoryStrip />
      <Logos3 heading="Tecnologia seleccionada" />
      <FeaturedSection />
      <PromoBanners />
      {categorySections.map(({ cat, products }) => (
        <section key={cat.slug} id={cat.slug} className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="section-tag">{cat.label}</p>
              <h2 className="font-heading text-[clamp(26px,3.5vw,44px)] tracking-wider text-[var(--text)] leading-none">
                {cat.label}
              </h2>
            </div>
            <Link href={`/categorias/${cat.slug}`} className="see-all-link shrink-0">
              Ver todo
            </Link>
          </div>
          <ProductGrid products={products} columns={4} />
        </section>
      ))}
      <BrandsStrip />
      <TrustFeatures />
      <NewsletterSection />
    </>
  );
}
