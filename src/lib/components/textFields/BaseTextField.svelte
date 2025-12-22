<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { resolveColor, resolveTextStyle } from "../../core/theme/resolve";
    import type { TextStyleToken } from "../../core/theme/TextStyle";
    import { RoundedCornerShape } from "../../core/shapes/RoundedCornerShape";
    import type { Shape } from "../../core/shapes/Shape";
    import type { TextFieldColors } from "./TextFieldColors";
    import { TextFieldDefaults } from "./TextFieldDefaults";

    export let value = "";
    export let onValueChange = (v: string) => {};
    export let label = "";
    export let placeholder = "";
    export let singleLine = true;
    export let textStyle: TextStyleToken = "bodyLarge";
    export let modifier: Modifier = Modifier.empty();
    export let shape: Shape = RoundedCornerShape(12);
    export let colors: TextFieldColors = TextFieldDefaults.filledColors();


    let focused = false;

    const height = 56;

    $: hasText = value.length > 0;
    $: floating = focused || hasText;

    // Colores Material Filled // OPACO
    $: onSurface = resolveColor("onSurface");
    $: onSurfaceVariant = resolveColor("onSurfaceVariant");
    $: primary = resolveColor("primary");
    $: fieldHeight = singleLine ? 56 : "auto";
    $: containerColor = colors.container;
    $: labelColor = floating ? colors.cursor : colors.label;
    $: textColor = colors.text;
    $: cursorColor = colors.cursor;
    $: indicatorColor = focused
        ? colors.indicatorFocused
        : colors.indicatorUnfocused;
    const minMultilineHeight = 88; // Material guideline

    function handleInput(e: Event) {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        onValueChange(target.value);
    }
</script>

<div
        class="relative overflow-hidden"
        style={`
        ${singleLine ? `height:56px;` : `min-height:88px;`}
        background:${colors.container};
        border-radius:${shape.toCssBorderRadius()};
        border:1px solid transparent;
        ${modifier.toStyle()}
    `}
>
    <div
            class="grid h-full items-center"
            style="grid-template-columns:auto 1fr auto; padding:0 16px;"
    >
        <!-- Leading icon -->
        <div class="w-24 flex justify-center">
            <slot name="leadingIcon" />
        </div>

        <!-- Field -->
        <div class="relative h-full flex flex-col justify-center">
            {#if label}
                <label
                        class="absolute left-0 pointer-events-none transition-all duration-200"
                        style={`
                        top:${floating ? "6px" : "50%"};
                        transform:translateY(${floating ? "0" : "-50%"});
                        font-size:${floating ? "12px" : "16px"};
                        color:${labelColor};
                    `}
                >
                    {label}
                </label>
            {/if}

            {#if singleLine}
                <input
                        type="text"
                        bind:value
                        on:input={handleInput}
                        on:focus={() => focused = true}
                        on:blur={() => focused = false}
                        placeholder={focused ? placeholder : ""}
                        class="w-full bg-transparent outline-none"
                        style={`
                        font:${resolveTextStyle(textStyle)};
                        color:${textColor};
                        caret-color:${cursorColor};
                        padding-top:20px;
                    `}
                />
            {:else}
                <textarea
                        bind:value
                        on:input={handleInput}
                        on:focus={() => focused = true}
                        on:blur={() => focused = false}
                        placeholder={focused ? placeholder : ""}
                        rows="3"
                        class="w-full bg-transparent outline-none resize-none"
                        style={`
                        font:${resolveTextStyle(textStyle)};
                        color:${textColor};
                        caret-color:${cursorColor};
                        padding-top:20px;
                        padding-bottom:12px;
                    `}
                ></textarea>
            {/if}
        </div>

        <!-- Trailing icon -->
        <div class="w-24 flex justify-center">
            <slot name="trailingIcon" />
        </div>
    </div>

    <!-- Indicator -->
    <div
            class="absolute bottom-0 left-0 right-0 h-1"
            style={`background:${indicatorColor};`}
    ></div>
</div>