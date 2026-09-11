import { getCuriosityById, getCuriosityLibrary } from "@/content/curiosity/library";
import { calendarDateISO } from "@/domain/curiosity";
import { selectTodaysDiscovery } from "@/domain/curiosity-select";
import type { DiscoveryContent } from "@/domain/discovery";
import type { DiscoveryLearnerContext } from "@/domain/curiosity";

export type DiscoveryRepository = {
  getDiscoveryById: (id: string) => Promise<DiscoveryContent | null>;
  getTodayDiscovery: () => Promise<DiscoveryContent>;
  getTodaysDiscovery: (
    context: DiscoveryLearnerContext,
    date?: string,
  ) => Promise<DiscoveryContent>;
};

export const mockDiscoveryRepository: DiscoveryRepository = {
  async getDiscoveryById(id) {
    return getCuriosityById(id) ?? null;
  },
  async getTodayDiscovery() {
    const library = getCuriosityLibrary();
    return library[0];
  },
  async getTodaysDiscovery(context, date = calendarDateISO()) {
    return selectTodaysDiscovery(getCuriosityLibrary(), context, date);
  },
};

export const discoveryRepository: DiscoveryRepository =
  mockDiscoveryRepository;
