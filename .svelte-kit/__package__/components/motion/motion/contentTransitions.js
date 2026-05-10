export function slideHorizontal() {
    return {
        enter: "transform: translateX(0); opacity: 1;",
        exit: "transform: translateX(-100%); opacity: 0;",
        duration: 300
    };
}
export function scaleFade() {
    return {
        enter: "transform: scale(1); opacity: 1;",
        exit: "transform: scale(0.95); opacity: 0;",
        duration: 220
    };
}
export function fade(duration) {
    if (duration === void 0) { duration = 300; }
    return {
        enter: "opacity: 1;",
        exit: "opacity: 0;",
        duration: duration
    };
}
