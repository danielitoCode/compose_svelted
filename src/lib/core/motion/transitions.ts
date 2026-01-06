import type { AnimationSpec } from "./AnimationSpec";

export function fadeIn(): AnimationSpec {
    return {
        from: "opacity: 0",
        to: "opacity: 1",
        duration: 220,
        easing: "ease-out"
    };
}

export function fadeOut(): AnimationSpec {
    return {
        from: "opacity: 1",
        to: "opacity: 0",
        duration: 180,
        easing: "ease-in"
    };
}

export function scaleIn(): AnimationSpec {
    return {
        from: "opacity: 0; transform: scale(0.96)",
        to: "opacity: 1; transform: scale(1)",
        duration: 220,
        easing: "ease-out"
    };
}

export function scaleOut(): AnimationSpec {
    return {
        from: "opacity: 1; transform: scale(1)",
        to: "opacity: 0; transform: scale(0.96)",
        duration: 180,
        easing: "ease-in"
    };
}