import { IvshiCompanion } from "@/components/companion";
import { ButtonLink } from "@/components/ui/button";

type WeatherHeroProps = {
  title: string;
  href: string;
  continuing: boolean;
};

export function WeatherHero({ title, href, continuing }: WeatherHeroProps) {
  return (
    <header className="relative overflow-hidden rounded-[2rem] px-5 pb-8 pt-7 sm:px-8 sm:pb-10 sm:pt-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,#9fd0e0_0%,#cfeaf3_38%,#e7f4f8_72%,#eadcc8_100%)]"
      />
      <SunGlow />
      <HeroClouds />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-deep/80">
          Science
        </p>
        <h1 className="mt-3 text-[2.6rem] font-semibold leading-none tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-[16rem] text-xl font-medium leading-snug text-ink sm:max-w-sm sm:text-2xl">
          Something is always happening above you.
        </p>
        <IvshiCompanion
          state="curious"
          size={18}
          label="Start anywhere in the sky. The ideas are neighbors."
          className="mt-5 max-w-sm text-sm text-ink/80"
        />
        <ButtonLink href={href} className="mt-6">
          {continuing ? "Keep exploring" : "Explore Weather"} →
        </ButtonLink>
      </div>
    </header>
  );
}

function SunGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -right-6 -top-8">
      <div className="weather-sun-glow absolute left-6 top-6 h-28 w-28 rounded-full bg-[#fff6e0]" />
      <svg viewBox="0 0 120 120" className="relative h-36 w-36">
        <circle cx="72" cy="48" r="22" fill="#ffe08a" />
        <circle cx="72" cy="48" r="14" fill="#fff6c8" />
      </svg>
    </div>
  );
}

function HeroClouds() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 360 200"
      className="pointer-events-none absolute inset-x-0 top-8 h-40 w-full"
    >
      <g className="weather-drift-slow" fill="#f7fbfd" opacity="0.92">
        <ellipse cx="48" cy="42" rx="28" ry="14" />
        <ellipse cx="72" cy="38" rx="22" ry="12" />
        <ellipse cx="30" cy="40" rx="16" ry="10" />
      </g>
      <g className="weather-drift" fill="#ffffff" opacity="0.85">
        <ellipse cx="210" cy="70" rx="34" ry="16" />
        <ellipse cx="238" cy="66" rx="24" ry="13" />
        <ellipse cx="188" cy="68" rx="18" ry="11" />
      </g>
      <g className="weather-drift-slow" fill="#d7edf4" opacity="0.7">
        <ellipse cx="300" cy="118" rx="30" ry="14" />
        <ellipse cx="322" cy="114" rx="18" ry="10" />
      </g>
    </svg>
  );
}
