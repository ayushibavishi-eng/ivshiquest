import { ButtonLink } from "@/components/ui/button";
import { IvshiCompanion } from "@/components/companion";
import type { TodayDiscovery } from "@/domain";
import { ROUTES } from "@/lib/constants";
import { DiscoveryDayLock } from "@/services/discovery/client-history";

type DiscoveryHeroProps = {
  discovery: TodayDiscovery;
};

export function DiscoveryHero({ discovery }: DiscoveryHeroProps) {
  return (
    <article className="animate-rise relative overflow-hidden rounded-[1.75rem] bg-teal-deep px-6 py-7 text-canvas shadow-hero sm:px-8 sm:py-9">
      <DiscoveryDayLock date={discovery.date} discoveryId={discovery.id} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-16 h-52 w-52 rounded-full bg-canvas/10"
      />
      <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-canvas/80">
        Today&apos;s Discovery
      </p>
      <IvshiCompanion
        state="curious"
        size={16}
        label="Ivshi found something interesting for you"
        className="relative mt-3 text-sm text-canvas/75"
      />
      <h2 className="relative mt-4 text-[1.7rem] font-semibold leading-snug tracking-tight sm:text-[2rem]">
        {discovery.title}
      </h2>
      <p className="relative mt-4 text-sm text-canvas/85 sm:text-base">
        {discovery.durationLabel}
      </p>
      <ButtonLink
        href={ROUTES.student.discover}
        className="relative mt-7"
      >
        <span aria-hidden="true">✨</span>
        Discover
      </ButtonLink>
    </article>
  );
}
