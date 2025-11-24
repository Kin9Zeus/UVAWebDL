import { NextResponse } from "next/server";
import { z } from "zod";
import { dbConnect } from "@/lib/db";
import User, { UserDoc } from "@/models/User";
import { getAuthToken, verifyToken } from "@/lib/auth";

const UpdateSchema = z.object({
  name: z.string().min(2).optional(),
  occupation: z.string().optional(),
  age: z.number().min(0).max(120).optional(),
  profession: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  gender: z.string().optional(),
});

export async function PATCH(req: Request) {
  try {
    await dbConnect();
    const token = await getAuthToken();
    const payload = token ? verifyToken(token) : null;
    if (!payload) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const body = await req.json();
    const parsed = UpdateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }
    const updates = parsed.data;

    const user = await User.findByIdAndUpdate(payload.uid, updates, { new: true }).lean<UserDoc | null>();
    return NextResponse.json({
      user: {
        id: String(user?._id),
        name: user?.name,
        email: user?.email,
        role: user?.role,
        occupation: user?.occupation,
        age: user?.age,
        profession: user?.profession,
        city: user?.city,
        country: user?.country,
        gender: user?.gender,
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
  }
}
