import { Modifier } from "../../core/modifier/Modifier";
import type { ArrangementValue } from "./Arrangement";
import type { VerticalAlignment } from "./Alignment";
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
declare const Row: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<{
    modifier?: Modifier;
    /**
         * Alineación en el eje cross (vertical) de todos los hijos.
         * Equivalente a verticalAlignment en Jetpack Compose Row.
         * @default Alignment.Top
         */ verticalAlignment?: VerticalAlignment;
    /**
         * Disposición en el eje main (horizontal).
         * Equivalente a horizontalArrangement en Jetpack Compose Row.
         * @default Arrangement.Start
         */ horizontalArrangement?: ArrangementValue;
}, {
    default: {};
}>, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}, {}, string>;
type Row = InstanceType<typeof Row>;
export default Row;
