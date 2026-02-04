"use strict"

// 1. El Catálogo
const peliculas = [
    {
        titulo: "Aventura en el Bosque",
        edadMinima: 7,
        precio: 6.5,
        esEstreno: false
    },
    {
        titulo: "La Noche Oscura",
        edadMinima: 16,
        precio: 9.5,
        esEstreno: true
    },
    {
        titulo: "Código Final",
        edadMinima: 18,
        precio: 8,
        esEstreno: false
    }
]

// 2. La Función Principal
const generarCartelera = (peliculas, edadUsuario) => {
    let cartelera = peliculas.forEach(pelicula => {
        pelicula.map(p => {
            let precioFinal = pelicula.esEstreno == true ? pelicula.precio = pelicula.precio * 0.2 : pelicula.precio = pelicula.precio

            let acceso = edadUsuario >= edadMinima ? `permitido` : `denegado`
        })
    });

    return cartelera
}

console.log(generarCartelera(peliculas, 10))