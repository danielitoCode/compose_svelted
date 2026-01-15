var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { resolveColor } from "../theme/resolve";
var ModifierImpl = /** @class */ (function () {
    function ModifierImpl(entries) {
        if (entries === void 0) { entries = []; }
        this.entries = entries;
    }
    ModifierImpl.prototype.then = function (other) {
        return new ModifierImpl(__spreadArray(__spreadArray([], this.entries, true), other.entries, true));
    };
    ModifierImpl.prototype.paddingHorizontal = function (value) {
        return this.then(new ModifierImpl([
            { style: "padding-left:".concat(value, "px;padding-right:").concat(value, "px;") },
        ]));
    };
    ModifierImpl.prototype.verticalScroll = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        return this.then(new ModifierImpl([{
                style: enabled
                    ? "overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;"
                    : ''
            }]));
    };
    ModifierImpl.prototype.horizontalScroll = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        return this.then(new ModifierImpl([{
                style: enabled
                    ? "overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;white-space:nowrap;"
                    : ''
            }]));
    };
    ModifierImpl.prototype.paddingVertical = function (value) {
        return this.then(new ModifierImpl([
            { style: "padding-top:".concat(value, "px;padding-bottom:").concat(value, "px;") },
        ]));
    };
    ModifierImpl.prototype.fillMaxWidth = function () {
        return this.then(new ModifierImpl([{ style: "width:100%;" }]));
    };
    ModifierImpl.prototype.fillMaxHeight = function () {
        return this.then(new ModifierImpl([{ style: "height:100%;" }]));
    };
    ModifierImpl.prototype.fillMaxSize = function () {
        return this.then(new ModifierImpl([{ style: "width:100%;height:100%;" }]));
    };
    ModifierImpl.prototype.background = function (color) {
        var resolved;
        if (typeof color === "string" &&
            (color.startsWith("#") ||
                color.startsWith("rgb") ||
                color.startsWith("hsl") ||
                color === "transparent" ||
                color === "currentColor")) {
            // Color CSS directo
            resolved = color;
        }
        else {
            // Token de ComposeTheme
            resolved = resolveColor(color);
        }
        return this.then(new ModifierImpl([
            { style: "background:".concat(resolved, ";") }
        ]));
    };
    ModifierImpl.prototype.weight = function (weight, fill) {
        if (fill === void 0) { fill = true; }
        if (weight <= 0) {
            console.warn("Modifier.weight() debe ser > 0");
            return this;
        }
        var styleParts = [
            "flex-grow: ".concat(weight, ";"),
            "flex-shrink: ".concat(fill ? 1 : 0, ";"),
            "flex-basis: 0%;" // importante para que el peso funcione bien
        ];
        return this.then(new ModifierImpl([{ style: styleParts.join(" ") }]));
    };
    ModifierImpl.prototype.align = function (alignment) {
        var parts = alignment.split(' ');
        var horizontal = parts[0]; // flex-start, center, flex-end
        var vertical = parts[1] || parts[0]; // para casos simples como "center"
        var style = 'position: absolute;';
        // Vertical
        if (vertical === 'flex-start') {
            style += 'top: 0;';
        }
        else if (vertical === 'flex-end') {
            style += 'bottom: 0;';
        }
        else if (vertical === 'center') {
            style += 'top: 50%; transform: translateY(-50%);';
        }
        // Horizontal
        if (horizontal === 'flex-start') {
            style += 'left: 0;';
        }
        else if (horizontal === 'flex-end') {
            style += 'right: 0;';
        }
        else if (horizontal === 'center') {
            style += 'left: 50%;';
            // Combinar transform si ya hay translateY
            if (style.includes('translateY')) {
                style = style.replace('translateY(-50%)', 'translate(-50%, -50%)');
            }
            else {
                style += 'transform: translateX(-50%);';
            }
        }
        return this.then(new ModifierImpl([{ style: style }]));
    };
    ModifierImpl.prototype.padding = function (valueOrParams, unit) {
        if (valueOrParams === void 0) { valueOrParams = 0; }
        if (unit === void 0) { unit = 'px'; }
        var style = '';
        if (typeof valueOrParams === 'number') {
            // Padding uniforme
            style = "padding:".concat(valueOrParams).concat(unit, ";");
        }
        else {
            // Padding direccional
            var _a = valueOrParams.top, top = _a === void 0 ? 0 : _a, _b = valueOrParams.bottom, bottom = _b === void 0 ? 0 : _b, _c = valueOrParams.start, start = _c === void 0 ? 0 : _c, _d = valueOrParams.end, end = _d === void 0 ? 0 : _d;
            style = "\n                padding-top:".concat(top).concat(unit, ";\n                padding-bottom:").concat(bottom).concat(unit, ";\n                padding-left:").concat(start).concat(unit, ";\n                //padding-right:").concat(end).concat(unit, ";\n    ").trim();
        }
        return this.then(new ModifierImpl([{ style: style }]));
    };
    ModifierImpl.prototype.width = function (value, unit) {
        if (unit === void 0) { unit = 'px'; }
        var size = typeof value === 'number' ? "".concat(value).concat(unit) : value;
        return this.then(new ModifierImpl([{ style: "width:".concat(size, ";") }]));
    };
    ModifierImpl.prototype.height = function (value, unit) {
        if (unit === void 0) { unit = 'px'; }
        var size = typeof value === 'number' ? "".concat(value).concat(unit) : value;
        return this.then(new ModifierImpl([{ style: "height:".concat(size, ";") }]));
    };
    ModifierImpl.prototype.marginTop = function (value, unit) {
        if (unit === void 0) { unit = 'px'; }
        return this.then(new ModifierImpl([{ style: "margin-top:".concat(value).concat(unit, ";") }]));
    };
    ModifierImpl.prototype.clip = function (shape) {
        return this.then(new ModifierImpl([
            {
                style: "\n                    border-radius:".concat(shape.toCssBorderRadius(), ";\n                    overflow:hidden;\n                ")
            }
        ]));
    };
    ModifierImpl.prototype.size = function (value, unit) {
        if (unit === void 0) { unit = "px"; }
        if (value === null || value === undefined) {
            return this;
        }
        var resolved;
        if (typeof value === "number") {
            if (isNaN(value))
                return this;
            resolved = "".concat(value).concat(unit);
        }
        else {
            if (value.trim() === "")
                return this;
            resolved = value;
        }
        return this.then(new ModifierImpl([
            {
                style: "width:".concat(resolved, ";height:").concat(resolved, ";")
            }
        ]));
    };
    ModifierImpl.prototype.offset = function (x, y) {
        if (isNaN(x) || isNaN(y))
            return this;
        return this.then(new ModifierImpl([
            {
                style: "transform: translate(".concat(x, "px, ").concat(y, "px);")
            }
        ]));
    };
    ModifierImpl.prototype.clickable = function (onClick) {
        return this.then(new ModifierImpl([
            {
                className: "compose-clickable",
                style: "\n                    cursor: pointer;\n                    user-select: none;\n                "
            }
        ]));
    };
    ModifierImpl.prototype.border = function (width, color, shape) {
        if (width <= 0)
            return this;
        var radius = shape ? shape.toCssBorderRadius() : undefined;
        return this.then(new ModifierImpl([
            {
                style: "\n                    border:".concat(width, "px solid ").concat(color, ";\n                    ").concat(radius ? "border-radius:".concat(radius, ";") : "", "\n                ")
            }
        ]));
    };
    // ---- consumo interno ----
    ModifierImpl.prototype.toStyle = function () {
        return this.entries.map(function (e) { var _a; return (_a = e.style) !== null && _a !== void 0 ? _a : ""; }).join("");
    };
    ModifierImpl.prototype.toClass = function () {
        return this.entries.map(function (e) { var _a; return (_a = e.className) !== null && _a !== void 0 ? _a : ""; }).join(" ");
    };
    return ModifierImpl;
}());
export { ModifierImpl };
