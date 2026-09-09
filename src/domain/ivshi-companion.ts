export const IVSHI_COMPANION_STATES = [
  "idle",
  "hover",
  "stuck",
  "helping",
  "success",
] as const;

export type IvshiCompanionState = (typeof IVSHI_COMPANION_STATES)[number];
