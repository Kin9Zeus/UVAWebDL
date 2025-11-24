import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import User, { UserDoc } from "@/models/User";
import { getAuthToken, verifyToken } from "@/lib/auth";

export async function GET() {
  try {
    await dbConnect();
    const token = await getAuthToken();
    if (!token) return NextResponse.json({ user: null }, { status: 200 });
    const payload = verifyToken(token);
    if (!payload) return NextResponse.json({ user: null }, { status: 200 });
    const user = await User.findById(payload.uid).lean<UserDoc | null>();
    if (!user) return NextResponse.json({ user: null }, { status: 200 });
    return NextResponse.json({
      user: {
        id: String(user._id),
        name: user.name,
        email: user.email,
        role: user.role,
        occupation: user.occupation,
        age: user.age,
        profession: user.profession,
        city: user.city,
        country: user.country,
        gender: user.gender,
        purchases: user.purchases || [],
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
  }
}
