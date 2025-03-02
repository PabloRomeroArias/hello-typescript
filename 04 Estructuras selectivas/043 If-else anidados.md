# Sentencia `if-else` Anidados en TypeScript

La sentencia `if-else` *anidada* permite evaluar múltiples condiciones de manera jerárquica. Esto significa que puedes tener sentencias `if-else` dentro de otra sentencia `if-else`, ya sea dentro del bloque de códgio del `if` o del bloque de código del `else`. Esta técnica es útil cuando necesitas tomar decisiones más complejas que dependen de varias condiciones

## Sintaxis de `if-else` Anidados

La sintaxis básica de una sentencia `if-else` anidada es la siguiente:
- Aplicamos

```typescript
if (condicion1) {
    // Bloque de código que se ejecuta si la condición1 es verdadera
    if (condicion2) {
        // Bloque de código que se ejecuta si la condición2 es verdadera
        if (condicion3) {
            // Bloque de código que se ejecuta si la condición3 es verdadera
        } else {
            // Bloque de código que se ejecuta si la condición3 es falsa
        }
    } else {
        // Bloque de código que se ejecuta si la condición2 es falsa
    }
} else {
    if (condicion4) {
        // Bloque de código que se ejecuta si la condición4 es verdadera
    } else {
        // Bloque de código que se ejecuta si la condición4 es falsa
    }
```

Veamos con un ejemplo real

```typescript
let edad = 25
let tieneLicencia = true
let noHaBebidoAlcohol = true

if (edad >= 18) {
    if (tieneLicencia) {
        if (noHaBebidoAlcohol) {
            console.log("Puedes conducir")
        } else {
            console.log("No puedes conducir porque has bebido alcohol")
        }
    } else {
        console.log("Necesitas una licencia para conducir")
    }
} else {
    console.log("Es menor de edad") // Recuerda que estás dentro de un bloque de código, puedes ejecutar la sentencia que necesites
    if (edad == 17) {
        console.log("Ya te queda poco")
    } else {
        console.log("Aún te quedan unos añitos")
    }
}
```

Las sentencias if-else anidadas son útiles para manejar decisiones complejas que dependen de múltiples condiciones. Sin embargo, es importante mantener el código claro y legible, evitando anidar demasiados niveles de condiciones
