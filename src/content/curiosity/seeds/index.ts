import type { CuriosityKernel } from "../compile";
import { CULTURE_SEEDS } from "./culture";
import { LANGUAGE_SEEDS } from "./language";
import { MATH_SEEDS } from "./math";
import { SCIENCE_EARTH_SEEDS } from "./science-earth";
import { SCIENCE_LIFE_SEEDS } from "./science-life";
import { SCIENCE_MATTER_SEEDS } from "./science-matter";
import { TECH_LIFE_SEEDS } from "./tech-life";
import { pinKernelsToSingleGrades } from "./pin-grade";
import { GRADE_4_SEEDS } from "./grade-4";
import { GRADE_5_SEEDS } from "./grade-5";
import { GRADE_6_SEEDS } from "./grade-6";
import { GRADE_7_SEEDS } from "./grade-7";
import { GRADE_8_SEEDS } from "./grade-8";

const PINNED_LEGACY_SEEDS = pinKernelsToSingleGrades([
  ...SCIENCE_EARTH_SEEDS,
  ...SCIENCE_LIFE_SEEDS,
  ...SCIENCE_MATTER_SEEDS,
  ...MATH_SEEDS,
  ...LANGUAGE_SEEDS,
  ...CULTURE_SEEDS,
  ...TECH_LIFE_SEEDS,
]);

export const CURIOSITY_SEEDS: CuriosityKernel[] = [
  ...PINNED_LEGACY_SEEDS,
  ...GRADE_4_SEEDS,
  ...GRADE_5_SEEDS,
  ...GRADE_6_SEEDS,
  ...GRADE_7_SEEDS,
  ...GRADE_8_SEEDS,
];
