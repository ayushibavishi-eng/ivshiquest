import { cache } from "react";
import { cookies } from "next/headers";
import { DEFAULT_CURRICULUM_ID } from "@/domain/curriculum";
import { parseLearnerGrade, LEARNER_GRADE_COOKIE } from "./learner-grade";
import {
  LEARNER_PROFILE_COOKIE,
  parseLearnerProfile,
  resolveLearnerCurriculumId,
} from "./learner-profile";
import { studentRepository } from "./student-repository";

export const getCurrentStudent = cache(async () => {
  const student = await studentRepository.getCurrentStudent();

  try {
    const jar = await cookies();
    const profile = parseLearnerProfile(
      jar.get(LEARNER_PROFILE_COOKIE)?.value,
    );
    const grade = parseLearnerGrade(jar.get(LEARNER_GRADE_COOKIE)?.value);

    return {
      ...student,
      id: profile?.learnerId ?? student.id,
      displayName: profile?.displayName ?? student.displayName,
      grade: grade ?? student.grade,
      curriculumId: profile
        ? resolveLearnerCurriculumId(profile)
        : (student.curriculumId ?? DEFAULT_CURRICULUM_ID),
    };
  } catch {
    return {
      ...student,
      curriculumId: student.curriculumId ?? DEFAULT_CURRICULUM_ID,
    };
  }
});
