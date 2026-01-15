import { Modifier } from "../../core/modifier/Modifier";
import type { ArrangementValue } from "./Arrangement";
import type { HorizontalAlignment } from "./Alignment";
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
declare const LazyColumn: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<{
    items?: any[];
    modifier?: Modifier;
    horizontalAlignment?: HorizontalAlignment;
    verticalArrangement?: ArrangementValue;
}, {
    default: {
        item: any;
    };
}>, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        item: any;
    };
}, {}, string>;
type LazyColumn = InstanceType<typeof LazyColumn>;
export default LazyColumn;
