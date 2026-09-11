import { hashString } from "@/domain/curiosity";
import type { Grade } from "@/domain/types";
import { GRADES } from "@/domain/types";
import type { CuriosityKernel } from "../compile";

const LATE_HINT =
  /\b(atom|atomic|molecule|algebra|voltage|potential|proof|infinity|algorithm|binary|feedback|quadratic|lattice|inverse|vector|theorem|probability distribution|compound interest|photosystem|mitosis|genotype|encryption|recursion|variable|equation)\b/i;

const EARLY_HINT =
  /\b(playground|teddy|see-saw|sharing sweets|counting|storybook|crayon|balloon|lunchbox|recess| hopscotch|marble)\b/i;

export function pinKernelToSingleGrade(
  kernel: CuriosityKernel,
  counts: Record<Grade, number>,
): CuriosityKernel {
  const allowed = kernel.grades?.length ? kernel.grades : [...GRADES];
  const grade =
    allowed.length === 1 ? allowed[0] : chooseGrade(kernel, allowed, counts);
  counts[grade] += 1;

  const question =
    grade >= 7 && kernel.questionLate ? kernel.questionLate : kernel.question;

  return {
    ...kernel,
    grades: [grade],
    question,
    questionLate: grade >= 7 ? kernel.questionLate : undefined,
  };
}

function chooseGrade(
  kernel: CuriosityKernel,
  allowed: Grade[],
  counts: Record<Grade, number>,
): Grade {
  const text = `${kernel.question} ${kernel.explainLate} ${kernel.tags.join(" ")}`;
  let pool = allowed;

  if (LATE_HINT.test(text)) {
    const later = allowed.filter((grade) => grade >= 6);
    if (later.length > 0) {
      pool = later;
    }
  } else if (EARLY_HINT.test(text)) {
    const earlier = allowed.filter((grade) => grade <= 5);
    if (earlier.length > 0) {
      pool = earlier;
    }
  }

  const min = Math.min(...pool.map((grade) => counts[grade]));
  const poorest = pool.filter((grade) => counts[grade] === min);
  return poorest[hashString(kernel.id) % poorest.length] ?? pool[0];
}

export function pinKernelsToSingleGrades(
  kernels: readonly CuriosityKernel[],
): CuriosityKernel[] {
  const counts: Record<Grade, number> = { 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 };
  return kernels.map((kernel) => pinKernelToSingleGrade(kernel, counts));
}
