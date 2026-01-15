import type { TextFieldColors } from "./TextFieldColors";
import { Modifier } from "../../core/modifier/Modifier";
import type { Shape } from "../../core/shapes/Shape";
import type { TextStyleToken } from "../../core/theme/TextStyle";
import { type DensityToken } from "../../core/theme/Density";
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const TextField: $$__sveltets_2_IsomorphicComponent<{
    value?: string;
    onValueChange?: (v: string) => void;
    label?: string;
    enabled?: boolean;
    isError?: boolean;
    floatingLabelScale?: number;
    placeholder?: string;
    singleLine?: boolean;
    textStyle?: TextStyleToken;
    modifier?: Modifier;
    shape?: Shape;
    supportingText?: string | undefined;
    readOnly?: boolean;
    density?: DensityToken;
    colors?: TextFieldColors;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    leadingIcon: {
        slot: string;
    };
    trailingIcon: {
        slot: string;
    };
}, {}, string>;
type TextField = InstanceType<typeof TextField>;
export default TextField;
