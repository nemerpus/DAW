// Pedimos al usuario el apellido del presidente
let respuesta = prompt(
    "Escribe el apellido del primer presidente de la democracia española:"
);

// Mientras la respuesta no sea correcta, volvemos a preguntar
while (respuesta != "Suárez") {
    respuesta = prompt(
        "Respuesta incorrecta. Inténtalo de nuevo:"
    );
}

// Cuando la respuesta es correcta permitimos continuar
alert("Respuesta correcta. Puedes acceder a la página.");