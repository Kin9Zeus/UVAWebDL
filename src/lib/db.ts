import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  console.warn("MONGODB_URI no está definido en el entorno.");
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseConn: { conn: mongoose.Mongoose | null; promise: Promise<mongoose.Mongoose> | null } | undefined;
}

let cached = global.mongooseConn;

if (!cached) {
  global.mongooseConn = { conn: null, promise: null };
  cached = global.mongooseConn;
}

export async function dbConnect(): Promise<mongoose.Mongoose> {
  if (cached!.conn) return cached!.conn as mongoose.Mongoose;
  if (!cached!.promise) {
    cached!.promise = mongoose.connect(MONGODB_URI, { dbName: "uva" });
  }
  cached!.conn = await cached!.promise;
  return cached!.conn as mongoose.Mongoose;
}
