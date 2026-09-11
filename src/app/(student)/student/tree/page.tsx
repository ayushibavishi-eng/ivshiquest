import type { Metadata } from "next";
import { KnowledgeTreeScreen } from "@/features/knowledge-tree";
import { getCurrentStudent } from "@/services/student";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Knowledge Tree",
};

export default async function TreePage() {
  const student = await getCurrentStudent();

  return (
    <KnowledgeTreeScreen
      grade={student.grade}
      subjects={student.subjects}
    />
  );
}
