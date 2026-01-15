export declare const ContentScale: {
    readonly Crop: "cover";
    readonly Fit: "contain";
    readonly FillBounds: "fill";
    readonly Inside: "contain";
    readonly FillWidth: "fillWidth";
    readonly FillHeight: "fillHeight";
    readonly None: "none";
};
export type ContentScaleToken = typeof ContentScale[keyof typeof ContentScale];
