import { ModifierImpl } from "./ModifierImpl";
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
export var Modifier = {
    /**
     * Returns an empty Modifier with no effects.
     *
     * Useful as a default value or starting point.
     */
    empty: function () {
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
    padding: function (valueOrParams, unit) {
        if (valueOrParams === void 0) { valueOrParams = 0; }
        if (unit === void 0) { unit = 'px'; }
        return new ModifierImpl().padding(valueOrParams, unit);
    },
    /**
     * Adds horizontal padding (left and right).
     */
    paddingHorizontal: function (value) {
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
    border: function (width, color, shape) {
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
    clickable: function (onClick) {
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
    offset: function (x, y) {
        return new ModifierImpl().offset(x, y);
    },
    /**
     * Enables vertical scrolling for the component.
     *
     * Useful for Column or large content containers.
     */
    verticalScroll: function (enabled) {
        if (enabled === void 0) { enabled = true; }
        return new ModifierImpl().verticalScroll(enabled);
    },
    /**
     * Enables horizontal scrolling for the component.
     */
    horizontalScroll: function (enabled) {
        if (enabled === void 0) { enabled = true; }
        return new ModifierImpl().horizontalScroll(enabled);
    },
    /**
     * Adds vertical padding (top and bottom).
     */
    paddingVertical: function (value) {
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
    align: function (alignment) {
        return new ModifierImpl().align(alignment);
    },
    /**
     * Makes the component fill the maximum available width.
     */
    fillMaxWidth: function () {
        return new ModifierImpl().fillMaxWidth();
    },
    /**
     * Makes the component fill the maximum available height.
     */
    fillMaxHeight: function () {
        return new ModifierImpl().fillMaxHeight();
    },
    /**
     * Makes the component fill both width and height.
     */
    fillMaxSize: function () {
        return new ModifierImpl().fillMaxSize();
    },
    /**
     * Sets a fixed height for the component.
     *
     * Accepts either a number (px by default) or a CSS size string.
     */
    height: function (value, unit) {
        if (unit === void 0) { unit = 'px'; }
        return new ModifierImpl().height(value, unit);
    },
    /**
     * Sets a fixed width for the component.
     *
     * Accepts either a number (px by default) or a CSS size string.
     */
    width: function (value, unit) {
        if (unit === void 0) { unit = 'px'; }
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
    background: function (color) {
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
    weight: function (weight, fill) {
        if (fill === void 0) { fill = true; }
        return new ModifierImpl().weight(weight, fill);
    },
    /**
     * Assigns weight without forcing fill behavior.
     */
    weightNoFill: function (weight) {
        return this.weight(weight, false);
    },
    /**
     * Adds top margin to the component.
     */
    marginTop: function (value, unit) {
        if (unit === void 0) { unit = 'px'; }
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
    clip: function (shape) {
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
    size: function (value, unit) {
        if (unit === void 0) { unit = "px"; }
        return new ModifierImpl().size(value, unit);
    }
};
