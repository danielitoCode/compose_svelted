var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { resolveBoxPlaceSelf, resolveColumnAlignSelf, resolveRowAlignSelf } from "../../components/layouts/resolveAlignment";
function toCssLength(value, unit) {
    if (unit === void 0) { unit = "px"; }
    return typeof value === "number" ? "".concat(value).concat(unit) : value;
}
var ModifierImpl = /** @class */ (function () {
    function ModifierImpl(entries) {
        if (entries === void 0) { entries = []; }
        this.entries = entries;
    }
    ModifierImpl.prototype.then = function (other) {
        return new ModifierImpl(__spreadArray(__spreadArray([], this.entries, true), other.entries, true));
    };
    ModifierImpl.prototype.fillMaxWidth = function () {
        // En flexbox, width:100% y align-self:stretch aseguran ocupar el ancho
        return this.then(new ModifierImpl([{ style: "width:100%;align-self:stretch;" }]));
    };
    ModifierImpl.prototype.fillMaxHeight = function () {
        // En flexbox (como Row), align-self:stretch es clave para llenar el alto transversal
        // height:100% ayuda en contextos de bloque o flex-direction: column
        return this.then(new ModifierImpl([{ style: "height:100%;align-self:stretch;" }]));
    };
    ModifierImpl.prototype.fillMaxSize = function () {
        return this.then(new ModifierImpl([{ style: "width:100%;height:100%;align-self:stretch;" }]));
    };
    ModifierImpl.prototype.width = function (value, unit) {
        if (unit === void 0) { unit = "px"; }
        return this.then(new ModifierImpl([{ style: "width:".concat(toCssLength(value, unit), ";") }]));
    };
    ModifierImpl.prototype.height = function (value, unit) {
        if (unit === void 0) { unit = "px"; }
        return this.then(new ModifierImpl([{ style: "height:".concat(toCssLength(value, unit), ";") }]));
    };
    ModifierImpl.prototype.size = function (value, unit) {
        if (unit === void 0) { unit = "px"; }
        var cssValue = toCssLength(value, unit);
        return this.then(new ModifierImpl([{ style: "width:".concat(cssValue, ";height:").concat(cssValue, ";") }]));
    };
    ModifierImpl.prototype.weight = function (weight, fill) {
        if (fill === void 0) { fill = true; }
        if (weight <= 0) {
            return this;
        }
        return this.then(new ModifierImpl([
            {
                style: "flex-grow:".concat(weight, ";flex-shrink:").concat(fill ? 1 : 0, ";flex-basis:0%;")
            }
        ]));
    };
    ModifierImpl.prototype.padding = function (valueOrParams, unit) {
        if (valueOrParams === void 0) { valueOrParams = 0; }
        if (unit === void 0) { unit = "px"; }
        if (typeof valueOrParams === "number") {
            return this.then(new ModifierImpl([{ style: "padding:".concat(valueOrParams).concat(unit, ";") }]));
        }
        var _a = valueOrParams.top, top = _a === void 0 ? 0 : _a, _b = valueOrParams.bottom, bottom = _b === void 0 ? 0 : _b, _c = valueOrParams.start, start = _c === void 0 ? 0 : _c, _d = valueOrParams.end, end = _d === void 0 ? 0 : _d;
        return this.then(new ModifierImpl([
            {
                style: [
                    "padding-top:".concat(top).concat(unit, ";"),
                    "padding-bottom:".concat(bottom).concat(unit, ";"),
                    "padding-left:".concat(start).concat(unit, ";"),
                    "padding-right:".concat(end).concat(unit, ";")
                ].join("")
            }
        ]));
    };
    ModifierImpl.prototype.paddingHorizontal = function (value) {
        return this.then(new ModifierImpl([
            { style: "padding-left:".concat(value, "px;padding-right:").concat(value, "px;") }
        ]));
    };
    ModifierImpl.prototype.paddingVertical = function (value) {
        return this.then(new ModifierImpl([
            { style: "padding-top:".concat(value, "px;padding-bottom:").concat(value, "px;") }
        ]));
    };
    ModifierImpl.prototype.marginTop = function (value, unit) {
        if (unit === void 0) { unit = "px"; }
        return this.then(new ModifierImpl([{ style: "margin-top:".concat(value).concat(unit, ";") }]));
    };
    ModifierImpl.prototype.background = function (color) {
        var resolved = typeof color === "string" ? color : resolveColor(color);
        return this.then(new ModifierImpl([{ style: "background:".concat(resolved, ";") }]));
    };
    ModifierImpl.prototype.border = function (width, color, shape) {
        if (width <= 0) {
            return this;
        }
        var borderRadius = shape ? "border-radius:".concat(shape.toCssBorderRadius(), ";") : "";
        return this.then(new ModifierImpl([
            { style: "border:".concat(width, "px solid ").concat(color, ";").concat(borderRadius) }
        ]));
    };
    ModifierImpl.prototype.clip = function (shape) {
        return this.then(new ModifierImpl([
            { style: "border-radius:".concat(shape.toCssBorderRadius(), ";overflow:hidden;") }
        ]));
    };
    ModifierImpl.prototype.offset = function (x, y) {
        return this.then(new ModifierImpl([
            { style: "transform:translate(".concat(x, "px, ").concat(y, "px);") }
        ]));
    };
    /**
     * Sobreescribe la alineación de este hijo dentro de un contenedor (Box, Column, Row).
     * Equivalente a Modifier.align() en Jetpack Compose.
     */
    ModifierImpl.prototype.align = function (alignment) {
        return this.then(new ModifierImpl([{ meta: { align: alignment } }]));
    };
    ModifierImpl.prototype.clickable = function (_onClick) {
        return this.then(new ModifierImpl([
            { className: "compose-clickable", style: "cursor:pointer;user-select:none;" }
        ]));
    };
    ModifierImpl.prototype.verticalScroll = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        return enabled
            ? this.then(new ModifierImpl([{ style: "overflow-y:auto;" }]))
            : this;
    };
    ModifierImpl.prototype.horizontalScroll = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        return enabled
            ? this.then(new ModifierImpl([{ style: "overflow-x:auto;" }]))
            : this;
    };
    ModifierImpl.prototype.toStyle = function () {
        var meta = this.getMeta();
        var alignStyle = "";
        if (meta.align) {
            var a = meta.align;
            if (a._brand === 'BoxAlignment') {
                alignStyle = resolveBoxPlaceSelf(a);
            }
            else if (a._brand === 'HorizontalAlignment') {
                alignStyle = resolveColumnAlignSelf(a);
            }
            else if (a._brand === 'VerticalAlignment') {
                alignStyle = resolveRowAlignSelf(a);
            }
        }
        return this.entries.map(function (entry) { var _a; return (_a = entry.style) !== null && _a !== void 0 ? _a : ""; }).join("") + alignStyle;
    };
    ModifierImpl.prototype.toClass = function () {
        return this.entries.map(function (entry) { var _a; return (_a = entry.className) !== null && _a !== void 0 ? _a : ""; }).filter(Boolean).join(" ");
    };
    ModifierImpl.prototype.getMeta = function () {
        return this.entries.reduce(function (acc, entry) { var _a; return (__assign(__assign({}, acc), ((_a = entry.meta) !== null && _a !== void 0 ? _a : {}))); }, {});
    };
    return ModifierImpl;
}());
export { ModifierImpl };
