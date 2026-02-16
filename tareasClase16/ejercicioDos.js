"use strict"

// * Escribe una función que reciba dos palabras (String) y retorne
//  * verdadero o falso (Bool) según sean o no anagramas.
//  * - Un Anagrama consiste en formar una palabra reordenando TODAS
//  *   las letras de otra palabra inicial.
//  * - NO hace falta comprobar que ambas palabras existan.
//  * - Dos palabras exactamente iguales no son anagrama.

let palabraUno = `ROMA`
let palabraDos = `Amor`

const esAnagrama = (wordOne, wordTwo) =>{
    wordOne = wordOne.toLowerCase()
    wordTwo.toLowerCase()

    if (wordOne === wordTwo.reverse()) {
        return `Las palabras ${wordOne} y ${wordTwo} son anagramas.`
    }
}

esAnagrama(palabraUno, palabraDos)