import { InfoPage } from "@/components/pages/InfoPage";

export default function PedidosPage() {
  return (
    <InfoPage
      eyebrow="Compras"
      title="Mis pedidos"
      description="Consulta el estado de tus compras y el historial de productos solicitados."
      items={["Pedidos en preparacion.", "Compras despachadas con guia de transporte.", "Historial de pagos y cotizaciones.", "Soporte directo para cambios o novedades."]}
      action={{ label: "Rastrear pedido", href: "/rastrear-pedido" }}
    />
  );
}
