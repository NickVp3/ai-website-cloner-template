import { InfoPage } from "@/components/pages/InfoPage";

export default function CuentaPage() {
  return (
    <InfoPage
      eyebrow="Mi cuenta"
      title="Acceso de cliente"
      description="Sección preparada para iniciar sesión y consultar tu actividad en IDAGIZI."
      items={["Consulta tus datos de contacto guardados.", "Revisa pedidos, favoritos y solicitudes de cotización.", "Administra direcciones de envío para futuras compras.", "Recibe novedades y ofertas personalizadas."]}
      action={{ label: "Ver productos", href: "/" }}
    />
  );
}
