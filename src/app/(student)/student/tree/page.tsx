import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { CurriculumTreePanel } from "@/features/learning-world/curriculum-tree-panel";
import { ROUTES } from "@/lib/constants";
import {
  appliesToGrade,
  getCurriculumWorlds,
} from "@/services/curriculum";
import { getCurrentStudent } from "@/services/student";

export const metadata: Metadata = {
  title: "Knowledge Tree",
};

export default async function TreePage() {
  const student = await getCurrentStudent();
  const worlds = getCurriculumWorlds().filter((world) =>
    appliesToGrade(world.grades, student.grade),
  );

  return (
    <div className="flex flex-1 flex-col gap-8 pb-8">
      <CurriculumTreePanel worlds={worlds} grade={student.grade} />
      <ButtonLink
        href={ROUTES.student.home}
        variant="quiet"
        size="inline"
        className="self-start"
      >
        Back home
      </ButtonLink>
    </div>
  );
}
