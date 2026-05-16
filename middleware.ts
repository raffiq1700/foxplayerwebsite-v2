import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const session = await getSession(request);

  // If trying to access admin pages and not logged in
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Allow login page access
    if (request.nextUrl.pathname === "/admin/login") {
      if (session) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
      return NextResponse.next();
    }

    // Redirect to login if no session
    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // Simple Redirect Manager
  const redirects: Record<string, string> = {
    "/strategies": "/academy",
    "/guide": "/academy",
    "/training": "/academy",
    "/about-us": "/about",
    "/contact-us": "/contact",
    "/faq-page": "/faq",
  };

  if (redirects[request.nextUrl.pathname]) {
    return NextResponse.redirect(new URL(redirects[request.nextUrl.pathname], request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/api/blogs/:path*", "/api/academy/:path*", "/api/settings/:path*"],
};
