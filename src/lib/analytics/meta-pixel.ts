export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const pageview = () => {
  if (typeof window !== 'undefined') {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    } else {
      console.warn('Facebook Pixel not loaded yet');
    }
  }
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}, eventID?: string) => {
  if (typeof window !== 'undefined') {
    if ((window as any).fbq) {
      (window as any).fbq('track', name, options, { eventID });
    } else {
      console.warn('Facebook Pixel not loaded yet - Event dropped:', name);
    }
  }
};
