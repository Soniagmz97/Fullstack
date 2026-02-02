"use strict"

// Ejercicio Conteo de Stock
// Enunciado: 
// 1. Tienes un array de cantidades: [5, 12, 8, 20]. 
// 2. Crea una variable totalStock inicializada en 0. 
// 3. Usa forEach para sumar cada cantidad a totalStock e imprime el resultado final.

const cantidades = [5, 12, 8, 20]

let totalStock = 0

// Como solo tenemos un parametro, no hace falta ponerle las {}
cantidades.forEach(eachCantidad => totalStock += eachCantidad)

console.log(totalStock)