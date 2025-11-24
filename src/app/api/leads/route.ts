import { NextResponse } from "next/server";
import { z } from "zod";
import { dbConnect } from "@/lib/db";
import Lead from "@/models/Lead";

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
    return NextResponse.json({ ok: true, id: doc._id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
  }
}