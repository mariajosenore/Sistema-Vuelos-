class Notificacion {
    constructor(mensaje, tipo = "success") {
        this.mensaje = mensaje;
        this.tipo = tipo;  // "success" o "error"
    }

    // Método para crear el elemento de la notificación
    crearElemento() {
        const notificacionElement = document.createElement("div");
        notificacionElement.classList.add("notificacion");
        notificacionElement.classList.add(this.tipo); // Asigna el tipo de notificación (success/error)
        notificacionElement.textContent = this.mensaje;
        
        return notificacionElement;
    }

    // Método para mostrar la notificación en el DOM
    mostrar() {
        const notificacionesContainer = document.getElementById("notificacion");
        const notificacionElement = this.crearElemento();

        // Agregar la notificación al contenedor de notificaciones
        notificacionesContainer.appendChild(notificacionElement);

        // Mostrar la notificación con un pequeño retraso para la animación
        setTimeout(() => {
            notificacionElement.style.opacity = 1;
        }, 100);

        // Ocultar la notificación después de unos segundos
        setTimeout(() => {
            notificacionElement.style.opacity = 0;
            setTimeout(() => {
                notificacionesContainer.removeChild(notificacionElement);
            }, 500); // Tiempo para eliminar la notificación después de la animación
        }, 5000); // Duración de la notificación
    }
}

// Función para mostrar una notificación de éxito o error
function mostrarNotificacion(mensaje, tipo = "success") {
    const notificacion = new Notificacion(mensaje, tipo);  // Crear una nueva notificación
    notificacion.mostrar();  // Mostrar la notificación
}

// Event listener para el botón de mostrar notificaciones
document.getElementById("mostrarNotificacionesBtn").addEventListener("click", () => {
    mostrarNotificacion("¡Reserva realizada con éxito!", "success");  // Notificación de éxito
    // Puedes agregar más notificaciones para probar
    mostrarNotificacion("proceso de pago exitoso.", "exito");  // Notificación de error
});
