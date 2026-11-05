// Pedimos el nombre y los apellidos en un solo prompt
let nombreCompleto = prompt("Introduce tu nombre y tus dos apellidos separados por un espacio:");

// Comprobamos que haya exactamente tres palabras
if (nombreCompleto == null || nombreCompleto.trim().split(" ").length != 3) {
    document.write("Debes introducir un nombre y dos apellidos separados por un espacio.");
} else {
    // Quitamos los espacios de los extremos y separamos las tres partes
    nombreCompleto = nombreCompleto.trim();
    let partes = nombreCompleto.split(" ");

    let nombre = partes[0];
    let apellido1 = partes[1];
    let apellido2 = partes[2];

    // Tamaño sin contar los espacios
    let tamanio = nombre.length + apellido1.length + apellido2.length;
    document.write("Tamaño sin espacios: " + tamanio + "<br>");

    // Cadena en minúsculas y en mayúsculas
    document.write("En minúsculas: " + nombreCompleto.toLowerCase() + "<br>");
    document.write("En mayúsculas: " + nombreCompleto.toUpperCase() + "<br>");

    // Nombre y apellidos en tres líneas
    document.write("Nombre: " + nombre + "<br>");
    document.write("Apellido 1: " + apellido1 + "<br>");
    document.write("Apellido 2: " + apellido2 + "<br>");

    // Primera propuesta: inicial del nombre, primer apellido e inicial del segundo apellido
    let usuario1 = nombre.charAt(0) + apellido1 + apellido2.charAt(0);
    document.write("Propuesta de usuario 1: " + usuario1.toLowerCase() + "<br>");

    // Segunda propuesta: tres primeras letras del nombre y de los dos apellidos
    let usuario2 = nombre.substring(0, 3) + apellido1.substring(0, 3) + apellido2.substring(0, 3);
    document.write("Propuesta de usuario 2: " + usuario2 + "<br>");
}
