/* =========================
 * Box (position:absolute)
 * ========================= */

import {ModifierImpl} from "../../core/modifier/ModifierImpl";

export function resolveBoxAlignment(mod: ModifierImpl): string {
    const align = mod.getMeta().align;
    if (!align) return "";

    const [horizontal, vertical = horizontal] = align.split(" ");

    let style = "position:absolute;";

    // vertical
    if (vertical === "flex-start") style += "top:0;";
    else if (vertical === "center") style += "top:50%;transform:translateY(-50%);";
    else if (vertical === "flex-end") style += "bottom:0;";

    // horizontal
    if (horizontal === "flex-start") style += "left:0;";
    else if (horizontal === "center") {
        style += "left:50%;";
        style = style.includes("translateY")
            ? style.replace("translateY(-50%)", "translate(-50%,-50%)")
            : style + "transform:translateX(-50%);";
    }
    else if (horizontal === "flex-end") style += "right:0;";

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