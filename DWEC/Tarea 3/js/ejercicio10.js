// Pregunta al usuario si quiere seguir en la página
// Si contesta que no, lo redirige a la página de error
function redirigirError(mensaje) {
    let seguir = confirm(
        "Ha ocurrido un error: " + mensaje + "\n\n" +
        "¿Quieres seguir en esta página?\n" +
        "(Si cancelas, verás la página de error)"
    );

    if (seguir == false) {
        // Pasamos el mensaje en la URL para que la página de error pueda mostrarlo
        location.href = "ejercicio10_error.html?mensaje=" + encodeURIComponent(mensaje);
    }
}

function provocarError() {
    try {
        // Llamamos a una función que no existe para que se produzca un error
        funcionQueNoExiste();
    } catch (error) {
        redirigirError(error.message);
    }
}
