import type { Metadata } from "next";
import { ComingNext } from "@/components/layout/coming-next";

export const metadata: Metadata = {
  title: "Knowledge Tree",
};

export default function TreePage() {
  return (
    <ComingNext
      title="Your Knowledge Tree"
      description="A full view of what you're growing, learning, and mastering will live here next."
    />
  );
}
