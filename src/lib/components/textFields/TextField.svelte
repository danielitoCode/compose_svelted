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
    export let enabled: boolean = true;
    export let isError: boolean = false;
    export let floatingLabelScale: number = 0.78;
    export let placeholder = "";
    export let singleLine = true;
    export let textStyle: TextStyleToken = "bodyLarge";
    export let modifier: Modifier = Modifier.empty();
    export let shape: Shape = RoundedCornerShape(12);

    // 🔒 FilledTextField SIEMPRE usa filledColors por defecto
    export let colors: TextFieldColors = TextFieldDefaults.filledColors();
</script>

<BaseTextField
        value={value}
        onValueChange={onValueChange}
        enabled={enabled}
        isError={isError}
        floatingLabelScale={floatingLabelScale}
        label={label}
        placeholder={placeholder}
        singleLine={singleLine}
        textStyle={textStyle}
        modifier={modifier}
        shape={shape}
        colors={colors}
>
    <slot name="leadingIcon" slot="leadingIcon" />
    <slot name="trailingIcon" slot="trailingIcon" />
</BaseTextField>