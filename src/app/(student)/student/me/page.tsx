import type { Metadata } from "next";
import { ComingNext } from "@/components/layout/coming-next";
import { getCurrentStudent } from "@/services/student";

export const metadata: Metadata = {
  title: "Me",
};

export default async function MePage() {
  const student = await getCurrentStudent();

  return (
    <ComingNext
      title={student.displayName}
      description={`Grade ${student.grade}. Your profile and settings will live here next.`}
    />
  );
}
