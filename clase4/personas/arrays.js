"use strict"

console.log(`EJERCICIO 1:`)
// Ejercicio 1: Operaciones básicas con arrays

// Crea un array llamado `frutas` con 5 frutas diferentes
const frutas = [`Banana`, `Manzana`, `Pera`, `Naranja`, `Piña`]
console.log(frutas)

// Usa .push() para agregar una nueva fruta
frutas.push(`Melocotón`)
console.log(frutas)

// Usa .pop() para remover la última fruta
frutas.pop()
console.log(frutas)

// Imprime el array en cada paso con console.log()

console.log(`EJERCICIO 2`)
// EJERCICIO 2: Acceder a elementos
// Crea un array llamado "numeros" con los valoreas [10,20,30,40,50]
const numeros = [10,20,30,40,50]

// Accede al primer elemento
console.log(`Primerelemento: ${numeros[0]}`)

// Accede al último elemento
const ultimoElemento = numeros.length
console.log(`Último elemento: ${numeros[ultimoElemento - 1]}`)

// Accede al elemento en la posición 2
console.log(`Elemento en la posición 2: ${numeros[1]}`)


console.log(`EJERCICIO 4:`)
// EJERCICIO 4: Combinar operaciones
// Crea un array llamado "colores" con: [`rojo`, `azul`, `verde`]
const colores = [`rojo`, `azul`, `verde`]
console.log(colores)

// Agrega `amarillo` al final
colores.push(`Amarillo`)
console.log(colores)

// Agrega `Naranja` al final
colores.push(`Naranja`)
console.log(colores)

// Elimina el primer color
colores.shift()
console.log(colores)

// Imprime el array final y su longitud
console.log(`El array [${colores}] tiene una longitud de ${colores.length}`)