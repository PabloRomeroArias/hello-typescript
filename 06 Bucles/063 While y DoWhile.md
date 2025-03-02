# `While` y  `Do while`

Los bucles `while` y `dowhile` te permiten ejecutar un bloque de código mientras se cumpla una condición. Estas estructuras de control es perfecta cuando no sabes el número de veces que tienes que repetir un bloque de código

## Sintaxis de `while`

La sintaxis de `while` es la siguiente:

- Escribe la palabra reservada while => `while`
- Pon apertura y cierre de paréntesis `()`  => `while ()`
- Seguido de bloque de código  => `while () {}`
- Escribe dentro del paréntesis la condición que se tiene que cumplir para **continuar ejecutando** el bloque de código
- Implementa las sentencias que se tienen que repetir en cada iteración
- No te olvides de actualizar la condición en cada iteración porque si no estaríamos dentro de un bucle infinito y probablemente tenga un desbordamiento de pila *stack overflow*

```typescript
let random = 0
let intentos = 0
let randomsObtenidos : number[] = []

// Este bucle no parará de ejecutarse hasta que random sea distinto de 1
// En el momento en el que el random sea 1, para de repetirse el bloque de código del while
while (random != 1) {
    let min = 1
    let max = 20
    random = Math.floor(Math.random() * (max - min + 1) + min) // Genera un número aleatorio entre 1 y 20

    randomsObtenidos.push(random)
    intentos++
}

console.log(`Intentos hasta conseguir el 1: ${intentos}\nNúmeros random calculados: ${randomsObtenidos}`)
```

## Sintaxis de `do while`

La sintaxis de `do while` es la siguiente:

- Escribe la palabra reservada do => `do`
- Pon apertura y cierre de bloque de código `{}`  => `do {}`
- Seguido de bloque la palabra reservada while, paréntesis y condición  => `do {} while (condicion)`
- Implementa las sentencias que se tienen que repetir en cada iteración
- No te olvides de actualizar la condición en cada iteración porque si no estaríamos dentro de un bucle infinito y probablemente tenga un desbordamiento de pila *stack overflow*

Este bucle es bastante parecido al `while` pero con una diferencia, el bloque de código se ejecuta, mínimo, una vez y luego se evalúa la condición, mientras que en el bucle `while` la condición se evalúa antes de ejecutarse el bloque de código por lo que puede ser que dicho bloque de código nunca llegue a ejecutarse

```typescript
let intentos = 0
let randomsObtenidos : number[] = []

do {
    let min = 1
    let max = 20
    let random = Math.floor(Math.random() * (max - min + 1) + min) // Genera un número aleatorio entre 1 y 20

    randomsObtenidos.push(random)
    intentos++
} while (random != 1)
// Este bucle no parará de ejecutarse hasta que random sea distinto de 1
// En el momento en el que el random sea 1, para de repetirse el bloque de código del while

console.log(`Intentos hasta conseguir el 1: ${intentos}\nNúmeros random calculados: ${randomsObtenidos}`)
```