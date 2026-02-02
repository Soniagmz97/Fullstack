"use strict"

// INVENTARIO

// Crear inventario
let products = ["Balón", "Raqueta", "Zapatillas", "Gorra"]

// Consultar Datos
console.log(`Segundo producto: ${products[1]}`)
console.log(`Longitud total: ${products.length}`)

// Modificar el Inventario
products[2] = `botas`
products[4] = `camiseta`
console.log(products)

// Uso de Comparadores
let esInventarioGrande = products.length > 4
console.log(`¿Es un inventario grande?: ${esInventarioGrande}`)