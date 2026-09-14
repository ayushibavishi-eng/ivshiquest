import type { Metadata } from "next";
import { LearningJourneyScreen } from "@/features/learning-journey";
import { getCurrentStudent } from "@/services/student";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "My Learning Journey",
};

export default async function JourneyPage() {
  const student = await getCurrentStudent();

  return (
    <LearningJourneyScreen
      grade={student.grade}
      subjects={student.subjects}
    />
  );
}
