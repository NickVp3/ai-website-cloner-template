import { InfoPage } from "@/components/pages/InfoPage";

export default function ContactoPage() {
  return (
    <InfoPage
      eyebrow="Contacto"
      title="Contactanos"
      description="Habla con el equipo IDAGIZI para compras, soporte, garantias o cotizaciones."
      items={["WhatsApp: +57 300 000 0000", "Correo: soporte@idagizi.com", "Ubicacion: Bogota, Colombia", "Horario: lunes a sabado, 9:00 a.m. a 6:00 p.m."]}
      action={{ label: "Solicitar cotizacion", href: "/cotizacion" }}
    />
  );
}
