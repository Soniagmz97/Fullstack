"use strict"

// 1. 📦 La Base de Datos (Arrays y Objetos)
const inventario = [
    {
        nombre: `Laptop`,
        precio: 500,
        stock: 5
    },
    {
        nombre: `Mouse`,
        precio: 20,
        stock: 10
    },
    {
        nombre: `Teclado`,
        precio: 30,
        stock: 20
    }
]

// 2. 🧮 La Lógica de Negocio (Función y Return)

// 3. 💰 Aplicando Descuentos (Condicionales y Operadores)
function calcularTotal(producto, cantidad) {
    const precioSinImpuestos = producto.precio * cantidad
    const impuesto = precioSinImpuestos * 0.21
    let precioConImpuestos = precioSinImpuestos + impuesto
    
    if(precioConImpuestos > 100){
        precioConImpuestos -= 10
    }
    
    return precioConImpuestos
}

// 4. 🛒 Simulación de Compra (Llamada a la función)
const cantidadDeseada = 3
const totalCompra = calcularTotal(inventario[0], cantidadDeseada)

// 5. 🎟️ El Ticket (Template Literals)
console.log(`Has comprado ${cantidadDeseada} unidades de ${inventario[0].nombre}. El total a pagar (con impuestos y descuentos) es: ${totalCompra} €`)