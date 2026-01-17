<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { resolveBoxAlignment } from "./resolveAlignment";
    import {Alignment, BoxAlignment} from "./Alignment";

    export let modifier: Modifier = Modifier.empty();
    export let contentPadding = 16;
    export let fabAlignment: BoxAlignment = Alignment.BottomEnd;
</script>

<div
        class="compose-relative"
        style={`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    ${modifier.toStyle()}
  `}
>
    <!-- Top bar -->
    <slot name="topBar" />

    <!-- Content -->
    <div
            class="compose-scaffold-content"
            style={`padding:${contentPadding}px;`}
    >
        <slot />
    </div>

    <!-- Bottom bar -->
    <slot name="bottomBar" />

    <!-- FAB overlay -->
    <div
            style={`
      position:absolute;
      inset:0;
      pointer-events:none;
    `}
    >
        <div
                style={`
        ${resolveBoxAlignment(fabAlignment)}
        pointer-events:auto;
        margin:16px;
      `}
        >
            <slot name="floatingActionButton" />
        </div>
    </div>
</div>