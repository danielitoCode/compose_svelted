/* =========================
 * Box (position:absolute)
 * ========================= */
export function resolveBoxAlignment(alignment) {
    var _a;
    if (!alignment)
        return "";
    var parts = alignment.split(" ");
    var h = parts[0];
    var v = (_a = parts[1]) !== null && _a !== void 0 ? _a : parts[0];
    var style = "position:absolute;";
    // Vertical
    if (v === "flex-start")
        style += "top:0;";
    else if (v === "flex-end")
        style += "bottom:0;";
    else
        style += "top:50%;";
    // Horizontal
    if (h === "flex-start")
        style += "left:0;";
    else if (h === "flex-end")
        style += "right:0;";
    else
        style += "left:50%;";
    if (h === "center" || v === "center") {
        style += "transform:translate(-50%,-50%);";
    }
    return style;
}
/* =========================
 * Flex (Row / Column)
 * ========================= */
export function resolveFlexAlignment(mod) {
    var align = mod.getMeta().align;
    if (!align)
        return "";
    var horizontal = align.split(" ")[0];
    return "\n    align-self:".concat(horizontal === "center"
        ? "center"
        : horizontal === "flex-end"
            ? "flex-end"
            : "flex-start", ";\n  ");
}
