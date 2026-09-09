import { cache } from "react";
import { practiceRepository } from "./practice-repository";

export const getPracticeSet = cache((areaId?: string) =>
  practiceRepository.getPracticeSet(areaId),
);
