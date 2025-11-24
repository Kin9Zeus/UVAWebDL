import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";
const COOKIE_NAME = "uva_token";

export type AuthPayload = { uid: string; role: "admin" | "user" } & jwt.JwtPayload;

export function signToken(payload: { uid: string; role: "admin" | "user" }) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): AuthPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AuthPayload;
  } catch {
    return null;
  }
}

export async function setAuthCookie(token: string) {
  const jar = await cookies();
  jar.set({
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearAuthCookie() {
  const jar = await cookies();
  jar.set({ name: COOKIE_NAME, value: "", maxAge: 0, path: "/" });
}

export async function getAuthToken() {
  const jar = await cookies();
  return jar.get(COOKIE_NAME)?.value || null;
}
