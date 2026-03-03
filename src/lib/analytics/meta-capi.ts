import { createHash } from 'crypto';

const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;

// Helper to hash user data (required by Meta)
export const hashData = (data: string) => {
  return createHash('sha256').update(data).digest('hex');
};

type UserData = {
  em?: string; // email (hashed)
  ph?: string; // phone (hashed)
  fn?: string; // first name (hashed)
  ln?: string; // last name (hashed)
  ct?: string; // city (hashed)
  st?: string; // state (hashed)
  zp?: string; // zip (hashed)
  country?: string; // country (hashed)
  client_ip_address?: string;
  client_user_agent?: string;
  fbc?: string; // click ID
  fbp?: string; // browser ID
};

type EventData = {
  event_name: string;
  event_time: number;
  event_id?: string;
  event_source_url: string;
  user_data: UserData;
  custom_data?: any;
  action_source: 'website';
};

export const sendServerEvent = async (eventData: EventData) => {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn('Meta Pixel ID or Access Token is missing');
    return;
  }

  const payload = {
    data: [eventData],
    // test_event_code: 'TEST12345', // Use for testing in Events Manager
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Meta CAPI Error:', errorData);
    } else {
      console.log('Meta CAPI Event Sent:', eventData.event_name);
    }
  } catch (error) {
    console.error('Meta CAPI Network Error:', error);
  }
};
