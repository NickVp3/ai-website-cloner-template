"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { CATEGORIES } from "@/data/products";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="bg-[var(--gold)] text-[#111111] text-center text-xs font-semibold tracking-widest py-2 px-4">
        Envío gratis en pedidos mayores a $150.000 COP | Pago contra entrega disponible
      </div>

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--gold)]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-dim)] border-2 border-[var(--gold)] flex items-center justify-center text-[#111111] text-[11px] font-black tracking-wider">
              IDG
            </div>
            <span className="font-heading text-2xl tracking-[0.12em] text-[var(--gold)] leading-none">
              IDAGIZI
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/categorias/${cat.slug}`} className="text-[var(--text-muted)] hover:text-[var(--gold)] font-semibold text-sm tracking-widest uppercase px-4 py-2 relative group transition-colors duration-200">
                  {cat.label}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              </li>
            ))}
            {[
              { href: "/cotizacion", label: "Cotización" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[var(--text-muted)] hover:text-[var(--gold)] font-semibold text-sm tracking-widest uppercase px-4 py-2 relative group transition-colors duration-200">
                  {item.label}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 shrink-0">
            <button className="nav-icon-btn hidden md:flex" aria-label="Buscar">
              <Search size={18} />
            </button>
            <Link href="/cuenta" className="nav-icon-btn hidden md:flex" aria-label="Mi cuenta">
              <User size={18} />
            </Link>
            <button className="nav-icon-btn relative" aria-label="Carrito">
              <ShoppingCart size={18} />
              <span className="absolute top-1 right-1 bg-[var(--gold)] text-[#111111] text-[9px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="nav-icon-btn md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-[var(--gold)]/15 px-4 py-4 flex flex-col gap-1">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categorias/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="text-[var(--text-muted)] hover:text-[var(--gold)] font-semibold text-sm tracking-widest uppercase py-3 border-b border-[var(--gold)]/10 flex items-center gap-3"
              >
                {cat.label}
              </Link>
            ))}
            <Link href="/cotizacion" onClick={() => setMobileOpen(false)} className="text-[var(--text-muted)] hover:text-[var(--gold)] font-semibold text-sm tracking-widest uppercase py-3 flex items-center gap-3">
              Cotización
            </Link>
                      </div>
        )}
      </nav>
    </>
  );
}
