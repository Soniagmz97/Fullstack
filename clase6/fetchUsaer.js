" use strict"

// Crea una función asíncrona llamada obtenerDatos.
// Dentro de un bloque try, utiliza fetch para llamar a la API: https://jsonplaceholder.typicode.com/users/1.
// Convierte la respuesta a JSON usando await.
// Imprime el nombre del usuario obtenido.
// En el bloque catch, imprime un mensaje de error que diga: "Hubo un problema con la petición".

async function obtenerDatos() {
    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
        // .json para que podamos coger la informacion
        // El .json() es un parseo de JSON a objeto
        const usuario = await respuesta.json()
        console.log(usuario)
    } catch (error) {
        console.error(`Hubo un problema con la petición.`)
    }
}

obtenerDatos()