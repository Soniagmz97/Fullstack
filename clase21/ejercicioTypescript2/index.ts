// const nombreOne:string = `Bruno Díaz`
// const artesMarcialesUno:string[] = [`Karate`, `Aikido`, `Wing Chun`, `Jiu-Jitsu`]

// const batman : {nombre:string, artesMarciales:string[]} = {
//     nombre: nombreOne,
//     artesMarciales: artesMarcialesUno
// }

// console.log(batman)

interface JusticeLeague {
    nameJusticeLeague: string,
    marcialArts:string[]
}

let batman:JusticeLeague = {
    nameJusticeLeague : `Bruno Díaz`,
    marcialArts : [`Karate`, `Aikido`, `Wing Chun`, `Jiu-Jitsu`]
}

console.log(batman)