import { Headphones, RotateCcw, ShieldCheck, Truck } from "lucide-react";

const FEATURES = [
  { Icon: Truck, title: "Envío rápido", desc: "Despacho en 24 h hábiles. Cobertura nacional." },
  { Icon: ShieldCheck, title: "Pago seguro", desc: "PSE, Nequi, tarjetas y contra entrega." },
  { Icon: RotateCcw, title: "30 días garantía", desc: "Devoluciones sin preguntas." },
  { Icon: Headphones, title: "Soporte 7/7", desc: "WhatsApp, chat e Instagram todos los días." },
];

const BRANDS = ["Apple", "Samsung", "Sony", "LG", "Xiaomi", "Logitech", "Anker", "Lenovo"];

export function TrustFeatures() {
  return (
    <div className="border-y border-[var(--gold)]/15 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[var(--gold)]/8">
          {FEATURES.map(({ Icon, title, desc }) => (
            <div key={title} className="flex gap-4 items-start p-7">
              <Icon className="text-[var(--gold)] shrink-0 mt-0.5" size={28} />
              <div>
                <p className="font-bold text-sm tracking-wider uppercase text-[var(--text)] mb-1">{title}</p>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BrandsStrip() {
  return (
    <div className="bg-[#fafafa] border-b border-[var(--gold)]/15 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-6">
        {BRANDS.map((brand) => (
          <span
            key={brand}
            className="font-heading text-xl tracking-[0.15em] uppercase text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors cursor-default"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
