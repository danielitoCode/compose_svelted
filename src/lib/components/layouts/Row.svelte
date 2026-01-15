<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { Alignment } from "./Alignment";
    import { Arrangement } from "./Arrangement";
    import type { ArrangementValue } from "./Arrangement";
    import type { VerticalAlignment } from "./Alignment";
    import {resolveFlexAlignSelf} from "./resolveFlexAlignSelf";

    export let modifier: Modifier = Modifier.empty();

    // Cross-axis (vertical en Row)
    export let verticalAlignment: VerticalAlignment = Alignment.CenterVertically;

    // Main-axis (horizontal en Row)
    export let horizontalArrangement: ArrangementValue = Arrangement.Start;

    $: gapStyle =
        horizontalArrangement.type === "spaced"
            ? `gap:${horizontalArrangement.gap}px;`
            : "";
</script>

<div
        class="compose-row"
        style={`
    display: flex;
    flex-direction: row;
    align-items: ${verticalAlignment};
    justify-content: ${horizontalArrangement.justifyContent};
    ${gapStyle}
    ${modifier.toStyle()}
  `}
>
    <slot let:modifier>
        <div
                style={`
      ${modifier?.getMeta().align
        ? resolveFlexAlignSelf(modifier.getMeta().align)
        : ""}
      ${modifier?.toStyle()}
    `}
        >
            <slot />
        </div>
    </slot>
</div>