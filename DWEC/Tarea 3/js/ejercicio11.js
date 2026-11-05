// Se ejecuta si se ha podido obtener la ubicación
function mostrarUbicacion(posicion) {
    console.log("Latitud: " + posicion.coords.latitude);
    console.log("Longitud: " + posicion.coords.longitude);
}

// Se ejecuta si no se ha podido obtener, por ejemplo si el usuario no da permiso
function mostrarError(error) {
    console.log("No se ha podido obtener la ubicación: " + error.message);
}

// Comprobamos que el navegador tenga geolocalización y pedimos la posición actual
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion, mostrarError);
} else {
    console.log("Este navegador no permite obtener la ubicación.");
}
