// Realizamos la primera pregunta
let respuesta = prompt(
    "¿Cuál fue el primer presidente de la democracia española?"
);

// Repetimos la pregunta mientras no escriba el nombre completo
while (respuesta != "Adolfo Suárez") {

    // Ha introducido solamente el nombre
    if (respuesta == "Adolfo") {
        respuesta = prompt(
            "Te falta el apellido. ¿Cuál fue el primer presidente de la democracia española?"
        );

    // Ha introducido solamente el apellido
    } else if (respuesta == "Suárez") {
        respuesta = prompt(
            "Te falta el nombre. ¿Cuál fue el primer presidente de la democracia española?"
        );

    // Cualquier otra respuesta es incorrecta
    } else {
        respuesta = prompt(
            "ERROR. Inténtelo de nuevo. ¿Cuál fue el primer presidente de la democracia española?"
        );
    }
}

// Si sale del while, la respuesta es correcta
alert("Respuesta correcta.");