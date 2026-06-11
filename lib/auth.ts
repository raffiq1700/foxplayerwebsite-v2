import { SignJWT, jwtVerify, JWTPayload } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "foxplayer_secret_key_change_this"; // In production, use process.env.JWT_SECRET
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
}

export async function decrypt(input: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    return null;
  }
}

export async function login(username: string) {
  // Create the session
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const session = await encrypt({ username, expires });

  // Save the session in a cookie
  cookies().set("auth_token", session, { expires, httpOnly: true, secure: process.env.NODE_ENV === "production" });
}

export async function logout() {
  // Destroy the session
  cookies().set("auth_token", "", { expires: new Date(0) });
}

export async function getSession(req?: NextRequest) {
  try {
    let session;
    
    if (req) {
      session = req.cookies.get("auth_token")?.value;
    } else {
      session = cookies().get("auth_token")?.value;
    }

    if (!session) return null;
    return await decrypt(session);
  } catch {
    return null;
  }
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("auth_token")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "auth_token",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
