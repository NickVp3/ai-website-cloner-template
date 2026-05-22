import { InfoPage } from "@/components/pages/InfoPage";

export default function ContactoPage() {
  return (
    <InfoPage
      eyebrow="Contacto"
      title="Contáctanos"
      description="Habla con el equipo IDAGIZI para compras, soporte, garantías o cotizaciones."
      items={["WhatsApp: +57 300 000 0000", "Correo: soporte@idagizi.com", "Ubicación: Bogotá, Colombia", "Horario: lunes a sábado, 9:00 a.m. a 6:00 p.m."]}
      action={{ label: "Solicitar cotización", href: "/cotizacion" }}
    />
  );
}
