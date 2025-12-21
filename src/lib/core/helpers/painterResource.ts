/**
 * painterResource - como en Jetpack Compose
 * Carga un recurso local desde src/lib/assets/
 * Soporta SVG (?raw para string) e imágenes (?url para URL)
 */
export  const Res = {
    raw(fileName: string): string {
        return "raw/"+fileName;
    },

    image(fileName: string): string {
        return "img/"+fileName;
    },

    values(fileName: string): string {
        return "values/"+fileName;
    },

    fonts(fileName: string): string {
        return "fonts/"+fileName;
    }
} as const;

export function painterResource(resourceName: string): string {
    return "/src/assets/"+resourceName;
}