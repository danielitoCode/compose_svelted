<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { ColorScheme } from "../../core/theme/ColorScheme";

    export let language: string | undefined = undefined;
    export let modifier: Modifier = Modifier.empty();

    // Si false → scroll horizontal
    export let wrap: boolean = false;
</script>

<div
        style={modifier.toStyle()}
        class="relative"
>
    {#if language}
        <div
                class="absolute top-2 right-3 text-xs opacity-60 select-none"
                style="color: var(--md-sys-color-onSurfaceVariant)"
        >
            {language}
        </div>
    {/if}

    <pre
            class={`inline-block max-w-full rounded-xl overflow-x-auto ${
        wrap ? "whitespace-pre-wrap" : "whitespace-pre"
    }`}
            style={`
        margin: 2;
        background: var(--md-sys-color-surfaceVariant);
        color: var(--md-sys-color-onSurface);
        padding: 12px 16px;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 0.85rem;
        line-height: 1.35;
    `}
    >
<code><slot /></code>
</pre>
</div>