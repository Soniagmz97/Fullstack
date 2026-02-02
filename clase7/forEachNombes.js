"use strict"

// Enunciado: 
// 1. Tienes un array de nombres de usuarios: ["Ana", "Luis", "Maria"]. 
// 2. Usa forEach para imprimir en consola un saludo para cada uno: "Hola, [nombre], bienvenido al curso".

const nombres = [`Ana`, `Luis`, `Maria`]

nombres.forEach(eachNombre =>{
    console.log(`Hola ${eachNombre}, bienvenido al curso.`)
})