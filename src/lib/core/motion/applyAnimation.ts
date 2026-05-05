import type { AnimationSpec } from "./AnimationSpec";

export function applyAnimation(spec: AnimationSpec): string {
    return [spec.base, spec.to].filter(Boolean).join(" ");
}
