export const ContentScale = {
    Crop: "cover",
    Fit: "contain",
    FillBounds: "fill",
    Inside: "contain",
    FillWidth: "fillWidth",
    FillHeight: "fillHeight",
    None: "none",
} as const;

export type ContentScaleToken =
    typeof ContentScale[keyof typeof ContentScale];