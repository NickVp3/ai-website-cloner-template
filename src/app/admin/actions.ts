"use server";

import { promises as fs } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";
import { PRODUCTS } from "@/data/products";
import { readAdminCatalog, writeAdminCatalog } from "@/lib/catalog";
import type { Category, Product } from "@/types";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
const VALID_CATEGORIES: Category[] = ["celulares", "tecnologia", "gaming", "accesorios"];

function value(formData: FormData, key: string): string {
  const entry = formData.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

function toCategory(input: string): Category {
  return VALID_CATEGORIES.includes(input as Category) ? (input as Category) : "tecnologia";
}

function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

async function saveImage(formData: FormData, fallback?: string): Promise<string[]> {
  const file = formData.get("image");

  if (!(file instanceof File) || file.size === 0) {
    return fallback ? [fallback] : [];
  }

  const extension = path.extname(file.name) || ".png";
  const filename = `${Date.now()}-${slugify(file.name.replace(extension, ""))}${extension}`;
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  await fs.writeFile(path.join(UPLOAD_DIR, filename), Buffer.from(await file.arrayBuffer()));

  return [`/uploads/${filename}`];
}

function revalidateStorefront(): void {
  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/cotizacion");
  for (const category of VALID_CATEGORIES) {
    revalidatePath(`/categorias/${category}`);
  }
}

export async function createProduct(formData: FormData): Promise<void> {
  const name = value(formData, "name");
  if (!name) return;

  const catalog = await readAdminCatalog();
  const id = `admin-${Date.now()}`;
  const slug = `${slugify(name)}-${Date.now().toString(36)}`;
  const price = Number(value(formData, "price")) || 0;
  const category = toCategory(value(formData, "category"));
  const brand = value(formData, "brand") || "IDAGIZI";
  const description = value(formData, "description") || `${name} disponible en IDAGIZI.`;

  const product: Product = {
    id,
    slug,
    name,
    shortDescription: value(formData, "shortDescription") || description,
    description,
    price,
    images: await saveImage(formData),
    category,
    brand,
    stock: Number(value(formData, "stock")) || 1,
    specs: {},
    ratings: [],
    featured: value(formData, "featured") === "on",
  };

  await writeAdminCatalog({
    ...catalog,
    products: [product, ...catalog.products],
  });
  revalidateStorefront();
}

export async function updateProduct(formData: FormData): Promise<void> {
  const productId = value(formData, "productId");
  const allProducts = [...PRODUCTS];
  const catalog = await readAdminCatalog();
  const current =
    catalog.products.find((product) => product.id === productId) ??
    catalog.overrides[productId] ??
    allProducts.find((product) => product.id === productId);

  if (!current) return;

  const name = value(formData, "name") || current.name;
  const imageFallback = current.images[0];
  const updated: Product = {
    ...current,
    name,
    brand: value(formData, "brand") || current.brand,
    category: toCategory(value(formData, "category") || current.category),
    price: Number(value(formData, "price")) || current.price,
    stock: Number(value(formData, "stock")) || current.stock,
    shortDescription: value(formData, "shortDescription") || current.shortDescription,
    description: value(formData, "description") || current.description,
    images: await saveImage(formData, imageFallback),
    featured: value(formData, "featured") === "on",
  };

  const isCustom = catalog.products.some((product) => product.id === productId);
  await writeAdminCatalog({
    ...catalog,
    products: isCustom
      ? catalog.products.map((product) => (product.id === productId ? updated : product))
      : catalog.products,
    overrides: isCustom ? catalog.overrides : { ...catalog.overrides, [productId]: updated },
  });
  revalidateStorefront();
}

export async function deleteProduct(formData: FormData): Promise<void> {
  const productId = value(formData, "productId");
  const catalog = await readAdminCatalog();
  const isBaseProduct = PRODUCTS.some((product) => product.id === productId);
  const overrides = { ...catalog.overrides };
  delete overrides[productId];

  await writeAdminCatalog({
    products: catalog.products.filter((product) => product.id !== productId),
    overrides,
    deletedIds: isBaseProduct
      ? Array.from(new Set([...catalog.deletedIds, productId]))
      : catalog.deletedIds,
  });
  revalidateStorefront();
}
