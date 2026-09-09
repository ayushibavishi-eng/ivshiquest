import type { Metadata } from "next";
import { ComingNext } from "@/components/layout/coming-next";

export const metadata: Metadata = {
  title: "Notifications",
};

export default function NotificationsPage() {
  return (
    <ComingNext
      title="Notifications"
      description="You're all caught up. When there's something worth noticing, it will show up here."
    />
  );
}
