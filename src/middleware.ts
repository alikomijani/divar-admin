import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { refreshTokenAction } from "./actions/auth/refresh-token";

// 1. Specify protected and public routes
const protectedRoutes = [
  "/admin/dashboard",
  "/seller/dashboard",
  "/profile",
  "/checkout",
];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.some((protectedRoute) =>
    path.startsWith(protectedRoute)
  );

  // 3. Decrypt the session from the cookie
  const accessToken = (await cookies()).get("accessToken")?.value;
  const refreshToken = (await cookies()).get("refreshToken")?.value;
  const isLogin = accessToken && refreshToken;
  const isLogout = !accessToken && !refreshToken;
  const needToRefresh = !accessToken && refreshToken;
  if (needToRefresh) {
    await refreshTokenAction();
    return NextResponse.redirect(new URL(req.nextUrl, req.nextUrl));
  }
  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && isLogout) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  // ToDo: redirect base on user role
  if (path.startsWith("/auth") && isLogin) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
