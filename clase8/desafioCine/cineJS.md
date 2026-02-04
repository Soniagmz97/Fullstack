# 🏆 Desafío: "Cine-JS: El Recomendador de Contenido"

## Contexto

Deben procesar un catálogo de películas para aplicar una restricción de edad y calcular precios con impuestos, generando una lista lista para "mostrarse" en una interfaz.

## 📝 El Enunciado para los alumnos

### 1. El Catálogo

Crea un array de objetos llamado `peliculas`. Cada objeto debe tener:
- `titulo`
- `edadMinima` (número)
- `precio` (número)
- `esEstreno` (booleano)

### 2. La Función Principal

Crea una arrow function llamada `generarCartelera` que reciba:
- El array de películas
- La `edadUsuario`

### 3. Lógica interna

- Usa el método `.map()` para crear una nueva lista de películas (sin modificar la original).
- Dentro del `.map()`, usa `if/else` para:
  - **Calcular el `precioFinal`**: Si `esEstreno` es `true`, sumar un 20% al precio base. Si no, dejar el precio igual.
  - **Determinar un campo `acceso`**: Si la `edadUsuario` es $\geq$ `edadMinima`, el valor es "Permitido". De lo contrario, es "Denegado".

### 4. Salida 
- La función debe retornar el nuevo array de objetos transformados.