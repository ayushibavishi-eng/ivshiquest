import { appliesToGrade } from "@/content/curriculum/build";
import { ENGLISH_WORLDS } from "@/content/curriculum/english";
import { MATH_WORLDS } from "@/content/curriculum/math";
import { SCIENCE_EXTRA_WORLDS } from "@/content/curriculum/science";
import { WEATHER_WORLD } from "@/content/curriculum/weather";
import type {
  CurriculumConcept,
  CurriculumNode,
  CurriculumSkill,
  CurriculumTopic,
  CurriculumWorld,
} from "@/domain/curriculum";
import type { Subject } from "@/domain/types";

const WORLDS: CurriculumWorld[] = [
  ...MATH_WORLDS,
  WEATHER_WORLD,
  ...SCIENCE_EXTRA_WORLDS,
  ...ENGLISH_WORLDS,
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
    grades: [4, 5, 6],
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

export { appliesToGrade } from "@/content/curriculum/build";
export {
  WEATHER_CONCEPTS,
  WEATHER_WORLD,
  WEATHER_WORLD_ID,
} from "@/content/curriculum/weather";
