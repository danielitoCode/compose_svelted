// src/lib/core/ContentScale.ts

/**
 * ContentScale - idéntico a Jetpack Compose
 */
export const ContentScale = {
    /** Recorta para llenar el espacio, manteniendo proporción */
    Crop: "object-cover",

    /** Ajusta al espacio manteniendo proporción, puede dejar espacios */
    Fit: "object-contain",

    /** Escala para llenar ancho y alto exactamente (puede distorsionar) */
    FillBounds: "object-fill",

    /** Escala para caber dentro, centrado (letras de espacio) */
    Inside: "object-inside",

    /** Escala proporcionalmente para llenar, recortando si es necesario (default Compose) */
    FillWidth: "object-fill-width",  // custom: width 100%, height auto, object-cover

    FillHeight: "object-fill-height", // custom: height 100%, width auto, object-cover

    /** No escala, tamaño original */
    None: "object-none",
} as const;

export type ContentScaleToken = typeof ContentScale[keyof typeof ContentScale];