# Sentencia `if-else-if` en TypeScript

La sentencia `if-else-if` permite evaluar múltiples condiciones una detrás de otra. Se ejecuta el primer bloque de código cuya condición sea verdadera. Esta estructura es útil cuando necesitas tomar decisiones basadas en varias condiciones diferentes

## Sintaxis de `if-else-if`

La sintaxis de `if-else-if` es parecida a la de `if-else`, pero añadiendo un `if` justo detrás de cada `else` que haya

```typescript
if (condición1) {
    // Bloque de código que se ejecuta si la condición1 es verdadera
} else if (condición2) {
    // Bloque de código que se ejecuta si la condición2 es verdadera
} else if (condición3) {
    // Bloque de código que se ejecuta si la condición3 es verdadera
} else if (condición4) {
    // Bloque de código que se ejecuta si la condición4 es verdadera
} else if (condición5) {
    // Bloque de código que se ejecuta si la condición5 es verdadera
} else {
    // Bloque de código que se ejecuta si ninguna de las condiciones anteriores es verdadera
}
```

Veamos con un ejemplo real

```typescript
let edad = 25
let tieneLicencia = true
let noHaBebidoAlcohol = true

if (edad < 18) {
    console.log("Eres menor de edad y no puedes conducir.");
} else if (edad >= 18 && !tieneLicencia) {
    console.log("Necesitas una licencia para conducir.");
} else if (edad >= 18 && tieneLicencia && !noHaBebidoAlcohol) {
    console.log("No puedes conducir porque has bebido alcohol.");
} else {
    console.log("Puedes conducir.");
}
```