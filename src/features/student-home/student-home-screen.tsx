import type { StudentHome } from "@/domain";
import { ContinueLearningCard } from "@/features/student-home/continue-learning-card";
import { DiscoveryHero } from "@/features/student-home/discovery-hero";
import { HomeHeader } from "@/features/student-home/home-header";
import { KnowledgeTreePreview } from "@/features/student-home/knowledge-tree-preview";
import { QuestCard } from "@/features/student-home/quest-card";
import { TeachItCard } from "@/features/student-home/teach-it-card";

type StudentHomeScreenProps = {
  home: StudentHome;
};

export function StudentHomeScreen({ home }: StudentHomeScreenProps) {
  return (
    <div className="flex flex-1 flex-col gap-10 pb-4">
      <HomeHeader displayName={home.student.displayName} />
      <DiscoveryHero discovery={home.todayDiscovery} />
      <QuestCard quest={home.activeQuest} />
      <ContinueLearningCard item={home.continueLearning} />
      <KnowledgeTreePreview summary={home.knowledgeTree} />
      <TeachItCard teachIt={home.teachIt} />
    </div>
  );
}
