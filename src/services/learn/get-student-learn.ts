import { cache } from "react";
import { getCurrentStudent } from "@/services/student";
import { learnRepository } from "./learn-repository";

export const getStudentLearn = cache(async () => {
  const [learn, student] = await Promise.all([
    learnRepository.getStudentLearn(),
    getCurrentStudent(),
  ]);
  return {
    ...learn,
    student,
  };
});
