"use strict"

function esperarDosSegundos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("✅ ¡Tiempo completado!");
        }, 2000);
    });
}

async function cocinar() {
    console.log(`🔥 Calentando el horno...`)
    // Si no quiero imprimir no hace falta crear la variable
    await esperarDosSegundos()
    console.log(`🍕 Horneando la pizza...`)
    await esperarDosSegundos()
    console.log(`🍽️ ¡A comer!`)
}

console.log(cocinar())