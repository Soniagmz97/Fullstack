"use strict"

// Ejercicio Formateo de Usuarios
// Enunciado:
// 1. Tienes un array de objetos: [{n: "ana"}, {n: "juan"}]. 
// 2. Usa map para crear un nuevo array donde los nombres estén en mayúsculas y la propiedad se llame nombreCompleto. 
// 3. Resultado esperado: [{nombreCompleto: "ANA"}, {nombreCompleto: "JUAN"}].

const nombres = [{n: "ana"}, {n: "juan"}]

const nombreCompleto = nombres.map(nombre => nombre.n.toLocaleUpperCase())

console.log(nombreCompleto)