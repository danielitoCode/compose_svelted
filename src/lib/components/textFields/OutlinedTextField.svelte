<script lang="ts">
    import BaseTextField from "./BaseTextField.svelte";
    import { TextFieldDefaults } from "./TextFieldDefaults";
    import type { TextFieldColors } from "./TextFieldColors";
    import { Modifier } from "../../core/modifier/Modifier";
    import { RoundedCornerShape } from "../../core/shapes/RoundedCornerShape";
    import type { Shape } from "../../core/shapes/Shape";
    import type { TextStyleToken } from "../../core/theme/TextStyle";

    export let value = "";
    export let onValueChange = (v: string) => {};
    export let label = "";
    export let placeholder = "";
    export let singleLine = true;
    export let textStyle: TextStyleToken = "bodyLarge";
    export let modifier: Modifier = Modifier.empty();
    export let shape: Shape = RoundedCornerShape(12);

    // 🔒 OutlinedTextField SIEMPRE usa outlinedColors por defecto
    export let colors: TextFieldColors = TextFieldDefaults.outlinedColors();

    let focused = false;
</script>

<div
        class="relative"
        style={`
        border:1px solid ${focused
            ? colors.borderFocused
            : colors.borderUnfocused};
        border-radius:${shape.toCssBorderRadius()};
        transition:border-color 200ms;
        ${modifier.toStyle()}
    `}
>
    <BaseTextField
            value={value}
            onValueChange={onValueChange}
            label={label}
            placeholder={placeholder}
            singleLine={singleLine}
            textStyle={textStyle}
            modifier={Modifier.empty()}
            shape={shape}
            colors={colors}
            on:focus={() => focused = true}
            on:blur={() => focused = false}
    >
        <slot name="leadingIcon" slot="leadingIcon" />
        <slot name="trailingIcon" slot="trailingIcon" />
    </BaseTextField>
</div>