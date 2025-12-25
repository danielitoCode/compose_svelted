<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { resolveColor, resolveTextStyle } from "../../core/theme/resolve";
    import type { TextStyleToken } from "../../core/theme/TextStyle";
    import { RoundedCornerShape } from "../../core/shapes/RoundedCornerShape";
    import type { Shape } from "../../core/shapes/Shape";
    import type { TextFieldColors } from "./TextFieldColors";
    import { TextFieldDefaults } from "./TextFieldDefaults";

    // ===== Public API =====
    export let value = "";
    export let onValueChange = (v: string) => {};
    export let label = "";
    export let placeholder = "";
    export let singleLine = true;
    export let textStyle: TextStyleToken = "bodyLarge";
    export let modifier: Modifier = Modifier.empty();
    export let shape: Shape = RoundedCornerShape(12);
    export let colors: TextFieldColors = TextFieldDefaults.filledColors();

    // New (polish)
    export let enabled: boolean = true;
    export let isError: boolean = false;

    // Floating label scale (tunable by wrapper)
    export let floatingLabelScale: number = 0.78;

    // ===== Internal state =====
    let focused = false;

    $: hasText = value.length > 0;
    $: floating = focused || hasText;

    // Slot detection (layout correctness)
    $: hasLeading = !!$$slots.leadingIcon;
    $: hasTrailing = !!$$slots.trailingIcon;

    // ===== Colors =====
    $: labelColor = isError
        ? resolveColor("error")
        : floating
            ? colors.cursor
            : colors.label;

    $: textColor = enabled ? colors.text : colors.label;
    $: cursorColor = isError ? resolveColor("error") : colors.cursor;

    $: indicatorColor = isError
        ? resolveColor("error")
        : focused
            ? colors.indicatorFocused
            : colors.indicatorUnfocused;

    function handleInput(e: Event) {
        if (!enabled) return;
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        onValueChange(target.value);
    }
</script>

<div
        class="relative overflow-hidden transition-colors duration-150"
        style={`
        ${singleLine ? "height:56px;" : "min-height:88px;"}
        background:${colors.container};
        border-radius:${shape.toCssBorderRadius()};
        opacity:${enabled ? 1 : 0.6};
        pointer-events:${enabled ? "auto" : "none"};
        ${modifier.toStyle()}
    `}
>
    <!-- Hover (desktop only) -->
    <div
            class="absolute inset-0 pointer-events-none"
            style={`
            transition: background-color 120ms ease;
        `}
    ></div>

    <div
            class="grid h-full items-center"
            style={`
            grid-template-columns:
                ${hasLeading ? "auto " : ""}
                1fr
                ${hasTrailing ? " auto" : ""};
            padding: 0 16px;
            column-gap: ${hasLeading || hasTrailing ? "12px" : "0"};
        `}
    >
        <!-- Leading icon -->
        {#if hasLeading}
            <div class="flex items-center justify-center">
                <slot name="leadingIcon" />
            </div>
        {/if}

        <!-- Field -->
        <div class="relative h-full flex flex-col justify-center">
            {#if label}
                <label
                        class="absolute left-0 pointer-events-none origin-left"
                        style={`
                        top:${floating ? "6px" : "50%"};
                        transform:
                            translateY(${floating ? "0" : "-50%"})
                            scale(${floating ? floatingLabelScale : 1});
                        color:${labelColor};
                        transition:
                            transform 200ms cubic-bezier(0.4,0,0.2,1),
                            color 200ms;
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
                        disabled={!enabled}
                        class="w-full bg-transparent outline-none"
                        style={`
                        font:${resolveTextStyle(textStyle)};
                        color:${textColor};
                        caret-color:${cursorColor};
                        padding-top:20px;
                        cursor:${enabled ? "text" : "not-allowed"};
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
                        disabled={!enabled}
                        class="w-full bg-transparent outline-none resize-none"
                        style={`
                        font:${resolveTextStyle(textStyle)};
                        color:${textColor};
                        caret-color:${cursorColor};
                        padding-top:24px;
                        padding-bottom:16px;
                        cursor:${enabled ? "text" : "not-allowed"};
                    `}
                ></textarea>
            {/if}
        </div>

        <!-- Trailing icon -->
        {#if hasTrailing}
            <div class="flex items-center justify-center">
                <slot name="trailingIcon" />
            </div>
        {/if}
    </div>

    <!-- Indicator -->
    <div
            class="absolute bottom-0 left-0 right-0 h-1 transition-colors duration-200"
            style={`background:${indicatorColor};`}
    ></div>
</div>
