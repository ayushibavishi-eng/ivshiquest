import { appliesToGrade } from "@/content/curriculum/build";
import { ENGLISH_WORLDS } from "@/content/curriculum/english";
import { ENGLISH_MIDDLE_WORLDS } from "@/content/curriculum/english-middle";
import { ENGLISH_NCERT_WORLDS } from "@/content/curriculum/english-ncert";
import { EVS_WORLDS } from "@/content/curriculum/evs";
import { MATH_WORLDS } from "@/content/curriculum/math";
import { MATH_MIDDLE_WORLDS } from "@/content/curriculum/math-middle";
import { MATH_NCERT_WORLDS } from "@/content/curriculum/math-ncert";
import { SCIENCE_EXTRA_WORLDS } from "@/content/curriculum/science";
import { SCIENCE_MIDDLE_WORLDS } from "@/content/curriculum/science-middle";
import { SCIENCE_NCERT_WORLDS } from "@/content/curriculum/science-ncert";
import { WEATHER_WORLD } from "@/content/curriculum/weather";
import { isCompleteLessonConcept } from "@/content/lessons";
import {
  CURRICULUM_GRADES,
  type CurriculumConcept,
  type CurriculumGrade,
  type CurriculumNode,
  type CurriculumSkill,
  type CurriculumTopic,
  type CurriculumWorld,
} from "@/domain/curriculum";
import { SUBJECTS, type Subject } from "@/domain/types";

export const GOLD_STANDARD_CONCEPT_IDS = [
  "equivalent-fractions",
  "science-plants-photosynthesis",
  "english-sva-simple",
] as const;

const WORLDS: CurriculumWorld[] = [
  ...MATH_WORLDS,
  ...MATH_MIDDLE_WORLDS,
  ...MATH_NCERT_WORLDS,
  WEATHER_WORLD,
  ...SCIENCE_EXTRA_WORLDS,
  ...SCIENCE_MIDDLE_WORLDS,
  ...SCIENCE_NCERT_WORLDS,
  ...EVS_WORLDS,
  ...ENGLISH_WORLDS,
  ...ENGLISH_MIDDLE_WORLDS,
  ...ENGLISH_NCERT_WORLDS,
];

const worldById = new Map(WORLDS.map((world) => [world.id, world]));

const ALL_TOPICS: CurriculumTopic[] = WORLDS.flatMap((world) => world.topics);
const topicById = new Map(ALL_TOPICS.map((topic) => [topic.id, topic]));

const ALL_CONCEPTS: CurriculumConcept[] = WORLDS.flatMap(
  (world) => world.concepts,
);
const conceptById = new Map(ALL_CONCEPTS.map((concept) => [concept.id, concept]));

const ALL_SKILLS: CurriculumSkill[] = ALL_CONCEPTS.flatMap(
  (concept) => concept.skills,
);
const skillById = new Map(ALL_SKILLS.map((skill) => [skill.id, skill]));

export function getCurriculumWorlds(): CurriculumWorld[] {
  return WORLDS;
}

export function getCurriculumWorld(id: string): CurriculumWorld | undefined {
  return worldById.get(id);
}

export function getCurriculumTopic(id: string): CurriculumTopic | undefined {
  return topicById.get(id);
}

export function getCurriculumConcept(id: string): CurriculumConcept | undefined {
  return conceptById.get(id);
}

export function getCurriculumSkill(id: string): CurriculumSkill | undefined {
  return skillById.get(id);
}

export function getCurriculumNode(id: string): CurriculumNode | undefined {
  return (
    worldById.get(id) ??
    topicById.get(id) ??
    conceptById.get(id) ??
    skillById.get(id)
  );
}

export function getWorldForNode(id: string): CurriculumWorld | undefined {
  const world = worldById.get(id);
  if (world) {
    return world;
  }

  const topic = topicById.get(id);
  if (topic) {
    return worldById.get(topic.parentId);
  }

  const concept = conceptById.get(id);
  if (concept) {
    const parentWorld = worldById.get(concept.parentId);
    if (parentWorld) {
      return parentWorld;
    }
    const parentTopic = topicById.get(concept.parentId);
    if (parentTopic) {
      return worldById.get(parentTopic.parentId);
    }
  }

  const skill = skillById.get(id);
  if (skill) {
    return getWorldForNode(skill.parentId);
  }

  return undefined;
}

export function getCurriculumNodeTitle(id: string): string | undefined {
  return getCurriculumNode(id)?.title;
}

export function getAllCurriculumTopicIds(): string[] {
  return [
    ...WORLDS.map((world) => world.id),
    ...ALL_TOPICS.map((topic) => topic.id),
    ...ALL_CONCEPTS.map((concept) => concept.id),
  ];
}

export function isCurriculumWorldId(id: string): boolean {
  return worldById.has(id);
}

export function isCurriculumTopicId(id: string): boolean {
  return topicById.has(id);
}

export function isCurriculumConceptId(id: string): boolean {
  return conceptById.has(id);
}

export function getCurriculumWorldsForSubject(
  subject: Subject,
  grade?: number,
): CurriculumWorld[] {
  return WORLDS.filter((world) => {
    if (world.subjectId !== subject) {
      return false;
    }
    if (grade === undefined) {
      return true;
    }
    return appliesToGrade(world.grades, grade);
  });
}

export function filterConceptsForGrade(
  concepts: CurriculumConcept[],
  grade: number,
): CurriculumConcept[] {
  return concepts.filter((concept) => appliesToGrade(concept.grades, grade));
}

export function filterTopicsForGrade(
  topics: CurriculumTopic[],
  grade: number,
): CurriculumTopic[] {
  return topics.filter((topic) => appliesToGrade(topic.grades, grade));
}

export function getWorldPathForGrade(
  world: CurriculumWorld,
  grade: number,
): CurriculumConcept[] {
  const topicIds = new Set(
    filterTopicsForGrade(world.topics, grade).map((topic) => topic.id),
  );
  return world.concepts.filter((concept) => {
    if (!appliesToGrade(concept.grades, grade)) {
      return false;
    }
    if (concept.parentId === world.id) {
      return true;
    }
    return topicIds.has(concept.parentId);
  });
}

export function getNextConceptInWorld(
  world: CurriculumWorld,
  conceptId: string,
  grade: number,
): CurriculumConcept | undefined {
  const path = getWorldPathForGrade(world, grade);
  const currentIndex = path.findIndex((concept) => concept.id === conceptId);
  if (currentIndex < 0) {
    return undefined;
  }
  return path[currentIndex + 1];
}

export type CurriculumCoverage = {
  subjects: Subject[];
  grades: number[];
  worlds: number;
  worldsBySubject: Record<Subject, number>;
  topics: number;
  concepts: number;
  skills: number;
  conceptsWithFullExperience: number;
  conceptsTaxonomyOnly: number;
  fullExperienceIds: string[];
  worldsByCategory: { subject: Subject; category: string; count: number }[];
};

export function getCurriculumCoverage(): CurriculumCoverage {
  const fullExperienceIds = ALL_CONCEPTS.filter(
    (concept) => concept.experience,
  ).map((concept) => concept.id);

  const worldsBySubject = {
    math: WORLDS.filter((world) => world.subjectId === "math").length,
    science: WORLDS.filter((world) => world.subjectId === "science").length,
    english: WORLDS.filter((world) => world.subjectId === "english").length,
  } as Record<Subject, number>;

  const categoryMap = new Map<string, number>();
  for (const world of WORLDS) {
    const key = `${world.subjectId}::${world.category ?? "Ungrouped"}`;
    categoryMap.set(key, (categoryMap.get(key) ?? 0) + 1);
  }

  return {
    subjects: ["math", "science", "english"],
    grades: [...CURRICULUM_GRADES],
    worlds: WORLDS.length,
    worldsBySubject,
    topics: ALL_TOPICS.length,
    concepts: ALL_CONCEPTS.length,
    skills: ALL_SKILLS.length,
    conceptsWithFullExperience: fullExperienceIds.length,
    conceptsTaxonomyOnly: ALL_CONCEPTS.length - fullExperienceIds.length,
    fullExperienceIds,
    worldsByCategory: [...categoryMap.entries()].map(([key, count]) => {
      const [subject, category] = key.split("::") as [Subject, string];
      return { subject, category, count };
    }),
  };
}

function emptySubjectCounts(): Record<
  Subject,
  { worlds: number; topics: number; concepts: number; skills: number; items: number }
> {
  return {
    math: { worlds: 0, topics: 0, concepts: 0, skills: 0, items: 0 },
    science: { worlds: 0, topics: 0, concepts: 0, skills: 0, items: 0 },
    english: { worlds: 0, topics: 0, concepts: 0, skills: 0, items: 0 },
  };
}

export function findDuplicateCurriculumIds(): string[] {
  const seen = new Set<string>();
  const duplicates: string[] = [];
  const ids = [
    ...WORLDS.map((world) => world.id),
    ...ALL_TOPICS.map((topic) => topic.id),
    ...ALL_CONCEPTS.map((concept) => concept.id),
    ...ALL_SKILLS.map((skill) => skill.id),
  ];
  for (const id of ids) {
    if (seen.has(id)) {
      duplicates.push(id);
    } else {
      seen.add(id);
    }
  }
  return duplicates;
}

export type CatalogueSubjectCounts = {
  worlds: number;
  topics: number;
  concepts: number;
  skills: number;
  items: number;
};

export type GradeCatalogueAudit = {
  grade: CurriculumGrade;
  worlds: number;
  topics: number;
  concepts: number;
  skills: number;
  items: number;
  bySubject: Record<Subject, CatalogueSubjectCounts>;
  domains: Record<Subject, string[]>;
  topicsCovered: {
    subject: Subject;
    domain: string;
    world: string;
    topic: string;
  }[];
};

export type NcertVerificationItem = {
  id: string;
  kind: "world" | "topic" | "concept";
  title: string;
  subject: Subject;
  book?: string;
  chapter?: string;
  note?: string;
};

export type CurriculumCatalogueAudit = {
  grades: CurriculumGrade[];
  totals: CatalogueSubjectCounts & { worlds: number; topics: number; concepts: number; skills: number };
  byGrade: GradeCatalogueAudit[];
  goldStandardConceptIds: string[];
  conceptsWithCompleteLesson: string[];
  conceptsWithJourneyExperience: string[];
  conceptsWithAnyAuthoredExperience: string[];
  catalogueOnlyConceptCount: number;
  catalogueOnlyConceptIds: string[];
  ncertNeedsVerification: NcertVerificationItem[];
  gaps: string[];
};

function uniqueSorted(values: string[]): string[] {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

export function getCurriculumCatalogueAudit(): CurriculumCatalogueAudit {
  const conceptsWithCompleteLesson = uniqueSorted(
    ALL_CONCEPTS.filter((concept) => isCompleteLessonConcept(concept.id)).map(
      (concept) => concept.id,
    ),
  );
  const conceptsWithJourneyExperience = uniqueSorted(
    ALL_CONCEPTS.filter((concept) => concept.experience).map((concept) => concept.id),
  );
  const conceptsWithAnyAuthoredExperience = uniqueSorted([
    ...conceptsWithCompleteLesson,
    ...conceptsWithJourneyExperience,
  ]);
  const authored = new Set(conceptsWithAnyAuthoredExperience);
  const catalogueOnlyConceptIds = uniqueSorted(
    ALL_CONCEPTS.filter((concept) => !authored.has(concept.id)).map(
      (concept) => concept.id,
    ),
  );

  const ncertNeedsVerification: NcertVerificationItem[] = [];
  const pushNcert = (
    kind: NcertVerificationItem["kind"],
    id: string,
    title: string,
    subject: Subject,
    ncert: CurriculumWorld["ncert"],
  ) => {
    if (!ncert || ncert.status !== "needs-verification") {
      return;
    }
    ncertNeedsVerification.push({
      id,
      kind,
      title,
      subject,
      book: ncert.book,
      chapter: ncert.chapter,
      note: ncert.note,
    });
  };

  for (const world of WORLDS) {
    pushNcert("world", world.id, world.title, world.subjectId, world.ncert);
    for (const topic of world.topics) {
      pushNcert("topic", topic.id, topic.title, topic.subjectId, topic.ncert);
    }
    for (const concept of world.concepts) {
      pushNcert("concept", concept.id, concept.title, concept.subjectId, concept.ncert);
    }
  }

  const byGrade: GradeCatalogueAudit[] = CURRICULUM_GRADES.map((grade) => {
    const worlds = WORLDS.filter((world) => appliesToGrade(world.grades, grade));
    const topics = ALL_TOPICS.filter((topic) => appliesToGrade(topic.grades, grade));
    const concepts = ALL_CONCEPTS.filter((concept) =>
      appliesToGrade(concept.grades, grade),
    );
    const skills = ALL_SKILLS.filter((skill) => appliesToGrade(skill.grades, grade));
    const bySubject = emptySubjectCounts();
    const domainSets: Record<Subject, Set<string>> = {
      math: new Set(),
      science: new Set(),
      english: new Set(),
    };

    for (const world of worlds) {
      bySubject[world.subjectId].worlds += 1;
      domainSets[world.subjectId].add(world.category ?? "Ungrouped");
    }
    for (const topic of topics) {
      bySubject[topic.subjectId].topics += 1;
    }
    for (const concept of concepts) {
      bySubject[concept.subjectId].concepts += 1;
    }
    for (const skill of skills) {
      bySubject[skill.subjectId].skills += 1;
    }
    for (const subject of SUBJECTS) {
      const row = bySubject[subject];
      row.items = row.worlds + row.topics + row.concepts + row.skills;
    }

    const topicRows = topics.map((topic) => {
      const world = worldById.get(topic.parentId);
      return {
        subject: topic.subjectId,
        domain: world?.category ?? topic.category ?? "Ungrouped",
        world: world?.title ?? topic.parentId,
        topic: topic.title,
      };
    });

    return {
      grade,
      worlds: worlds.length,
      topics: topics.length,
      concepts: concepts.length,
      skills: skills.length,
      items: worlds.length + topics.length + concepts.length + skills.length,
      bySubject,
      domains: {
        math: uniqueSorted([...domainSets.math]),
        science: uniqueSorted([...domainSets.science]),
        english: uniqueSorted([...domainSets.english]),
      },
      topicsCovered: topicRows,
    };
  });

  const gaps: string[] = [];
  if (findDuplicateCurriculumIds().length > 0) {
    gaps.push("Duplicate curriculum IDs were detected.");
  }
  const missingGoldStandard = GOLD_STANDARD_CONCEPT_IDS.filter(
    (id) => !conceptsWithCompleteLesson.includes(id),
  );
  if (missingGoldStandard.length > 0) {
    gaps.push(
      "A gold-standard proof lesson is missing from complete lessons.",
    );
  }
  gaps.push(
    "Grades 4–5 EVS is catalogued under the science subject id with domain “EVS / The World Around Us” so the existing Knowledge Tree subject root stays compatible.",
  );
  gaps.push(
    "NCERT Social Science for Grades 6–8 is not in this V1 map (Math, Science/EVS, and English only).",
  );
  gaps.push(
    "Most catalogue concepts do not yet have authored lesson experiences; they should appear as Coming soon, not as hidden.",
  );

  return {
    grades: [...CURRICULUM_GRADES],
    totals: {
      worlds: WORLDS.length,
      topics: ALL_TOPICS.length,
      concepts: ALL_CONCEPTS.length,
      skills: ALL_SKILLS.length,
      items:
        WORLDS.length +
        ALL_TOPICS.length +
        ALL_CONCEPTS.length +
        ALL_SKILLS.length,
    },
    byGrade,
    goldStandardConceptIds: [...GOLD_STANDARD_CONCEPT_IDS],
    conceptsWithCompleteLesson,
    conceptsWithJourneyExperience,
    conceptsWithAnyAuthoredExperience,
    catalogueOnlyConceptCount: catalogueOnlyConceptIds.length,
    catalogueOnlyConceptIds,
    ncertNeedsVerification,
    gaps,
  };
}

export { appliesToGrade } from "@/content/curriculum/build";
export {
  WEATHER_CONCEPTS,
  WEATHER_WORLD,
  WEATHER_WORLD_ID,
} from "@/content/curriculum/weather";
