import {BoxAlignment} from "./Alignment";

export function resolveFlexAlignSelf(alignment: BoxAlignment): string {
    const parts = alignment.split(" ");
    const vertical = parts[1] ?? parts[0];

    if (vertical === "flex-start") return "align-self:flex-start;";
    if (vertical === "flex-end") return "align-self:flex-end;";
    return "align-self:center;";
}