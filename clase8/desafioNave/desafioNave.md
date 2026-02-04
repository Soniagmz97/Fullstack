# 🏆 Desafío: "El Gestor de Inventario de la Nave"

## Contexto

Deben crear un script que gestione el inventario de una nave espacial. Deben aplicar lógica para procesar artículos, aplicar descuentos y verificar si hay stock suficiente.

## 📝 Vamos al lio!

### 1. Datos iniciales

Crea un array de objetos llamado `inventario`. Cada objeto debe tener:
- `nombre`
- `categoria`
- `precio` (número)
- `stock` (número)

*Mínimo 3 productos.*

### 2. Función de Procesamiento

Crea una Arrow Function llamada `procesarPedido` que reciba como parámetros:
- El nombre del producto
- La cantidad deseada

### 3. Lógica interna

- Usa un método de array para buscar el producto.
- Usa `if/else` para verificar:
  - Si el producto existe.
  - Si hay stock suficiente.
- Si todo es correcto, calcula el total usando operadores aritméticos.
- Aplica un "Descuento de Flota" del 10% si el total es superior a 500 créditos (usando comparadores).

### 4. Salida

La función debe retornar un mensaje (string) confirmando la compra con el total, o un mensaje de error detallado.

### 5. Presentación

Se debe presentar en clases comentando la solución. 