"use strict"

// Ejercicio Combinar Arrays y evitar la mutación
// Enunciado:
// Tienes dos listas de tareas: pendientes ("Lavar", "Comprar") y urgentes ("Pagar luz").
// Crea una constante todasLasTareas que combine ambos arrays usando spread.
// Añade una tarea nueva ("Dormir") al final de la combinación.
// Imprime la lista final y comprueba que los arrays originales siguen intactos.

const pendientes = [`Lavar`, `Comprar`]

const urgentes = [`Pagar luz`]

const todasLasTareas = [...pendientes, ...urgentes, `Dormir`]

console.log(todasLasTareas)
console.log(pendientes)
console.log(urgentes)