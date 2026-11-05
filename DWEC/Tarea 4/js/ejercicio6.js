// Devuelve los jugadores que aparecen en todas las convocatorias
function obtenerConvocados(convocatorias) {
    // Convertimos cada cadena en un array de nombres
    let listas = convocatorias.map(cadena => cadena.split(","));

    // Partimos de la primera lista y nos quedamos con los que están en todas las demás
    return listas[0].filter(jugador => listas.every(lista => lista.includes(jugador)));
}

// Devuelve un texto con los nombres separados por comas y una "y" antes del último
function formatearNombres(nombres) {
    if (nombres.length == 0) {
        return "Ningún jugador ha sido convocado a todos los partidos.";
    }

    if (nombres.length == 1) {
        return nombres[0];
    }

    let todosMenosElUltimo = nombres.slice(0, -1);
    return todosMenosElUltimo.join(", ") + " y " + nombres[nombres.length - 1];
}

// Array de entrada con las convocatorias
const convocatorias = ["Marcos,Luis,Pepe,Manuel,Lolo", "Marcos,Luis,Pepe,David,Antonio,Pedro"];

// Mostramos el resultado
document.write(formatearNombres(obtenerConvocados(convocatorias)));
