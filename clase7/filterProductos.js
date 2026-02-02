"use strict"

// Enunciado: 
// 1. Tienes un array de objetos productos: [{nombre: "PC", precio: 800}, {nombre: "Mouse", precio: 20}, {nombre: "Teclado", precio: 50}]. 
// 2. Filtra los productos que cuesten más de 100 USD para crear un array de productosPremium.

const productos = [{ nombre: "PC", precio: 800 }, { nombre: "Mouse", precio: 20 }, { nombre: "Teclado", precio: 50 }]

const productosPremium = productos.filter(producto => producto.precio > 100)

console.log(productosPremium)