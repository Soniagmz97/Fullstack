"use strict"

// Ejercicio Lista de Tareas
// Enunciado:
// Tienes el siguiente string que representa una tarea de una base de datos: '{"id": 1, "tarea": "Aprender Fetch", "completada": false}'.
// Transfórmalo a objeto.
// Cambia la propiedad completada a true mediante código.
// Imprime el objeto final para ver el cambio.

const entradaJson = '{"id": 1, "tarea": "Aprender Fetch", "completada": false}'

const entradaParsed = JSON.parse(entradaJson)

entradaParsed.completada = true

console.log(entradaParsed)