export function resolveFlexAlignSelf(alignment) {
    var _a;
    var parts = alignment.split(" ");
    var vertical = (_a = parts[1]) !== null && _a !== void 0 ? _a : parts[0];
    if (vertical === "flex-start")
        return "align-self:flex-start;";
    if (vertical === "flex-end")
        return "align-self:flex-end;";
    return "align-self:center;";
}
