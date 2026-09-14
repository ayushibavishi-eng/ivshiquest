import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  LEARNER_PROFILE_COOKIE,
  parseLearnerProfile,
} from "@/services/student/learner-profile";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/student")) {
    return NextResponse.next();
  }

  const profile = parseLearnerProfile(
    request.cookies.get(LEARNER_PROFILE_COOKIE)?.value,
  );
  const isOnboarding = pathname.startsWith("/student/onboarding");

  if (!profile && !isOnboarding) {
    const url = request.nextUrl.clone();
    url.pathname = "/student/onboarding";
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (profile && isOnboarding) {
    const url = request.nextUrl.clone();
    url.pathname = "/student";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/student", "/student/:path*"],
};
