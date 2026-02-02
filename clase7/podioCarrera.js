"use strict"

// Ejercicio Podio de Carreras
// Enunciado:
// Tienes el siguiente array: const corredores = ["Ana", "Juan", "Pedro", "Lucía"];.
// Extrae los dos primeros nombres en variables llamadas oro y plata.
// Salta el tercer nombre ("Pedro") y extrae el cuarto en una variable llamada mencionHonorifica.
// Imprime las tres variables.

const corredores = ["Ana", "Juan", "Pedro", "Lucía"]
const [oro, plata, , mencionHonorifica] = corredores
console.log(oro)
console.log(plata)
console.log(mencionHonorifica)