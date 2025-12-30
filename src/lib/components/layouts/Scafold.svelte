<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";

    export let modifier: Modifier = Modifier.empty();

    // Padding interno aplicado al content (como Scaffold paddingValues)
    export let contentPadding: number = 16;

    // Control del FAB
    export let fabAlignment:
        | "bottom-end"
        | "bottom-center"
        | "bottom-start" = "bottom-end";
</script>

<div
        style={`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
    ${modifier.toStyle()}
  `}
>
    <!-- Top Bar -->
    <div>
        <slot name="topBar" />
    </div>

    <!-- Content -->
    <div
            style={`
      flex: 1;
      position: relative;
      padding: ${contentPadding}px;
      overflow: auto;
    `}
    >
        <slot />
    </div>

    <!-- Bottom Bar -->
    <div>
        <slot name="bottomBar" />
    </div>

    <!-- Floating Action Button -->
    <div
            style={`
      position: absolute;
      pointer-events: none;
      inset: 0;
    `}
    >
        <div
                style={`
        position: absolute;
        pointer-events: auto;

        ${
          fabAlignment === "bottom-end"
            ? "right: 16px; bottom: 16px;"
            : fabAlignment === "bottom-center"
            ? "left: 50%; transform: translateX(-50%); bottom: 16px;"
            : "left: 16px; bottom: 16px;"
        }
      `}
        >
            <slot name="floatingActionButton" />
        </div>
    </div>
</div>