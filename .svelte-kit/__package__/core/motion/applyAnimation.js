export function applyAnimation(spec) {
    return [spec.base, spec.to].filter(Boolean).join(" ");
}
