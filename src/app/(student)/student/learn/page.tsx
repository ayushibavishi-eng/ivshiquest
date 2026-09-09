import type { Metadata } from "next";
import { LearnScreen } from "@/features/learn";
import { getStudentLearn } from "@/services/learn";

export const metadata: Metadata = {
  title: "Learn",
};

export default async function LearnPage() {
  const learn = await getStudentLearn();

  return <LearnScreen learn={learn} />;
}
