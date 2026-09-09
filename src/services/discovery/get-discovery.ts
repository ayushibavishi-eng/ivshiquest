import { cache } from "react";
import { discoveryRepository } from "./discovery-repository";

export const getTodayDiscovery = cache(() =>
  discoveryRepository.getTodayDiscovery(),
);

export const getDiscoveryById = cache((id: string) =>
  discoveryRepository.getDiscoveryById(id),
);
