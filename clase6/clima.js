"use strict"

// Objetivo: Procesar datos recibidos de una API.
// Ejercicio Respuesta de Clima
// Enunciado:
// Crea una constante llamada jsonClima con el siguiente string: '{"ciudad": "Madrid", "temp": 22, "pronostico": "Soleado"}'.
// Convierte ese string en un objeto JavaScript llamado climaObj.
// Utiliza un Template Literal para imprimir: "En la ciudad de Madrid hace una temperatura de 22 grados".

const jsonClima = '{"ciudad": "Madrid", "temp": 22, "pronostico": "Soleado"}'

const climaObj = JSON.parse(jsonClima)

console.log(`En la ciudad de ${climaObj.ciudad} hace una temperatura de ${climaObj.temp} grados`)