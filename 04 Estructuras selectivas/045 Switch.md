# Sentencia `switch` en TypeScript

La sentencia `switch` es una estructura de control que permite ejecutar diferentes bloques de código basados en el valor de una expresión. Es una alternativa a las sentencias `if-else if` cuando se necesita evaluar una sola expresión contra múltiples valores posibles

## Sintaxis de `switch`

La sintaxis básica de una sentencia `switch` en TypeScript es la siguiente:

- Usamos la palabra reservada `switch`
- Seguida de paréntesis `()`
- Dentro de los paréntesis la expresión a evaluar
- Abrimos y cerramos bloque de código `{}`
- Dentro del bloque de código ponemos la palabra reservada `case`
- Detrás de `case` el valor al que comparar la expresión y `:`
- En la siguiente línea, el bloque de código que ha de ejecutarse en caso de que el valor de la expresión anterior sea igual al valor del `case`
- La palabra reservada `break` para que no siga ejecutando las líneas posteriores del `switch`
- Repetimos los 4 pasos anteriores tantas veces como casos queramos controlar
- Por último, si queremos controlar la opción de que la expresión no sea ninguno de los valores, haremos uso de la palabra reservada `default` seguida de `:`

```typescript
switch (expresión) {
    case valor1:
        // Bloque de código que se ejecuta si la expresión es igual a valor1
        break;
    case valor2:
        // Bloque de código que se ejecuta si la expresión es igual a valor2
        break;
    case valor3:
        // Bloque de código que se ejecuta si la expresión es igual a valor3
        break;
    // Podrías tener tantos casos como necesites
    default:
        // Bloque de código que se ejecuta si la expresión no coincide con ningún valor
}
```

Veamos con un ejemplo real

```typescript
let dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día no válido");
}
```

En este caso, la expresión a comparar es un número, pero podemos comparar por ejemplo `strings`

```typescript
let fruta = "manzana";

switch (fruta) {
    case "manzana":
        console.log("La fruta es una manzana.");
        break;
    case "banana":
        console.log("La fruta es una banana.");
        break;
    case "naranja":
        console.log("La fruta es una naranja.");
        break;
    default:
        console.log("Fruta no reconocida.");
}
```

Por último, veamos un ejemplo en el que no usamos la palabra reservada `break`

```typescript
let dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
    case 2:
        console.log("Martes");
    case 3:
        console.log("Miércoles");
    case 4:
        console.log("Jueves");
    case 5:
        console.log("Viernes");
    case 6:
        console.log("Sábado");
    case 7:
        console.log("Domingo");
    default:
        console.log("Día no válido");
}
```

En este último caso, en el momento en el que se ejecuta el bloque de código del caso 3, se ejecutan todos los siguientes bloques de código posteriores, incluido el bloque `default`. Normalmente no se quiere que el switch funcione de esta manera, así que no olvides la palabra reservada, a menos que tu algoritmo lo necesite, claro

¿Qué pasa si ejecutas el siguiente programa?

```typescript
let dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
    case 2:
        console.log("Martes");
    case 3:
        console.log("Miércoles");
    case 4:
        console.log("Jueves");
    case 5:
        console.log("Viernes");
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
    default:
        console.log("Día no válido");
}
```

A diferencia de las sentecias `if-else-if` y demás, como hemos visto el `switch` se usa en caso de que necesitemos evaluar una **sola expresión**, mientras que con las sentencias `if-else-if` podemos evaluar **expresiones distintas**