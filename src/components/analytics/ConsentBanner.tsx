'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/button';

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
      
      // Set default denied
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
        });
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'granted');
    setIsVisible(false);
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
      });
      // Push event to GTM
      window.dataLayer.push({ event: 'consent_update' });
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'denied');
    setIsVisible(false);
     // No update needed as default is denied, or explicitly set denied
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t p-4 shadow-lg md:p-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-sm text-gray-600">
          <p>
            Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
          </p>
        </div>
        <div className="flex gap-4">
          <Button className="border border-neutral-300 text-neutral-700 hover:bg-neutral-50 bg-white" onClick={handleReject}>
            Rechazar
          </Button>
          <Button className="bg-[#5E24C8] text-white hover:bg-[#4c1da3]" onClick={handleAccept}>
            Aceptar todas
          </Button>
        </div>
      </div>
    </div>
  );
}
