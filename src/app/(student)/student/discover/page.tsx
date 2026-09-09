import type { Metadata } from "next";
import { DiscoveryExperience } from "@/features/discovery";
import { getTodayDiscovery } from "@/services/discovery";
import { getCurrentStudent } from "@/services/student";

export const metadata: Metadata = {
  title: "Today's Discovery",
};

export default async function DiscoverPage() {
  const [discovery, student] = await Promise.all([
    getTodayDiscovery(),
    getCurrentStudent(),
  ]);

  return <DiscoveryExperience discovery={discovery} grade={student.grade} />;
}
