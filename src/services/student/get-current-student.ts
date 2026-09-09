import { cache } from "react";
import { studentRepository } from "./student-repository";

export const getCurrentStudent = cache(() =>
  studentRepository.getCurrentStudent(),
);
