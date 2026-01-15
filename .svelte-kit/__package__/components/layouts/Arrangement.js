/**
 * Arrangement — eje principal (main axis)
 * Fiel a Jetpack Compose
 */
export var Arrangement = {
    // --- simples ---
    Start: {
        type: "static",
        justifyContent: "flex-start",
    },
    Center: {
        type: "static",
        justifyContent: "center",
    },
    End: {
        type: "static",
        justifyContent: "flex-end",
    },
    Bottom: {
        type: "static",
        justifyContent: "flex-end"
    },
    Top: {
        type: "static",
        justifyContent: "flex-start"
    },
    SpaceBetween: {
        type: "static",
        justifyContent: "space-between",
    },
    SpaceAround: {
        type: "static",
        justifyContent: "space-around",
    },
    SpaceEvenly: {
        type: "static",
        justifyContent: "space-evenly",
    },
    spacedBy: function (value) {
        return {
            type: "spaced",
            gap: value,
            justifyContent: "flex-start",
        };
    },
};
