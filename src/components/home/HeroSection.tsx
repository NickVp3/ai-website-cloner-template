import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_70%_50%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[image:linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--gold)] border border-[var(--gold)]/30 bg-white px-4 py-2 rounded-sm mb-6">
            <span className="w-5 h-px bg-[var(--gold)]" />
            Tecnologia de vanguardia
          </div>

          <h1 className="font-heading text-[clamp(52px,8vw,96px)] leading-[0.92] tracking-[0.04em] text-[var(--text)] mb-6">
            EL FUTURO<br />
            EN TUS{" "}
            <span className="text-[var(--gold)]">MANOS</span>
          </h1>

          <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-md mb-8">
            Los mejores dispositivos, accesorios y gadgets de tecnologia al mejor precio. Envio a toda Colombia.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="/categorias/celulares" className="btn-primary">
              Explorar productos
            </Link>
            <Link href="/cotizacion" className="btn-outline">
              Solicitar cotizacion
            </Link>
          </div>

          <div className="flex gap-8 mt-12">
            {[
              { num: "8K+", label: "Productos" },
              { num: "50K", label: "Clientes" },
              { num: "4.9", label: "Calificacion" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading text-4xl text-[var(--gold)] leading-none tracking-wide">{s.num}</p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center relative h-[400px]">
          <div className="absolute w-[220px] h-[340px] bg-[#f5f5f5] border border-[var(--gold)]/20 rounded-2xl right-0 top-10 rotate-6" />
          <div className="absolute w-[220px] h-[340px] bg-white border border-[var(--gold)]/35 rounded-2xl left-0 flex flex-col items-center justify-center gap-4 -rotate-3 shadow-sm">
            <span className="font-heading text-6xl tracking-widest text-[var(--gold)]">IDG</span>
            <p className="font-heading text-sm tracking-widest text-[var(--gold)] uppercase">iPhone 15 Pro</p>
            <p className="font-heading text-2xl text-[var(--text)] tracking-wide">$5.299.000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
