import { BookOpen, Compass, Home, Network, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const STUDENT_NAV_ICONS: Record<string, LucideIcon> = {
  home: Home,
  discover: Compass,
  learn: BookOpen,
  tree: Network,
  me: User,
};
