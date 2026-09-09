import { MOCK_DISCOVERIES } from "@/content/mocks/discoveries";
import type { DiscoveryContent } from "@/domain/discovery";

export type DiscoveryRepository = {
  getDiscoveryById: (id: string) => Promise<DiscoveryContent | null>;
  getTodayDiscovery: () => Promise<DiscoveryContent>;
};

export const mockDiscoveryRepository: DiscoveryRepository = {
  async getDiscoveryById(id) {
    return MOCK_DISCOVERIES.find((discovery) => discovery.id === id) ?? null;
  },
  async getTodayDiscovery() {
    return MOCK_DISCOVERIES[0];
  },
};

export const discoveryRepository: DiscoveryRepository =
  mockDiscoveryRepository;
