# Operadores Lógicos

Los operadores lógicos son fundamentales en programación. Se utilizan para realizar operaciones lógicas sobre **proposiciones**. Las proposiciones son afirmaciones que pueden ser verdaderas o falsas. Se suelen denotar con letras como `p` y `q`

Un ejemplo de proposición podría ser:
- **Proposición `p`**: "Está lloviendo."
- **Proposición `q`**: "Es de noche."

## Principales Operadores Lógicos

### AND Lógico (`^`)
Este operador devuelve `true` si ambas proposiciones son verdaderas. Si alguna de las proposiciones es falsa, devuelve `false`
Notación: `p ^ q`

### OR Lógico (`∨`):
Este operador devuelve `true` si al menos una de las proposiciones es verdadera. Si ambas proposiciones son falsas, devuelve `false`
Notación: `p ∨ q`

### NOT Lógico (`¬`):
Este operador invierte el valor de una proposición. Si la proposición es `true`, devuelve `false`, y viceversa
Notación: `¬p`

## Tablas de Verdad

Una tabla de verdad es una herramienta que se utiliza para mostrar todos los posibles valores de una expresión lógica y su resultado. Aquí tienes las tablas de verdad para los operadores lógicos principales:

### AND Lógico (`^`)

| `p`   | `q`   | `p ^ q` |
|-------|-------|---------|
| true  | true  | true    |
| true  | false | false   |
| false | true  | false   |
| false | false | false   |

### OR Lógico (`∨`)

| `p`   | `q`   | `p ∨ q` |
|-------|-------|---------|
| true  | true  | true    |
| true  | false | true    |
| false | true  | true    |
| false | false | false   |

### NOT Lógico (`¬`)

| `p`   | `¬p`  |
|-------|-------|
| true  | false |
| false | true  |

## Operadores lógicos en programación

| Operador Lógico | Matemáticas | Programación |
|-----------------|-------------|--------------|
| AND             | `^`         | `&&`         |
| OR              | `∨`         | `\|\|`       |
| NOT             | `¬`         | `!`          |

```typescript
// El ejemplo en código sería el siguiente
let estaLloviendo = true // p
let esDeNoche = false // q

// Si queremos evaluar la expresión ¬(¬p v q)
let seCumpleCondicion = !(!estaLloviendo || esDeNoche) // el valor de seCumpleCondicion será true o false???
```

## Ejercicios de tablas de verdad

**Pista**: para saber cuántas filas tendrá la tabla de verdad, hay que aplicar la fórmula 2^n. Siendo *n* el número de proposiciones

## Ejercicio 1

Crea la tabla de verdad para la expresión lógica `p ^ q`:

<details>
<summary>Solución</summary>

| `p`   | `q`   | `p ^ q` |
|-------|-------|---------|
| true  | true  | true    |
| true  | false | false   |
| false | true  | false   |
| false | false | false   |

</details>

## Ejercicio 2

Crea la tabla de verdad para la expresión lógica `p ∨ q`:

<details>
<summary>Solución</summary>

| `p`   | `q`   | `p ∨ q` |
|-------|-------|---------|
| true  | true  | true    |
| true  | false | true    |
| false | true  | true    |
| false | false | false   |

</details>

## Ejercicio 3

Crea la tabla de verdad para la expresión lógica `¬p`:

<details>
<summary>Solución</summary>

| `p`   | `¬p`  |
|-------|-------|
| true  | false |
| false | true  |

</details>

## Ejercicio 4

Crea la tabla de verdad para la expresión lógica `¬(p ∨ q)`:

<details>
<summary>Solución</summary>

Negación de un OR: es true si ambos son false

| `p`   | `q`   | `p ∨ q` | `¬(p ∨ q)` |
|-------|-------|---------|------------|
| true  | true  | true    | false      |
| true  | false | true    | false      |
| false | true  | true    | false      |
| false | false | false   | true       |

</details>

## Ejercicio 5

Crea la tabla de verdad para la expresión lógica `¬p ^ ¬q`:

<details>
<summary>Solución</summary>

| `p`   | `q`   | `¬p`  | `¬q`  | `¬p ^ ¬q` |
|-------|-------|-------|-------|-----------|
| true  | true  | false | false | false     |
| true  | false | false | true  | false     |
| false | true  | true  | false | false     |
| false | false | true  | true  | true      |

¿Notas algo particular entre esta tabla de verdad y la anterior?
</details>

## Ejercicio 6

Crea la tabla de verdad para la expresión lógica `p ^ (q ∨ ¬r)`:

<details>
<summary>Solución</summary>

| `p`   | `q`   | `r`   | `¬r`  | `q ∨ ¬r` | `p ^ (q ∨ ¬r)` |
|-------|-------|-------|-------|----------|----------------|
| true  | true  | true  | false | true     | true           |
| true  | true  | false | true  | true     | true           |
| true  | false | true  | false | false    | false          |
| true  | false | false | true  | true     | true           |
| false | true  | true  | false | true     | false          |
| false | true  | false | true  | true     | false          |
| false | false | true  | false | false    | false          |
| false | false | false | true  | true     | false          |

</details>

## Ejercicio 7

Crea la tabla de verdad para la expresión lógica `(p ∨ q) ^ (¬p ∨ r)`:

<details>
<summary>Solución</summary>

| `p`   | `q`   | `r`   | `¬p`  | `p ∨ q` | `¬p ∨ r` | `(p ∨ q) ^ (¬p ∨ r)` |
|-------|-------|-------|-------|---------|---------|-----------------------|
| true  | true  | true  | false | true    | true    | true                  |
| true  | true  | false | false | true    | false   | false                 |
| true  | false | true  | false | true    | true    | true                  |
| true  | false | false | false | true    | false   | false                 |
| false | true  | true  | true  | true    | true    | true                  |
| false | true  | false | true  | true    | true    | true                  |
| false | false | true  | true  | false   | true    | false                 |
| false | false | false | true  | false   | true    | false                 |

</details>

## Ejercicio 8

Crea la tabla de verdad para la expresión lógica `¬(p ^ q) ∨ (r ^ ¬s)`:

<details>
<summary>Solución</summary>

| `p`   | `q`   | `r`   | `s`   | `p ^ q` | `¬(p ^ q)` | `¬s`  | `r ^ ¬s` | `¬(p ^ q) ∨ (r ^ ¬s)` |
|-------|-------|-------|-------|---------|------------|-------|---------|------------------------|
| true  | true  | true  | true  | true    | false      | false | false   | false                  |
| true  | true  | true  | false | true    | false      | true  | true    | true                   |
| true  | true  | false | true  | true    | false      | false | false   | false                  |
| true  | true  | false | false | true    | false      | true  | false   | false                  |
| true  | false | true  | true  | false   | true       | false | false   | true                   |
| true  | false | true  | false | false   | true       | true  | true    | true                   |
| true  | false | false | true  | false   | true       | false | false   | true                   |
| true  | false | false | false | false   | true       | true  | false   | true                   |
| false | true  | true  | true  | false   | true       | false | false   | true                   |
| false | true  | true  | false | false   | true       | true  | true    | true                   |
| false | true  | false | true  | false   | true       | false | false   | true                   |
| false | true  | false | false | false   | true       | true  | false   | true                   |
| false | false | true  | true  | false   | true       | false | false   | true                   |
| false | false | true  | false | false   | true       | true  | true    | true                   |
| false | false | false | true  | false   | true       | false | false   | true                   |
| false | false | false | false | false   | true       | true  | false   | true                   |

</details>
