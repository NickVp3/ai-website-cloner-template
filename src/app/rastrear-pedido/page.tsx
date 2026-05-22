import { InfoPage } from "@/components/pages/InfoPage";

export default function RastrearPedidoPage() {
  return (
    <InfoPage
      eyebrow="Logistica"
      title="Rastrear pedido"
      description="Sigue el envío de tus compras y confirma novedades de entrega."
      items={["Recibe número de guía al momento del despacho.", "Cobertura nacional con aliados logísticos.", "Validación de dirección antes de enviar.", "Soporte si el transportador reporta novedad."]}
      action={{ label: "Contactar soporte", href: "/contacto" }}
    />
  );
}
