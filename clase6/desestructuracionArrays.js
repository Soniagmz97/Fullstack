"use strict"

// Tienes el siguiente array de coordenadas: const coordenadas = [10.5, -45.2, 120.0];
// Extrae los dos primeros valores en variables llamadas latitud y longitud usando desestructuración.
// Imprime ambas variables.

const coordenadas = [10.5, -45.2, 120.0]

const [ latitud, longitud ] = coordenadas

console.log(`Lat:${latitud}, Long:${longitud}`)