"use strict"

// Crea un objeto perfil con: username, email y un booleano estaConectado.
const perfil = {
    username: `Soniagmz`,
    email: `soniagmz@gmail.com`,
    estaConectado: true
}
// Serializa el objeto a JSON.
const perfilJson = JSON.stringify(perfil)
// Imprime el JSON y observa cómo las propiedades ahora están rodeadas por comillas dobles "".
console.log(typeof(perfilJson))
console.log(perfilJson)