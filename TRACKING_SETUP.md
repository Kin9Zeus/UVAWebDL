# Configuración de Tracking Digital (GTM + Meta CAPI)

Esta guía detalla la implementación de la estrategia de tracking digital para el proyecto Web UVA 2.0.

## 1. Arquitectura de Tracking

El sistema utiliza una arquitectura híbrida:
- **Client-side**: Google Tag Manager (GTM) para gestión de tags, GA4, y Pixel de Meta.
- **Server-side**: Meta Conversions API (CAPI) para eventos críticos (Leads, Compras) enviada desde el backend (Next.js API Routes).
- **Deduplicación**: Se utiliza un `eventID` único generado en el cliente y compartido entre el Pixel y CAPI.

## 2. Configuración de Google Tag Manager (GTM)

El componente `src/components/analytics/GoogleTagManager.tsx` inicializa GTM y el Data Layer.
Se ha configurado **Consent Mode v2** por defecto en 'denied' hasta que el usuario acepte las cookies.

### Variables de Entorno Requeridas

Añadir las siguientes variables al archivo `.env.local`:

```env
NEXT_PUBLIC_GTM_ID=GTM-TTHZD66R
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=XXXXXXXXXXXXXXX
FACEBOOK_ACCESS_TOKEN=EAAB... (Token de larga duración generado en Business Manager)
```

## 3. Implementación de Eventos

### Hook `useAnalytics`

Para trackear eventos en componentes de cliente, usar el hook `useAnalytics`:

```tsx
import { useAnalytics } from '@/hooks/use-analytics';

export default function MiComponente() {
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    trackEvent('ClickCTA', {
      category: 'Engagement',
      label: 'Boton Principal',
      value: 10
    });
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Eventos E-commerce y Conversiones

El sistema soporta eventos estándar de Meta y GA4.

#### Leads (Formularios)
El formulario de contacto (`src/app/api/leads/route.ts`) envía automáticamente un evento `Lead` a Meta CAPI con los datos del usuario hasheados (SHA-256) para maximizar el match rate.

#### Compras (Purchase)
Para implementar compras, asegurar de llamar a `trackEvent('Purchase', { value: 100, currency: 'COP' })` en la página de agradecimiento, y llamar a `sendServerEvent` desde el webhook de pagos (ej. MercadoPago/Stripe).

## 4. Consent Mode y GDPR/CCPA

El componente `ConsentBanner` gestiona el consentimiento del usuario.
- **Default**: `ad_storage` y `analytics_storage` en 'denied'.
- **Aceptación**: Se actualiza a 'granted' y se dispara el evento `consent_update` al Data Layer.

## 5. Validación y Mantenimiento

### Verificación
1. **GTM Preview Mode**: Verificar que los tags se disparen en los eventos `gtm.js`, `pageview`, etc.
2. **Meta Pixel Helper**: Verificar que los eventos de Pixel tengan un `Event ID`.
3. **Facebook Events Manager**: Verificar que los eventos lleguen tanto de "Browser" como de "Server" y que el estado de deduplicación sea "Deduplicated".

### Auditoría Mensual
- Revisar el "Match Quality" en Facebook Events Manager (objetivo > 6.0/10).
- Verificar alertas de discrepancia de eventos.
- Actualizar el token de Facebook si caduca (aunque se recomienda uno permanente de sistema).

## 6. Dashboard de Analytics

Para visualizar los datos:
1. Conectar GA4 con Looker Studio (Google Data Studio).
2. Conectar Facebook Ads (vía conector de terceros o exportación de datos) a Looker Studio.
3. Crear paneles para:
   - Funnel de Conversión (Visita -> Lead -> Compra).
   - ROAS por Campaña.
   - CPA por Curso.
