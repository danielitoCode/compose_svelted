export const Density = {
    Default: "default",
    Compact: "compact",
} as const;

export type DensityToken = typeof Density[keyof typeof Density];