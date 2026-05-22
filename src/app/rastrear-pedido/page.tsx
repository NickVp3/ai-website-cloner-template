import { InfoPage } from "@/components/pages/InfoPage";

export default function RastrearPedidoPage() {
  return (
    <InfoPage
      eyebrow="Logistica"
      title="Rastrear pedido"
      description="Sigue el envio de tus compras y confirma novedades de entrega."
      items={["Recibe numero de guia al momento del despacho.", "Cobertura nacional con aliados logisticos.", "Validacion de direccion antes de enviar.", "Soporte si el transportador reporta novedad."]}
      action={{ label: "Contactar soporte", href: "/contacto" }}
    />
  );
}
