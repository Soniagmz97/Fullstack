// Explicito
let mensaje: string =`Hola mundo`
// Implicito
let conteo = 10 

// Tipado de funciones
function saludar(nombre:string, edad:number): string{
    return `Hola ${nombre}, tienes ${edad} años`
}
console.log(saludar(`Sonia`, 24))