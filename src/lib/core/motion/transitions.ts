import type {AnimationSpec} from "./AnimationSpec";

export function fadeIn(): AnimationSpec {
    return {
        base: "transition-opacity duration-200 ease-out",
        from: "opacity-0",
        to: "opacity-100",
        duration: 200
    };
}

export function fadeOut(): AnimationSpec {
    return {
        base: "transition-opacity duration-180 ease-in",
        from: "opacity-100",
        to: "opacity-0",
        duration: 180
    };
}

export function scaleIn(): AnimationSpec {
    return {
        base: "transition-all duration-220 ease-out",
        from: "opacity-0 scale-95",
        to: "opacity-100 scale-100",
        duration: 220
    };
}

export function scaleOut(): AnimationSpec {
    return {
        base: "transition-all duration-180 ease-in",
        from: "opacity-100 scale-100",
        to: "opacity-0 scale-95",
        duration: 180
    };
}