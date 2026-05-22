import Image from "next/image";
import Link from "next/link";
import { Plus, Save, Trash2 } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { getAllProducts } from "@/lib/catalog";
import { createProduct, deleteProduct, updateProduct } from "../admin/actions";
import { formatCOP } from "@/lib/format";

export const runtime = "nodejs";

export const metadata = {
  title: "Estudio privado | IDAGIZI",
};

export default async function PrivateStudioPage() {
  const products = await getAllProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8">
        <Link href="/" className="hover:text-[var(--gold)] transition-colors">Inicio</Link>
        <span>/</span>
        <span className="text-[var(--text)]">Estudio privado</span>
      </nav>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
        <div>
          <p className="section-tag">Panel interno</p>
          <h1 className="font-heading text-[clamp(38px,6vw,72px)] leading-none tracking-wide text-[var(--text)]">
            Publicaciones
          </h1>
          <p className="text-sm text-[var(--text-muted)] max-w-2xl mt-3">
            Crea productos por seccion, sube una imagen desde tu escritorio, edita publicaciones existentes o retiralas del catalogo.
          </p>
        </div>
      </div>

      <details className="group border border-[var(--gold)]/25 bg-white rounded-lg mb-10 overflow-hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold uppercase tracking-widest text-sm text-[var(--text)]">
          <span className="inline-flex items-center gap-2">
            <Plus size={18} className="text-[var(--gold)]" />
            Nuevo producto
          </span>
          <span className="text-[var(--gold)] transition-transform group-open:rotate-45">+</span>
        </summary>
        <form action={createProduct} className="grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-[var(--gold)]/15 p-5">
          <ProductFields />
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="btn-primary">
              <Plus size={16} />
              Crear producto
            </button>
          </div>
        </form>
      </details>

      <section>
        <div className="flex items-center justify-between gap-4 mb-5">
          <h2 className="font-heading text-3xl tracking-wide text-[var(--text)]">Productos actuales</h2>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
            {products.length} publicaciones
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {products.map((product) => (
            <details key={product.id} className="group border border-[var(--gold)]/15 bg-white rounded-lg overflow-hidden">
              <summary className="grid cursor-pointer list-none grid-cols-[72px_1fr_auto] items-center gap-4 p-4">
                <div className="relative h-16 w-16 rounded-md border border-[var(--gold)]/15 bg-[#f7f4ea] flex items-center justify-center overflow-hidden">
                  {product.images[0] ? (
                    <Image src={product.images[0]} alt={product.name} fill sizes="72px" className="object-contain p-2" />
                  ) : (
                    <span className="text-lg font-heading tracking-wider text-[var(--gold)]">{product.brand.slice(0, 3).toUpperCase()}</span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--gold)]">{product.category}</p>
                  <h3 className="line-clamp-1 text-sm font-semibold text-[var(--text)]">{product.name}</h3>
                  <p className="text-xs text-[var(--text-muted)]">{product.brand} · {formatCOP(product.price)}</p>
                </div>
                <span className="hidden sm:inline text-xs font-bold uppercase tracking-widest text-[var(--gold)]">
                  Editar
                </span>
              </summary>

              <div className="border-t border-[var(--gold)]/12 p-5">
                <form action={updateProduct} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="hidden" name="productId" value={product.id} />
                  <ProductFields product={product} />
                  <div className="md:col-span-2 flex flex-col sm:flex-row justify-between gap-3">
                    <button type="submit" className="btn-primary justify-center">
                      <Save size={16} />
                      Guardar cambios
                    </button>
                    <button
                      formAction={deleteProduct}
                      className="btn-outline justify-center border-red-500/40 text-red-600 hover:border-red-500 hover:bg-red-500/10"
                    >
                      <Trash2 size={16} />
                      Eliminar publicacion
                    </button>
                  </div>
                </form>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProductFields({ product }: { product?: Awaited<ReturnType<typeof getAllProducts>>[number] }) {
  return (
    <>
      <label className="admin-field">
        <span>Nombre</span>
        <input name="name" defaultValue={product?.name} required placeholder="Nombre del producto" />
      </label>
      <label className="admin-field">
        <span>Seccion</span>
        <select name="category" defaultValue={product?.category ?? "tecnologia"}>
          {CATEGORIES.map((category) => (
            <option key={category.slug} value={category.slug}>{category.label}</option>
          ))}
        </select>
      </label>
      <label className="admin-field">
        <span>Marca</span>
        <input name="brand" defaultValue={product?.brand} placeholder="Apple, Samsung, Sony..." />
      </label>
      <label className="admin-field">
        <span>Precio COP</span>
        <input name="price" type="number" min="0" step="1000" defaultValue={product?.price} placeholder="1299000" />
      </label>
      <label className="admin-field">
        <span>Stock</span>
        <input name="stock" type="number" min="0" defaultValue={product?.stock ?? 1} />
      </label>
      <label className="admin-field">
        <span>Imagen</span>
        <input name="image" type="file" accept="image/*" />
      </label>
      <label className="admin-field md:col-span-2">
        <span>Descripcion corta</span>
        <input name="shortDescription" defaultValue={product?.shortDescription} placeholder="Resumen para tarjetas y listados" />
      </label>
      <label className="admin-field md:col-span-2">
        <span>Descripcion completa</span>
        <textarea name="description" rows={4} defaultValue={product?.description} placeholder="Detalle de la publicacion" />
      </label>
      <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
        <input name="featured" type="checkbox" defaultChecked={product?.featured} className="h-4 w-4 accent-[var(--gold)]" />
        Destacado
      </label>
    </>
  );
}
