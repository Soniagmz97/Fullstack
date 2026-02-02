// Validador de contraseñas

// Password
const lugarPassword = 6
// Minimo requerido
const minimoRequerido = 8

const longitud = lugarPassword >= minimoRequerido

console.log(`¿Es la contraseña segura?:`, longitud)