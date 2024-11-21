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

// Exportar la clase para usarla en otros archivos
module.exports = Pago;
