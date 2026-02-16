"use strict"

// Crea un array de objetos llamado inventario. Cada objeto debe representar un producto con: nombre, precio y stock. (Añade al menos 3 productos).
// Crea una función llamada agregarCarrito que reciba dos parámetros: el nombre del producto y la cantidad deseada.Dentro de la función:
// Busca el producto en el inventario.
// Si el producto existe y hay stock suficiente, imprime en consola el total a pagar (precio * cantidad).
// Si no hay stock, imprime un mensaje de advertencia.
// Extra: Usa un Template Literal para mostrar el mensaje final: "Has comprado [X] unidades de [Producto] por un total de $[Total]".

const inventario = [
    {
        nombre: `ordenador`,
        precio: 800,
        stock: 5
    },
    {
        nombre: `movil`,
        precio: 300,
        stock: 10
    },
    {
        nombre: `e-book`,
        precio: 100,
        stock: 100
    }
]

// const agregarCarrito = (nombreProducto, cantidadDeseada) => {
//     const producto = inventario.find(prod => prod.nombre === nombreProducto)
    
//     if (producto && (cantidadDeseada <= producto.stock)){
//         return `Total a pagar: ${producto.precio * cantidadDeseada}€`
//     }
// }

const agregarCarrito = (nombreProducto, cantidadDeseada) => {
    const producto = inventario.find(prod => prod.nombre === nombreProducto)
    
    if (producto){
        if (cantidadDeseada <= producto.stock){
            return `Total a pagar: ${producto.precio * cantidadDeseada}€`
        }
        else{
            return `Stock insuficiente. \nCantidad disponible: ${producto.stock}`
        }
    }
    else{
        return `Producto no disponible.`
    }
}

console.log(agregarCarrito(`ordenador`, 5))