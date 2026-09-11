import { cache } from "react";
import { calendarDateISO } from "@/domain/curiosity";
import type { StudentHome } from "@/domain/student-home";
import { getTodaysDiscovery } from "@/services/discovery";
import { getCurrentStudent } from "@/services/student";
import { homeRepository } from "./home-repository";

export const getStudentHome = cache(async (): Promise<StudentHome> => {
  const [home, student] = await Promise.all([
    homeRepository.getStudentHome(),
    getCurrentStudent(),
  ]);
  const date = calendarDateISO();
  const discovery = await getTodaysDiscovery(student, date);

  return {
    ...home,
    student,
    todayDiscovery: {
      id: discovery.id,
      title: discovery.question,
      durationLabel: `${discovery.durationMinutes}-minute discovery`,
      subject: discovery.subject,
      date,
    },
  };
});
