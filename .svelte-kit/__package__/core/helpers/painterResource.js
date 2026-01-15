/**
 * painterResource - como en Jetpack Compose
 * Carga un recurso local desde src/lib/assets/
 * Soporta SVG (?raw para string) e imágenes (?url para URL)
 */
export var Res = {
    raw: function (fileName) {
        return "raw/" + fileName;
    },
    image: function (fileName) {
        return "img/" + fileName;
    },
    values: function (fileName) {
        return "values/" + fileName;
    },
    fonts: function (fileName) {
        return "fonts/" + fileName;
    }
};
export function painterResource(resourceName) {
    return "/src/assets/" + resourceName;
}
