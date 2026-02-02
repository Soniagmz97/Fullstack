"use strict"

async function obtenerPokemon() {
    const nombre = `Charizard`
    try{
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)

        const datos = await respuesta.json()

        console.log(`El nombre del pokemon es: ${datos.name}`)
        console.log(`El id del pokemon es: ${datos.id}`)

        // console.log(datos)
    }catch{
        console.log(`algo falló ${error}`)
    }
}

obtenerPokemon()