class Aerolinea {
    constructor(nombre, codigo, vuelos = []) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.vuelos = vuelos; // Lista de vuelos asociados a la aerolínea
    }

    agregarVuelo(vuelo) {
        this.vuelos.push(vuelo);
    }

    listarVuelos() {
        return this.vuelos.map(vuelo => vuelo.consultarDisponibilidad());
    }

    buscarVuelo(codigoVuelo) {
        return this.vuelos.find(vuelo => vuelo.codigoVuelo === codigoVuelo);
    }
}

// Exportar la clase para usarla en otros archivos
module.exports = Aerolinea;
