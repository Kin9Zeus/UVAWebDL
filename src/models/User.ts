import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    // Perfil
    occupation: { type: String },
    age: { type: Number },
    profession: { type: String },
    city: { type: String },
    country: { type: String },
    gender: { type: String },
    // Compras (placeholder)
    purchases: [
      {
        courseId: String,
        purchasedAt: Date,
        expiresAt: Date,
        status: { type: String, enum: ["active", "expired"], default: "active" },
      },
    ],
  },
  { timestamps: true }
);

export type UserDoc = {
  _id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: "admin" | "user";
  occupation?: string;
  age?: number;
  profession?: string;
  city?: string;
  country?: string;
  gender?: string;
  purchases?: {
    courseId: string;
    purchasedAt: Date;
    expiresAt: Date;
    status: "active" | "expired";
  }[];
};

export default models.User || model("User", UserSchema);
