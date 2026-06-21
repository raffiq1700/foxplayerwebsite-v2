import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secretKey = "foxplayer_secret_key_change_this";
const key = new TextEncoder().encode(secretKey);

export async function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  // Redirect non-www to www
  if (host === "foxplayer.co.in") {
    const url = request.nextUrl.clone();
    url.host = "www.foxplayer.co.in";
    return NextResponse.redirect(url, 301);
  }

  const { pathname } = request.nextUrl;

  // 1. Handle Redirects (Legacy SEO support)
  const redirects: Record<string, string> = {
    "/strategies": "/academy",
    "/guide": "/academy",
    "/training": "/academy",
    "/about-us": "/about",
    "/contact-us": "/contact",
    "/faq-page": "/faq",
  };

  if (redirects[pathname]) {
    return NextResponse.redirect(new URL(redirects[pathname], request.url), 301);
  }

  // 2. Admin Protection
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/blogs") || pathname.startsWith("/api/academy") || pathname.startsWith("/api/jobs")) {
    // Exclude login page from protection loop
    if (pathname === "/admin/login" || pathname === "/api/auth/login") {
      return NextResponse.next();
    }

    const token = request.cookies.get("auth_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      await jwtVerify(token, key, { algorithms: ["HS256"] });
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/api/blogs/:path*", "/api/academy/:path*", "/api/jobs/:path*", "/strategies", "/guide", "/about-us", "/contact-us"],
};
