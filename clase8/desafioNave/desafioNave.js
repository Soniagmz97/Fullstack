"use strict"

// 1. Datos iniciales
const inventario = [
    {
        nombre: `ordenador`,
        categoria: `tecnología`,
        precio: 800,
        stock: 10,
    },
    {
        nombre: `móvil`,
        categoria: `tecnología`,
        precio: 300,
        stock: 20,
    },
    {
        nombre: `libro`,
        categoria: `papelería`,
        precio: 50,
        stock: 100,
    }
]

// 2. Función de Procesamiento
// 3. Lógica interna
let total = 0
let nameProd
let category
let price
let totalDiscount
const procesarPedido = (nombreProducto, cantidad) => {
    inventario.forEach((eachProducto, index) => {
        if (eachProducto.nombre === nombreProducto && eachProducto.stock > cantidad) {
            total = eachProducto.precio * cantidad
            nameProd = eachProducto.nombre
            category = eachProducto.categoria
            price = eachProducto.precio
        }

        if (total > 500) {
            const descuento = total * 0.1
            const totalDescontado = total - descuento
            totalDiscount = totalDescontado
        }
    })

    const mensaje = descuento > 0 ? `Nombre del producto: ${nameProd}.\nCategoría: ${category}.\nPrecio inicial: ${total}€.\nDescuento (10%): ${descuento}€.\nPrecio final:${totalDiscount}€.` : `Nombre del producto: ${nameProd}.\nCategoría: ${category}.\nPrecio final: ${total}€.`

    return mensaje
}

// 4. Salida
const prod = `ordenador`
const cant = 5
try {
    console.log(procesarPedido(prod, cant))
} catch (error) {
    console.log(`No se ha podido comprubar la petición debido a un error:\n${error}`)
}