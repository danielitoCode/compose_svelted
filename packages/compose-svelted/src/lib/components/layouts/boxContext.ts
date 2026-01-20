import type { ModifierImpl } from "../../core/modifier/ModifierImpl";
import type { BoxAlignment } from "./Alignment";

export type BoxLayoutContext = {
    contentAlignment: BoxAlignment;
    resolveChildPosition: (childModifier?: ModifierImpl) => string;
};

export const BOX_CTX = Symbol("compose-svelted:box");