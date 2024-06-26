const { CarritoCompra } = require("../index.js");

let nuevoCarrito
let resultadoInit
let producto
let resultado
let productos

beforeEach(() => {
    nuevoCarrito = new CarritoCompra()
    resultadoInit = {
        carrito: []
    }
    producto = {
        nombre: "TV",
        precio: 100,
        cantidad: 10
    }

    resultado = [{
        nombre: "TV",
        precio: 100,
        cantidad: 10
    }]

    productos = [
        {
            nombre: "TV",
            precio: 100,
            cantidad: 10
        },
        {
            nombre: "TV",
            precio: 200,
            cantidad: 5
        },
        {
            nombre: "TV",
            precio: 100,
            cantidad: 1
        },
        {
            nombre: "TV",
            precio: 200,
            cantidad: 10
        },
        {
            nombre: "TV",
            precio: 100,
            cantidad: 2
        },
    ]
})

describe("Clase CarritoCompra", () => {
    it("La clase CarritoCompra es una clase", () => {
        expect(typeof CarritoCompra).toBe("function");
        expect(nuevoCarrito).toBeInstanceOf(CarritoCompra);
    });

    it("La clase CarritoCompra tiene los siguientes métodos definidos", () => {
        expect(CarritoCompra.prototype.constructor).toBeDefined();
        expect(CarritoCompra.prototype.agregarProducto).toBeDefined();
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined();
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined();
    });
});

describe("Constructor", () => {
    it("El constructor debe inicializar el carrito como un array vacio", () => {
        expect(nuevoCarrito.carrito).toEqual([])
        expect(nuevoCarrito.carrito).toBeInstanceOf(Array)
        expect(nuevoCarrito).toEqual(resultadoInit)
    })
})

describe("AgregarProducto", () => {
    it("Debe recibir un objeto producto y agregarlo al carrito", () => {
        nuevoCarrito.agregarProducto(producto)
        expect(nuevoCarrito.carrito).toEqual(resultado)
    })
})

describe("calcularTotal", () => {
    it("Debe calcular el total de un producto en el carrito", () => {
        nuevoCarrito.agregarProducto(producto)
        expect(nuevoCarrito.calcularTotal()).toBe(1000)
    })

    it("Debe calcular el total de muchos productos en el carrito", () => {
        productos.forEach((elemento) => nuevoCarrito.agregarProducto(elemento))
        expect(nuevoCarrito.calcularTotal()).toBe(4300)
    })
})

describe("aplicarDescuento", () => {
    it("Aplica un descuento en la compra acorde al valor que se especifique", () => {
        productos.forEach((elemento) => nuevoCarrito.agregarProducto(elemento))
        expect(nuevoCarrito.aplicarDescuento(0)).toBe(4300)
        expect(nuevoCarrito.aplicarDescuento(10)).toBe(3870)
        expect(nuevoCarrito.aplicarDescuento(50)).toBe(2150)
        expect(nuevoCarrito.aplicarDescuento(100)).toBe(0)
    })
})
