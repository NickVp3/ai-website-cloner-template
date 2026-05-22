import { InfoPage } from "@/components/pages/InfoPage";

export default function DevolucionesPage() {
  return (
    <InfoPage
      eyebrow="Ayuda"
      title="Devoluciones"
      description="Política clara para cambios, devoluciones y revisión de productos."
      items={["Reporta la novedad dentro de los primeros 30 días.", "Conserva factura, accesorios y empaque en buen estado.", "Validamos el estado del producto antes de aprobar el proceso.", "Te acompañamos por WhatsApp hasta cerrar la solicitud."]}
      action={{ label: "Contactar soporte", href: "/contacto" }}
    />
  );
}
