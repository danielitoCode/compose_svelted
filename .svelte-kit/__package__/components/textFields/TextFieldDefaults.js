import { resolveColor } from "../../core/theme/resolve";
export var TextFieldDefaults = {
    /**
     * FilledTextField (Material default)
     */
    filledColors: function () {
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
    outlinedColors: function () {
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
