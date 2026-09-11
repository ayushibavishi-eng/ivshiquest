import { BIRDS_ON_WIRES_DISCOVERY } from "./birds-wires";
import { compileCuriosityKernel, type CuriosityKernel } from "./compile";
import { CURIOSITY_SEEDS } from "./seeds";
import type { DiscoveryContent } from "@/domain/discovery";
import { CURIOSITY_CATEGORIES, type CuriosityCategory } from "@/domain/curiosity";
import type { Grade } from "@/domain/types";

function compileLibrary(): DiscoveryContent[] {
  const seen = new Set<string>([BIRDS_ON_WIRES_DISCOVERY.id]);
  const compiled: DiscoveryContent[] = [];

  CURIOSITY_SEEDS.forEach((kernel, index) => {
    if (seen.has(kernel.id)) {
      throw new Error(`Duplicate curiosity id: ${kernel.id}`);
    }
    seen.add(kernel.id);
    compiled.push(compileCuriosityKernel(kernel, index + 1));
  });

  return [BIRDS_ON_WIRES_DISCOVERY, ...compiled];
}

export const CURIOSITY_LIBRARY: DiscoveryContent[] = compileLibrary();

const libraryById = new Map(
  CURIOSITY_LIBRARY.map((discovery) => [discovery.id, discovery]),
);

export function getCuriosityLibrary(): DiscoveryContent[] {
  return CURIOSITY_LIBRARY;
}

export function getCuriosityById(id: string): DiscoveryContent | undefined {
  return libraryById.get(id);
}

export function normalizeDiscoveryQuestion(question: string): string {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function findDuplicateDiscoveryQuestions(
  library: readonly DiscoveryContent[] = CURIOSITY_LIBRARY,
): string[] {
  const seen = new Map<string, string>();
  const duplicates: string[] = [];

  for (const item of library) {
    const questions = new Set<string>([
      item.question,
      ...Object.values(item.questionByGrade ?? {}),
    ]);
    for (const question of questions) {
      const key = normalizeDiscoveryQuestion(question);
      const existing = seen.get(key);
      if (existing && existing !== item.id) {
        duplicates.push(`${existing} :: ${item.id} :: ${key}`);
      } else if (!existing) {
        seen.set(key, item.id);
      }
    }
  }

  return duplicates;
}

export type CuriosityLibraryAudit = {
  total: number;
  byGrade: Record<Grade, number>;
  gradeSpecific: Record<Grade, number>;
  sharedAcrossGrades: number;
  byCategory: Record<CuriosityCategory, number>;
  bySubject: Record<DiscoveryContent["subject"], number>;
  curriculumLinked: number;
  pureCuriosity: number;
  duplicateQuestions: string[];
  duplicateIds: string[];
  missingRequired: string[];
  birdsOnWires: boolean;
};

export function getCuriosityLibraryAudit(
  library: readonly DiscoveryContent[] = CURIOSITY_LIBRARY,
): CuriosityLibraryAudit {
  const byGrade = {
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  } as Record<Grade, number>;
  const byCategory = Object.fromEntries(
    CURIOSITY_CATEGORIES.map((category) => [category, 0]),
  ) as Record<CuriosityCategory, number>;
  const gradeSpecific = {
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  } as Record<Grade, number>;
  const bySubject = { math: 0, science: 0, english: 0 };
  const ids = new Set<string>();
  const duplicateIds: string[] = [];
  const missingRequired: string[] = [];

  for (const item of library) {
    if (ids.has(item.id)) {
      duplicateIds.push(item.id);
    }
    ids.add(item.id);

    if (
      !item.id ||
      !item.question ||
      !item.wonderPrompt ||
      item.predictionChoices.length < 3 ||
      !item.exploration.prompt ||
      !item.explanations.default.main ||
      !item.retrieval.question ||
      !item.retrieval.correctChoiceId ||
      item.gradeRange.length === 0
    ) {
      missingRequired.push(item.id || "(missing-id)");
    }

    for (const grade of item.gradeRange) {
      byGrade[grade] += 1;
    }
    if (item.gradeRange.length === 1) {
      gradeSpecific[item.gradeRange[0]] += 1;
    }
    byCategory[item.category] += 1;
    bySubject[item.subject] += 1;
  }

  return {
    total: library.length,
    byGrade,
    gradeSpecific,
    sharedAcrossGrades: library.filter((item) => item.gradeRange.length > 1)
      .length,
    byCategory,
    bySubject,
    curriculumLinked: library.filter((item) => item.curriculumLinked).length,
    pureCuriosity: library.filter((item) => !item.curriculumLinked).length,
    duplicateQuestions: findDuplicateDiscoveryQuestions(library),
    duplicateIds,
    missingRequired,
    birdsOnWires: library.some((item) => item.id === "discovery-birds-wires"),
  };
}

export type { CuriosityKernel };
export { CURIOSITY_SEEDS };
