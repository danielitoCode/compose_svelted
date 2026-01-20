/* =========================
 * Box (position:absolute)
 * ========================= */

import {ModifierImpl} from "../../core/modifier/ModifierImpl";
import {BoxAlignment} from "./Alignment";

export function resolveBoxAlignment(alignment?: BoxAlignment): string {
    if (!alignment) return "";

    const parts = alignment.split(" ");
    const h = parts[0];
    const v = parts[1] ?? parts[0];

    let style = "position:absolute;";

    // Vertical
    if (v === "flex-start") style += "top:0;";
    else if (v === "flex-end") style += "bottom:0;";
    else style += "top:50%;";

    // Horizontal
    if (h === "flex-start") style += "left:0;";
    else if (h === "flex-end") style += "right:0;";
    else style += "left:50%;";

    if (h === "center" || v === "center") {
        style += "transform:translate(-50%,-50%);";
    }

    return style;
}
/* =========================
 * Flex (Row / Column)
 * ========================= */

export function resolveFlexAlignment(mod: ModifierImpl): string {
    const align = mod.getMeta().align;
    if (!align) return "";

    const [horizontal] = align.split(" ");

    return `
    align-self:${
        horizontal === "center"
            ? "center"
            : horizontal === "flex-end"
                ? "flex-end"
                : "flex-start"
    };
  `;
}