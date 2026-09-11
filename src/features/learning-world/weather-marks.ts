export const WEATHER_MARK: Record<string, string> = {
  "weather-what-is-weather": "🌦️",
  "weather-temperature": "☀️",
  "weather-wind": "🍃",
  "weather-humidity": "💧",
  "weather-clouds": "☁️",
  "weather-rain": "🌧️",
  "weather-storms": "⚡",
  "weather-patterns": "🌀",
  "weather-vs-climate": "🌍",
  "weather-experiments": "🫧",
  "weather-explain": "💬",
  "weather-mastery": "✦",
};

export const WEATHER_ISLAND_CLASS: Record<string, string> = {
  "weather-what-is-weather":
    "bg-[linear-gradient(160deg,#fffaf2_0%,#cfe8f2_100%)] text-ink",
  "weather-temperature":
    "bg-[linear-gradient(160deg,#fff4d6_0%,#f3b184_100%)] text-ink",
  "weather-wind":
    "bg-[linear-gradient(160deg,#e7f7fb_0%,#7eb8c9_100%)] text-ink",
  "weather-humidity":
    "bg-[linear-gradient(160deg,#eef6f8_0%,#9ec4d0_100%)] text-ink",
  "weather-clouds":
    "bg-[linear-gradient(160deg,#ffffff_0%,#d5e4ee_100%)] text-ink",
  "weather-rain":
    "bg-[linear-gradient(160deg,#d7eef6_0%,#4f8fa3_100%)] text-canvas",
  "weather-storms":
    "bg-[linear-gradient(160deg,#3d5d67_0%,#14343d_100%)] text-canvas",
  "weather-patterns":
    "bg-[linear-gradient(160deg,#e4f3f8_0%,#3d82a0_100%)] text-canvas",
  "weather-vs-climate":
    "bg-[linear-gradient(160deg,#f6efe3_0%,#c4a882_100%)] text-ink",
  "weather-experiments":
    "bg-[linear-gradient(160deg,#f7fbfd_0%,#b7d3de_100%)] text-ink",
  "weather-explain":
    "bg-[linear-gradient(160deg,#fffaf7_0%,#e8c4b4_100%)] text-ink",
  "weather-mastery":
    "bg-[linear-gradient(160deg,#d9f0ea_0%,#1a6c76_100%)] text-canvas",
};

export const RICH_WEATHER_CONCEPTS = new Set([
  "weather-temperature",
  "weather-wind",
  "weather-clouds",
]);

export function weatherMark(id: string) {
  return WEATHER_MARK[id] ?? "•";
}

export function weatherIslandClass(id: string) {
  return WEATHER_ISLAND_CLASS[id] ?? "bg-surface-muted text-ink";
}
