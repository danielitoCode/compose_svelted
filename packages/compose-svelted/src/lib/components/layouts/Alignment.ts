export const Alignment = {
    // Horizontal only (para Column)
    Start: "flex-start",
    CenterHorizontally: "center",
    End: "flex-end",

    // Vertical only (para Row)
    Top: "flex-start",
    CenterVertically: "center",
    Bottom: "flex-end",

    // Compuestos (para Box y layouts avanzados)
    TopStart: "flex-start flex-start",
    TopCenter: "center flex-start",
    TopEnd: "flex-end flex-start",

    CenterStart: "flex-start center",
    Center: "center center",
    CenterEnd: "flex-end center",

    BottomStart: "flex-start flex-end",
    BottomCenter: "center flex-end",
    BottomEnd: "flex-end flex-end",
} as const;

// Tipos separados para mayor seguridad
export type HorizontalAlignment =
    typeof Alignment.Start |
    typeof Alignment.CenterHorizontally |
    typeof Alignment.End;

export type VerticalAlignment =
    typeof Alignment.Top |
    typeof Alignment.CenterVertically |
    typeof Alignment.Bottom;

export type BoxAlignment = typeof Alignment[keyof typeof Alignment];