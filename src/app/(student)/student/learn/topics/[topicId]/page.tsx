import type { Metadata } from "next";
import { ComingNext } from "@/components/layout/coming-next";
import {
  getLearnTopicIds,
  getLearnTopicMeta,
} from "@/content/mocks/learn";
import { LessonExperience } from "@/features/lesson";
import {
  ConceptJourney,
  ConceptOverview,
  LearningWorldScreen,
  TopicJourneyScreen,
  WeatherWorldScreen,
} from "@/features/learning-world";
import { ROUTES } from "@/lib/constants";
import {
  WEATHER_WORLD_ID,
  appliesToGrade,
  getCurriculumConcept,
  getCurriculumTopic,
  getCurriculumWorld,
  getNextConceptInWorld,
  getWorldForNode,
  isCurriculumConceptId,
  isCurriculumTopicId,
  isCurriculumWorldId,
} from "@/services/curriculum";
import { getCompleteLesson } from "@/services/lessons";
import { getCurrentStudent } from "@/services/student";

type TopicStartPageProps = {
  params: Promise<{ topicId: string }>;
};

export function generateStaticParams() {
  return getLearnTopicIds().map((topicId) => ({ topicId }));
}

export async function generateMetadata({
  params,
}: TopicStartPageProps): Promise<Metadata> {
  const { topicId } = await params;
  const meta = getLearnTopicMeta(topicId);

  return {
    title: meta?.title ?? "Topic",
  };
}

export default async function TopicStartPage({ params }: TopicStartPageProps) {
  const { topicId } = await params;
  const student = await getCurrentStudent();
  const grade = student.grade;

  if (isCurriculumWorldId(topicId)) {
    const world = getCurriculumWorld(topicId);
    if (world) {
      if (world.id === WEATHER_WORLD_ID) {
        return <WeatherWorldScreen world={world} grade={grade} />;
      }
      return <LearningWorldScreen world={world} grade={grade} />;
    }
  }

  if (isCurriculumTopicId(topicId)) {
    const topic = getCurriculumTopic(topicId);
    const world = topic ? getWorldForNode(topic.id) : undefined;
    if (topic && world) {
      return (
        <TopicJourneyScreen
          topic={topic}
          worldTitle={world.title}
          worldId={world.id}
          grade={grade}
        />
      );
    }
  }

  if (isCurriculumConceptId(topicId)) {
    const concept = getCurriculumConcept(topicId);
    const world = concept ? getWorldForNode(concept.id) : undefined;
    if (concept && world) {
      const pathNext = getNextConceptInWorld(world, concept.id, grade);
      const pathNextRef = pathNext
        ? { id: pathNext.id, title: pathNext.title }
        : undefined;
      const completeLesson = getCompleteLesson(concept.id, grade);
      if (completeLesson) {
        let lessonNext: { id: string; title: string } | undefined;
        for (const id of completeLesson.nextConceptIds) {
          const item = getCurriculumConcept(id);
          if (item && appliesToGrade(item.grades, grade)) {
            lessonNext = { id: item.id, title: item.title };
            break;
          }
        }
        return (
          <LessonExperience
            lesson={completeLesson}
            worldTitle={world.title}
            worldId={world.id}
            nextConcept={lessonNext ?? pathNextRef}
          />
        );
      }
      if (concept.experience) {
        return (
          <ConceptJourney
            concept={concept}
            worldTitle={world.title}
            worldId={world.id}
            nextConcept={pathNextRef}
          />
        );
      }

      return (
        <ConceptOverview
          concept={concept}
          worldTitle={world.title}
          worldId={world.id}
          nextConcept={pathNextRef}
        />
      );
    }
  }

  const meta = getLearnTopicMeta(topicId);
  const title = meta?.title ?? "This topic";
  const isCuriosity = meta?.kind === "curiosity";

  return (
    <ComingNext
      title={title}
      description={
        isCuriosity
          ? 'This short exploration will start like Discovery — with curiosity, not a chapter. Ivshi will ask "What do you already know?" then a small question. That start is coming next.'
          : 'Ivshi will begin with "What do you already know?" then a small question — not a long lesson. If you already understand, you\'ll move forward. If you need another look, you\'ll get a different explanation. That start is coming next.'
      }
      backHref={ROUTES.student.learn}
      backLabel="Back to Learn"
    />
  );
}
