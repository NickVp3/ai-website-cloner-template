import Link from "next/link";
import { Camera, MessageCircle, Music, Users } from "lucide-react";
import { CATEGORIES } from "@/data/products";

const accountLinks = [
  { label: "Iniciar sesion", href: "/cuenta" },
  { label: "Mis pedidos", href: "/pedidos" },
  { label: "Lista de deseos", href: "/deseos" },
  { label: "Cotizacion", href: "/cotizacion" },
];

const helpLinks = [
  { label: "Centro de ayuda", href: "/ayuda" },
  { label: "Devoluciones", href: "/devoluciones" },
  { label: "Garantias", href: "/garantias" },
  { label: "Rastrear pedido", href: "/rastrear-pedido" },
  { label: "Contactanos", href: "/contacto" },
];

const socials = [Camera, Music, MessageCircle, Users];

export function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--gold)]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-[var(--gold)]/15">
          <div>
            <p className="font-heading text-3xl tracking-[0.12em] text-[var(--gold)] mb-4 leading-none">
              IDAGIZI
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-[240px]">
              E-commerce de tecnologia premium en Colombia. Los mejores gadgets y dispositivos al mejor precio.
            </p>
            <div className="flex gap-2 mt-5">
              {socials.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 border border-[var(--gold)]/25 rounded flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                  aria-label={`Red social ${index + 1}`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Categorias" links={CATEGORIES.map((cat) => ({ label: cat.label, href: `/categorias/${cat.slug}` }))} />
          <FooterColumn title="Mi cuenta" links={accountLinks} />
          <FooterColumn title="Ayuda" links={helpLinks} />
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)] tracking-wide">
            Â(c) 2025 IDAGIZI. Todos los derechos reservados. Bogota, Colombia.
          </p>
          <div className="flex gap-2 flex-wrap justify-center">
            {["PSE", "Nequi", "Visa", "MC", "Contra entrega"].map((method) => (
              <span key={method} className="text-[10px] font-bold tracking-wider uppercase text-[var(--text-muted)] border border-[var(--gold)]/20 px-2 py-1 rounded-sm">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--text)] mb-4">
        {title}
      </p>
      <ul className="flex flex-col gap-2.5">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
