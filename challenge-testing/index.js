class CarritoCompra {
    constructor() {
        this.carrito = []
    }

    agregarProducto(producto) {
        this.carrito.push(producto)
    }

    calcularTotal() {
       return this.carrito.reduce((acum, objProducto) => acum += objProducto.precio * objProducto.cantidad, 0)
    }

    aplicarDescuento(descuento) {
       let precioTotal = this.calcularTotal()
       return precioTotal - (precioTotal * descuento / 100)
    }
}

module.exports = {
    CarritoCompra
}

