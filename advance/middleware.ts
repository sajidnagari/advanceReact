import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // If token exists and user is already on the /navbar route, do not redirect
  if (token && request.nextUrl.pathname === "/navbar") {
    return NextResponse.next(); // Allow access to /navbar
  }

  // If no token and user is on the login page ("/"), do not redirect
  if (!token && request.nextUrl.pathname === "/") {
    return NextResponse.next(); // Allow access to login page
  }

  // If token exists, redirect to /navbar
  if (token) {
    return NextResponse.redirect(new URL("/navbar", request.url));
  }

  // If no token, redirect to the login page ("/")
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/navbar"], // Apply this middleware to the /navbar and login routes
};
