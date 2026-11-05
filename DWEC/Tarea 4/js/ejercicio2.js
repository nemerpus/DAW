// Tabla de letras: la posición de cada letra es el resto de dividir el número entre 23
let letras = "TRWAGMYFPDXBNJZSQVHLCKE";

// Pedimos la letra al usuario
let letra = prompt("Introduce una letra de la A a la Z:");

if (letra == null || letra.length != 1 || letra.toUpperCase() < "A" || letra.toUpperCase() > "Z") {
    document.write("Debes introducir una sola letra de la A a la Z.");
} else {
    letra = letra.toUpperCase();

    // Array donde guardamos los DNIs que tienen esa letra
    let dnis = [];

    // Recorremos los números del 1 al 999
    for (let numero = 1; numero <= 999; numero++) {
        if (letras.charAt(numero % 23) == letra) {
            // padStart rellena con ceros a la izquierda para que tenga 3 cifras (7 pasa a ser 007)
            dnis.push(String(numero).padStart(3, "0") + letra);
        }
    }

    // Mostramos cuántos hay y el listado
    document.write("Hay " + dnis.length + " DNIs con la letra " + letra + ".<br><br>");
    document.write(dnis.join("<br>"));
}
