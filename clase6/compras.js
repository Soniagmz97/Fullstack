"use strict"

// Crea un objeto llamado carrito que contenga: idCompra (un numero), productos (un array con "Teclado" y "Mouse") y total (un numero).
const carrito = {
    idCompra: 1000,
    productos : [`Teclado`, `Mouse`],
    total: 10
}

// Convierte el objeto a JSON y almacenalo es una variable llamada carritoJSON
const carritoJson = JSON.stringify(carrito)
// Muestra en consola el typeof de carritoJSON para confirmar que es un string
console.log(typeof(carritoJson))