export function elevationToShadow(value) {
    if (!value || value === 0)
        return "none";
    var v = typeof value === "number" ? "".concat(value, "px") : value;
    return "\n        0 ".concat(v, " calc(").concat(v, " * 3) rgba(0, 0, 0, 0.16)\n    ").trim();
}
