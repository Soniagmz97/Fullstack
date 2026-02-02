"use strict"

// Ejercicio El resto de los invitados (Destructuring + Rest)
// Enunciado:
// Tienes un array: const invitados = ["Carlos", "Maria", "Juan", "Lucas", "Rosa"];.
// Usa desestructuración para asignar a "Carlos" a la variable anfitrion.
// Usa el operador rest para agrupar a todos los demás nombres en un array llamado otrosInvitados.
// Imprime ambas variables.

const invitados = ["Carlos", "Maria", "Juan", "Lucas", "Rosa"]

// El operador rest siempre va al final
const [anfitrion, ...otrosInvitados] = invitados

console.log(`El anfitrión es ${anfitrion}`)
console.log(`Los demás son ${otrosInvitados}`)