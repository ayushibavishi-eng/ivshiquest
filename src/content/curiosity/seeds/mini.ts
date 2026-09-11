import type { CuriosityKernel } from "../compile";
import type { CuriosityCategory } from "@/domain/curiosity";
import type { Grade } from "@/domain/types";

export type MiniKernel = {
  id: string;
  cat: CuriosityCategory;
  tags: string[];
  g?: Grade[];
  q: string;
  ql?: string;
  w?: string;
  p: [string, string, string];
  look: string;
  cap: string;
  lookPrompt?: string;
  e: [string, string, string];
  rq: string;
  ra: [string, string, string];
  rc: 0 | 1 | 2;
  hint: string;
  hook: string;
  conn: string;
  more?: string;
  concept?: string;
  related?: string[];
};

export function mini(spec: MiniKernel): CuriosityKernel {
  return {
    id: spec.id,
    category: spec.cat,
    tags: spec.tags,
    grades: spec.g,
    question: spec.q,
    questionLate: spec.ql,
    wonder: spec.w,
    predictions: spec.p,
    look: spec.look,
    caption: spec.cap,
    lookPrompt: spec.lookPrompt,
    explainEarly: spec.e[0],
    explainMid: spec.e[1],
    explainLate: spec.e[2],
    retrieveQuestion: spec.rq,
    retrieveChoices: spec.ra,
    retrieveCorrect: spec.rc,
    retrieveHint: spec.hint,
    hook: spec.hook,
    connection: spec.conn,
    discoverMore: spec.more,
    conceptId: spec.concept,
    relatedConceptIds: spec.related,
  };
}

export function forGrade(
  grade: Grade,
  spec: Omit<MiniKernel, "g">,
): CuriosityKernel {
  return mini({ ...spec, g: [grade] });
}

/** Compact single-grade kernel: one explanation depth, one target grade. */
export function gradeSnap(
  grade: Grade,
  spec: Omit<MiniKernel, "g" | "e" | "ql"> & { why: string },
): CuriosityKernel {
  const { why, ...rest } = spec;
  return mini({
    ...rest,
    g: [grade],
    e: [why, why, why],
  });
}
