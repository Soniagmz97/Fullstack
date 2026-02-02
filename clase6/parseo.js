"use strict"

// Imagina que recibes este texto de una API: '{"producto": "Monitor", "precio": 250, "stock": true}'. Guárdalo en una constante llamada respuestaServidor.
// Convierte esa cadena de texto nuevamente a un objeto de JavaScript usando JSON.parse().
// Accede a la propiedad producto e imprímela en la consola.

const respuestaServidor = `{ "producto": "Monitor", "precio": 250, "stock": true }`
console.log(typeof(respuestaServidor))

const data = JSON.parse(respuestaServidor)

console.log(`El ${data.producto} cuesta ${data.precio} €`)