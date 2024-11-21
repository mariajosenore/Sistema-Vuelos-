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

    actualizarEstado(estado) {
        this.estado = estado;
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

// Exportar la clase para usarla en otros archivos
module.exports = Vuelo;
