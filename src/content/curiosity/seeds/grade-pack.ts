import type { CuriosityKernel } from "../compile";
import type { CuriosityCategory } from "@/domain/curiosity";
import type { Grade } from "@/domain/types";
import { gradeSnap } from "./mini";

export type GradePackRow = {
  id: string;
  cat: CuriosityCategory;
  tags: string[];
  q: string;
  p: [string, string, string];
  look: string;
  cap: string;
  why: string;
  rq: string;
  ra: [string, string, string];
  rc: 0 | 1 | 2;
  hint: string;
  hook: string;
  conn: string;
  more?: string;
  concept?: string;
};

export function loadGradePack(
  grade: Grade,
  rows: GradePackRow[],
): CuriosityKernel[] {
  return rows.map((row) =>
    gradeSnap(grade, {
      id: row.id,
      cat: row.cat,
      tags: row.tags,
      q: row.q,
      p: row.p,
      look: row.look,
      cap: row.cap,
      why: row.why,
      rq: row.rq,
      ra: row.ra,
      rc: row.rc,
      hint: row.hint,
      hook: row.hook,
      conn: row.conn,
      more: row.more,
      concept: row.concept,
    }),
  );
}
