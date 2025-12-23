import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { getAuthToken, verifyToken } from "@/lib/auth";
import { courses } from "@/lib/data/courses";
import { dbConnect } from "@/lib/db";
import User from "@/models/User";

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN || "" });

export async function POST(req: NextRequest) {
  try {
    const token = await getAuthToken();
    const payload = verifyToken(token || "");

    if (!payload) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { courseId } = await req.json();
    const course = courses.find((c) => c.id === courseId);

    if (!course) {
      return NextResponse.json({ error: "Curso no encontrado" }, { status: 404 });
    }

    // Obtener el usuario para tener su email (opcional para MP, pero bueno)
    await dbConnect();
    const user = await User.findById(payload.uid);
    if (!user) {
        return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    const preference = new Preference(client);

    // Asumimos precio en USD y convertimos a COP (Tasa aprox 4200)
    // Si el precio ya está pensado en COP, ajustar aquí.
    const unitPrice = course.price * 4200;

    const result = await preference.create({
      body: {
        items: [
          {
            id: course.id,
            title: course.title,
            quantity: 1,
            unit_price: unitPrice,
            currency_id: "COP",
          },
        ],
        payer: {
          email: user.email,
          name: user.name,
        },
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos/${course.id}?status=success`,
          failure: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos/${course.id}?status=failure`,
          pending: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos/${course.id}?status=pending`,
        },
        auto_return: "approved",
        metadata: {
          user_id: payload.uid,
          course_id: course.id,
        },
        notification_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/webhook`,
      },
    });

    return NextResponse.json({ init_point: result.init_point });
  } catch (error) {
    console.error("Error creating preference:", error);
    return NextResponse.json({ error: "Error al crear el pago" }, { status: 500 });
  }
}
