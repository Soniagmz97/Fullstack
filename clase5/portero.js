"use strict"

const age = 20
function validarEntrada(edad) {
    const mensaje = edad > 18 ? `Puedes pasar` : `No puedes pasar`
    
    return mensaje
}

console.log(`Tienes ${age} años, ${validarEntrada(age)}`)