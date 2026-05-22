import { promises as fs } from "fs";
import path from "path";
import { PRODUCTS } from "@/data/products";
import type { Category, CategoryMeta, Product } from "@/types";
import { CATEGORIES } from "@/data/products";

export interface AdminCatalog {
  products: Product[];
  overrides: Record<string, Product>;
  deletedIds: string[];
}

const CATALOG_PATH = path.join(process.cwd(), "src", "data", "admin-products.json");

const EMPTY_CATALOG: AdminCatalog = {
  products: [],
  overrides: {},
  deletedIds: [],
};

export async function readAdminCatalog(): Promise<AdminCatalog> {
  try {
    const raw = await fs.readFile(CATALOG_PATH, "utf8");
    const parsed = JSON.parse(raw) as Partial<AdminCatalog>;

    return {
      products: Array.isArray(parsed.products) ? parsed.products : [],
      overrides: parsed.overrides && typeof parsed.overrides === "object" ? parsed.overrides : {},
      deletedIds: Array.isArray(parsed.deletedIds) ? parsed.deletedIds : [],
    };
  } catch {
    return EMPTY_CATALOG;
  }
}

export async function writeAdminCatalog(catalog: AdminCatalog): Promise<void> {
  await fs.writeFile(CATALOG_PATH, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
}

export async function getAllProducts(): Promise<Product[]> {
  const catalog = await readAdminCatalog();
  const deleted = new Set(catalog.deletedIds);
  const baseProducts = PRODUCTS
    .filter((product) => !deleted.has(product.id))
    .map((product) => catalog.overrides[product.id] ?? product);

  return [...baseProducts, ...catalog.products];
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getAllProducts();
  return products.find((product) => product.slug === slug);
}

export async function getProductsByCategory(category: Category): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter((product) => product.category === category);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter((product) => product.featured);
}

export function getAverageRating(product: Product): number {
  if (product.ratings.length === 0) return 0;
  const sum = product.ratings.reduce((acc, rating) => acc + rating.score, 0);
  return Math.round((sum / product.ratings.length) * 10) / 10;
}

export function getCategoryMeta(slug: Category): CategoryMeta | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}
