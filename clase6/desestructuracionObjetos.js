"use strict"

// Tienes el siguiente objeto:
// const config = { id: 1, tema: "oscuro", fuente: "Arial", lang: "es" };
// Usa la desestructuración para extraer tema y lang en variables independientes en una sola línea.
// Imprime en consola: "El tema actual es oscuro en el idioma es".

const config = { id: 1, tema: "oscuro", fuente: "Arial", lang: "es" }
const { tema, lang } = config

console.log(`El tema actual es ${tema} en el idioma ${lang}`)