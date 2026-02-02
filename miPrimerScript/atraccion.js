"use strict"

// Atraccion

// Requisitos
const edadMinima = 12
const alturaMinima = 140
const precioEntrada = 15

// Datos usuario
let nombreUsuario = `Sonia`
let edadUsuario = 14
let alturaUsuario = 135
let dineroDisponible = 20

// Operaciones matematicas
let costoTotal = precioEntrada * 2
let saldoRestante = dineroDisponible - costoTotal

// Comparadores
let tieneEdadSuficiente = edadUsuario >= edadMinima
let tieneAlturaSuficiente = alturaUsuario >= alturaMinima
let puedePagar = dineroDisponible >= precioEntrada

// Resultado final
console.log(`Usuario:`, nombreUsuario)
console.log(`¿Cumple edad?`, tieneEdadSuficiente)
console.log(`¿Cumple altura?`, tieneAlturaSuficiente)
console.log(`¿Tiene dinero?`, puedePagar)
console.log(`Dinero tras comprar 2 entradas`, costoTotal, `€`)