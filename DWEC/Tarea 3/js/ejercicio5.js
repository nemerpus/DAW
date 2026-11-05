// Pedimos un número entero al usuario
let numero = parseFloat(prompt("Introduce un número entero:"));

// Comprobamos que realmente sea un entero
if (Number.isInteger(numero) == false) {
    document.write("No has introducido un número entero.");
} else {
    // Mostramos el número usando los métodos del objeto Number
    document.write("Valor exponencial: " + numero.toExponential() + "<br>");
    document.write("Con 4 decimales: " + numero.toFixed(4) + "<br>");
    document.write("En binario: " + numero.toString(2) + "<br>");
    document.write("En octal: " + numero.toString(8) + "<br>");
    document.write("En hexadecimal: " + numero.toString(16) + "<br>");
}
