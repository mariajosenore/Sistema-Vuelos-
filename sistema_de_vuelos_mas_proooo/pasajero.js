class Pasajero {
    constructor(idPasajero, nombre, apellido, email, telefono, documentoIdentidad) {
        this.idPasajero = idPasajero;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.documentoIdentidad = documentoIdentidad;
    }

    registrarPasajero({ nombre, apellido, email, telefono, documentoIdentidad }) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.documentoIdentidad = documentoIdentidad;
    }

    actualizarContacto({ email, telefono }) {
        if (email) this.email = email;
        if (telefono) this.telefono = telefono;
    }

    consultarReservas() {
        // Aquí podrías retornar una lista de reservas
        return [];
    }

    obtenerInformacion() {
        return {
            idPasajero: this.idPasajero,
            nombre: this.nombre,
            apellido: this.apellido,
            email: this.email,
            telefono: this.telefono,
            documentoIdentidad: this.documentoIdentidad
        };
    }
}

// Exportar la clase para usarla en otros archivos
module.exports = Pasajero;
