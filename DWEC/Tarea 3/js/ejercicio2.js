// Pedimos el día y el mes del cumpleaños
let dia = parseInt(prompt("Introduce el día de tu cumpleaños:"));
let mes = parseInt(prompt("Introduce el mes de tu cumpleaños (1-12):"));

// Comprobamos que la fecha existe
// Usamos 2024 porque es bisiesto y así también se admite el 29 de febrero
let comprobacion = new Date(2024, mes - 1, dia);

if (comprobacion.getMonth() != mes - 1 || comprobacion.getDate() != dia) {
    document.write("La fecha introducida no es válida.");
} else {
    let anioActual = new Date().getFullYear();

    document.write("Tu cumpleaños cae en domingo en los años:<br>");

    // Recorremos los años desde el actual hasta el 2100
    for (let anio = anioActual; anio <= 2100; anio++) {
        let cumple = new Date(anio, mes - 1, dia);

        // getDay() devuelve 0 si es domingo
        // Miramos también el mes porque el 29 de febrero pasa a ser 1 de marzo si el año no es bisiesto
        if (cumple.getDay() == 0 && cumple.getMonth() == mes - 1) {
            document.write(anio + "<br>");
        }
    }
}
