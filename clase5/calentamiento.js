"use strict"

const numero = 5
function esPar(n) {
    if(n % 2 === 0){
        return `Es par`
    }
    else{
        return `Es impar`
    }
}

console.log(`El número ${numero} es ${esPar(numero)}`)