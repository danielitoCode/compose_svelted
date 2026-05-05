import { ModifierImpl } from "./ModifierImpl";
import type { BoxAlignment } from "../../components/layouts/Alignment";
import type { Shape } from "../shapes/Shape";
import type { ColorToken } from "../theme/ColorScheme";

type PaddingValue = number | {
    top?: number;
    bottom?: number;
    start?: number;
    end?: number;
};

export const Modifier = {
    empty(): ModifierImpl {
        return new ModifierImpl();
    },

    padding(valueOrParams: PaddingValue = 0, unit = "px"): ModifierImpl {
        return new ModifierImpl().padding(valueOrParams, unit);
    },

    paddingHorizontal(value: number): ModifierImpl {
        return new ModifierImpl().paddingHorizontal(value);
    },

    paddingVertical(value: number): ModifierImpl {
        return new ModifierImpl().paddingVertical(value);
    },

    border(width: number, color: string, shape?: Shape): ModifierImpl {
        return new ModifierImpl().border(width, color, shape);
    },

    clickable(onClick: () => void): ModifierImpl {
        return new ModifierImpl().clickable(onClick);
    },

    offset(x: number, y: number): ModifierImpl {
        return new ModifierImpl().offset(x, y);
    },

    verticalScroll(enabled = true): ModifierImpl {
        return new ModifierImpl().verticalScroll(enabled);
    },

    horizontalScroll(enabled = true): ModifierImpl {
        return new ModifierImpl().horizontalScroll(enabled);
    },

    align(alignment: BoxAlignment): ModifierImpl {
        return new ModifierImpl().align(alignment);
    },

    fillMaxWidth(): ModifierImpl {
        return new ModifierImpl().fillMaxWidth();
    },

    fillMaxHeight(): ModifierImpl {
        return new ModifierImpl().fillMaxHeight();
    },

    fillMaxSize(): ModifierImpl {
        return new ModifierImpl().fillMaxSize();
    },

    height(value: number | string, unit = "px"): ModifierImpl {
        return new ModifierImpl().height(value, unit);
    },

    width(value: number | string, unit = "px"): ModifierImpl {
        return new ModifierImpl().width(value, unit);
    },

    background(color: ColorToken | string): ModifierImpl {
        return new ModifierImpl().background(color);
    },

    weight(weight: number, fill = true): ModifierImpl {
        return new ModifierImpl().weight(weight, fill);
    },

    weightNoFill(weight: number): ModifierImpl {
        return new ModifierImpl().weight(weight, false);
    },

    marginTop(value: number, unit = "px"): ModifierImpl {
        return new ModifierImpl().marginTop(value, unit);
    },

    clip(shape: Shape): ModifierImpl {
        return new ModifierImpl().clip(shape);
    },

    size(value: number | string, unit = "px"): ModifierImpl {
        return new ModifierImpl().size(value, unit);
    }
} as const;

export type Modifier = ModifierImpl;
