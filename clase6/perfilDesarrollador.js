"use strict"

// Perfil de Desarrollador
// Enunciado:
// Crea un objeto dev con las propiedades: nombre ("Luis"), tecnologia ("JavaScript") y experiencia (3).
// Usa desestructuración para crear tres variables independientes con los mismos nombres.
// Imprime en consola un mensaje usando Template Literals: "Luis tiene 3 años de experiencia en JavaScript".

const dev = {
    nombre: `Luis`,
    tecnologia: `JavaScript`,
    experiencia: 3
}

const { nombre, tecnologia, experiencia } = dev

console.log(`${nombre} tiene ${experiencia} años de experiencia en ${tecnologia}`)