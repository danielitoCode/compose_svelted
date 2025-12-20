<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { Alignment } from "./Alignment";
    import { Arrangement } from "./Arrangement";
    import type { ArrangementValue } from "./Arrangement";
    import type { VerticalAlignment } from "./Alignment";

    export let modifier: Modifier = Modifier.empty();
    export let verticalAlignment: VerticalAlignment = Alignment.Top;
    export let horizontalArrangement: ArrangementValue = Arrangement.Start;
</script>

<div
        class="flex flex-row"
        style={`
            align-items: ${verticalAlignment};
            justify-content: ${horizontalArrangement.justifyContent};
        ${horizontalArrangement.type === "spaced" ? `gap:${horizontalArrangement.gap}px;` : ""}
        ${modifier.toStyle()}
    `}
>
    <slot />
</div>