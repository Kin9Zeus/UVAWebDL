import { Schema, model, models } from "mongoose";

const LeadSchema = new Schema(
  {
    service: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    city: { type: String },
    message: { type: String },
    budget: { type: Number },
    timeline: { type: String },
    contactMethod: { type: String },
  },
  { timestamps: true }
);

export default models.Lead || model("Lead", LeadSchema);