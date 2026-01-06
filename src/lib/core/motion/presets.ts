import type { AnimationSpec } from "./AnimationSpec";

export const fadeIn: AnimationSpec = {
    from: "opacity: 0",
    to: "opacity: 1",
    duration: 180,
    easing: "ease-out"
};

export const fadeOut: AnimationSpec = {
    from: "opacity: 1",
    to: "opacity: 0",
    duration: 140,
    easing: "ease-in"
};

export const scaleIn: AnimationSpec = {
    from: "opacity: 0; transform: scale(0.95)",
    to: "opacity: 1; transform: scale(1)",
    duration: 180,
    easing: "ease-out"
};

export const scaleOut: AnimationSpec = {
    from: "opacity: 1; transform: scale(1)",
    to: "opacity: 0; transform: scale(0.95)",
    duration: 140,
    easing: "ease-in"
};