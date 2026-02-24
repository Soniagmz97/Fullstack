// let mensaje:string = `Hola mundo`

// let conteo = 5

// console.log(mensaje)
// console.log(conteo)

// const saludar = (saludo:number) => {
//     return console.log(saludo)
// }

// saludar(5)


// Interface
interface Usuario {
    id:number,
    nombre:string,
    email:string
    // opcional --> puede o no estar
    premium?:string
}

const newUser:Usuario = {
    id: 1,
    nombre: `Sonia`,
    email: `algo@algo.com`
}
console.log(newUser)