let ventana = null;
let temporizador = null;

function abrirVentana() {
    // Si había un temporizador pendiente lo cancelamos para que no cierre antes de tiempo la ventana nueva
    clearTimeout(temporizador);

    ventana = window.open("", "emergente", "width=400,height=200");

    // Escribimos el contenido, con un botón para que el usuario pueda cerrarla
    ventana.document.write("<title>Ventana emergente</title>");
    ventana.document.write("<p>Esta ventana se cerrará sola a los 3 segundos.</p>");
    ventana.document.write("<button onclick='window.close()'>Cerrar</button>");
    ventana.document.close();

    // Pasados 3 segundos la cerramos automáticamente
    temporizador = setTimeout(cerrarVentana, 3000);
}

function cerrarVentana() {
    // Comprobamos que el usuario no la haya cerrado ya
    if (ventana.closed == false) {
        ventana.close();
    }
}
