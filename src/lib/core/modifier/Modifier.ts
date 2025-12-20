import { ModifierImpl } from "./ModifierImpl";

// 🔑 Modifier = factory singleton (como Compose)
export const Modifier = {
    empty(): ModifierImpl {
        return new ModifierImpl();
    },

    padding(value: number): ModifierImpl {
        return new ModifierImpl().padding(value);
    },

    paddingHorizontal(value: number): ModifierImpl {
        return new ModifierImpl().paddingHorizontal(value);
    },

    paddingVertical(value: number): ModifierImpl {
        return new ModifierImpl().paddingVertical(value);
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

    background(cssColor: string): ModifierImpl {
        return new ModifierImpl().background(cssColor);
    },
} as const;

// Tipo público
export type Modifier = ModifierImpl;