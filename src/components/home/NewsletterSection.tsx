"use client";

import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="bg-gradient-to-br from-[#fff8df] to-white border border-[var(--gold)]/20 rounded-xl p-10 text-center">
        <h2 className="font-heading text-4xl tracking-wide text-[var(--text)] mb-2">
          Ofertas exclusivas en tu correo
        </h2>
        <p className="text-sm text-[var(--text-muted)] mb-7">
          Suscríbete y recibe descuentos de hasta el 40% antes que nadie.
        </p>
        {done ? (
          <p className="text-[var(--gold)] font-semibold">✅ ¡Listo! Bienvenido a la familia IDAGIZI.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="flex-1 bg-white border border-[var(--gold)]/20 border-r-0 rounded-l-md px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--gold)]/50"
            />
            <button type="submit" className="btn-primary rounded-l-none">
              Suscribirme
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
