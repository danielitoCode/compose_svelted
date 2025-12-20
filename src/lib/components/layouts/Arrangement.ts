/**
 * Arrangement — eje principal (main axis)
 * Fiel a Jetpack Compose
 */

export type ArrangementValue =
    | {
    type: "static";
    justifyContent: string;
}
    | {
    type: "spaced";
    gap: number;
    justifyContent: string;
};

export const Arrangement = {
    // --- simples ---
    Start: {
        type: "static",
        justifyContent: "flex-start",
    } as ArrangementValue,

    Center: {
        type: "static",
        justifyContent: "center",
    } as ArrangementValue,

    End: {
        type: "static",
        justifyContent: "flex-end",
    } as ArrangementValue,

    SpaceBetween: {
        type: "static",
        justifyContent: "space-between",
    } as ArrangementValue,

    SpaceAround: {
        type: "static",
        justifyContent: "space-around",
    } as ArrangementValue,

    SpaceEvenly: {
        type: "static",
        justifyContent: "space-evenly",
    } as ArrangementValue,

    // --- Compose REAL ---
    spacedBy(value: number): ArrangementValue {
        return {
            type: "spaced",
            gap: value,
            justifyContent: "flex-start",
        };
    },
} as const;