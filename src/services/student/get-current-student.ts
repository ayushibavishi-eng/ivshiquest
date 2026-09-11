import { cache } from "react";
import { cookies } from "next/headers";
import { parseLearnerGrade, LEARNER_GRADE_COOKIE } from "./learner-grade";
import { studentRepository } from "./student-repository";

export const getCurrentStudent = cache(async () => {
  const student = await studentRepository.getCurrentStudent();

  try {
    const jar = await cookies();
    const grade = parseLearnerGrade(jar.get(LEARNER_GRADE_COOKIE)?.value);
    if (!grade) {
      return student;
    }
    return { ...student, grade };
  } catch {
    return student;
  }
});
