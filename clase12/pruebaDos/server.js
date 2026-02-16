"use strict"

// Importamos la libreria espress
const express = require(`express`)

// Creamos una instancia de nuestra aplicacion
const app = express()

// Cuando el usuario entre a la raiz...
app.get(`/`, (req, res) => {
    // ...respondemos con este texto
    res.send(`¡Servidor funcionando!`)
})

const port = 3000
// El servidor escucha en el puerto 3000
app.listen(port)

// Creamos el package json con npm init -y
// e instalamos express con npm i express

// Para abrirlo, node nombre.js
// y vamos a https://localhost:3000 que es done lo tenemos

// Para que me imprima en la consola la ruta / enlace para pinchar en ella
app.listen(3000, () =>{
    console.log(`http://localhost:${port}`)
})