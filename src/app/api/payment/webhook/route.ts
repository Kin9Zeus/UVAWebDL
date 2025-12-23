import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { dbConnect } from "@/lib/db";
import User from "@/models/User";

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN || "" });

export async function POST(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const topic = url.searchParams.get("topic") || url.searchParams.get("type");
    const id = url.searchParams.get("id") || url.searchParams.get("data.id");

    const body = await req.json().catch(() => ({}));
    const paymentId = id || body.data?.id;
    const type = topic || body.type;

    if (type === "payment" && paymentId) {
      const payment = new Payment(client);
      const paymentData = await payment.get({ id: paymentId });

      if (paymentData.status === "approved") {
        const { user_id, course_id } = paymentData.metadata;

        if (user_id && course_id) {
          await dbConnect();

          // Evitar duplicados: Solo agregar si no existe ya una compra activa para este curso
          const user = await User.findById(user_id);
          if (user) {
            const alreadyPurchased = user.purchases?.some(
              (p: any) => p.courseId === course_id && p.status === "active"
            );

            if (!alreadyPurchased) {
              await User.findByIdAndUpdate(user_id, {
                $push: {
                  purchases: {
                    courseId: course_id,
                    purchasedAt: new Date(),
                    // 6 meses de acceso (180 días)
                    expiresAt: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000),
                    status: "active",
                  },
                },
              });
              console.log(`Purchase recorded: User ${user_id}, Course ${course_id}`);
            }
          }
        }
      }
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
