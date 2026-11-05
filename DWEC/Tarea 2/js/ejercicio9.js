// Pedimos al usuario que introduzca su edad
let respuesta = prompt("Introduce tu edad:");

// Convertimos la respuesta a número
let edad = Number(respuesta);

// Utilizamos switch para comprobar el rango
switch (true) {

    case edad < 0:
        alert("La edad no puede ser menor de 0");
        break;

    case edad <= 12:
        alert("Niño");
        break;

    case edad <= 26:
        alert("Joven");
        break;

    case edad <= 60:
        alert("Adulto");
        break;

    case edad > 60:
        alert("Jubilado");
        break;
}