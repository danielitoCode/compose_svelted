import { Modifier } from "../../core/modifier/Modifier";
import type { TextStyleToken } from "../../core/theme/TextStyle";
import type { Shape } from "../../core/shapes/Shape";
import type { TextFieldColors } from "./TextFieldColors";
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
declare const BaseTextField: $$__sveltets_2_IsomorphicComponent<{
    value?: string;
    onValueChange?: (_value: string) => void;
    label?: string;
    placeholder?: string;
    supportingText: string | undefined;
    singleLine?: boolean;
    textStyle?: TextStyleToken;
    modifier?: Modifier;
    shape?: Shape;
    colors?: TextFieldColors;
    enabled?: boolean;
    readOnly?: boolean;
    isError?: boolean;
    density?: DensityToken;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    leadingIcon: {};
    trailingIcon: {};
}, {}, string>;
type BaseTextField = InstanceType<typeof BaseTextField>;
export default BaseTextField;
