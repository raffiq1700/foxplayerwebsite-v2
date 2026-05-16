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

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/blogs/:path*", "/api/settings/:path*"],
};
