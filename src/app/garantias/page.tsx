import { InfoPage } from "@/components/pages/InfoPage";

export default function GarantiasPage() {
  return (
    <InfoPage
      eyebrow="Respaldo"
      title="Garantias"
      description="Todos los productos publicados cuentan con proceso de validacion y soporte."
      items={["Garantia segun marca y tipo de producto.", "Revision tecnica antes de escalar con proveedor.", "Acompanamiento documental para compras empresariales.", "Respuesta de estado durante cada fase del caso."]}
      action={{ label: "Solicitar ayuda", href: "/contacto" }}
    />
  );
}
