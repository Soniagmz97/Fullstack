"use strict"

function conectarNetflix() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulamos que se va internet: RECHAZAMOS la promesa
            reject("❌ Error: No hay conexión a internet"); 
        }, 2000);
    });
}

async function verPelicula() {
    console.log(`🍿 Haciendo palomitas`)
    try{
        await conectarNetflix()
    } catch (error) {
        console.log(`Vaya vaya`)
        console.log(error)
    }
    console.log(`Nos queda hacer otra cosa`)
}

console.log(verPelicula())