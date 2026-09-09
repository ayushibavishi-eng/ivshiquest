import type { StudentThemeId } from "@/domain/theme";

type ThemeEnvironmentProps = {
  themeId: StudentThemeId;
};

export function ThemeEnvironment({ themeId }: ThemeEnvironmentProps) {
  if (themeId !== "ocean") {
    return null;
  }

  return <OceanEnvironment />;
}

function OceanEnvironment() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="theme-environment-sky absolute inset-0" />
      <div className="theme-environment-glow absolute -right-10 top-[-5rem] h-72 w-72 rounded-full opacity-50" />
      <svg
        className="absolute inset-x-0 bottom-0 h-[min(44vh,24rem)] w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          fill="var(--environment-horizon)"
          opacity="0.4"
          d="M0 52C260 20 560 92 840 56C1120 20 1320 68 1440 48L1440 168L0 188Z"
        />
        <path
          fill="var(--environment-water-deep)"
          opacity="0.26"
          d="M0 132C240 100 520 176 800 140C1080 104 1280 156 1440 128L1440 248L0 268Z"
        />
        <path
          fill="var(--environment-water)"
          opacity="0.22"
          d="M0 176C300 150 600 220 900 186C1160 158 1320 198 1440 178L1440 268L0 286Z"
        />
        <path
          fill="var(--environment-foam)"
          opacity="0.5"
          d="M0 248C340 226 700 276 1040 248C1240 232 1360 246 1440 242L1440 312L0 324Z"
        />
        <path
          fill="var(--environment-sand)"
          opacity="0.86"
          d="M0 286C380 262 740 318 1080 288C1280 270 1380 284 1440 286V400H0Z"
        />
      </svg>
    </div>
  );
}
