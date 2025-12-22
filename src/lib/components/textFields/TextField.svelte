<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { resolveColor, resolveTextStyle } from "../../core/theme/resolve";
    import type { TextStyleToken } from "../../core/theme/TextStyle";
    import { RoundedCornerShape } from "../../core/shapes/RoundedCornerShape";
    import type { Shape } from "../../core/shapes/Shape";

    export let value = "";
    export let onValueChange = (v: string) => {};
    export let label = "";
    export let placeholder = "";
    export let singleLine = true;
    export let textStyle: TextStyleToken = "bodyLarge";
    export let modifier: Modifier = Modifier.empty();
    export let shape: Shape = RoundedCornerShape(12);


    let focused = false;

    const height = 56;

    $: hasText = value.length > 0;
    $: floating = focused || hasText;

    // Colores Material Filled
    $: containerColor = resolveColor("surfaceVariant"); // OPACO
    $: onSurface = resolveColor("onSurface");
    $: onSurfaceVariant = resolveColor("onSurfaceVariant");
    $: primary = resolveColor("primary");

    function handleInput(e: Event) {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        onValueChange(target.value);
    }
</script>

<div
        class="relative overflow-hidden"
        style={`
        height:56px;
        background:${containerColor};
        border-radius:${shape.toCssBorderRadius()};
        border:1px solid transparent;
        ${modifier.toStyle()}
    `}
>
    <div
            class="grid h-full items-center"
            style="grid-template-columns:auto 1fr auto; padding:0 16px;"
    >
        <!-- Leading -->
        <div class="w-24 flex justify-center">
            <slot name="leadingIcon" />
        </div>

        <!-- Field -->
        <div class="relative h-full flex items-center">
            {#if label}
                <label
                        class="absolute left-0 pointer-events-none transition-all duration-200"
                        style={`
                        top:${floating ? "6px" : "50%"};
                        transform:translateY(${floating ? "0" : "-50%"});
                        font-size:${floating ? "12px" : "16px"};
                        color:${floating ? primary : onSurfaceVariant};
                    `}
                >
                    {label}
                </label>
            {/if}

            <input
                    bind:value
                    on:input={handleInput}
                    on:focus={() => focused = true}
                    on:blur={() => focused = false}
                    placeholder={focused ? placeholder : ""}
                    class="w-full bg-transparent outline-none"
                    style={`
                    font:${resolveTextStyle(textStyle)};
                    color:${onSurface};
                    caret-color:${primary};
                    padding-top:20px;
                `}
            />
        </div>

        <!-- Trailing -->
        <div class="w-24 flex justify-center">
            <slot name="trailingIcon" />
        </div>
    </div>

    <!-- Inactive indicator -->
    <div
            class="absolute bottom-0 left-0 right-0 h-1"
            style={`background:${onSurfaceVariant}; opacity:0.4;`}
    />

    <!-- Active indicator -->
    <div
            class="absolute bottom-0 left-0 right-0 h-2"
            style={`
            background:${primary};
            transform:scaleX(${focused ? 1 : 0});
            transform-origin:left;
            transition:transform 200ms;
        `}
    />
</div>