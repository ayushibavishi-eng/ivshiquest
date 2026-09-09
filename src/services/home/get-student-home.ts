import { cache } from "react";
import { homeRepository } from "./home-repository";

export const getStudentHome = cache(() => homeRepository.getStudentHome());
