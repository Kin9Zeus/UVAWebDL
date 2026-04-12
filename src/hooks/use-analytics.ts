'use client';

import * as gtm from '@/lib/analytics/gtm';
import * as pixel from '@/lib/analytics/meta-pixel';

export const useAnalytics = () => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Generate a unique event ID for deduplication if not provided
    const eventID = properties?.eventID || crypto.randomUUID();
    
    // Track in GTM
    gtm.trackEvent(eventName, { ...properties, eventID });

    // Track in Meta Pixel
    // We map common events to standard Meta events if possible, or use Custom
    const standardEvents = [
      'ViewContent', 'Search', 'AddToCart', 'AddToWishlist', 
      'InitiateCheckout', 'AddPaymentInfo', 'Purchase', 'Lead', 
      'CompleteRegistration'
    ];

    if (standardEvents.includes(eventName)) {
      pixel.event(eventName, properties, eventID);
    } else {
      pixel.event(eventName, properties, eventID); // Custom event
    }

    return eventID;
  };

  return { trackEvent };
};
