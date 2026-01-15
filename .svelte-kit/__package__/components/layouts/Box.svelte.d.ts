import { Modifier } from "../../core/modifier/Modifier";
import type { BoxAlignment } from "./Alignment";
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
declare const Box: $$__sveltets_2_IsomorphicComponent<{
    modifier?: Modifier;
    contentAlignment?: BoxAlignment | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type Box = InstanceType<typeof Box>;
export default Box;
