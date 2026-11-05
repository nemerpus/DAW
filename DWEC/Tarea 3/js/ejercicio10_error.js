// Leemos el mensaje de error que nos llega en la URL
let parametros = new URLSearchParams(location.search);
let mensaje = parametros.get("mensaje");

if (mensaje == null) {
    mensaje = "Error desconocido.";
}

// Mostramos el mensaje en la página
document.getElementById("mensaje").textContent = mensaje;
