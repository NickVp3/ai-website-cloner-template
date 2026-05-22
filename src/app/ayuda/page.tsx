import { InfoPage } from "@/components/pages/InfoPage";

export default function AyudaPage() {
  return (
    <InfoPage
      eyebrow="Soporte"
      title="Centro de ayuda"
      description="Resuelve dudas frecuentes sobre compras, pagos, envíos y soporte posventa."
      items={["Atención por WhatsApp e Instagram todos los días.", "Guía para elegir el equipo correcto según tu presupuesto.", "Acompañamiento en garantías, devoluciones y rastreo de pedidos.", "Soporte para compras por cotización empresarial."]}
      action={{ label: "Contactar soporte", href: "/contacto" }}
    />
  );
}
