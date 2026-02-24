// Ejercicio El Contrato Básico (Propiedades Opcionales)
// Objetivo: Que aprendan a definir la forma de un objeto y entiendan que en la vida real, no todos los datos vienen siempre de la base de datos (uso del modificador opcional ?).
// Contexto para los alumnos: Estás construyendo el perfil de usuario para una red social. Todos los usuarios tienen un username, un email y una edad. Sin embargo, la biografia y el telefono son campos que el usuario puede elegir no llenar.
// Instrucciones:
// Crea una interfaz llamada PerfilUsuario con las propiedades mencionadas.
// Crea un objeto usuario1 que tenga todos los datos.
// Crea un objeto usuario2 que solo tenga los datos obligatorios.

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