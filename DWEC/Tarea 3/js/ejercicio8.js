// Texto que mostramos cada vez que pedimos una cadena
let mensaje = "Introduce una cadena con el formato:\n" +
    "nombre:apellidos:teléfono:email:codigopostal\n\n" +
    "Pulsa Cancelar para terminar y ver los resultados.";

let cadena = prompt(mensaje);

// Seguimos pidiendo cadenas hasta que el usuario cancele o la deje vacía
while (cadena != null && cadena != "") {

    // Separamos los datos por los dos puntos
    let datos = cadena.split(":");

    // Tiene que haber 5 datos y el email tiene que llevar @
    if (datos.length != 5 || datos[3].indexOf("@") == -1) {
        document.write("La cadena " + cadena + " no tiene el formato correcto.<br><br>");
    } else {
        let apellidos = datos[1];
        let telefono = datos[2];
        let email = datos[3];
        let codigoPostal = datos[4];

        // El servidor es la parte que hay a la derecha de la @
        let servidor = email.substring(email.indexOf("@") + 1);

        document.write("Código postal: " + codigoPostal + "<br>");
        document.write("Apellidos: " + apellidos + "<br>");
        document.write("Email: " + email + "<br>");
        document.write("Servidor: " + servidor + "<br>");
        document.write("Teléfono: " + telefono + "<br><br>");
    }

    cadena = prompt(mensaje);
}
