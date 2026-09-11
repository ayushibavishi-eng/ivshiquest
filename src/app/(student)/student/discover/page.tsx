import type { Metadata } from "next";
import { calendarDateISO } from "@/domain/curiosity";
import { DiscoveryExperience } from "@/features/discovery";
import { getTodaysDiscovery } from "@/services/discovery";
import { getCurrentStudent } from "@/services/student";

export const metadata: Metadata = {
  title: "Today's Discovery",
};

export default async function DiscoverPage() {
  const student = await getCurrentStudent();
  const discovery = await getTodaysDiscovery(student, calendarDateISO());

  return <DiscoveryExperience discovery={discovery} grade={student.grade} />;
}
