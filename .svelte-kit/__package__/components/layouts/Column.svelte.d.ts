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
declare const Column: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<{
    modifier?: Modifier;
    /**
         * Alineación en el eje cross (horizontal) de todos los hijos.
         * Equivalente a horizontalAlignment en Jetpack Compose Column.
         * @default Alignment.Start
         */ horizontalAlignment?: HorizontalAlignment;
    /**
         * Disposición en el eje main (vertical).
         * Equivalente a verticalArrangement en Jetpack Compose Column.
         * @default Arrangement.Top
         */ verticalArrangement?: ArrangementValue;
}, {
    default: {};
}>, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}, {}, string>;
type Column = InstanceType<typeof Column>;
export default Column;
