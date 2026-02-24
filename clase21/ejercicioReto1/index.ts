interface perfilUsuario {
    userName:string,
    email:string,
    age:number
    biography?:string,
    phoneNumber?:number
}

let usuario1:perfilUsuario = {
    userName: `usuario_1`,
    email: `usuario1@algo.com`,
    age: 22,
    biography: `Estudiante de Informática en la universidad.`,
    phoneNumber: 541023658
}

let usuario2:perfilUsuario = {
    userName: `usuario_2`,
    email: `usuario2@algo.com`,
    age: 50,
}

console.log(usuario1)
console.log(usuario2)