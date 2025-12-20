/**
 * Alignment — eje cruzado (cross axis)
 * Fiel a Jetpack Compose
 */
export const Alignment = {
    Start: "flex-start",
    CenterHorizontally: "center",
    End: "flex-end",
    Stretch: "stretch",
    // NUEVO: Vertical alignments para Row (simétrico a Compose)
    Top: "flex-start",
    CenterVertically: "center",
    Bottom: "flex-end",
} as const;

export type HorizontalAlignment =
    typeof Alignment.Start | typeof Alignment.CenterHorizontally | typeof Alignment.End | typeof Alignment.Stretch;

// NUEVO: Tipo para vertical, reutilizando valores
export type VerticalAlignment =
    typeof Alignment.Top | typeof Alignment.CenterVertically | typeof Alignment.Bottom;