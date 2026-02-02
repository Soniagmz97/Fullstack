"use strict"

async function obtenerDatos() {
    const userName = `Soniagmz97`
    try {
        const respuesta = await fetch(`https://api.github.com/users/${userName}`)
        // .json para que podamos coger la informacion
        // El .json() es un parseo de JSON a objeto
        const usuario = await respuesta.json()
        console.log(usuario)
    } catch (error) {
        console.error(`Hubo un problema con la petición.`)
    }
}

obtenerDatos()