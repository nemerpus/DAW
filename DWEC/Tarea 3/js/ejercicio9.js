// Tabla de letras: la posición de cada letra es el resto de dividir el número entre 23
let letras = "TRWAGMYFPDXBNJZSQVHLCKE";

// Se ejecuta cada vez que el usuario escribe en el primer campo
function calcularLetra() {
    let texto = document.getElementById("digitos").value.trim().toUpperCase();
    let campoLetra = document.getElementById("letra");
    let numero;

    if (/^[0-9]{8}$/.test(texto)) {
        // NIF: 8 dígitos
        numero = texto;
    } else if (/^[XYZ][0-9]{7}$/.test(texto)) {
        // NIE: la letra inicial se sustituye por un número (X = 0, Y = 1, Z = 2)
        numero = texto.replace("X", "0").replace("Y", "1").replace("Z", "2");
    } else {
        // Todavía no está completo o no es válido, así que no mostramos ninguna letra
        campoLetra.value = "";
        return;
    }

    // Calculamos el resto y buscamos la letra en la tabla
    campoLetra.value = letras.charAt(parseInt(numero) % 23);
}
