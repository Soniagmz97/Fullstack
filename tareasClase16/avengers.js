"use strict"

// 📝 Enunciado

// Tienes el siguiente array de objetos:

const heroes = [
    { nombre: "Iron Man", nivel: 5, equipo: "Avengers" },
    { nombre: "Batman", nivel: 4, equipo: "Justice League" },
    { nombre: "Thor", nivel: 8, equipo: "Avengers" },
    { nombre: "Spider-Man", nivel: 3, equipo: "Avengers" }
];

// Crea una función que filtre y devuelva en un nuevo array solo a los héroes que pertenecen al equipo "Avengers".
// Crea otra función llamada subirNivel que reciba el nombre de un héroe y aumente su nivel en +1.Muestra el array final en la consola para verificar los cambios.

// Debes subirlo a un proyecto en tu Github (aprovechen para usar ramas)

const heros = () =>{
    let arrayAvengers = []

    heroes.forEach(( eachHero, index ) => {
        if (eachHero.equipo === `Avengers`){
            arrayAvengers.push(eachHero)
        }
    })

    return arrayAvengers
}

const subirNivel = (nombreHeroe) => {
    heroes.forEach(( eachHero, index ) => {
        if (eachHero.nombre === nombreHeroe){
            eachHero.nivel += 1
        }
    })

    return heroes
}

console.log(heros())

console.log(subirNivel(`Iron Man`))