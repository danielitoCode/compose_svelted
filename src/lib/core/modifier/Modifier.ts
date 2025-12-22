import { ModifierImpl } from "./ModifierImpl";
import type {BoxAlignment} from "../../components/layouts/Alignment";
import type {Shape} from "../shapes/Shape";

// 🔑 Modifier = factory singleton (como Compose)
export const Modifier = {
    empty(): ModifierImpl {
        return new ModifierImpl();
    },

    padding(
        valueOrParams: number | { top?: number; bottom?: number; start?: number; end?: number } = 0,
        unit: string = 'px'
    ): ModifierImpl {
        return new ModifierImpl().padding(valueOrParams,unit);
    },

    paddingHorizontal(value: number): ModifierImpl {
        return new ModifierImpl().paddingHorizontal(value);
    },

    verticalScroll(enabled: boolean = true): ModifierImpl {
        return new ModifierImpl().verticalScroll(enabled);
    },

    horizontalScroll(enabled: boolean = true): ModifierImpl {
        return new ModifierImpl().horizontalScroll(enabled);
    },

    paddingVertical(value: number): ModifierImpl {
        return new ModifierImpl().paddingVertical(value);
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

    height(value: number | string, unit = 'px'): ModifierImpl {
        return new ModifierImpl().height(value, unit);
    },

    width(value: number | string, unit = 'px'): ModifierImpl {
        return new ModifierImpl().width(value, unit);
    },

    background(cssColor: string): ModifierImpl {
        return new ModifierImpl().background(cssColor);
    },

    weight(weight: number, fill: boolean = true): ModifierImpl {
        return new ModifierImpl().weight(weight, fill);
    },

    weightNoFill(weight: number): ModifierImpl {
        return this.weight(weight, false);
    },

    marginTop(value: number, unit = 'px'): ModifierImpl {
        return new ModifierImpl().marginTop(value, unit);
    },

    clip(shape: Shape): ModifierImpl {
        return new ModifierImpl().clip(shape);
    },

    size(value: number | string, unit: string = "px"): ModifierImpl {
        return new ModifierImpl().size(value, unit);
    }
} as const;

// Tipo público
export type Modifier = ModifierImpl;