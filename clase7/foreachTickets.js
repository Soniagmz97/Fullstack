"use strict"

// Ejercicio Generador de Tickets
// Enunciado: 
// 1. Tienes un array de productos: ["Monitor", "Teclado", "Mouse"]. 
// 2. Usa forEach para imprimir en consola: "Producto [índice + 1]: [nombre]". 
// 3. Pista: Recuerda que el segundo parámetro de la función de callback es el índice.

const productos = ["Monitor", "Teclado", "Mouse"]

productos.forEach(( eachProducto, index ) =>{
    // Si ponemos index++ le suma 1 en la siguiente iteracion
    console.log(`Producto ${++index}: ${eachProducto}`)
})