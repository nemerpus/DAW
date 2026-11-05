// Objeto jugador con su fuerza y sus métodos
let jugador = {
    fuerza: 1,

    // Aumenta la fuerza en 1
    incrementarFuerza: function () {
        this.fuerza++;
    },

    // Muestra un mensaje con la fuerza actual
    consultarFuerza: function () {
        alert("Tu fuerza es " + this.fuerza);
    }
};
