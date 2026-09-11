import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PracticeExperience } from "@/features/practice";
import { getPracticeSet } from "@/services/practice";
import { getCurrentStudent } from "@/services/student";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Practice",
};

export default async function StudentPracticePage() {
  const [practice, student] = await Promise.all([
    getPracticeSet(),
    getCurrentStudent(),
  ]);

  if (!practice) {
    notFound();
  }

  return <PracticeExperience practice={practice} grade={student.grade} />;
}
