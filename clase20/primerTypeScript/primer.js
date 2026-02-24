// Explicito
var mensaje = "Hola mundo";
// Implicito
var conteo = 10;
// Tipado de funciones
function saludar(nombre, edad) {
    return "Hola ".concat(nombre, ", tienes ").concat(edad, " a\u00F1os");
}
console.log(saludar("Sonia", 24));
