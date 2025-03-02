# Sintaxis

| Nombre                  | Símbolo                          | Descripción                                                                 |
|-------------------------|----------------------------------|-----------------------------------------------------------------------------|
| Comentario de línea     | `//`                             | Un comentario de una sola línea. Aclarar o explicar brevemente el código    |
| Comentario multilínea   | `/* comentario */`               | Un comentario que puede abarcar múltiples líneas. Explicaciones extensas    |
| Bloque de código        | `{ sentencias }`                 | Agrupa sentencias entre llaves `{}`. Puede ejecutarse o no lo que contiene  |

### Comentario de línea

```typescript
// Esto es un comentario de una sola línea y no se va a tener en cuenta a la hora de ejecutar el script
let nombre: string = "Juan" // Comentario al final de una línea de código
// let nombre: string = "Juan" Si lo ponemos al principio, no se tendrá en cuenta aún habiendo escrito código de TypeScript
```

### Comentario multilínea

```typescript
/*
Esto es un comentario
de múltiples líneas.
Se puede usar para descripciones largas
o para desactivar bloques de código extensos.
*/
```

### Bloque de código

```typescript
let edad: number = 30

// Aquí hay dos bloques de código
if (edad >= 18) { // Primer bloque de código
    console.log("Eres mayor de edad")
} else { // Segundo bloque de código (ESTE NO SE EJECUTA)
    console.log("Eres menor de edad")
}
```