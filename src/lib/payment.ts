import { MercadoPagoConfig, Payment } from "mercadopago";
import { dbConnect } from "@/lib/db";
import User from "@/models/User";

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN || "" });

export async function verifyAndEnrollUser(paymentId: string) {
  try {
    const payment = new Payment(client);
    const paymentData = await payment.get({ id: paymentId });

    if (paymentData.status === "approved") {
      const { user_id, course_id } = paymentData.metadata;

      if (user_id && course_id) {
        await dbConnect();

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
                  expiresAt: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000), // 180 days
                  status: "active",
                },
              },
            });
            return { success: true, message: "Inscripción completada" };
          }
          return { success: true, message: "Ya estabas inscrito" };
        }
      }
    }
    return { success: false, message: "Pago no aprobado o datos inválidos" };
  } catch (error) {
    console.error("Error verifying payment:", error);
    return { success: false, message: "Error al verificar el pago" };
  }
}
