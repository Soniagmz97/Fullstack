"use strict"

// Enunciado: 
// 1. Tienes un array de gastos: [15.50, 20, 5.75, 10]. 
// 2. Usa reduce para obtener el total de la suma de todos los gastos. 
// 3. El valor inicial del acumulador debe ser 0.

const gastos = [15.50, 20, 5.75, 10]

// Con reduce reducimos la lista a un solo elemento
// En este caso, va acumulando los valores para ver el gasto total
const total = gastos.reduce((acumulador, actual) =>acumulador + actual, 0)

console.log(`El total de gastos es: ${total}`)