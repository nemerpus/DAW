// Pedimos al usuario que introduzca su edad
let respuesta = prompt("Introduce tu edad:");

// Convertimos la respuesta a un número
let edad = Number(respuesta);

// Comprobamos el rango de edad
if (edad < 0) {
    alert("La edad no puede ser menor de 0");
} else if (edad <= 12) {
    alert("Niño");
} else if (edad <= 26) {
    alert("Joven");
} else if (edad <= 60) {
    alert("Adulto");
} else {
    alert("Jubilado");
}