// Reutilizamos las funciones del archivo de arrays del ejercicio 1
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

// Clase que representa a un disco de música
class Disco {
    constructor(nombre, grupo, anio, tipo, localizacion = 0, prestado = false, caratula = "imagen.png") {
        this.nombre = nombre;
        this.grupo = grupo;
        this.anio = anio;
        this.tipo = tipo;
        this.localizacion = localizacion;
        this.prestado = prestado;
        this.caratula = caratula;
    }

    // Cambia el número de estantería
    cambiarLocalizacion(numero) {
        this.localizacion = numero;
    }

    // Cambia la propiedad prestado
    cambiarPrestado(prestado) {
        this.prestado = prestado;
    }

    // Devuelve un texto con toda la información del disco
    mostrarInformacion() {
        return this.nombre + " | " + this.grupo + " | " + this.anio + " | " + this.tipo +
            " | Estantería: " + this.localizacion +
            " | Prestado: " + (this.prestado ? "Sí" : "No") +
            " | Carátula: " + this.caratula;
    }

    // Se usa automáticamente al concatenar un disco con un texto
    toString() {
        return this.mostrarInformacion();
    }
}

// Array donde almacenamos los discos, al principio está vacío
let discos = [];

// Tipos de música permitidos
let tipos = ["rock", "pop", "punk", "indie"];

// Pide al usuario los datos de un disco y lo devuelve (o null si los datos no son válidos)
function pedirDisco() {
    let nombre = prompt("Nombre del disco:");
    let grupo = prompt("Grupo de música o cantante:");
    let anio = parseInt(prompt("Año de publicación:"));
    let tipo = prompt("Tipo de música (rock, pop, punk o indie):");

    if (!nombre || !grupo || isNaN(anio) || tipo == null || !tipos.includes(tipo.toLowerCase())) {
        alert("Los datos del disco no son válidos.");
        return null;
    }

    // Si no se indica una carátula, el constructor usa imagen.png
    let caratula = prompt("Archivo de la carátula (vacío para imagen.png):");
    let disco;

    if (caratula) {
        disco = new Disco(nombre, grupo, anio, tipo.toLowerCase(), 0, false, caratula);
    } else {
        disco = new Disco(nombre, grupo, anio, tipo.toLowerCase());
    }

    // Si no se indica una estantería, se queda la 0
    let estanteria = parseInt(prompt("Número de estantería (vacío para 0):"));

    if (!isNaN(estanteria)) {
        disco.cambiarLocalizacion(estanteria);
    }

    disco.cambiarPrestado(confirm("¿Está prestado? (Aceptar = sí, Cancelar = no)"));

    return disco;
}

// Devuelve el código HTML de la tabla con todos los datos de los discos que recibe
function tablaDiscos(lista) {
    if (lista.length == 0) {
        return "No hay discos que mostrar.";
    }

    let html = "<table border='1'><tr>" +
        "<th>Nombre</th><th>Grupo o cantante</th><th>Año</th><th>Tipo</th>" +
        "<th>Estantería</th><th>Prestado</th><th>Carátula</th></tr>";

    for (let disco of lista) {
        html += "<tr>" +
            "<td>" + disco.nombre + "</td>" +
            "<td>" + disco.grupo + "</td>" +
            "<td>" + disco.anio + "</td>" +
            "<td>" + disco.tipo + "</td>" +
            "<td>" + disco.localizacion + "</td>" +
            "<td>" + (disco.prestado ? "Sí" : "No") + "</td>" +
            "<td>" + disco.caratula + "</td>" +
            "</tr>";
    }

    html += "</table>";
    return html;
}

// Mostrar el número de discos
document.getElementById("numero").addEventListener("click", function () {
    mostrarNumero(discos);
});

// Mostrar la tabla de discos
document.getElementById("tabla").addEventListener("click", function () {
    let opcion = prompt(
        "¿Cómo quieres mostrar los discos?\n" +
        "1. En el orden del array\n" +
        "2. Del revés\n" +
        "3. Ordenados alfabéticamente"
    );

    switch (opcion) {
        case "1":
            mostrarTodos(discos, tablaDiscos);
            break;
        case "2":
            mostrarInverso(discos, tablaDiscos);
            break;
        case "3":
            mostrarOrdenados(discos, tablaDiscos);
            break;
        default:
            alert("Opción no válida.");
            break;
    }
});

// Mostrar los discos publicados en un intervalo de años
document.getElementById("intervalo").addEventListener("click", function () {
    let texto = prompt("Introduce el intervalo de años en formato inicio-fin (por ejemplo 1990-2000):");

    if (texto == null) {
        return;
    }

    let partes = texto.split("-");
    let inicio = parseInt(partes[0]);
    let fin = parseInt(partes[1]);

    if (partes.length != 2 || isNaN(inicio) || isNaN(fin) || inicio > fin) {
        alert("El intervalo debe tener el formato inicio-fin.");
        return;
    }

    let encontrados = discos.filter(disco => disco.anio >= inicio && disco.anio <= fin);
    mostrarTodos(encontrados, tablaDiscos);
});

// Añadir un disco
document.getElementById("aniadir").addEventListener("click", function () {
    let opcion = prompt(
        "¿Dónde quieres añadir el disco?\n" +
        "1. Al principio\n" +
        "2. Al final"
    );

    switch (opcion) {
        case "1":
            aniadirPrincipio(discos, pedirDisco);
            break;
        case "2":
            aniadirFinal(discos, pedirDisco);
            break;
        default:
            alert("Opción no válida.");
            break;
    }
});

// Borrar un disco
document.getElementById("borrar").addEventListener("click", function () {
    let opcion = prompt(
        "¿Qué disco quieres borrar?\n" +
        "1. El del principio\n" +
        "2. El del final"
    );

    switch (opcion) {
        case "1":
            borrarPrincipio(discos);
            break;
        case "2":
            borrarFinal(discos);
            break;
        default:
            alert("Opción no válida.");
            break;
    }
});

// Consultar un disco
document.getElementById("consultar").addEventListener("click", function () {
    let opcion = prompt(
        "¿Cómo quieres consultar el disco?\n" +
        "1. Por posición\n" +
        "2. Por nombre"
    );

    switch (opcion) {
        case "1":
            mostrarEnPosicion(discos);
            break;
        case "2":
            mostrarPosicionDe(discos);
            break;
        default:
            alert("Opción no válida.");
            break;
    }
});
