let ventana = null;
let intervalo = null;

// Posición actual de la ventana
let x = 0;
let y = 0;

// Indica si la ventana va hacia la esquina inferior derecha o está volviendo
let bajando = true;

// Crea la ventana (si no existe ya) y la pone en movimiento
function crear() {
    if (ventana == null || ventana.closed) {
        ventana = window.open("", "ventanaMovil", "width=500,height=200,left=0,top=0");
        ventana.document.write("<title>Ventana</title>");
        ventana.document.write("<p>Ventana de 500*200 en movimiento</p>");
        ventana.document.close();

        x = 0;
        y = 0;
        bajando = true;
    }

    // Comprobamos que no esté ya en marcha para no tener dos intervalos a la vez
    if (intervalo == null) {
        intervalo = setInterval(mover, 100);
    }
}

// Mueve la ventana 10 px, se ejecuta cada 100 milisegundos
function mover() {
    // Si el usuario ha cerrado la ventana a mano, paramos
    if (ventana.closed) {
        parar();
        return;
    }

    // Posición máxima para que la ventana no se salga de la pantalla
    let maxX = screen.availWidth - ventana.outerWidth;
    let maxY = screen.availHeight - ventana.outerHeight;

    // Cada eje se detiene en su límite. Como la pantalla es más ancha que alta,
    // así la ventana llega justo a la esquina y no solo al borde inferior
    if (bajando) {
        x = Math.min(x + 10, maxX);
        y = Math.min(y + 10, maxY);

        // Ha llegado a la esquina inferior derecha: rebota
        if (x == maxX && y == maxY) {
            bajando = false;
        }
    } else {
        x = Math.max(x - 10, 0);
        y = Math.max(y - 10, 0);

        // Ha llegado a la esquina superior izquierda: vuelve a bajar
        if (x == 0 && y == 0) {
            bajando = true;
        }
    }

    ventana.moveTo(x, y);
}

// Detiene la ventana
function parar() {
    clearInterval(intervalo);
    intervalo = null;
}

// Detiene la ventana y la cierra
function borrar() {
    parar();

    if (ventana != null && ventana.closed == false) {
        ventana.close();
    }

    ventana = null;
}
