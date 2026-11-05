// Obtenemos la fecha de hoy y ponemos la hora a 0 para contar solo días completos
let hoy = new Date();
hoy.setHours(0, 0, 0, 0);

// Fecha de fin de curso: 22 de junio (en Date los meses empiezan en 0, junio es el 5)
let finCurso = new Date(hoy.getFullYear(), 5, 22);

// Si este año ya ha pasado, el fin de curso será el del año siguiente
if (finCurso < hoy) {
    finCurso.setFullYear(hoy.getFullYear() + 1);
}

// Calculamos la diferencia en milisegundos y la pasamos a días
// Usamos Math.round porque con el cambio de hora no todos los días duran 24 horas
let milisegundosPorDia = 1000 * 60 * 60 * 24;
let dias = Math.round((finCurso - hoy) / milisegundosPorDia);

// Mostramos el resultado
document.write("Quedan " + dias + " días para el fin de curso (" + finCurso.toLocaleDateString() + ").");
