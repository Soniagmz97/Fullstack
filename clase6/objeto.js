"use strict"

const usuario = {
    id: 101,
    nombre: `Alex,
    premium: true`
}

// Serializacion
// Convertir el objeto en un texto stringify
const usuarioJson = JSON.stringify(usuario)

// Imprime usuarioJSON y comprueba con typeof que ahora es un string
// console.log(usuario)
// console.log(usuarioJson)

console.log(typeof(usuario))
console.log(typeof(usuarioJson))