"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { formatCOP } from "@/lib/format";
import type { Product } from "@/types";

export default function CotizacionPage() {
  const [selected, setSelected] = useState<{ product: Product; qty: number }[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);

  function toggleProduct(product: Product) {
    setSelected((prev) => {
      const exists = prev.find((i) => i.product.id === product.id);
      if (exists) return prev.filter((i) => i.product.id !== product.id);
      return [...prev, { product, qty: 1 }];
    });
  }

  function updateQty(productId: string, qty: number) {
    if (qty < 1) return;
    setSelected((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, qty } : i))
    );
  }

  const total = selected.reduce((acc, i) => acc + i.product.price * i.qty, 0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || selected.length === 0) return;
    setSent(true);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8">
        <Link href="/" className="hover:text-[var(--gold)] transition-colors">Inicio</Link>
        <span>/</span>
        <span className="text-[var(--text)]">Cotización</span>
      </nav>

      <div className="mb-10">
        <p className="section-tag">Cotización</p>
        <h1 className="font-heading text-[clamp(36px,6vw,64px)] leading-none tracking-wide text-[var(--text)] mb-3">
          Solicitar Cotización
        </h1>
        <p className="text-sm text-[var(--text-muted)] max-w-lg">
          Selecciona los productos que te interesan, indica las cantidades y te contactamos con el mejor precio.
        </p>
      </div>

      {sent ? (
        <div className="bg-white border border-[var(--gold)]/20 rounded-xl p-12 text-center max-w-lg mx-auto shadow-sm">
          <h2 className="font-heading text-3xl text-[var(--gold)] mb-3">¡Cotización enviada!</h2>
          <p className="text-sm text-[var(--text-muted)] mb-6">
            Recibimos tu solicitud. Te contactaremos a <strong className="text-[var(--text)]">{email}</strong> en menos de 24 horas.
          </p>
          <Link href="/" className="btn-primary">Volver al inicio</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Product selector */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl tracking-wide text-[var(--text)] mb-5">
              Selecciona productos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRODUCTS.map((product) => {
                const isSelected = selected.some((i) => i.product.id === product.id);
                const item = selected.find((i) => i.product.id === product.id);
                return (
                  <div
                    key={product.id}
                    className={`border rounded-xl p-4 transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-[var(--gold)] bg-[var(--gold)]/5"
                        : "border-[var(--gold)]/15 bg-white hover:border-[var(--gold)]/35"
                    }`}
                    onClick={() => toggleProduct(product)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-xl tracking-wider text-[var(--gold)]">{product.brand.slice(0, 3).toUpperCase()}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-black tracking-wider uppercase text-[var(--gold-dim)]">{product.brand}</p>
                        <p className="text-sm font-medium text-[var(--text)] leading-snug line-clamp-2">{product.name}</p>
                        <p className="font-heading text-base text-[var(--gold)] mt-1">{formatCOP(product.price)}</p>
                      </div>
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all ${isSelected ? "border-[var(--gold)] bg-[var(--gold)]" : "border-[var(--gold)]/30"}`}>
                        {isSelected && <Check size={14} className="text-[#111111]" />}
                      </div>
                    </div>

                    {isSelected && item && (
                      <div
                        className="flex items-center gap-3 mt-4 pt-3 border-t border-[var(--gold)]/15"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="text-xs text-[var(--text-muted)] tracking-wider uppercase font-semibold">Cantidad:</span>
                        <div className="flex items-center gap-2">
                          <button
                            className="w-7 h-7 rounded border border-[var(--gold)]/25 text-[var(--gold)] flex items-center justify-center font-bold text-sm hover:bg-[var(--gold)]/10 transition-colors"
                            onClick={() => updateQty(product.id, item.qty - 1)}
                          >-</button>
                          <span className="w-6 text-center text-sm font-bold text-[var(--text)]">{item.qty}</span>
                          <button
                            className="w-7 h-7 rounded border border-[var(--gold)]/25 text-[var(--gold)] flex items-center justify-center font-bold text-sm hover:bg-[var(--gold)]/10 transition-colors"
                            onClick={() => updateQty(product.id, item.qty + 1)}
                          >+</button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form + summary */}
          <div>
            {/* Summary */}
            <div className="bg-white border border-[var(--gold)]/15 rounded-xl p-5 mb-6 sticky top-24 shadow-sm">
              <h3 className="font-heading text-xl tracking-wide text-[var(--text)] mb-4">Resumen</h3>
              {selected.length === 0 ? (
                <p className="text-xs text-[var(--text-muted)]">Selecciona al menos un producto.</p>
              ) : (
                <>
                  <ul className="flex flex-col gap-3 mb-4">
                    {selected.map((i) => (
                      <li key={i.product.id} className="flex justify-between items-start gap-2 text-sm">
                        <span className="text-[var(--text)] line-clamp-1 flex-1">{i.product.name} ×{i.qty}</span>
                        <span className="text-[var(--gold)] font-semibold shrink-0">{formatCOP(i.product.price * i.qty)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-[var(--gold)]/10 pt-3 flex justify-between">
                    <span className="text-xs font-black tracking-widest uppercase text-[var(--text-muted)]">Total est.</span>
                    <span className="font-heading text-xl text-[var(--gold)]">{formatCOP(total)}</span>
                  </div>
                </>
              )}
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="bg-white border border-[var(--gold)]/15 rounded-xl p-5 flex flex-col gap-4 shadow-sm">
              <h3 className="font-heading text-xl tracking-wide text-[var(--text)]">Tus datos</h3>

              {[
                { label: "Nombre completo *", value: name, onChange: setName, placeholder: "Tu nombre", type: "text" },
                { label: "Correo electrónico *", value: email, onChange: setEmail, placeholder: "tu@correo.com", type: "email" },
                { label: "Teléfono / WhatsApp", value: phone, onChange: setPhone, placeholder: "+57 300 000 0000", type: "tel" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="text-[10px] font-black tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1.5 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full bg-white border border-[var(--gold)]/20 rounded-md px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--gold)]/50 transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="text-[10px] font-black tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1.5 block">
                  Notas adicionales
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Colores, versiones, condiciones especiales..."
                  rows={3}
                  className="w-full bg-white border border-[var(--gold)]/20 rounded-md px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--gold)]/50 transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary justify-center">
                Enviar cotización
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
