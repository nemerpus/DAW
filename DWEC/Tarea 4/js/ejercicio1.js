// Importamos las funciones del archivo arrays.js
import {
    mostrarNumero,
    mostrarTodos,
    mostrarInverso,
    mostrarOrdenados,
    aniadirPrincipio,
    aniadirFinal,
    borrarPrincipio,
    borrarFinal,
    mostrarEnPosicion,
    mostrarPosicionDe
} from "./arrays.js";

// Lista inicial de países
let paises = ["España", "Francia", "Italia", "Portugal", "Alemania"];

// Mostrar el número de países
document.getElementById("numero").addEventListener("click", function () {
    mostrarNumero(paises);
});

// Mostrar el listado de países
document.getElementById("listado").addEventListener("click", function () {
    let opcion = prompt(
        "¿Cómo quieres mostrar los países?\n" +
        "1. En el orden del array\n" +
        "2. Del revés\n" +
        "3. Ordenados alfabéticamente"
    );

    switch (opcion) {
        case "1":
            mostrarTodos(paises);
            break;
        case "2":
            mostrarInverso(paises);
            break;
        case "3":
            mostrarOrdenados(paises);
            break;
        default:
            alert("Opción no válida.");
            break;
    }
});

// Añadir un país
document.getElementById("aniadir").addEventListener("click", function () {
    let opcion = prompt(
        "¿Dónde quieres añadir el país?\n" +
        "1. Al principio\n" +
        "2. Al final"
    );

    switch (opcion) {
        case "1":
            aniadirPrincipio(paises);
            break;
        case "2":
            aniadirFinal(paises);
            break;
        default:
            alert("Opción no válida.");
            break;
    }
});

// Borrar un país
document.getElementById("borrar").addEventListener("click", function () {
    let opcion = prompt(
        "¿Qué país quieres borrar?\n" +
        "1. El del principio\n" +
        "2. El del final"
    );

    switch (opcion) {
        case "1":
            borrarPrincipio(paises);
            break;
        case "2":
            borrarFinal(paises);
            break;
        default:
            alert("Opción no válida.");
            break;
    }
});

// Consultar un país
document.getElementById("consultar").addEventListener("click", function () {
    let opcion = prompt(
        "¿Cómo quieres consultar el país?\n" +
        "1. Por posición\n" +
        "2. Por nombre"
    );

    switch (opcion) {
        case "1":
            mostrarEnPosicion(paises);
            break;
        case "2":
            mostrarPosicionDe(paises);
            break;
        default:
            alert("Opción no válida.");
            break;
    }
});
