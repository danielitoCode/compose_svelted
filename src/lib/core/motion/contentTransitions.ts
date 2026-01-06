import type { ContentTransition } from "./ContentTransition";

export function fade(): ContentTransition {
    return {
        enter: "transition-opacity duration-200 ease-out opacity-100",
        exit: "transition-opacity duration-200 ease-in opacity-0",
        duration: 200
    };
}

export function slideHorizontal(): ContentTransition {
    return {
        enter: "transition-transform duration-200 ease-out translate-x-0",
        exit: "transition-transform duration-200 ease-in -translate-x-full",
        duration: 200
    };
}

export function scaleFade(): ContentTransition {
    return {
        enter: "transition-all duration-220 ease-out opacity-100 scale-100",
        exit: "transition-all duration-180 ease-in opacity-0 scale-95",
        duration: 220
    };
}