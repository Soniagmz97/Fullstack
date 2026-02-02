"use strict"

// Enunciado: 
// 1. Tienes un array de precios: [100, 200, 300]. 
// 2. Crea un nuevo array llamado preciosConIVA donde cada precio tenga el 21% de IVA sumado. 
// 3. Imprime el nuevo array.

const precios = [100, 200, 300]

const preciosConIVA = precios.map(precio=> precio * 0.21)

console.log(preciosConIVA)