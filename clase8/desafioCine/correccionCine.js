"use strict"

const peliculas = [
  { titulo: "Aventura Espacial", edadMinima: 12, precio: 8.5, esEstreno: true },
  { titulo: "Comedia Local", edadMinima: 0, precio: 6.0, esEstreno: false },
  { titulo: "Drama Histórico", edadMinima: 16, precio: 7.25, esEstreno: false },
  { titulo: "Terror Nocturno", edadMinima: 18, precio: 9.0, esEstreno: true }
]

const generarCartelera = (lista, edadUsuario) => {
    return lista.map(peli=>{
        let precioFinal = peli.precio
        if (peli.esEstreno === true){
            // 1.20 es lo mismo que hacer *0.2 y sumarselo
            precioFinal = peli.precio * 1.20
        }

        let acceso = edadUsuario >= peli.edadMinima ? `Permitido` : `Denegado`

        return {
            titulo: peli.titulo,
            precioTotal: precioFinal.toFixed(2),
            estadoAceso: acceso
        }
    })
}

const edadAlumno = 17 

console.table(generarCartelera(peliculas, edadAlumno))