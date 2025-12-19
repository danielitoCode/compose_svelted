export type ModifierEntry = {
    className?: string;
    style?: string;
};

export class ModifierImpl {
    private readonly entries: ModifierEntry[];

    constructor(entries: ModifierEntry[] = []) {
        this.entries = entries;
    }

    then(other: ModifierImpl): ModifierImpl {
        return new ModifierImpl([...this.entries, ...other.entries]);
    }

    padding(value: number): ModifierImpl {
        return this.then(
            new ModifierImpl([{ style: `padding:${value}px;` }])
        );
    }

    paddingHorizontal(value: number): ModifierImpl {
        return this.then(
            new ModifierImpl([
                { style: `padding-left:${value}px;padding-right:${value}px;` },
            ])
        );
    }

    paddingVertical(value: number): ModifierImpl {
        return this.then(
            new ModifierImpl([
                { style: `padding-top:${value}px;padding-bottom:${value}px;` },
            ])
        );
    }

    fillMaxWidth(): ModifierImpl {
        return this.then(
            new ModifierImpl([{ style: `width:100%;` }])
        );
    }

    fillMaxHeight(): ModifierImpl {
        return this.then(
            new ModifierImpl([{ style: `height:100%;` }])
        );
    }

    background(cssColor: string): ModifierImpl {
        return this.then(
            new ModifierImpl([{ style: `background:${cssColor};` }])
        );
    }

    // ---- consumo interno ----

    toStyle(): string {
        return this.entries.map(e => e.style ?? "").join("");
    }

    toClass(): string {
        return this.entries.map(e => e.className ?? "").join(" ");
    }
}