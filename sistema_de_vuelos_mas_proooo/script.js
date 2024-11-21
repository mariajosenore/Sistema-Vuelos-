class Vuelo {
    constructor(codigoVuelo, origen, destino, fechaSalida, fechaLlegada, estado, capacidad, asientosDisponibles) {
        this.codigoVuelo = codigoVuelo;
        this.origen = origen;
        this.destino = destino;
        this.fechaSalida = new Date(fechaSalida);
        this.fechaLlegada = new Date(fechaLlegada);
        this.estado = estado;
        this.capacidad = capacidad;
        this.asientosDisponibles = asientosDisponibles;
    }

    consultarDisponibilidad() {
        return this.asientosDisponibles;
    }

    reservarAsiento() {
        if (this.asientosDisponibles > 0) {
            this.asientosDisponibles--;
            return true;
        }
        return false;
    }

    cancelarAsiento() {
        this.asientosDisponibles++;
    }
}

class Pasajero {
    constructor(nombre, apellido, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
    }

    registrarPasajero() {
        return `${this.nombre} ${this.apellido} ha sido registrado.`;
    }

    actualizarContacto(newEmail, newTelefono) {
        this.email = newEmail;
        this.telefono = newTelefono;
        return `Información de contacto actualizada.`;
    }
}

class Reserva {
    constructor(vuelo, pasajero) {
        this.vuelo = vuelo;
        this.pasajero = pasajero;
        this.estado = "Pendiente";
    }

    crearReserva() {
        if (this.vuelo.reservarAsiento()) {
            this.estado = "Confirmada";
            return true;
        }
        return false;
    }

    cancelarReserva() {
        this.estado = "Cancelada";
        this.vuelo.cancelarAsiento();
    }

    consultarDetalles() {
        return `Reserva: Vuelo ${this.vuelo.codigoVuelo}, Pasajero: ${this.pasajero.nombre} ${this.pasajero.apellido}, Estado: ${this.estado}`;
    }
}

class Aerolinea {
    constructor(nombre, codigoIATA) {
        this.nombre = nombre;
        this.codigoIATA = codigoIATA;
        this.flota = [];
    }

    agregarVuelo(vuelo) {
        this.flota.push(vuelo);
    }

    consultarVuelos() {
        return this.flota;
    }

    mostrarInformacion() {
        return `${this.nombre} (${this.codigoIATA}) - Número de vuelos: ${this.flota.length}`;
    }
}

class Itinerario {
    constructor(idItinerario) {
        this.idItinerario = idItinerario;
        this.vuelos = [];
        this.duracionTotal = 0;
    }

    agregarVuelo(vuelo) {
        this.vuelos.push(vuelo);
    }

    calcularDuracion() {
        let duracionTotal = 0;
        this.vuelos.forEach(vuelo => {
            const duracionVuelo = (vuelo.fechaLlegada - vuelo.fechaSalida) / 60000; // en minutos
            duracionTotal += duracionVuelo;
        });
        this.duracionTotal = duracionTotal;
        return duracionTotal;
    }

    mostrarItinerario() {
        let itinerarioTexto = 'Itinerario:\n';
        this.vuelos.forEach(vuelo => {
            itinerarioTexto += `${vuelo.codigoVuelo} - ${vuelo.origen} a ${vuelo.destino}\n`;
        });
        itinerarioTexto += `Duración Total: ${this.calcularDuracion()} minutos`;
        return itinerarioTexto;
    }
}

// Crear instancias de vuelos con datos inventados
const vuelo1 = new Vuelo("ALX102", "Bogotá", "Cali", "2024-12-05T08:00:00", "2024-12-05T10:00:00", "Programado", 150, 50);
const vuelo2 = new Vuelo("STR205", "Cali", "Medellín", "2024-12-06T09:00:00", "2024-12-06T11:30:00", "Programado", 180, 60);
const vuelo3 = new Vuelo("QRS301", "Medellín", "Cartagena", "2024-12-07T07:45:00", "2024-12-07T09:15:00", "Programado", 200, 120);
const vuelo4 = new Vuelo("BSA411", "Cartagena", "Barranquilla", "2024-12-08T11:00:00", "2024-12-08T12:30:00", "Programado", 150, 100);



// Crear instancias de aerolíneas con nombres creativos
const aerolinea1 = new Aerolinea("Aerolínea Volare", "VLT102");
const aerolinea2 = new Aerolinea("SkyJet Airlines", "SJT202");
const aerolinea3 = new Aerolinea("BreezeFly", "BRF303");

aerolinea1.agregarVuelo(vuelo1);
aerolinea1.agregarVuelo(vuelo2);

aerolinea2.agregarVuelo(vuelo3);

aerolinea3.agregarVuelo(vuelo4);

// Mostrar aerolíneas en la interfaz
const aerolineaSelect = document.getElementById("aerolineaSelect");
[aerolinea1, aerolinea2, aerolinea3].forEach(aerolinea => {
    const aerolineaOption = document.createElement("option");
    aerolineaOption.value = aerolinea.codigoIATA;
    aerolineaOption.textContent = `${aerolinea.nombre} (${aerolinea.codigoIATA})`;
    aerolineaSelect.appendChild(aerolineaOption);
});

// Actualizar lista de vuelos cuando se seleccione una aerolínea
aerolineaSelect.addEventListener("change", function () {
    const vueloSelect = document.getElementById("vueloSelect");
    vueloSelect.innerHTML = '<option value="">Seleccionar Vuelo</option>'; // Limpiar vuelos anteriores

    const aerolineaSeleccionada = [aerolinea1, aerolinea2, aerolinea3].find(aerolinea => aerolinea.codigoIATA === aerolineaSelect.value);

    if (aerolineaSeleccionada) {
        aerolineaSeleccionada.consultarVuelos().forEach(vuelo => {
            const vueloOption = document.createElement("option");
            vueloOption.value = vuelo.codigoVuelo;
            vueloOption.textContent = `${vuelo.origen} a ${vuelo.destino} - ${vuelo.codigoVuelo}`;
            vueloSelect.appendChild(vueloOption);
        });
    }
});

aerolinea1.agregarVuelo(vuelo1);
aerolinea1.agregarVuelo(vuelo2);
aerolinea2.agregarVuelo(vuelo3);
aerolinea3.agregarVuelo(vuelo4);

// Crear un itinerario
const itinerario = new Itinerario("ITIN123");
itinerario.agregarVuelo(vuelo1);
itinerario.agregarVuelo(vuelo2);
aerolinea2.agregarVuelo(vuelo3);
aerolinea3.agregarVuelo(vuelo4);

// Mostrar vuelos en la página
const vuelosList = document.getElementById("vuelos-list");
aerolinea1.consultarVuelos().forEach(vuelo => {
    const vueloDiv = document.createElement("div");
    vueloDiv.classList.add("vuelo");
    vueloDiv.innerHTML = `
        <p><strong>Vuelo ${vuelo.codigoVuelo}</strong> - ${vuelo.origen} a ${vuelo.destino}</p>
        <p>Fecha de Salida: ${vuelo.fechaSalida.toLocaleString()}</p>
        <p>Asientos Disponibles: ${vuelo.consultarDisponibilidad()}</p>
        <button class="reservarBtn" data-codigo="${vuelo.codigoVuelo}">Reservar</button>
    `;
    vuelosList.appendChild(vueloDiv);
    // Crear lista desplegable para ver los vuelos
    const verVuelosBtn = document.createElement("button");
    verVuelosBtn.textContent = "Ver Vuelo Disponible";
    verVuelosBtn.addEventListener("click", () => {
        const detallesVuelo = `
            Vuelo: ${vuelo.codigoVuelo}
            Origen: ${vuelo.origen}
            Destino: ${vuelo.destino}
            Fecha de Salida: ${vuelo.fechaSalida.toLocaleString()}
            Fecha de Llegada: ${vuelo.fechaLlegada.toLocaleString()}
            Estado: ${vuelo.estado}
            Capacidad: ${vuelo.capacidad}
            Asientos Disponibles: ${vuelo.asientosDisponibles}
        `;
        alert(detallesVuelo);
    });
    vueloDiv.appendChild(verVuelosBtn);

    // Agregar vuelos al select de reserva
    const vueloOption = document.createElement("option");
    vueloOption.value = vuelo.codigoVuelo;
    vueloOption.textContent = `${vuelo.origen} a ${vuelo.destino} - ${vuelo.codigoVuelo}`;
    document.getElementById("vueloSelect").appendChild(vueloOption);
});

// Mostrar itinerario
document.getElementById("mostrarItinerarioBtn").addEventListener("click", () => {
    const itinerarioText = itinerario.mostrarItinerario();
    document.getElementById("itinerarioLista").textContent = itinerarioText;
});

// Reservar vuelo
document.getElementById("reservarBtn").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const vueloCodigo = document.getElementById("vueloSelect").value;
    const vueloSeleccionado = aerolinea1.consultarVuelos().find(vuelo => vuelo.codigoVuelo === vueloCodigo);

    if (!nombre || !apellido || !email || !telefono || !vueloCodigo || !vueloSeleccionado) {
        alert("Debe completar todos los campos.");
        return;
    }

    // Crear pasajero
    const pasajero = new Pasajero(nombre, apellido, email, telefono);

    // Crear reserva
    const reserva = new Reserva(vueloSeleccionado, pasajero);

    if (reserva.crearReserva()) {
        document.getElementById("mensajeReserva").textContent = "Reserva realizada con éxito!";
    } else {
        document.getElementById("mensajeReserva").textContent = "No hay asientos disponibles.";
    }

    // Deshabilitar el botón de reserva si no hay asientos
    if (vueloSeleccionado.consultarDisponibilidad() === 0) {
        document.querySelector(`button[data-codigo="${vueloCodigo}"]`).disabled = true;
    }

});


// Manejar el clic del botón
    confirmarAerolineaBtn.addEventListener("click", () => {
        const seleccionada = aerolineaSelect.value;
        if (seleccionada) {
            alert(`Aerolínea seleccionada: ${seleccionada}`);
        } else {
            alert("Por favor selecciona una aerolínea.");
        }
    });
 


    ///////////este esta funcionando

class Pago {
    constructor(monto, metodo, estado = "Pendiente") {
        this.monto = monto; // Monto del pago
        this.metodo = metodo; // Ejemplo: "Tarjeta", "Efectivo", etc.
        this.estado = estado; // Estado del pago: "Pendiente", "Completado", "Fallido"
        this.fecha = new Date(); // Fecha del pago
    }

    realizarPago() {
        // Simulación del pago
        if (this.metodo === "Tarjeta") {
            console.log("Procesando pago con tarjeta...");
            this.estado = "Completado"; // Suponemos que el pago fue exitoso
        } else {
            console.log("Procesando pago en efectivo...");
            this.estado = "Completado";
        }
        console.log(`Pago de $${this.monto} completado mediante ${this.metodo}`);
    }

    consultarEstado() {
        return `El estado del pago es: ${this.estado}`;
    }
}

// Obtenemos los elementos del DOM
const montoInput = document.getElementById('monto');
const metodoSelect = document.getElementById('metodo');
const pagarBtn = document.getElementById('pagarBtn');
const estadoPagoText = document.getElementById('estadoPago');

// Event listener para el botón de pago
pagarBtn.addEventListener('click', () => {
    const monto = parseFloat(montoInput.value);
    const metodo = metodoSelect.value;

    if (isNaN(monto) || monto <= 0) {
        alert('Por favor, ingrese un monto válido');
        return;
    }

    const pago = new Pago(monto, metodo);
    pago.realizarPago();  // Realizamos el pago

    // Actualizamos el estado del pago en la interfaz
    estadoPagoText.textContent = pago.consultarEstado();



    
});

class Notificacion {
    constructor(mensaje, tipo = "success") {
        this.mensaje = mensaje;
        this.tipo = tipo;  // "success" o "exito"
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
    mostrarNotificacion("pago realizado con exito.", "exito");  // Notificación de exito
});

