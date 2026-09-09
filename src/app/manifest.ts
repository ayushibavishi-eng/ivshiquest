import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IvshiQuest",
    short_name: "IvshiQuest",
    description:
      "An AI-powered learning companion that helps students in grades 4–8 get curious about learning.",
    start_url: "/student",
    display: "standalone",
    background_color: "#E7F4F8",
    theme_color: "#1A6C76",
  };
}
