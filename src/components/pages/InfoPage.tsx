import Link from "next/link";

interface InfoPageProps {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  action?: {
    label: string;
    href: string;
  };
}

export function InfoPage({ eyebrow, title, description, items, action }: InfoPageProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8">
        <Link href="/" className="hover:text-[var(--gold)] transition-colors">Inicio</Link>
        <span>/</span>
        <span className="text-[var(--text)]">{title}</span>
      </nav>

      <section className="border border-[var(--gold)]/18 rounded-lg bg-white p-6 md:p-10 shadow-sm">
        <p className="section-tag">{eyebrow}</p>
        <h1 className="font-heading text-[clamp(38px,6vw,72px)] leading-none tracking-wide text-[var(--text)] mb-4">
          {title}
        </h1>
        <p className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl mb-8">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item} className="border border-[var(--gold)]/15 rounded-md p-4 bg-[#fafafa]">
              <p className="text-sm text-[var(--text)] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        {action && (
          <Link href={action.href} className="btn-primary mt-8 w-fit">
            {action.label}
          </Link>
        )}
      </section>
    </div>
  );
}
