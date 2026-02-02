"use strict"

// EJERCICIO 1: Crear y acceder a un objeto
console.log(`EJERCICIO 1`)

// Paso 1: Crea un objeto llamado `persona` con las siguientes propiedades:
//      - nombre: `Juan`
//      - edad: 28
//      - ciudad: `Madrid`

const persona = {
    nombre: `Juan`,
    edad: 28,
    ciudad: `Madrid`
}

// Paso 2: Accede a la propiedad `nombre` usando notaciónde punto
// Paso 3: Accede a la propiedad `edad` usando notación de corchetes
console.log(`${persona.nombre} tiene ${persona[`edad`]} años y vive en ${persona.ciudad}`)
// Paso 4: Imprime todas las propiedades en la consola
console.log(Object.keys(persona))