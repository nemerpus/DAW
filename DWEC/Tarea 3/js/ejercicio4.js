// Deja un número con 2 decimales y con coma, como en el ejemplo del enunciado
function formatear(valor) {
    return valor.toFixed(2).replace(".", ",");
}

// Pedimos el radio al usuario
let radio = parseFloat(prompt("Introduce el valor del radio (en cm):"));

if (isNaN(radio) || radio <= 0) {
    document.write("El radio debe ser un número mayor que 0.");
} else {
    // Calculamos todos los valores usando Math.PI
    let diametro = 2 * radio;
    let perimetro = 2 * Math.PI * radio;
    let areaCirculo = Math.PI * Math.pow(radio, 2);
    let areaEsfera = 4 * Math.PI * Math.pow(radio, 2);
    let volumenEsfera = (4 / 3) * Math.PI * Math.pow(radio, 3);

    // Mostramos los resultados con su unidad
    document.write("Radio: " + radio + " cm<br>");
    document.write("Diámetro: " + diametro + " cm<br>");
    document.write("Perímetro de la circunferencia: " + formatear(perimetro) + " cm<br>");
    document.write("Área del círculo: " + formatear(areaCirculo) + " cm2<br>");
    document.write("Área de la esfera: " + formatear(areaEsfera) + " cm2<br>");
    document.write("Volumen de la esfera: " + formatear(volumenEsfera) + " cm3<br>");
}
