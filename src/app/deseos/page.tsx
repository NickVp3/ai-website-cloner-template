import { InfoPage } from "@/components/pages/InfoPage";

export default function DeseosPage() {
  return (
    <InfoPage
      eyebrow="Favoritos"
      title="Lista de deseos"
      description="Guarda productos que quieres comparar o comprar despues."
      items={["Celulares favoritos.", "Accesorios pendientes por comparar.", "Equipos destacados para cotizacion.", "Alertas de disponibilidad y ofertas."]}
      action={{ label: "Explorar catalogo", href: "/" }}
    />
  );
}
