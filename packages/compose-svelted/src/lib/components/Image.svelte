<script lang="ts">
    import { Modifier } from "../core/modifier/Modifier";
    import { ContentScale, type ContentScaleToken } from "./ContentScale";

    export let painter: string = "";
    export let contentScale: ContentScaleToken = ContentScale.Fit;
    export let contentDescription: string = "";
    export let modifier: Modifier = Modifier.empty();

    $: isFillWidth = contentScale === "fillWidth";
    $: isFillHeight = contentScale === "fillHeight";

    $: objectFit =
        isFillWidth || isFillHeight
            ? "cover"
            : contentScale;
</script>

<div class="relative overflow-hidden" style={modifier.toStyle()}>
    <img
            src={painter}
            alt={contentDescription}
            class="absolute inset-0"
            style={`
            width: ${isFillHeight ? "auto" : "100%"};
            height: ${isFillWidth ? "auto" : "100%"};
            object-fit: ${objectFit};
            object-position: center;
        `}
    />
</div>