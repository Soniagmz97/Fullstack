"use strict"

// Crea un objeto llamado persona
const person = {
    name: `Alice`,
    job: `Developer`,
    city: `Valencia`,
    dateBirth: 1998
}

const actualYear = 2026

// Imprimir el mensaje en una sola linea con template literals
console.log(`Hola, me llamo ${person.name}, vivo en ${person.city} y trabajo como ${person.job}. Tengo ${actualYear - person.dateBirth} años.`)