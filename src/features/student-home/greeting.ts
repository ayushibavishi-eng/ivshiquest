export type Greeting = "Good morning" | "Good afternoon" | "Good evening";

export function greetingForHour(hour: number): Greeting {
  if (hour >= 5 && hour < 12) {
    return "Good morning";
  }

  if (hour >= 12 && hour < 17) {
    return "Good afternoon";
  }

  return "Good evening";
}

export function msUntilNextGreetingChange(now: Date): number {
  const next = new Date(now.getTime());
  const hour = now.getHours();

  if (hour < 5) {
    next.setHours(5, 0, 0, 0);
  } else if (hour < 12) {
    next.setHours(12, 0, 0, 0);
  } else if (hour < 17) {
    next.setHours(17, 0, 0, 0);
  } else {
    next.setDate(next.getDate() + 1);
    next.setHours(5, 0, 0, 0);
  }

  return Math.max(next.getTime() - now.getTime(), 1000);
}
