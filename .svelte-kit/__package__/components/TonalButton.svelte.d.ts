import { Modifier } from "../core/modifier/Modifier";
import { type ColorToken } from "../core/theme/ColorScheme";
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
type $$__sveltets_2_PropsWithChildren<Props, Slots> = Props & (Slots extends {
    default: any;
} ? Props extends Record<string, never> ? any : {
    children?: any;
} : {});
declare const TonalButton: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<{
    onClick?: () => void;
    modifier?: Modifier;
    color?: ColorToken | string;
    onColor?: ColorToken | string;
    shape?: "none" | "extraSmall" | "small" | "medium" | "large";
    elevation?: "level0" | "level1" | "level2" | "level3" | "level4";
}, {
    default: {};
}>, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}, {}, string>;
type TonalButton = InstanceType<typeof TonalButton>;
export default TonalButton;
