import type { Metadata } from "next";
import { ComingNext } from "@/components/layout/coming-next";
import { getLearnAreaTitle, getLearnBrowseParams } from "@/content/mocks/learn";
import { SUBJECT_LABELS, SUBJECTS, type Subject } from "@/domain";
import {
  LearningWorldScreen,
  WeatherWorldScreen,
} from "@/features/learning-world";
import { ROUTES } from "@/lib/constants";
import {
  WEATHER_WORLD_ID,
  getCurriculumWorld,
} from "@/services/curriculum";
import { getCurrentStudent } from "@/services/student";

type BrowsePageProps = {
  params: Promise<{ subject: string; areaId: string }>;
};

function isSubject(value: string): value is Subject {
  return (SUBJECTS as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return getLearnBrowseParams();
}

export async function generateMetadata({
  params,
}: BrowsePageProps): Promise<Metadata> {
  const { subject, areaId } = await params;
  const areaTitle = isSubject(subject)
    ? getLearnAreaTitle(subject, areaId)
    : undefined;

  return {
    title: areaTitle ?? "Explore",
  };
}

export default async function BrowseAreaPage({ params }: BrowsePageProps) {
  const { subject, areaId } = await params;
  const student = await getCurrentStudent();
  const world = getCurriculumWorld(areaId);

  if (world && isSubject(subject) && world.subjectId === subject) {
    if (world.id === WEATHER_WORLD_ID) {
      return <WeatherWorldScreen world={world} grade={student.grade} />;
    }
    return <LearningWorldScreen world={world} grade={student.grade} />;
  }

  const subjectLabel = isSubject(subject)
    ? SUBJECT_LABELS[subject]
    : "this subject";
  const areaTitle =
    (isSubject(subject) ? getLearnAreaTitle(subject, areaId) : undefined) ??
    "This topic";

  return (
    <ComingNext
      title={areaTitle}
      description={`A closer look at ${areaTitle} in ${subjectLabel} is coming next. For now, your personalized next step lives on Learn.`}
      backHref={ROUTES.student.learn}
      backLabel="Back to Learn"
    />
  );
}
