"use strict"

// Renombrado de variables y valores por defecto
// Enunciado:
// Tienes el objeto: const mascota = { nombre: "Firulais", tipo: "Perro" };.
// Extrae la propiedad nombre, pero renómbrala a nombreMascota durante la desestructuración.
// Extrae la propiedad edad, y como no existe en el objeto, asígnale un valor por defecto de 0.
// Imprime ambas variables.

const mascota = { nombre: "Firulais", tipo: "Perro" }
const { nombre: nombreMascota, edad = 0 } = mascota

console.log(nombreMascota)
console.log(edad)