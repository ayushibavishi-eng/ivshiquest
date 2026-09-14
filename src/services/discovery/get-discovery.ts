import { cache } from "react";
import { calendarDateISO } from "@/domain/curiosity";
import { selectTodaysDiscovery } from "@/domain/curiosity-select";
import { resolveDiscoveryForGrade, type DiscoveryContent } from "@/domain/discovery";
import type { Grade, Student } from "@/domain/types";
import { getCuriosityById, getCuriosityLibrary } from "@/content/curiosity/library";
import { getCurrentStudent } from "@/services/student";
import { readDiscoveryLearnerContext } from "./history";

export async function getTodaysDiscovery(
  learner: Pick<Student, "id" | "grade" | "curriculumId">,
  date: string = calendarDateISO(),
): Promise<DiscoveryContent> {
  const history = await readDiscoveryLearnerContext(learner.id, learner.grade, date);
  const library = getCuriosityLibrary();
  const recentCategoryIds = (history.recentDiscoveryIds ?? [])
    .map((id) => getCuriosityById(id)?.category)
    .filter((category): category is NonNullable<typeof category> => Boolean(category));

  const selected = selectTodaysDiscovery(
    library,
    {
      ...history,
      recentCategoryIds,
      curriculumId: learner.curriculumId,
    },
    date,
  );
  return resolveDiscoveryForGrade(selected, learner.grade);
}

export const getTodayDiscovery = cache(async () => {
  const student = await getCurrentStudent();
  return getTodaysDiscovery(student);
});

export const getDiscoveryById = cache(async (id: string, grade?: Grade) => {
  const discovery = getCuriosityById(id) ?? null;
  if (!discovery) {
    return null;
  }
  const resolvedGrade = grade ?? (await getCurrentStudent()).grade;
  return resolveDiscoveryForGrade(discovery, resolvedGrade);
});
