class Itinerario {
    constructor(codigoVuelo, fechaSalida, fechaLlegada, origen, destino) {
        this.codigoVuelo = codigoVuelo;
        this.fechaSalida = new Date(fechaSalida);
        this.fechaLlegada = new Date(fechaLlegada);
        this.origen = origen;
        this.destino = destino;
    }

    mostrarItinerario() {
        return `Vuelo: ${this.codigoVuelo}, Salida: ${this.fechaSalida.toLocaleString()}, Llegada: ${this.fechaLlegada.toLocaleString()}, Origen: ${this.origen}, Destino: ${this.destino}`;
    }

    actualizarFechas(fechaSalida, fechaLlegada) {
        this.fechaSalida = new Date(fechaSalida);
        this.fechaLlegada = new Date(fechaLlegada);
    }
}

// Exportar la clase para usarla en otros archivos
module.exports = Itinerario;
