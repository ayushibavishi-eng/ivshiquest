"use client";

import { useMemo, useState } from "react";
import type { StudentLearn, Subject } from "@/domain";
import { ExploreBySubject } from "@/features/learn/explore-by-subject";
import { ExploreSomethingNew } from "@/features/learn/explore-something-new";
import { KeepGrowing } from "@/features/learn/keep-growing";
import { LearnHeader } from "@/features/learn/learn-header";
import { LearningConnections } from "@/features/learn/learning-connections";
import { RecommendedCard } from "@/features/learn/recommended-card";
import { StrengthenThis } from "@/features/learn/strengthen-this";
import { SubjectSelector } from "@/features/learn/subject-selector";
import { LearnSection } from "@/features/learn/learn-section";

type LearnScreenProps = {
  learn: StudentLearn;
};

export function LearnScreen({ learn }: LearnScreenProps) {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(
    learn.defaultSubject,
  );
  const path = useMemo(
    () => learn.paths[selectedSubject],
    [learn.paths, selectedSubject],
  );

  return (
    <div className="flex flex-1 flex-col gap-10 pb-4">
      <LearnHeader displayName={learn.student.displayName} />
      <SubjectSelector
        subjects={learn.student.subjects}
        selected={selectedSubject}
        onSelect={setSelectedSubject}
      />
      <LearnSection headingId="recommended-heading" title="Recommended for you">
        <RecommendedCard recommendation={path.recommended} />
      </LearnSection>
      <KeepGrowing concepts={path.keepGrowing} />
      <StrengthenThis area={path.strengthen} />
      <ExploreSomethingNew exploration={path.exploreNew} />
      <ExploreBySubject subject={selectedSubject} areas={path.subjectAreas} />
      <LearningConnections connections={path.connections} />
    </div>
  );
}
