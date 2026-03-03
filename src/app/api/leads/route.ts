import { NextResponse } from "next/server";
import { z } from "zod";
import { dbConnect } from "@/lib/db";
import Lead from "@/models/Lead";
import { sendServerEvent, hashData } from "@/lib/analytics/meta-capi";

const LeadSchema = z.object({
  service: z.string().min(2),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  city: z.string().optional(),
  message: z.string().optional(),
  budget: z.number().optional(),
  timeline: z.string().optional(),
  contactMethod: z.string().optional(),
  eventID: z.string().optional(), // For deduplication
});

export async function POST(req: Request) {
  try {
    await dbConnect();
    const payload = await req.json();
    const parsed = LeadSchema.safeParse(payload);
    
    if (!parsed.success) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }
    
    const doc = await Lead.create(parsed.data);
    
    // Send to Meta CAPI
    // We send this asynchronously and don't block the response
    const eventData = {
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: req.headers.get('referer') || '',
      event_id: parsed.data.eventID, // Use the ID from client if available
      action_source: 'website' as const,
      user_data: {
        em: hashData(parsed.data.email),
        ph: parsed.data.phone ? hashData(parsed.data.phone) : undefined,
        ct: parsed.data.city ? hashData(parsed.data.city) : undefined,
        // We can extract IP and User Agent from headers if needed, 
        // but Next.js hides IP by default in some environments.
        client_user_agent: req.headers.get('user-agent') || undefined,
      },
      custom_data: {
        currency: 'COP',
        value: parsed.data.budget || 0,
        content_name: parsed.data.service,
        content_category: 'Service Lead',
      }
    };

    // Fire and forget CAPI event
    sendServerEvent(eventData).catch(err => console.error('CAPI Error', err));

    return NextResponse.json({ ok: true, id: doc._id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
  }
}