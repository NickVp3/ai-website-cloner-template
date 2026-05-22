import { InfoPage } from "@/components/pages/InfoPage";

export default function GarantiasPage() {
  return (
    <InfoPage
      eyebrow="Respaldo"
      title="Garantías"
      description="Todos los productos publicados cuentan con proceso de validación y soporte."
      items={["Garantía según marca y tipo de producto.", "Revisión técnica antes de escalar con proveedor.", "Acompañamiento documental para compras empresariales.", "Respuesta de estado durante cada fase del caso."]}
      action={{ label: "Solicitar ayuda", href: "/contacto" }}
    />
  );
}
