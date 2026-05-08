<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { Alignment } from "./Alignment";
    import { Arrangement } from "./Arrangement";
    import type { ArrangementValue } from "./Arrangement";
    import type { HorizontalAlignment } from "./Alignment";
    import {resolveFlexAlignSelf} from "./resolveFlexAlignSelf";

    export let modifier: Modifier = Modifier.empty();

    // Cross-axis (horizontal en Column)
    export let horizontalAlignment: HorizontalAlignment = Alignment.Start;

    // Main-axis (vertical en Column)
    export let verticalArrangement: ArrangementValue = Arrangement.Start;

    $: gapStyle =
        verticalArrangement.type === "spaced"
            ? `gap:${verticalArrangement.gap}px;`
            : "";
</script>

<div
        class="compose-column"
        style={`
    display: flex;
    flex-direction: column;
    align-items: ${horizontalAlignment};
    justify-content: ${verticalArrangement.justifyContent};
    ${gapStyle}
    ${modifier.toStyle()}
  `}
>
    <slot let:modifier={itemModifier}>
        <div
                style={`
      ${itemModifier?.getMeta().align
        ? resolveFlexAlignSelf(itemModifier.getMeta().align)
        : ""}
      ${itemModifier?.toStyle()}
    `}
        >
            <slot />
        </div>
    </slot>
</div>
