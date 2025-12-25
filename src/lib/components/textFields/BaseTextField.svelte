<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { resolveTextStyle } from "../../core/theme/resolve";
    import type { TextStyleToken } from "../../core/theme/TextStyle";
    import { RoundedCornerShape } from "../../core/shapes/RoundedCornerShape";
    import type { Shape } from "../../core/shapes/Shape";
    import type { TextFieldColors } from "./TextFieldColors";
    import { TextFieldDefaults } from "./TextFieldDefaults";
    import { Density, type DensityToken } from "../../core/theme/Density";

    // ===== Public API =====
    export let value = "";
    export let onValueChange = (_value: string) => {};
    export let label = "";
    export let placeholder = "";
    export let supportingText: string | undefined;

    export let singleLine = true;
    export let textStyle: TextStyleToken = "bodyLarge";
    export let modifier: Modifier = Modifier.empty();
    export let shape: Shape = RoundedCornerShape(12);
    export let colors: TextFieldColors = TextFieldDefaults.filledColors();

    export let enabled = true;
    export let readOnly = false;
    export let isError = false;
    export let density: DensityToken = Density.Default;

    let focused = false;

    const inputId = `tf-${Math.random().toString(36).slice(2)}`;

    // ===== State =====
    $: hasText = value.length > 0;
    $: floating = focused || hasText;

    $: hasLeading = !!$$slots.leadingIcon;
    $: hasTrailing = !!$$slots.trailingIcon;

    // ===== Density =====
    $: fieldHeight = density === Density.Compact ? 44 : 56;
    $: minMultilineHeight = density === Density.Compact ? 72 : 88;
    $: paddingTop = density === Density.Compact ? 14 : 20;
    $: paddingBottom = density === Density.Compact ? 6 : 8;

    // ===== Colors =====
    const errorColor = "var(--md-sys-color-error)";

    $: labelColor = isError
        ? errorColor
        : floating
            ? colors.cursor
            : colors.label;

    $: textColor = enabled ? colors.text : colors.label;

    $: indicatorColor = isError
        ? errorColor
        : focused
            ? colors.indicatorFocused
            : colors.indicatorUnfocused;

    $: supportingColor = isError ? errorColor : colors.label;

    function handleInput(e: Event) {
        if (!enabled || readOnly) return;
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        onValueChange(target.value);
    }
</script>

<!-- Wrapper -->
<div class="flex flex-col gap-2" style={modifier.toStyle()}>
    <!-- Field -->
    <div
            class="relative overflow-hidden transition-colors duration-150 group"
            style={`
      ${singleLine ? `height:${fieldHeight}px;` : `min-height:${minMultilineHeight}px;`}
      background:${colors.container};
      border-radius:${shape.toCssBorderRadius()};
      opacity:${enabled ? 1 : 0.6};
    `}
    >
        <!-- Hover overlay (desktop only via CSS) -->
        <div
                class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style="background: rgba(0,0,0,0.04);"
        ></div>

        <div
                class="grid h-full items-center"
                style={`
        grid-template-columns: ${hasLeading ? "auto " : ""}1fr${hasTrailing ? " auto" : ""};
        padding: 0 16px;
        column-gap: 12px;
      `}
        >
            {#if hasLeading}
                <div class="flex items-center justify-center">
                    <slot name="leadingIcon" />
                </div>
            {/if}

            <!-- Input / Label -->
            <div class="relative h-full flex flex-col justify-center">
                {#if label}
                    <label
                            for={inputId}
                            class="absolute left-0 pointer-events-none origin-left transition-all duration-200"
                            style={`
              top:${floating ? "2px" : "50%"};
              transform:
                translateY(${floating ? "0" : "-50%"})
                scale(${floating ? 0.72 : 1});
              color:${labelColor};
            `}
                    >
                        {label}
                    </label>
                {/if}

                {#if singleLine}
                    <input
                            id={inputId}
                            type="text"
                            bind:value
                            on:input={handleInput}
                            on:focus={() => (focused = true)}
                            on:blur={() => (focused = false)}
                            placeholder={focused ? placeholder : ""}
                            disabled={!enabled}
                            readonly={readOnly}
                            class="w-full bg-transparent outline-none"
                            style={`
              font:${resolveTextStyle(textStyle)};
              font-size:${floating ? "1.05em" : "1em"};
              color:${textColor};
              padding-top:${paddingTop}px;
              padding-bottom:${paddingBottom}px;
            `}
                    />
                {:else}
          <textarea
                  id={inputId}
                  bind:value
                  on:input={handleInput}
                  on:focus={() => (focused = true)}
                  on:blur={() => (focused = false)}
                  placeholder={focused ? placeholder : ""}
                  rows="3"
                  disabled={!enabled}
                  readonly={readOnly}
                  class="w-full bg-transparent outline-none resize-none"
                  style={`
              font:${resolveTextStyle(textStyle)};
              font-size:${floating ? "1.05em" : "1em"};
              color:${textColor};
              padding-top:${paddingTop}px;
              padding-bottom:12px;
            `}
          ></textarea>
                {/if}
            </div>

            {#if hasTrailing}
                <div class="flex items-center justify-center">
                    <slot name="trailingIcon" />
                </div>
            {/if}
        </div>

        <!-- Indicator -->
        <div
                class="absolute bottom-0 left-0 right-0 h-1 transition-colors"
                style={`background:${indicatorColor};`}
        ></div>
    </div>

    <!-- Supporting text -->
    {#if supportingText}
        <div
                class="text-xs px-16"
                style={`color:${supportingColor}; margin-top:2px;`}
        >
            {supportingText}
        </div>
    {/if}
</div>