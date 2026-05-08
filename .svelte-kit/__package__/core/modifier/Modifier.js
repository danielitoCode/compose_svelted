import { ModifierImpl } from "./ModifierImpl";
export var Modifier = {
    empty: function () {
        return new ModifierImpl();
    },
    padding: function (valueOrParams, unit) {
        if (valueOrParams === void 0) { valueOrParams = 0; }
        if (unit === void 0) { unit = "px"; }
        return new ModifierImpl().padding(valueOrParams, unit);
    },
    paddingHorizontal: function (value) {
        return new ModifierImpl().paddingHorizontal(value);
    },
    paddingVertical: function (value) {
        return new ModifierImpl().paddingVertical(value);
    },
    border: function (width, color, shape) {
        return new ModifierImpl().border(width, color, shape);
    },
    clickable: function (onClick) {
        return new ModifierImpl().clickable(onClick);
    },
    offset: function (x, y) {
        return new ModifierImpl().offset(x, y);
    },
    verticalScroll: function (enabled) {
        if (enabled === void 0) { enabled = true; }
        return new ModifierImpl().verticalScroll(enabled);
    },
    horizontalScroll: function (enabled) {
        if (enabled === void 0) { enabled = true; }
        return new ModifierImpl().horizontalScroll(enabled);
    },
    align: function (alignment) {
        return new ModifierImpl().align(alignment);
    },
    fillMaxWidth: function () {
        return new ModifierImpl().fillMaxWidth();
    },
    fillMaxHeight: function () {
        return new ModifierImpl().fillMaxHeight();
    },
    fillMaxSize: function () {
        return new ModifierImpl().fillMaxSize();
    },
    height: function (value, unit) {
        if (unit === void 0) { unit = "px"; }
        return new ModifierImpl().height(value, unit);
    },
    width: function (value, unit) {
        if (unit === void 0) { unit = "px"; }
        return new ModifierImpl().width(value, unit);
    },
    background: function (color) {
        return new ModifierImpl().background(color);
    },
    weight: function (weight, fill) {
        if (fill === void 0) { fill = true; }
        return new ModifierImpl().weight(weight, fill);
    },
    weightNoFill: function (weight) {
        return new ModifierImpl().weight(weight, false);
    },
    marginTop: function (value, unit) {
        if (unit === void 0) { unit = "px"; }
        return new ModifierImpl().marginTop(value, unit);
    },
    clip: function (shape) {
        return new ModifierImpl().clip(shape);
    },
    size: function (value, unit) {
        if (unit === void 0) { unit = "px"; }
        return new ModifierImpl().size(value, unit);
    }
};
