// Mostramos el menú y pedimos una opción
let opcion = prompt(
    "Elige una opción:\n" +
    "1. Potencia\n" +
    "2. Raíz\n" +
    "3. Redondeo\n" +
    "4. Trigonometría"
);

switch (opcion) {

    // Potencia
    case "1":
        let base = parseFloat(prompt("Introduce la base:"));
        let exponente = parseFloat(prompt("Introduce el exponente:"));

        if (isNaN(base) || isNaN(exponente)) {
            document.write("Debes introducir números.");
        } else {
            document.write("La potencia de " + base + " elevado a " + exponente + " es: " + Math.pow(base, exponente));
        }
        break;

    // Raíz cuadrada
    case "2":
        let numero = parseFloat(prompt("Introduce un número no negativo:"));

        if (isNaN(numero) || numero < 0) {
            document.write("Debes introducir un número no negativo.");
        } else {
            document.write("La raíz de " + numero + " es: " + Math.sqrt(numero));
        }
        break;

    // Redondeo
    case "3":
        let decimal = parseFloat(prompt("Introduce un número decimal (con punto, por ejemplo 3.7):"));

        if (isNaN(decimal)) {
            document.write("Debes introducir un número.");
        } else {
            document.write("Redondeo al entero más próximo: " + Math.round(decimal) + "<br>");
            document.write("Redondeo al alza: " + Math.ceil(decimal) + "<br>");
            document.write("Redondeo a la baja: " + Math.floor(decimal) + "<br>");
        }
        break;

    // Trigonometría
    case "4":
        let angulo = parseFloat(prompt("Introduce un ángulo (entre 0 y 360):"));

        if (isNaN(angulo) || angulo < 0 || angulo > 360) {
            document.write("El ángulo debe estar entre 0 y 360.");
        } else {
            // Las funciones de Math trabajan en radianes, no en grados
            let radianes = angulo * Math.PI / 180;

            // Redondeamos a 4 decimales porque, por ejemplo, el seno de 180 no da 0 exacto
            let seno = Math.round(Math.sin(radianes) * 10000) / 10000;
            let coseno = Math.round(Math.cos(radianes) * 10000) / 10000;
            let tangente = Math.round(Math.tan(radianes) * 10000) / 10000;

            // En 90 y 270 grados la tangente no existe
            if (angulo == 90 || angulo == 270) {
                tangente = "no definida";
            }

            document.write("Seno de " + angulo + ": " + seno + "<br>");
            document.write("Coseno de " + angulo + ": " + coseno + "<br>");
            document.write("Tangente de " + angulo + ": " + tangente + "<br>");
        }
        break;

    default:
        document.write("Opción no válida.");
        break;
}
