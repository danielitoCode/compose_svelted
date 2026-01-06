export function elevationToShadow(value: number | string): string {
    if (!value || value === 0) return "none";

    const v = typeof value === "number" ? `${value}px` : value;

    return `
        0 ${v} calc(${v} * 3) rgba(0, 0, 0, 0.16)
    `.trim();
}