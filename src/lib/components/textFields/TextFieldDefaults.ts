import { resolveColor } from "../../core/theme/resolve";
import type { TextFieldColors } from "./TextFieldColors";

export const TextFieldDefaults = {
    /**
     * FilledTextField (Material default)
     */
    filledColors(): TextFieldColors {
        return {
            // Container
            container: resolveColor("surfaceVariant"),

            // Content
            label: resolveColor("onSurfaceVariant"),
            placeholder: resolveColor("onSurfaceVariant"),
            text: resolveColor("onSurface"),
            cursor: resolveColor("primary"),

            // Indicator (bottom line)
            indicatorFocused: resolveColor("primary"),
            indicatorUnfocused: resolveColor("onSurfaceVariant"),

            error: resolveColor("error"),
        };
    },

    /**
     * OutlinedTextField
     */
    outlinedColors(): TextFieldColors {
        return {
            // Container
            container: "transparent",

            // Content
            label: resolveColor("onSurfaceVariant"),
            placeholder: resolveColor("onSurfaceVariant"),
            text: resolveColor("onSurface"),
            cursor: resolveColor("primary"),

            // Indicator (used only if needed)
            indicatorFocused: resolveColor("primary"),
            indicatorUnfocused: resolveColor("outline"),

            // Border (outlined specific)
            borderFocused: resolveColor("primary"),
            borderUnfocused: resolveColor("outline"),

            error: resolveColor("error"),
        };
    }
};