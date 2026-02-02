"use strict"

function esperarDosSegundos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("✅ ¡Tiempo completado!");
        }, 2000);
    });
}

async function ejecutarTarea() {
    console.log(`Esperando...`)
    const resultado = await esperarDosSegundos()
    console.log(resultado)
}

console.log(ejecutarTarea())