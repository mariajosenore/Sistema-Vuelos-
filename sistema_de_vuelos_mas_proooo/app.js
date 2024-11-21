const express = require('express');
const Vuelo = require('./clases/Vuelo');   // Importar la clase Vuelo
const Pasajero = require('./clases/Pasajero');  // Importar la clase Pasajero
const app = express();
const port = 3000;

let vuelos = [
    new Vuelo("A001", "Bogotá", "Cali", "2024-11-25T10:00:00", "2024-11-25T12:00:00", "Programado", 150, 50),
    new Vuelo("A002", "Cali", "Medellín", "2024-11-26T15:00:00", "2024-11-26T17:00:00", "Programado", 180, 75),
    new Vuelo("A003", "Medellín", "Cartagena", "2024-11-27T09:00:00", "2024-11-27T11:00:00", "Programado", 200, 100),
    new Vuelo("A004", "Cartagena", "Bogotá", "2024-11-28T14:00:00", "2024-11-28T16:00:00", "Programado", 220, 120)
];

let pasajeros = [
    new Pasajero("P001", "Juan", "Pérez", "juan@example.com", "123456789", "C123456789")
];

app.get('/vuelos', (req, res) => {
    res.json(vuelos);
});

app.post('/reservar', (req, res) => {
    const vuelo = vuelos[0]; // Por ejemplo, seleccionar el primer vuelo
    const pasajero = pasajeros[0]; // Por ejemplo, seleccionar el primer pasajero
    if (vuelo.reservarAsiento()) {
        res.send("Reserva exitosa");
    } else {
        res.send("No hay asientos disponibles");
    }

});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);


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

// Clase Pago
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

// Clase Pago
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

// Clase Pago
class Pago {
    constructor(monto, metodo, estado = "Pendiente") {
        this.monto = monto;
        this.metodo = metodo;
        this.estado = estado;
        this.fecha = new Date();
    }

    realizarPago() {
        const mensajePago = document.getElementById("mensajePago");
        mensajePago.textContent = `Procesando pago con ${this.metodo}...`;
        
        // Simulando un proceso de pago con un retraso de 2 segundos
        setTimeout(() => {
            if (this.metodo === "Tarjeta") {
                this.estado = "Completado";
                mensajePago.textContent = `Pago exitoso de $${this.monto.toLocaleString()} COP con tarjeta.`;
            } else {
                this.estado = "Completado";
                mensajePago.textContent = `Pago exitoso de $${this.monto.toLocaleString()} COP en efectivo.`;
            }
            document.getElementById("estadoPago").textContent = `El estado del pago es: ${this.estado}`;
        }, 2000); // Simulación de 2 segundos para el procesamiento
    }

    consultarEstado() {
        return `El estado del pago es: ${this.estado}`;
    }
}

// Datos de ejemplo para vuelos y aerolíneas
const vuelo = [
    { id: 1, destino: "Madrid", precio: 500000 }, // Precio en COP
    { id: 2, destino: "Lima", precio: 300000 },  // Precio en COP
    { id: 3, destino: "Buenos Aires", precio: 400000 } // Precio en COP
    
];

const aerolineas = ["Aerolínea UCC", "Aerolínea Global", "Aerolínea Express"];

// Elementos del DOM
const vueloSelect = document.getElementById("vueloSelect");
const aerolineaSelect = document.getElementById("aerolineaSelect");
const reservarBtn = document.getElementById("reservarBtn");
const mostrarItinerarioBtn = document.getElementById("mostrarItinerarioBtn");
const estadoPagoText = document.getElementById("estadoPago");
const pagarBtn = document.getElementById("pagarBtn");

// Llenar select de vuelos
vuelos.forEach(vuelo => {
    const option = document.createElement("option");
    option.value = vuelo.id;
    option.textContent = `${vuelo.destino} - $${vuelo.precio.toLocaleString()} COP`;
    vueloSelect.appendChild(option);
});

// Llenar select de aerolíneas
aerolineas.forEach(aerolinea => {
    const option = document.createElement("option");
    option.value = aerolinea;
    option.textContent = aerolinea;
    aerolineaSelect.appendChild(option);
});

// Reservar vuelo
reservarBtn.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const vueloSeleccionado = vueloSelect.value;

    if (!nombre || !apellido || !email || !telefono || !vueloSeleccionado) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const vuelo = vuelos.find(v => v.id == vueloSeleccionado);
    const mensajeItinerario = `Reservación Confirmada para: ${nombre} ${apellido}. Vuelo a ${vuelo.destino}. Precio: $${vuelo.precio.toLocaleString()} COP`;
    document.getElementById("mensajeItinerario").textContent = mensajeItinerario;
});

// Mostrar itinerario
mostrarItinerarioBtn.addEventListener("click", () => {
    const itinerario = document.getElementById("mensajeItinerario").textContent;
    if (itinerario) {
        alert(itinerario);
    } else {
        alert("No hay reservaciones aún.");
    }
});

// Realizar pago
pagarBtn.addEventListener("click", () => {
    const monto = parseFloat(document.getElementById("monto").value);
    const metodo = document.getElementById("metodo").value;

    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un monto válido");
        return;
    }

    const pago = new Pago(monto, metodo);
    pago.realizarPago();
});


class Pago {
    constructor(monto, metodo, estado = "Pendiente") {
        this.monto = monto;
        this.metodo = metodo;
        this.estado = estado;
        this.fecha = new Date();
    }

    realizarPago() {
        const mensajePago = document.getElementById("mensajePago");
        mensajePago.textContent = `Procesando pago con ${this.metodo}...`;
        
        // Simulando un proceso de pago con un retraso de 2 segundos
        setTimeout(() => {
            if (this.metodo === "Tarjeta") {
                this.estado = "Completado";
                mensajePago.textContent = `Pago exitoso de $${this.monto.toLocaleString()} COP con tarjeta.`;
            } else {
                this.estado = "Completado";
                mensajePago.textContent = `Pago exitoso de $${this.monto.toLocaleString()} COP en efectivo.`;
            }
            document.getElementById("estadoPago").textContent = `El estado del pago es: ${this.estado}`;
        }, 2000); // Simulación de 2 segundos para el procesamiento
    }

    consultarEstado() {
        return `El estado del pago es: ${this.estado}`;
    }
}

// Datos de ejemplo para vuelos y aerolíneas
const vueloo = [
    { id: 1, destino: "Madrid", precio: 500000 }, // Precio en COP
    { id: 2, destino: "Lima", precio: 300000 },  // Precio en COP
    { id: 3, destino: "Buenos Aires", precio: 400000 } // Precio en COP
];
// Realizar pago
pagarBtn.addEventListener("click", () => {
    const montoInput = document.getElementById("monto");
    const metodoInput = document.getElementById("metodo");
    const monto = parseFloat(montoInput.value);
    const metodo = metodoInput.value;

    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un monto válido");
        return;
    }

    const pago = new Pago(monto, metodo);
    pago.realizarPago();
});

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo = "success") {
    mensajesNotificacion.push({ mensaje, tipo });
}

// Mostrar todas las notificaciones
mostrarNotificacionesBtn.addEventListener("click", () => {
    if (mensajesNotificacion.length > 0) {
        let htmlNotificaciones = "";
        mensajesNotificacion.forEach((noti) => {
            htmlNotificaciones += `<div class="notificacion ${noti.tipo}">${noti.mensaje}</div>`;
        });
        notificacion.innerHTML = htmlNotificaciones;
    } else {
        notificacion.innerHTML = `<div class="notificacion">No hay notificaciones para mostrar.</div>`;
    }
});


