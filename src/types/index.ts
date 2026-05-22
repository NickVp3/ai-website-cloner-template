export interface Rating {
  userId: string;
  score: number; // 1-5
  comment: string;
  author: string;
  date: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: Category;
  brand: string;
  stock: number;
  badge?: "nuevo" | "oferta" | "hot" | "agotado";
  specs: Record<string, string>;
  ratings: Rating[];
  featured: boolean;
}

export type Category =
  | "celulares"
  | "tecnologia"
  | "gaming"
  | "accesorios";

export interface CategoryMeta {
  slug: Category;
  label: string;
  description: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
