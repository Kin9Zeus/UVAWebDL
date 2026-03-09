'use client';

import Script from 'next/script';

const isValidGaId = (id: string): boolean => {
  return /^G-[A-Z0-9]+$/.test(id);
};

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  if (!gaId) return null;

  if (!isValidGaId(gaId)) {
    console.warn('Google Analytics ID inválido:', gaId);
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            if (typeof window.gtag === 'undefined') {
              window.gtag = function(){window.dataLayer.push(arguments);}
            }
            window.gtag('js', new Date());
            window.gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              send_page_view: true, // Explicitly enable page view
            });
          `,
        }}
      />
    </>
  );
}
