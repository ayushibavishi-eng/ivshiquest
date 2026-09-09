import type { Metadata } from "next";
import { ComingNext } from "@/components/layout/coming-next";

export const metadata: Metadata = {
  title: "Quest",
};

export default function QuestPage() {
  return (
    <ComingNext
      title="Your Quest"
      description="Your quest will continue here next. Challenges will stay curious — not like a worksheet."
    />
  );
}
