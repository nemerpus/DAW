// Muestra la fecha actual en el elemento indicado
// No usamos document.write porque con la página ya cargada borraría todo su contenido
function mostrarFecha(idElemento) {
    document.getElementById(idElemento).textContent = new Date().toLocaleString();
}

// Solución 1: setTimeout ejecuta la función una sola vez pasados 2 segundos
setTimeout(function () {
    mostrarFecha("conTimeout");
}, 2000);

// Solución 2: setInterval se repite cada 2 segundos,
// así que lo cancelamos con clearInterval en la primera ejecución
let intervalo = setInterval(function () {
    mostrarFecha("conInterval");
    clearInterval(intervalo);
}, 2000);
