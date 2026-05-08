/**
 * Alignment — tokens de alineación type-safe con branded types.
 *
 * Los objetos son opacos: nunca se puede pasar un VerticalAlignment donde
 * se espera un HorizontalAlignment, aunque ambos representen "center" en CSS.
 *
 * Filosofía Jetpack Compose:
 *  - HorizontalAlignment → eje cross de Column
 *  - VerticalAlignment   → eje cross de Row
 *  - BoxAlignment        → alineación compuesta para Box (stack)
 */

// ─── Tipos opacos ────────────────────────────────────────────────────────────

export type HorizontalAlignment = {
    readonly _brand: 'HorizontalAlignment';
    readonly cssValue: string;
};

export type VerticalAlignment = {
    readonly _brand: 'VerticalAlignment';
    readonly cssValue: string;
};

/** Alineación compuesta para Box — encapsula horizontal + vertical */
export type BoxAlignment = {
    readonly _brand: 'BoxAlignment';
    readonly horizontal: string;  // flex-start | center | flex-end
    readonly vertical: string;    // flex-start | center | flex-end
};

// ─── Helpers internos ────────────────────────────────────────────────────────

function h(cssValue: string): HorizontalAlignment {
    return { _brand: 'HorizontalAlignment', cssValue } as HorizontalAlignment;
}

function v(cssValue: string): VerticalAlignment {
    return { _brand: 'VerticalAlignment', cssValue } as VerticalAlignment;
}

function box(horizontal: string, vertical: string): BoxAlignment {
    return { _brand: 'BoxAlignment', horizontal, vertical } as BoxAlignment;
}

// ─── Tokens públicos ─────────────────────────────────────────────────────────

export const Alignment = {
    // Horizontal — eje cross de Column
    Start:              h('flex-start'),
    CenterHorizontally: h('center'),
    End:                h('flex-end'),

    // Vertical — eje cross de Row
    Top:              v('flex-start'),
    CenterVertically: v('center'),
    Bottom:           v('flex-end'),

    // Box — alineación compuesta (stack)
    TopStart:     box('flex-start', 'flex-start'),
    TopCenter:    box('center',     'flex-start'),
    TopEnd:       box('flex-end',   'flex-start'),

    CenterStart:  box('flex-start', 'center'),
    Center:       box('center',     'center'),
    CenterEnd:    box('flex-end',   'center'),

    BottomStart:  box('flex-start', 'flex-end'),
    BottomCenter: box('center',     'flex-end'),
    BottomEnd:    box('flex-end',   'flex-end'),
} as const;