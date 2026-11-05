// Variable que indica si mostramos una hora en punto o media
let horaEnPunto = true;

// Recorremos las horas desde las 9 hasta las 21
for (let hora = 9; hora <= 21; hora++) {

    // Mostramos primero la hora en punto
    if (horaEnPunto == true) {
        document.write(hora + ":00<br>");
        horaEnPunto = false;
    }

    // Mostramos la media hora
    if (horaEnPunto == false) {
        document.write(hora + ":30<br>");
        horaEnPunto = true;
    }
}