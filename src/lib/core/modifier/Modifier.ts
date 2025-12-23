import { ModifierImpl } from "./ModifierImpl";
import type {BoxAlignment} from "../../components/layouts/Alignment";
import type {Shape} from "../shapes/Shape";
import type {ColorToken} from "../theme/ColorScheme";

/**
 * Modifier
 *
 * Modifier is an immutable, chainable object used to decorate or augment
 * a UI component.
 *
 * Inspired by Jetpack Compose Modifier.
 *
 * Usage:
 * ```
 * Modifier
 *   .padding(16)
 *   .fillMaxWidth()
 *   .background(ColorScheme.Surface)
 * ```
 */
export const Modifier = {
    /**
     * Returns an empty Modifier with no effects.
     *
     * Useful as a default value or starting point.
     */
    empty(): ModifierImpl {
        return new ModifierImpl();
    },

    /**
     * Adds padding around the content.
     *
     * Can be used with:
     * - a single number (uniform padding)
     * - an object with directional values
     *
     * Examples:
     * ```
     * Modifier.padding(16)
     * Modifier.padding({ top: 8, bottom: 8 })
     * ```
     */
    padding(
        valueOrParams: number | { top?: number; bottom?: number; start?: number; end?: number } = 0,
        unit: string = 'px'
    ): ModifierImpl {
        return new ModifierImpl().padding(valueOrParams,unit);
    },


    /**
     * Adds horizontal padding (left and right).
     */
    paddingHorizontal(value: number): ModifierImpl {
        return new ModifierImpl().paddingHorizontal(value);
    },

    /**
     * Adds a border around the component.
     *
     * Optionally accepts a Shape to match rounded corners.
     *
     * Examples:
     * ```
     * Modifier.border(1, ColorScheme.Outline)
     * Modifier.border(2, "#FF0000", RoundedCornerShape(12))
     * ```
     */
    border(width: number, color: string, shape?: Shape): ModifierImpl {
        return new ModifierImpl().border(width, color, shape);
    },

    /**
     * Marks the component as clickable.
     *
     * This modifier applies interaction semantics such as:
     * - pointer cursor
     * - user-select disabling
     *
     * Note:
     * The click handler must still be attached at the component level.
     *
     * Example:
     * ```
     * <Box
     *   on:click={onClick}
     *   modifier={Modifier.clickable(onClick)}
     * />
     * ```
     */
    clickable(onClick: () => void): ModifierImpl {
        return new ModifierImpl().clickable(onClick);
    },

    /**
     * Offsets the component visually without affecting its layout.
     *
     * Equivalent to Jetpack Compose Modifier.offset.
     *
     * Note:
     * This uses CSS transform and does not affect surrounding layout.
     */
    offset(x: number, y: number): ModifierImpl {
        return new ModifierImpl().offset(x, y);
    },

    /**
     * Enables vertical scrolling for the component.
     *
     * Useful for Column or large content containers.
     */
    verticalScroll(enabled: boolean = true): ModifierImpl {
        return new ModifierImpl().verticalScroll(enabled);
    },

    /**
     * Enables horizontal scrolling for the component.
     */
    horizontalScroll(enabled: boolean = true): ModifierImpl {
        return new ModifierImpl().horizontalScroll(enabled);
    },

    /**
     * Adds vertical padding (top and bottom).
     */
    paddingVertical(value: number): ModifierImpl {
        return new ModifierImpl().paddingVertical(value);
    },

    /**
     * Aligns the component inside a Box.
     *
     * ⚠️ This modifier is intended to be used only inside Box layouts.
     *
     * Example:
     * ```
     * Modifier.align(Alignment.Center)
     * ```
     */
    align(alignment: BoxAlignment): ModifierImpl {
        return new ModifierImpl().align(alignment);
    },

    /**
     * Makes the component fill the maximum available width.
     */
    fillMaxWidth(): ModifierImpl {
        return new ModifierImpl().fillMaxWidth();
    },

    /**
     * Makes the component fill the maximum available height.
     */
    fillMaxHeight(): ModifierImpl {
        return new ModifierImpl().fillMaxHeight();
    },

    /**
     * Makes the component fill both width and height.
     */
    fillMaxSize(): ModifierImpl {
        return new ModifierImpl().fillMaxSize();
    },

    /**
     * Sets a fixed height for the component.
     *
     * Accepts either a number (px by default) or a CSS size string.
     */
    height(value: number | string, unit = 'px'): ModifierImpl {
        return new ModifierImpl().height(value, unit);
    },

    /**
     * Sets a fixed width for the component.
     *
     * Accepts either a number (px by default) or a CSS size string.
     */
    width(value: number | string, unit = 'px'): ModifierImpl {
        return new ModifierImpl().width(value, unit);
    },

    /**
     * Applies a background color to the component.
     *
     * Accepts either:
     * - A CSS color string (e.g. "#2A2A2A", "transparent")
     * - A Compose color token (e.g. ColorScheme.Surface)
     *
     * Examples:
     * ```
     * Modifier.background(ColorScheme.Surface)
     * Modifier.background("#121212")
     * ```
     */
    background(color: ColorToken | string): ModifierImpl {
        return new ModifierImpl().background(color);
    },

    /**
     * Assigns a proportional weight to the component inside
     * a Row or Column.
     *
     * Similar to flex-grow.
     *
     * Example:
     * ```
     * Modifier.weight(1)
     * ```
     */
    weight(weight: number, fill: boolean = true): ModifierImpl {
        return new ModifierImpl().weight(weight, fill);
    },

    /**
     * Assigns weight without forcing fill behavior.
     */
    weightNoFill(weight: number): ModifierImpl {
        return this.weight(weight, false);
    },

    /**
     * Adds top margin to the component.
     */
    marginTop(value: number, unit = 'px'): ModifierImpl {
        return new ModifierImpl().marginTop(value, unit);
    },

    /**
     * Clips the component using the provided Shape.
     *
     * Example:
     * ```
     * Modifier.clip(RoundedCornerShape(16))
     * ```
     */
    clip(shape: Shape): ModifierImpl {
        return new ModifierImpl().clip(shape);
    },

    /**
     * Sets both width and height to the same value.
     *
     * Useful for icons and square components.
     *
     * Example:
     * ```
     * Modifier.size(24)
     * ```
     */
    size(value: number | string, unit: string = "px"): ModifierImpl {
        return new ModifierImpl().size(value, unit);
    }
} as const;

// Tipo público
export type Modifier = ModifierImpl;