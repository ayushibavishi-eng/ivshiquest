import type { Metadata } from "next";
import { ComingNext } from "@/components/layout/coming-next";

export const metadata: Metadata = {
  title: "Teach It",
};

export default function TeachPage() {
  return (
    <ComingNext
      title="Teach It"
      description="When you really know something, you'll be able to teach another learner here. That experience isn't built yet."
    />
  );
}
