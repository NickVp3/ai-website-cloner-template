import { InfoPage } from "@/components/pages/InfoPage";

export default function DevolucionesPage() {
  return (
    <InfoPage
      eyebrow="Ayuda"
      title="Devoluciones"
      description="Politica clara para cambios, devoluciones y revision de productos."
      items={["Reporta la novedad dentro de los primeros 30 dias.", "Conserva factura, accesorios y empaque en buen estado.", "Validamos el estado del producto antes de aprobar el proceso.", "Te acompanamos por WhatsApp hasta cerrar la solicitud."]}
      action={{ label: "Contactar soporte", href: "/contacto" }}
    />
  );
}
