import { InfoPage } from "@/components/pages/InfoPage";

export default function DeseosPage() {
  return (
    <InfoPage
      eyebrow="Favoritos"
      title="Lista de deseos"
      description="Guarda productos que quieres comparar o comprar después."
      items={["Celulares favoritos.", "Accesorios pendientes por comparar.", "Equipos destacados para cotización.", "Alertas de disponibilidad y ofertas."]}
      action={{ label: "Explorar catálogo", href: "/" }}
    />
  );
}
