# 🎢 Reto: "El Sistema de Control de un Parque de Atracciones"

## 📋 Contexto
Has sido contratado para programar el software de la atracción más extrema del parque: **"El Dragón Mecánico"**. Tu misión es automatizar el cobro y la seguridad de la entrada.

---

## 🚩 Instrucciones

### 1. Preparación
- Crea un archivo llamado `atraccion.js`
- Define con `const` los requisitos de la atracción:
  - `edadMinima`: 12
  - `alturaMinima`: 140 (en cm)
  - `precioEntrada`: 15

### 2. Datos del Usuario
Crea variables (`let`) para un cliente que llega a la cola:
- `nombreUsuario`: (Pon tu nombre o uno inventado)
- `edadUsuario`: (Ejemplo: 14)
- `alturaUsuario`: (Ejemplo: 135)
- `dineroDisponible`: (Ejemplo: 20)

### 3. Operaciones Matemáticas
Imagina que el usuario viene con un acompañante y decide pagar las dos entradas:
- Crea una variable `costoTotal` que multiplique el `precioEntrada` por 2
- Crea una variable `saldoRestante` que reste el `costoTotal` al `dineroDisponible`

### 4. El Gran Desafío: Comparadores
Necesitas generar 3 comprobaciones de seguridad (booleanos). Crea las siguientes variables:
- `tieneEdadSuficiente`: Compara si la edad del usuario es mayor o igual a la mínima
- `tieneAlturaSuficiente`: Compara si la altura del usuario es mayor o igual a la mínima
- `puedePagar`: Compara si el `dineroDisponible` es mayor o igual al `precioEntrada` (de una sola entrada)

### 5. Resultado Final ✅
Imprime un resumen en la consola:
```javascript
"Usuario: [nombre]"
"¿Cumple edad?: [true/false]"
"¿Cumple altura?: [true/false]"
"¿Tiene dinero?: [true/false]"
"Dinero tras comprar 2 entradas: [valor]€"
```

---

**¡Buena suerte! 🎯**