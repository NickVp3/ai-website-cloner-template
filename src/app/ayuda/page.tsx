import { InfoPage } from "@/components/pages/InfoPage";

export default function AyudaPage() {
  return (
    <InfoPage
      eyebrow="Soporte"
      title="Centro de ayuda"
      description="Resuelve dudas frecuentes sobre compras, pagos, envios y soporte posventa."
      items={["Atencion por WhatsApp e Instagram todos los dias.", "Guia para elegir el equipo correcto segun tu presupuesto.", "Acompanamiento en garantias, devoluciones y rastreo de pedidos.", "Soporte para compras por cotizacion empresarial."]}
      action={{ label: "Contactar soporte", href: "/contacto" }}
    />
  );
}
