import {
  CURRICULUM_GRADES,
  type CurriculumGrade,
} from "@/domain/curriculum";
import { GRAMMAR_CONCEPTS } from "@/content/grammar/concepts";
import { GRAMMAR_DOMAINS, GRAMMAR_TOPICS } from "@/content/grammar/domains";
import type {
  GrammarConcept,
  GrammarDomain,
  GrammarGradeProgression,
  GrammarSpineAudit,
  GrammarTopic,
} from "@/content/grammar/types";
import { getGrade4EnglishHostConceptId } from "@/content/lessons/grade-4-english/skill-coverage";
import { getGrade5EnglishHostConceptId } from "@/content/lessons/grade-5-english/skill-coverage";
import { getGrade6EnglishHostConceptId } from "@/content/lessons/grade-6-english/skill-coverage";
import { getGrade7EnglishHostConceptId } from "@/content/lessons/grade-7-english/skill-coverage";
import { getGrade8EnglishHostConceptId } from "@/content/lessons/grade-8-english/skill-coverage";
import { getCompleteLesson } from "@/content/lessons";
import {
  getCurriculumConcept,
  getCurriculumWorldsForSubject,
  getWorldPathForGrade,
} from "@/content/curriculum";

export {
  GRAMMAR_LEARNING_PHASES,
  GRAMMAR_LEARNING_PHASE_LABELS,
  GRAMMAR_DIFFICULTIES,
  GRAMMAR_LESSON_STRATEGIES,
} from "@/content/grammar/types";
export type {
  GrammarConcept,
  GrammarDomain,
  GrammarTopic,
  GrammarGradeProgression,
  GrammarGradeSkill,
  GrammarLessonHostPlan,
  GrammarSpineAudit,
  WrenMartinRef,
  GrammarInUseRef,
  GrammarDifficulty,
  GrammarLessonStrategy,
  GrammarLearningPhase,
} from "@/content/grammar/types";

export { GRAMMAR_DOMAINS, GRAMMAR_TOPICS } from "@/content/grammar/domains";
export { GRAMMAR_CONCEPTS } from "@/content/grammar/concepts";

const conceptById = new Map(
  GRAMMAR_CONCEPTS.map((concept) => [concept.id, concept]),
);

const domainById = new Map(
  GRAMMAR_DOMAINS.map((domain) => [domain.id, domain]),
);

const topicById = new Map(GRAMMAR_TOPICS.map((topic) => [topic.id, topic]));

/** catalogueConceptId + grade → spine concept */
const catalogueIndex = new Map<string, GrammarConcept>();

for (const concept of GRAMMAR_CONCEPTS) {
  for (const slice of concept.progression) {
    for (const catalogueId of slice.catalogueConceptIds) {
      const key = `${catalogueId}::${slice.grade}`;
      catalogueIndex.set(key, concept);
    }
  }
}

export function getGrammarDomain(id: string): GrammarDomain | undefined {
  return domainById.get(id);
}

export function getGrammarTopic(id: string): GrammarTopic | undefined {
  return topicById.get(id);
}

export function getGrammarConcept(id: string): GrammarConcept | undefined {
  return conceptById.get(id);
}

export function getGrammarConceptsForGrade(
  grade: CurriculumGrade,
): GrammarConcept[] {
  return GRAMMAR_CONCEPTS.filter((concept) => concept.grades.includes(grade));
}

export function getGrammarProgression(
  conceptId: string,
  grade: CurriculumGrade,
): GrammarGradeProgression | undefined {
  const concept = conceptById.get(conceptId);
  return concept?.progression.find((slice) => slice.grade === grade);
}

/**
 * Find the Grammar Spine concept that owns a catalogue grammar id at a grade.
 */
export function getGrammarConceptForCatalogueId(
  catalogueConceptId: string,
  grade: CurriculumGrade,
): GrammarConcept | undefined {
  return catalogueIndex.get(`${catalogueConceptId}::${grade}`);
}

/**
 * Sibling catalogue concept ids under the same spine concept at this grade
 * (useful for Knowledge Tree related links without redesigning the tree).
 */
export function getGrammarSiblingCatalogueIds(
  catalogueConceptId: string,
  grade: CurriculumGrade,
): string[] {
  const concept = getGrammarConceptForCatalogueId(catalogueConceptId, grade);
  if (!concept) {
    return [];
  }
  const slice = concept.progression.find((row) => row.grade === grade);
  if (!slice) {
    return [];
  }
  return slice.catalogueConceptIds.filter((id) => id !== catalogueConceptId);
}

/**
 * Resolve the lesson host for a catalogue grammar concept at a grade.
 * Prefers live English skill-coverage remaps when present; otherwise uses
 * the Grammar Spine authored host plan (ready or planned).
 */
export function resolveGrammarLessonHost(
  catalogueConceptId: string,
  grade: CurriculumGrade,
): {
  hostConceptId: string;
  kind: "standalone" | "hosted";
  status: "ready" | "planned";
  source: "skill-coverage" | "grammar-spine" | "self";
} | undefined {
  if (grade === 4) {
    const coverageHost = getGrade4EnglishHostConceptId(catalogueConceptId);
    if (coverageHost) {
      return {
        hostConceptId: coverageHost,
        kind: coverageHost === "english-sva-simple" ? "standalone" : "hosted",
        status: getCompleteLesson(coverageHost, grade) ? "ready" : "planned",
        source: "skill-coverage",
      };
    }
  }
  if (grade === 5) {
    const coverageHost = getGrade5EnglishHostConceptId(catalogueConceptId);
    if (coverageHost) {
      return {
        hostConceptId: coverageHost,
        kind: coverageHost === "english-sva-simple" ? "standalone" : "hosted",
        status: getCompleteLesson(coverageHost, grade) ? "ready" : "planned",
        source: "skill-coverage",
      };
    }
  }
  if (grade === 6) {
    const coverageHost = getGrade6EnglishHostConceptId(catalogueConceptId);
    if (coverageHost) {
      return {
        hostConceptId: coverageHost,
        kind: coverageHost === "english-sva-simple" ? "standalone" : "hosted",
        status: getCompleteLesson(coverageHost, grade) ? "ready" : "planned",
        source: "skill-coverage",
      };
    }
  }
  if (grade === 7) {
    const coverageHost = getGrade7EnglishHostConceptId(catalogueConceptId);
    if (coverageHost) {
      return {
        hostConceptId: coverageHost,
        kind: "hosted",
        status: getCompleteLesson(coverageHost, grade) ? "ready" : "planned",
        source: "skill-coverage",
      };
    }
  }
  if (grade === 8) {
    const coverageHost = getGrade8EnglishHostConceptId(catalogueConceptId);
    if (coverageHost) {
      return {
        hostConceptId: coverageHost,
        kind: "hosted",
        status: getCompleteLesson(coverageHost, grade) ? "ready" : "planned",
        source: "skill-coverage",
      };
    }
  }

  if (getCompleteLesson(catalogueConceptId, grade)) {
    const spine = getGrammarConceptForCatalogueId(catalogueConceptId, grade);
    const slice = spine?.progression.find((row) => row.grade === grade);
    return {
      hostConceptId: catalogueConceptId,
      kind: slice?.lessonHost.kind ?? "standalone",
      status: "ready",
      source: "self",
    };
  }

  const spine = getGrammarConceptForCatalogueId(catalogueConceptId, grade);
  const slice = spine?.progression.find((row) => row.grade === grade);
  if (!slice) {
    return undefined;
  }

  const hostId = slice.lessonHost.hostConceptId;
  const authoredStatus = slice.lessonHost.status ?? "planned";
  // Do not upgrade planned literature/curriculum hosts to "ready" merely
  // because a complete lesson exists for that chapter id.
  if (authoredStatus !== "ready") {
    return {
      hostConceptId: hostId,
      kind: slice.lessonHost.kind,
      status: "planned",
      source: "grammar-spine",
    };
  }

  const live = Boolean(getCompleteLesson(hostId, grade));
  return {
    hostConceptId: hostId,
    kind: slice.lessonHost.kind,
    status: live ? "ready" : "planned",
    source: "grammar-spine",
  };
}

export function listCatalogueGrammarConceptIds(
  grade: CurriculumGrade,
): string[] {
  const worlds = getCurriculumWorldsForSubject("english", grade);
  const ids: string[] = [];
  for (const world of worlds) {
    if (world.category !== "Grammar") {
      continue;
    }
    for (const concept of getWorldPathForGrade(world, grade)) {
      ids.push(concept.id);
    }
  }
  return ids;
}

export function grammarSpineAudit(): GrammarSpineAudit {
  const conceptsByGrade = {
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  } as Record<CurriculumGrade, number>;

  let gradeSkillMappings = 0;
  let multiGradeConcepts = 0;

  for (const concept of GRAMMAR_CONCEPTS) {
    if (concept.grades.length > 1) {
      multiGradeConcepts += 1;
    }
    for (const grade of concept.grades) {
      conceptsByGrade[grade] += 1;
    }
    for (const slice of concept.progression) {
      gradeSkillMappings += slice.skills.length;
    }
  }

  const allCatalogueIds = new Set<string>();
  const gaps: string[] = [];
  for (const grade of CURRICULUM_GRADES) {
    for (const id of listCatalogueGrammarConceptIds(grade)) {
      allCatalogueIds.add(id);
      if (!getGrammarConceptForCatalogueId(id, grade)) {
        gaps.push(`${id}@${grade}`);
      }
    }
  }

  const gapCatalogueIds = new Set(gaps.map((gap) => gap.split("@")[0] ?? gap));

  return {
    domains: GRAMMAR_DOMAINS.length,
    topics: GRAMMAR_TOPICS.length,
    concepts: GRAMMAR_CONCEPTS.length,
    gradeSkillMappings,
    conceptsByGrade,
    multiGradeConcepts,
    catalogueGrammarIdsCovered: [...allCatalogueIds].filter(
      (id) => !gapCatalogueIds.has(id),
    ).length,
    catalogueGrammarGaps: gaps,
  };
}

/** Validate spine structural integrity (for tests). */
export function validateGrammarSpineStructure(): string[] {
  const errors: string[] = [];
  const seenConceptIds = new Set<string>();
  const seenSkillIds = new Set<string>();
  const seenCataloguePairs = new Set<string>();

  for (const domain of GRAMMAR_DOMAINS) {
    for (const topicId of domain.topicIds) {
      const topic = topicById.get(topicId);
      if (!topic) {
        errors.push(`domain ${domain.id} references missing topic ${topicId}`);
      } else if (topic.domainId !== domain.id) {
        errors.push(`topic ${topicId} domain mismatch`);
      }
    }
  }

  for (const concept of GRAMMAR_CONCEPTS) {
    if (seenConceptIds.has(concept.id)) {
      errors.push(`duplicate grammar concept id ${concept.id}`);
    }
    seenConceptIds.add(concept.id);

    if (!domainById.has(concept.domainId)) {
      errors.push(`${concept.id} has unknown domain ${concept.domainId}`);
    }
    if (!topicById.has(concept.topicId)) {
      errors.push(`${concept.id} has unknown topic ${concept.topicId}`);
    }

    for (const prereq of concept.prerequisites) {
      if (!conceptById.has(prereq)) {
        errors.push(`${concept.id} prerequisite missing: ${prereq}`);
      }
    }

    const sliceGrades = concept.progression.map((slice) => slice.grade);
    if (sliceGrades.length !== new Set(sliceGrades).size) {
      errors.push(`${concept.id} has duplicate grade slices`);
    }
    for (const grade of concept.grades) {
      if (!sliceGrades.includes(grade)) {
        errors.push(`${concept.id} lists grade ${grade} without a progression slice`);
      }
    }
    for (const grade of sliceGrades) {
      if (!concept.grades.includes(grade)) {
        errors.push(`${concept.id} has slice for grade ${grade} not in grades[]`);
      }
    }

    // Progression should not go backwards in difficulty index.
    const difficultyOrder = ["foundational", "developing", "secure", "advanced"];
    let lastIndex = -1;
    for (const slice of [...concept.progression].sort(
      (a, b) => a.grade - b.grade,
    )) {
      const index = difficultyOrder.indexOf(slice.difficulty);
      if (index < lastIndex) {
        errors.push(
          `${concept.id} difficulty regresses at grade ${slice.grade}`,
        );
      }
      lastIndex = Math.max(lastIndex, index);

      if (slice.skills.length === 0) {
        errors.push(`${concept.id} grade ${slice.grade} has no skills`);
      }
      if (slice.catalogueConceptIds.length === 0) {
        errors.push(`${concept.id} grade ${slice.grade} has no catalogue ids`);
      }

      for (const skill of slice.skills) {
        if (seenSkillIds.has(skill.id)) {
          errors.push(`duplicate skill id ${skill.id}`);
        }
        seenSkillIds.add(skill.id);
        if (skill.grade !== slice.grade) {
          errors.push(`skill ${skill.id} grade mismatch`);
        }
      }

      for (const catalogueId of slice.catalogueConceptIds) {
        const pair = `${catalogueId}::${slice.grade}`;
        if (seenCataloguePairs.has(pair)) {
          errors.push(`duplicate catalogue ownership for ${pair}`);
        }
        seenCataloguePairs.add(pair);

        const catalogue = getCurriculumConcept(catalogueId);
        if (!catalogue) {
          errors.push(
            `${concept.id} maps unknown catalogue concept ${catalogueId}`,
          );
        } else if (!catalogue.grades.includes(slice.grade)) {
          errors.push(
            `${catalogueId} does not apply to grade ${slice.grade} in catalogue`,
          );
        }

        const hostId = slice.lessonHost.hostConceptId;
        const hostConcept = getCurriculumConcept(hostId);
        if (!hostConcept && hostId !== catalogueId) {
          // Host may be a lesson concept that exists in catalogue (chapters do).
          errors.push(
            `${concept.id} grade ${slice.grade} host ${hostId} missing from catalogue`,
          );
        }
      }

      for (const litId of slice.ncertLiteratureIds ?? []) {
        if (!getCurriculumConcept(litId)) {
          errors.push(
            `${concept.id} ncertLiteratureId missing: ${litId}`,
          );
        }
      }
    }
  }

  return errors;
}
