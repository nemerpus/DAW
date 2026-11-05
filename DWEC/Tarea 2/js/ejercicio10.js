// Solicitamos el nombre de la jugadora
let jugadora = prompt(
    "Introduce el nombre de una jugadora de fútbol de la selección:"
);

// Comprobamos si la jugadora está en la lista de convocadas
switch (jugadora) {

    case "Luisa":
    case "Maria":
    case "Carlota":
    case "Ana":
    case "Martina":
    case "Claudia":
        alert(jugadora + " está convocada para el siguiente partido.");
        break;

    default:
        alert(jugadora + " no está convocada para el siguiente partido.");
        break;
}