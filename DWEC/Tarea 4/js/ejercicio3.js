// Clase que representa a un cliente
class Cliente {
    constructor(nombre, localidad, cuota) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.cuota = cuota;
    }
}

// Array con los datos de los clientes
let clientes = [
    new Cliente("Laura", "Santander", 50),
    new Cliente("Álvaro", "Castro", 50),
    new Cliente("Igor", "Castro", 60),
    new Cliente("Ivan", "Santander", 40),
    new Cliente("Mónica", "Zamora", 30),
    new Cliente("Javi", "Bilbao", 30),
    new Cliente("David", "Bilbao", 50)
];

// Muestra una tabla a partir de sus cabeceras y sus filas
function pintarTabla(cabeceras, filas) {
    let salida = document.getElementById("salida");

    if (filas.length == 0) {
        salida.textContent = "No hay ningún cliente que mostrar.";
        return;
    }

    let html = "<table border='1'><tr>";

    for (let cabecera of cabeceras) {
        html += "<th>" + cabecera + "</th>";
    }

    html += "</tr>";

    for (let fila of filas) {
        html += "<tr>";

        for (let valor of fila) {
            html += "<td>" + valor + "</td>";
        }

        html += "</tr>";
    }

    html += "</table>";
    salida.innerHTML = html;
}

// Opción 1: todos los clientes
function mostrarClientes() {
    let filas = clientes.map(cliente => [cliente.nombre, cliente.localidad, cliente.cuota]);
    pintarTabla(["Nombre", "Localidad", "Cuota"], filas);
}

// Opción 2: nombre y cuota de los clientes de una localidad
function mostrarPorLocalidad() {
    let localidad = prompt("Introduce la localidad:");

    if (localidad == null) {
        return;
    }

    // No distinguimos entre mayúsculas y minúsculas
    let encontrados = clientes.filter(cliente => cliente.localidad.toLowerCase() == localidad.trim().toLowerCase());
    let filas = encontrados.map(cliente => [cliente.nombre, cliente.cuota]);

    pintarTabla(["Nombre", "Cuota"], filas);
}

// Opción 3: clientes con una cuota mayor que el valor introducido
function mostrarPorCuota() {
    let valor = parseFloat(prompt("Introduce el valor de la cuota:"));

    if (isNaN(valor)) {
        alert("Debes introducir un número.");
        return;
    }

    let encontrados = clientes.filter(cliente => cliente.cuota > valor);
    let filas = encontrados.map(cliente => [cliente.nombre, cliente.localidad, cliente.cuota]);

    pintarTabla(["Nombre", "Localidad", "Cuota"], filas);
}
