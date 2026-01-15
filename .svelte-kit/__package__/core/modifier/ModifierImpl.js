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
/* =========================
 * ModifierImpl
 * ========================= */
var ModifierImpl = /** @class */ (function () {
    function ModifierImpl(entries) {
        if (entries === void 0) { entries = []; }
        this.entries = entries;
    }
    /* -------- composición -------- */
    ModifierImpl.prototype.then = function (other) {
        return new ModifierImpl(__spreadArray(__spreadArray([], this.entries, true), other.entries, true));
    };
    /* -------- layout size -------- */
    ModifierImpl.prototype.fillMaxWidth = function () {
        return this.then(new ModifierImpl([{ style: "width:100%;" }]));
    };
    ModifierImpl.prototype.fillMaxHeight = function () {
        return this.then(new ModifierImpl([{ style: "height:100%;" }]));
    };
    ModifierImpl.prototype.fillMaxSize = function () {
        return this.then(new ModifierImpl([{ style: "width:100%;height:100%;" }]));
    };
    ModifierImpl.prototype.weight = function (weight, fill) {
        if (fill === void 0) { fill = true; }
        if (weight <= 0)
            return this;
        return this.then(new ModifierImpl([
            {
                style: "\n            flex-grow:".concat(weight, ";\n            flex-shrink:").concat(fill ? 1 : 0, ";\n            flex-basis:0%;\n          "),
            },
        ]));
    };
    /* -------- padding / margin -------- */
    ModifierImpl.prototype.padding = function (value) {
        return this.then(new ModifierImpl([{ style: "padding:".concat(value, "px;") }]));
    };
    ModifierImpl.prototype.paddingHorizontal = function (value) {
        return this.then(new ModifierImpl([
            { style: "padding-left:".concat(value, "px;padding-right:").concat(value, "px;") },
        ]));
    };
    ModifierImpl.prototype.paddingVertical = function (value) {
        return this.then(new ModifierImpl([
            { style: "padding-top:".concat(value, "px;padding-bottom:").concat(value, "px;") },
        ]));
    };
    ModifierImpl.prototype.marginTop = function (value) {
        return this.then(new ModifierImpl([{ style: "margin-top:".concat(value, "px;") }]));
    };
    /* -------- background / border -------- */
    ModifierImpl.prototype.background = function (color) {
        var resolved = typeof color === "string"
            ? color
            : resolveColor(color);
        return this.then(new ModifierImpl([{ style: "background:".concat(resolved, ";") }]));
    };
    ModifierImpl.prototype.border = function (width, color, shape) {
        if (width <= 0)
            return this;
        return this.then(new ModifierImpl([
            {
                style: "\n            border:".concat(width, "px solid ").concat(color, ";\n            ").concat(shape ? "border-radius:".concat(shape.toCssBorderRadius(), ";") : "", "\n          "),
            },
        ]));
    };
    ModifierImpl.prototype.clip = function (shape) {
        return this.then(new ModifierImpl([
            {
                style: "\n            border-radius:".concat(shape.toCssBorderRadius(), ";\n            overflow:hidden;\n          "),
            },
        ]));
    };
    /* -------- posicionamiento semántico -------- */
    ModifierImpl.prototype.align = function (alignment) {
        return this.then(new ModifierImpl([
            {
                meta: { align: alignment }
            }
        ]));
    };
    /* -------- interacción -------- */
    ModifierImpl.prototype.clickable = function () {
        return this.then(new ModifierImpl([
            {
                className: "compose-clickable",
                style: "cursor:pointer;user-select:none;",
            },
        ]));
    };
    /* -------- consumo interno -------- */
    ModifierImpl.prototype.toStyle = function () {
        return this.entries.map(function (e) { var _a; return (_a = e.style) !== null && _a !== void 0 ? _a : ""; }).join("");
    };
    ModifierImpl.prototype.toClass = function () {
        return this.entries.map(function (e) { var _a; return (_a = e.className) !== null && _a !== void 0 ? _a : ""; }).join(" ");
    };
    ModifierImpl.prototype.getMeta = function () {
        return this.entries.reduce(function (acc, e) {
            var _a;
            return (__assign(__assign({}, acc), ((_a = e.meta) !== null && _a !== void 0 ? _a : {})));
        }, {});
    };
    return ModifierImpl;
}());
export { ModifierImpl };
