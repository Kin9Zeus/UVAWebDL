type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  }
};

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: eventName,
      ...properties,
    });
  }
};

export const trackEcommerce = (eventName: string, ecommerceData: Record<string, any>) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: eventName,
      ecommerce: ecommerceData,
    });
  }
};
