import { InfoPage } from "@/components/pages/InfoPage";

export default function CuentaPage() {
  return (
    <InfoPage
      eyebrow="Mi cuenta"
      title="Acceso de cliente"
      description="Seccion preparada para iniciar sesion y consultar tu actividad en IDAGIZI."
      items={["Consulta tus datos de contacto guardados.", "Revisa pedidos, favoritos y solicitudes de cotizacion.", "Administra direcciones de envio para futuras compras.", "Recibe novedades y ofertas personalizadas."]}
      action={{ label: "Ver productos", href: "/" }}
    />
  );
}
