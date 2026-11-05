function calcularIP() {
    let nombre = document.getElementById("nombre").value.trim().toUpperCase();
    let resultado = document.getElementById("resultado");

    // Comprobamos el formato: DOC o 025P, tres dígitos y la letra A, B o C
    let partes = nombre.match(/^(DOC|025P)([0-9]{3})([ABC])$/);

    if (partes == null) {
        resultado.textContent = "El nombre debe tener el formato DOCXXXT o 025PXXXT.";
        return;
    }

    // Pasamos XXX a número, así una IP nunca lleva ceros a la izquierda (007 pasa a ser 7)
    let numero = parseInt(partes[2]);
    let letra = partes[3];

    if (numero > 252) {
        resultado.textContent = "El número debe estar entre 000 y 252.";
        return;
    }

    // La parte inicial de la IP depende de la letra
    let red;

    switch (letra) {
        case "A":
            red = "10.42.68.";
            break;
        case "B":
            red = "10.42.69.";
            break;
        case "C":
            red = "10.52.178.";
            break;
    }

    resultado.textContent = "La dirección IP de " + nombre + " es: " + red + numero;
}
