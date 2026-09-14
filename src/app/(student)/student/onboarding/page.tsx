import type { Metadata } from "next";
import { OnboardingScreen } from "@/features/student-onboarding";

export const metadata: Metadata = {
  title: "Welcome",
};

export const dynamic = "force-dynamic";

export default function OnboardingPage() {
  return <OnboardingScreen />;
}
