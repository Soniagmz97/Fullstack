"use strict"

function convertirEurToDollar(eur) {
    const change = 1.10
    return eur * change
}

const pricePhone = 500
const priceEars = 50

const pricePhoneDolar = convertirEurToDollar(pricePhone)
const priceEarsDolar = convertirEurToDollar(priceEars)

console.log(`El Teléfono movil cuesta ${pricePhoneDolar} €`)
console.log(`Los audífonos cuestan ${priceEarsDolar} €`)