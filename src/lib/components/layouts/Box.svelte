<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import type { BoxAlignment } from "./Alignment";
    import {resolveBoxAlignment} from "./resolveAlignment";

    export let modifier: Modifier = Modifier.empty();
    export let contentAlignment: BoxAlignment | undefined = undefined;

    /**
     * Box-level alignment:
     * Alinea TODOS los hijos (Compose Box behavior)
     */
    function contentAlignmentStyle(alignment: BoxAlignment): string {
        const [h, v = h] = alignment.split(" ");

        const justify =
            h === "flex-start" ? "flex-start" :
                h === "flex-end" ? "flex-end" :
                    "center";

        const align =
            v === "flex-start" ? "flex-start" :
                v === "flex-end" ? "flex-end" :
                    "center";

        return `
      display:flex;
      justify-content:${justify};
      align-items:${align};
    `;
    }
</script>

<div
        class="compose-box"
        style={`
    position:relative;
    ${contentAlignment ? contentAlignmentStyle(contentAlignment) : ""}
    ${modifier.toStyle()}
  `}
>
    <!--
      Slot con scope:
      Cada hijo puede traer su propio Modifier
    -->
    style={`position:relative;${modifier.toStyle()}`}
</div>