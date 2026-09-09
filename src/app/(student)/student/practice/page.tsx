import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PracticeExperience } from "@/features/practice";
import { getPracticeSet } from "@/services/practice";

export const metadata: Metadata = {
  title: "Practice",
};

export default async function StudentPracticePage() {
  const practice = await getPracticeSet();

  if (!practice) {
    notFound();
  }

  return <PracticeExperience practice={practice} />;
}
