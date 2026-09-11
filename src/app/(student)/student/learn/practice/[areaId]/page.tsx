import type { Metadata } from "next";
import { ComingNext } from "@/components/layout/coming-next";
import { getLearnPracticeIds, getLearnPracticeTitle } from "@/content/mocks/learn";
import { PracticeExperience } from "@/features/practice";
import { ROUTES } from "@/lib/constants";
import { getPracticeSet } from "@/services/practice";
import { getCurrentStudent } from "@/services/student";

type PracticePageProps = {
  params: Promise<{ areaId: string }>;
};

export function generateStaticParams() {
  return getLearnPracticeIds().map((areaId) => ({ areaId }));
}

export async function generateMetadata({
  params,
}: PracticePageProps): Promise<Metadata> {
  const { areaId } = await params;
  const practice = await getPracticeSet(areaId);
  const title = practice?.topicTitle ?? getLearnPracticeTitle(areaId);

  return {
    title: title ? `Practice ${title}` : "Practice",
  };
}

export default async function LearnPracticePage({ params }: PracticePageProps) {
  const { areaId } = await params;
  const practice = await getPracticeSet(areaId);

  if (practice) {
    const student = await getCurrentStudent();
    return <PracticeExperience practice={practice} grade={student.grade} />;
  }

  const title = getLearnPracticeTitle(areaId) ?? "This area";

  return (
    <ComingNext
      title={title}
      description="A calm practice space will live here next. You'll strengthen ideas without a pile of drills, and never with language that makes a learner feel behind."
      backHref={ROUTES.student.learn}
      backLabel="Back to Learn"
    />
  );
}
