import type { Metadata } from "next";
import { MeScreen } from "@/features/student-me";
import { getCurrentStudent } from "@/services/student";

export const metadata: Metadata = {
  title: "Me",
};

export const dynamic = "force-dynamic";

export default async function MePage() {
  const student = await getCurrentStudent();

  return <MeScreen student={student} />;
}
