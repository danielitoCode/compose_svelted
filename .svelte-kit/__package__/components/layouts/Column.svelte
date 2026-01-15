<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { Alignment } from "./Alignment";
    import { Arrangement } from "./Arrangement";
    import type { ArrangementValue } from "./Arrangement";
    import type { HorizontalAlignment } from "./Alignment";

    export let modifier: Modifier = Modifier.empty();
    export let horizontalAlignment: HorizontalAlignment = Alignment.Start;
    export let verticalArrangement: ArrangementValue = Arrangement.Start;
</script>

<div
        class="flex flex-col"
        style={`
            align-items: ${horizontalAlignment};
            justify-content: ${verticalArrangement.justifyContent};
            ${verticalArrangement.type === "spaced" ? `gap:${verticalArrangement.gap}px;` : ""}
            ${modifier.toStyle()}
        `}
>
    <slot />
</div>