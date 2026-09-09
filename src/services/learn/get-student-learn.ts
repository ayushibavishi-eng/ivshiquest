import { cache } from "react";
import { learnRepository } from "./learn-repository";

export const getStudentLearn = cache(() => learnRepository.getStudentLearn());
