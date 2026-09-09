import type { Metadata } from "next";
import { StudentHomeScreen } from "@/features/student-home";
import { getStudentHome } from "@/services/home";

export const metadata: Metadata = {
  title: "Home",
};

export default async function StudentHomePage() {
  const home = await getStudentHome();

  return <StudentHomeScreen home={home} />;
}
