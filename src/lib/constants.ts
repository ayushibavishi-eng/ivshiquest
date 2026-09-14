export const APP_NAME = "IvshiQuest";

export const ROUTES = {
  student: {
    home: "/student",
    onboarding: "/student/onboarding",
    discover: "/student/discover",
    quest: "/student/quest",
    learn: "/student/learn",
    practice: "/student/practice",
    ask: "/student/ask",
    tree: "/student/tree",
    teach: "/student/teach",
    me: "/student/me",
    notifications: "/student/notifications",
  },
  api: {
    askIvshi: "/api/ask-ivshi",
  },
  /**
   * Parent and teacher homes are reserved for later phases.
   * Do not add screens here until those experiences are in scope.
   */
  parent: {
    home: "/parent",
  },
  teacher: {
    home: "/teacher",
  },
} as const;

export const STUDENT_NAV = [
  { id: "home", href: ROUTES.student.home, label: "Home" },
  { id: "discover", href: ROUTES.student.discover, label: "Discover" },
  { id: "learn", href: ROUTES.student.learn, label: "Learn" },
  { id: "tree", href: ROUTES.student.tree, label: "Journey" },
  { id: "me", href: ROUTES.student.me, label: "Me" },
] as const;

export function studentLearnTopicHref(topicId: string) {
  return `${ROUTES.student.learn}/topics/${topicId}`;
}

export function studentLearnPracticeHref(areaId: string) {
  return `${ROUTES.student.learn}/practice/${areaId}`;
}

export function studentLearnBrowseHref(subject: string, areaId: string) {
  return `${ROUTES.student.learn}/browse/${subject}/${areaId}`;
}
