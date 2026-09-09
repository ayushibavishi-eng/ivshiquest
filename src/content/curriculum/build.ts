import type {
  CurriculumConcept,
  CurriculumExperience,
  CurriculumGrade,
  CurriculumSkill,
  CurriculumTopic,
  CurriculumWorld,
} from "@/domain/curriculum";
import type { Subject } from "@/domain/types";

export const G4: CurriculumGrade[] = [4];
export const G5: CurriculumGrade[] = [5];
export const G6: CurriculumGrade[] = [6];
export const G45: CurriculumGrade[] = [4, 5];
export const G56: CurriculumGrade[] = [5, 6];
export const G46: CurriculumGrade[] = [4, 6];
export const G456: CurriculumGrade[] = [4, 5, 6];

export type ConceptSpec = {
  id: string;
  title: string;
  grades: CurriculumGrade[];
  hook: string;
  goal: string;
  explainer: string;
  skills: string[];
  prereq?: string[];
  experience?: CurriculumExperience;
};

export type TopicSpec = {
  id: string;
  title: string;
  grades: CurriculumGrade[];
  hook: string;
  goal: string;
  explainer: string;
  concepts: ConceptSpec[];
};

export type WorldSpec = {
  id: string;
  title: string;
  subject: Subject;
  category: string;
  grades: CurriculumGrade[];
  hook: string;
  concepts?: ConceptSpec[];
  topics?: TopicSpec[];
};

function slugSkill(parentId: string, index: number, title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 28);
  return `${parentId}-sk-${String(index + 1)}-${slug}`;
}

export function C(
  id: string,
  title: string,
  grades: CurriculumGrade[],
  hook: string,
  goal: string,
  explainer: string,
  skills: string[],
  extras?: { prereq?: string[]; experience?: CurriculumExperience },
): ConceptSpec {
  return {
    id,
    title,
    grades,
    hook,
    goal,
    explainer,
    skills,
    prereq: extras?.prereq,
    experience: extras?.experience,
  };
}

export function T(
  id: string,
  title: string,
  grades: CurriculumGrade[],
  hook: string,
  goal: string,
  explainer: string,
  concepts: ConceptSpec[],
): TopicSpec {
  return { id, title, grades, hook, goal, explainer, concepts };
}

function compileSkills(
  subject: Subject,
  parentId: string,
  titles: string[],
  grades: CurriculumGrade[],
): CurriculumSkill[] {
  return titles.map((title, index) => ({
    id: slugSkill(parentId, index, title),
    title,
    subjectId: subject,
    parentId,
    grades,
    kind: "skill" as const,
  }));
}

function compileConcept(
  subject: Subject,
  parentId: string,
  spec: ConceptSpec,
  category?: string,
): CurriculumConcept {
  return {
    id: spec.id,
    title: spec.title,
    subjectId: subject,
    parentId,
    grades: spec.grades,
    kind: "concept",
    category,
    hook: spec.hook,
    goal: spec.goal,
    explainer: spec.explainer,
    skills: compileSkills(subject, spec.id, spec.skills, spec.grades),
    prerequisites: spec.prereq,
    experience: spec.experience,
  };
}

export function compileWorld(spec: WorldSpec): CurriculumWorld {
  const topics: CurriculumTopic[] = (spec.topics ?? []).map((topic) => ({
    id: topic.id,
    title: topic.title,
    subjectId: spec.subject,
    parentId: spec.id,
    grades: topic.grades,
    kind: "topic",
    category: spec.category,
    hook: topic.hook,
    goal: topic.goal,
    explainer: topic.explainer,
    concepts: topic.concepts.map((concept) =>
      compileConcept(spec.subject, topic.id, concept, spec.category),
    ),
  }));

  const direct = (spec.concepts ?? []).map((concept) =>
    compileConcept(spec.subject, spec.id, concept, spec.category),
  );
  const nested = topics.flatMap((topic) => topic.concepts);
  const concepts = [...direct, ...nested];

  return {
    id: spec.id,
    title: spec.title,
    subjectId: spec.subject,
    parentId: null,
    grades: spec.grades,
    kind: "world",
    category: spec.category,
    hook: spec.hook,
    path: concepts.map((concept) => concept.id),
    topics,
    concepts,
  };
}

export function compileWorlds(specs: WorldSpec[]): CurriculumWorld[] {
  return specs.map(compileWorld);
}

export function appliesToGrade(
  grades: CurriculumGrade[],
  grade: number,
): boolean {
  return grades.some((item) => item === grade);
}
