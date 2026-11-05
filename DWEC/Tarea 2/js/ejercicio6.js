// Recorremos las horas desde las 9 hasta las 21
for (let hora = 9; hora <= 21; hora++) {

    // Recorremos los minutos de 5 en 5
    for (let minuto = 0; minuto < 60; minuto += 5) {

        // Si son las 21, solamente mostramos las 21:00
        if (hora == 21 && minuto > 0) {
            break;
        }

        // Añadimos un cero delante cuando los minutos son menores de 10
        if (minuto < 10) {
            document.write(hora + ":0" + minuto + "<br>");
        } else {
            document.write(hora + ":" + minuto + "<br>");
        }
    }
}