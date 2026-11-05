// Funciones para trabajar con arrays. Todas reciben el array por parámetro
// y muestran el resultado en el elemento con id "salida" de la página.
//
// Algunas tienen un segundo parámetro opcional para poder reutilizarlas con otros datos,
// como los discos del ejercicio 4. Si no se indica, se trabaja con cadenas de texto.

// Escribe un texto en la zona de resultados de la página
function mostrar(texto) {
    document.getElementById("salida").innerHTML = texto;
}

// Forma de mostrar una lista por defecto: un elemento en cada línea
function listar(array) {
    if (array.length == 0) {
        return "No hay elementos.";
    }

    return array.join("<br>");
}

// Forma de pedir un elemento por defecto: un texto con prompt
function pedirTexto() {
    return prompt("Introduce el elemento que quieres añadir:");
}

// Devuelve el texto por el que se ordena o se busca un elemento:
// si es un objeto usamos su propiedad nombre y si es una cadena la propia cadena
function textoDe(elemento) {
    if (typeof elemento == "object") {
        return elemento.nombre;
    }

    return elemento;
}

// Muestra el número de elementos del array
export function mostrarNumero(array) {
    mostrar("Número de elementos: " + array.length);
}

// Muestra todos los elementos del array
export function mostrarTodos(array, formato = listar) {
    mostrar(formato(array));
}

// Muestra los elementos del array en sentido inverso
// Usamos slice para hacer una copia y no cambiar el orden del array original
export function mostrarInverso(array, formato = listar) {
    let copia = array.slice().reverse();
    mostrar(formato(copia));
}

// Muestra los elementos del array ordenados alfabéticamente
// localeCompare ordena bien las tildes, algo que no hace sort por sí solo
export function mostrarOrdenados(array, formato = listar) {
    let copia = array.slice().sort((a, b) => textoDe(a).localeCompare(textoDe(b)));
    mostrar(formato(copia));
}

// Añade al principio del array un elemento solicitado al usuario
export function aniadirPrincipio(array, pedir = pedirTexto) {
    let elemento = pedir();

    if (elemento) {
        array.unshift(elemento);
        mostrar("Se ha añadido al principio: " + elemento);
    } else {
        mostrar("No se ha añadido nada.");
    }
}

// Añade al final del array un elemento solicitado al usuario
export function aniadirFinal(array, pedir = pedirTexto) {
    let elemento = pedir();

    if (elemento) {
        array.push(elemento);
        mostrar("Se ha añadido al final: " + elemento);
    } else {
        mostrar("No se ha añadido nada.");
    }
}

// Borra el elemento del principio del array y dice cuál se ha borrado
export function borrarPrincipio(array) {
    if (array.length == 0) {
        mostrar("No hay elementos que borrar.");
    } else {
        mostrar("Se ha borrado: " + array.shift());
    }
}

// Borra el elemento del final del array y dice cuál se ha borrado
export function borrarFinal(array) {
    if (array.length == 0) {
        mostrar("No hay elementos que borrar.");
    } else {
        mostrar("Se ha borrado: " + array.pop());
    }
}

// Muestra el elemento que se encuentra en la posición que indica el usuario
export function mostrarEnPosicion(array) {
    if (array.length == 0) {
        mostrar("No hay elementos.");
        return;
    }

    let posicion = parseInt(prompt("Introduce la posición (de 0 a " + (array.length - 1) + "):"));

    if (isNaN(posicion) || posicion < 0 || posicion >= array.length) {
        mostrar("No hay ningún elemento en esa posición.");
    } else {
        mostrar("En la posición " + posicion + " está: " + array[posicion]);
    }
}

// Muestra la posición en la que se encuentra el elemento que indica el usuario
// No distinguimos entre mayúsculas y minúsculas
export function mostrarPosicionDe(array) {
    let buscado = prompt("Introduce el nombre que quieres buscar:");

    if (buscado == null) {
        return;
    }

    let posicion = array.findIndex(elemento => textoDe(elemento).toLowerCase() == buscado.trim().toLowerCase());

    if (posicion == -1) {
        mostrar(buscado + " no está en la lista.");
    } else {
        mostrar("En la posición " + posicion + " está: " + array[posicion]);
    }
}
