import type { ConceptGrowth } from "@/domain/discovery";

export type ConceptProgress = {
  conceptId: string;
  topic: string;
  status: ConceptGrowth;
};

const progressByConcept: Record<string, ConceptProgress> = {
  "electricity-circuits": {
    conceptId: "electricity-circuits",
    topic: "Electricity & Circuits",
    status: "explored",
  },
};

export function getConceptProgress(conceptId: string): ConceptProgress | null {
  return progressByConcept[conceptId] ?? null;
}

export function markConceptLearned(conceptId: string): ConceptProgress | null {
  const current = progressByConcept[conceptId];

  if (!current) {
    return null;
  }

  if (current.status === "explored" || current.status === "learning") {
    current.status = "learned";
  }

  return current;
}
