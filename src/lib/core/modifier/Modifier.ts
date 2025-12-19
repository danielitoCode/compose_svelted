export type ModifierStyle = {
    className?: string;
    style?: string;
};

export class Modifier {
    private readonly styles: ModifierStyle[];

    private constructor(styles: ModifierStyle[] = []) {
        this.styles = styles;
    }

    static empty(): Modifier {
        return new Modifier();
    }

    then(other: Modifier): Modifier {
        return new Modifier([...this.styles, ...other.styles]);
    }

    // ---------- layout-independent modifiers ----------

    padding(value: number): Modifier {
        return this.then(
            new Modifier([{ style: `padding:${value}px;` }])
        );
    }

    paddingHorizontal(value: number): Modifier {
        return this.then(
            new Modifier([{ style: `padding-left:${value}px;padding-right:${value}px;` }])
        );
    }

    paddingVertical(value: number): Modifier {
        return this.then(
            new Modifier([{ style: `padding-top:${value}px;padding-bottom:${value}px;` }])
        );
    }

    fillMaxWidth(): Modifier {
        return this.then(
            new Modifier([{ style: `width:100%;` }])
        );
    }

    fillMaxHeight(): Modifier {
        return this.then(
            new Modifier([{ style: `height:100%;` }])
        );
    }

    background(colorCss: string): Modifier {
        return this.then(
            new Modifier([{ style: `background:${colorCss};` }])
        );
    }

    // ---------- internal ----------

    toStyle(): string {
        return this.styles.map(s => s.style ?? "").join("");
    }

    toClass(): string {
        return this.styles.map(s => s.className ?? "").join(" ");
    }
}

// Conveniencia Compose-like
export const ModifierNone = Modifier.empty();