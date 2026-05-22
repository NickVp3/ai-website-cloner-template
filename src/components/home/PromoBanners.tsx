import Link from "next/link";

export function PromoBanners() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="md:col-span-2 relative bg-gradient-to-br from-[#fff8df] to-white border border-[var(--gold)]/20 rounded-xl p-10 flex flex-col justify-end gap-3 min-h-[240px] overflow-hidden">
        <span className="absolute top-5 right-5 font-heading text-7xl tracking-widest text-[var(--gold)] opacity-15 pointer-events-none select-none">PRO</span>
        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-[var(--gold)]">Gaming Zone</p>
        <h3 className="font-heading text-4xl leading-none tracking-wide text-[var(--text)]">
          SETUP PRO<br />DESDE $899.000
        </h3>
        <p className="text-sm text-[var(--text-muted)]">Sillas, headsets, teclados y mas para el gamer serio.</p>
        <Link href="/categorias/gaming" className="btn-primary w-fit mt-2">
          Ver gaming
        </Link>
      </div>

      <div className="relative bg-gradient-to-br from-[#f5f5f5] to-white border border-[var(--gold)]/20 rounded-xl p-8 flex flex-col justify-end gap-3 min-h-[240px] overflow-hidden">
        <span className="absolute top-5 right-5 font-heading text-6xl tracking-widest text-[var(--gold)] opacity-15 pointer-events-none select-none">AUDIO</span>
        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-[var(--gold)]">Accesorios</p>
        <h3 className="font-heading text-3xl leading-none tracking-wide text-[var(--text)]">
          AUDIO<br />PREMIUM
        </h3>
        <p className="text-sm text-[var(--text-muted)]">AirPods, Sony, Anker y mas.</p>
        <Link href="/categorias/accesorios" className="btn-outline w-fit mt-2">
          Ver mas
        </Link>
      </div>
    </div>
  );
}
