import type { Metadata } from "next";
import { ComingNext } from "@/components/layout/coming-next";
import {
  getLearnTopicIds,
  getLearnTopicMeta,
} from "@/content/mocks/learn";
import { ROUTES } from "@/lib/constants";

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
