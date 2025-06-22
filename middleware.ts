import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("Authentication")?.value;
  const { pathname } = request.nextUrl;

  const isAuthPage = ["/sign-in", "/sign-up"].includes(pathname);
  const isUserPage = pathname.startsWith("/user");
  const isAdminPage = pathname.startsWith("/admin");


  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }


  if (!token && (isUserPage || isAdminPage)) {
    return NextResponse.redirect(new URL("/", request.url));
  }


  if (token && isAdminPage) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const decoded: any = jwtDecode(token);
      if (decoded.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/", request.url));
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sign-in", "/sign-up", "/admin/:path*", "/user/:path*"],
};
