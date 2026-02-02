"use strict"

// Ejercicio Limpiando objetos (Excluir propiedades)
// Enunciado:
// Recibes un objeto de una API con datos sensibles: const empleado = { id: 5, pass: "123456", nombre: "Pepe", puesto: "Dev" };.
// Usa desestructuración y rest para separar la pass del resto de los datos.
// Guarda el resto de la información en un objeto llamado datosPublicos.
// Imprime datosPublicos para verificar que la contraseña no está ahí.

const empleado = { id: 5, pass: "123456", nombre: "Pepe", puesto: "Dev" }

const {pass, ...datosPublicos} = empleado

console.log(datosPublicos)