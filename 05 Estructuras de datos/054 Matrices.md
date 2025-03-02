# Matrices

Una matriz es una estructura de datos bidimensional que permite almacenar una colección de colecciones de elementos **del mismo tipo** en una sola variable

Las matrices son útiles para manejar datos y realizar operaciones entre ellos de manera sencilla y eficiente

Cada elemento de la matriz está ordenado en filas y columnas, y a cada uno le corresponde un **índice doble**, uno para la fila y otro para la columna, empezando ambos por el 0 y llegando hasta `M - 1` las filas y `N - 1` las columnas siendo `N` el número de filas que hay y `M` el número de columnas

## Sintaxis de las matricess

Se pueden declarar matrices de varias maneras

```typescript
// Para hacer una matriz, necesitamos que el tipo de dato del array sea otro array de strings
let cine: Array<Array<string>> = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"]
]

let cine2: string[][] = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"]
]

// No se recomienda esta iniciación porque podríamos cometer el "error" de las siguientes líneas
let cine3 = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"]
]

// Aunque no de error, es mala práctica tener tipos distintos en una matriz, para eso, tenemos las tuplas, que las veremos en el siguiente tema
let cine4 = [
    [1, "A2", true],
    ["B1", 2, "B3"],
    ["C1", "C2", 3]
]

// Esto da error, porque no tiene sentido en TypeScript que una matriz tenga items de tipos distintos
let cine5: string[][] = [
    [1, "A2", true],
    ["B1", 2, "B3"],
    ["C1", "C2", 3]
]
```

## Operaciones CRUD en una matriz

CRUD es un acrónimo que representa las cuatro operaciones básicas que se pueden realizar en una base de datos o una estructura de datos:

- **C**reate (crear)
- **R**ead (leer)
- **U**pdate (actualizar)
- **D**elete (borrar)
 
A continuación, vas a aprender cómo aplicar cada una de estas operaciones en una matriz

### Create (crear)

Para poder añadir un item, tenemos que:

- Tener una matriz declarada
- Escribimos el nombre de la matriz
- Seguido de apertura y cierre de corchete `[]`
- Dentro del corchete, pondremos el nuevo índice para el elemento que queramos crear. Recuerda que es un `array`
- Asignamos valor al `array`
 
```typescript
let cine: Array<Array<string>> = [
    ["A1", "A2", "A3"], // Fila 1
    ["B1", "B2", "B3"], // Fila 2
    ["C1", "C2", "C3"] // Fila 3
]

cine[3] = ["D1", "D2", "D3"]
```

### Read (leer)

Para poder leer un item, tenemos que:

- Tener una `matriz` declarada
- Escribimos el nombre de la matriz
- Seguido de apertura y cierre de dos corchetes `[][]`
- Dentro de los corchetes, pondremos la fila y la columna a la que queramos acceder. Recuerda que el primer ítem es el [0][0]
 
```typescript
let cine: Array<Array<string>> = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"]
];

let butaca : string
butaca = cine[0][0] // A1
butaca = cine[1][1] // B2
butaca = cine[2][2] // C3
butaca = cine[3][3] // undefined
```

### Update (actualizar)

Para poder actualizar un item, tenemos que:

- Tener una matriz declarada
- Escribimos el nombre de la matriz
- Seguido de apertura y cierre de corchetes `[][]`
- Dentro de los corchetes, pondremos los índices de la fila y columna del elemento que queramos actualizar
 
```typescript
let cine: Array<Array<string>> = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"]
]

cine[0][0] = "A0"
```

### Delete (borrar)

Para poder borrar un item, tenemos que:

- Tener una matriz declarada
- Escribimos la palabra reservada `delete`
- Seguido del nombre de la matriz
- Seguido de apertura y cierre de corchetes `[][]`
- Por último, dentro de los corchetes, pondremos los índices de la fila que queramos borrar
 
```typescript
let cine: Array<Array<string>> = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"]
]

delete cine[0][0]
```

## Matriz de solo lectura

Si queremos una matriz en la que no podamos modificar ni borrar los elementos, tenemos que poner la palabra reservada `readonly`. Tenemos que usar la siguiente instanciación de matrices para que no de error

```typescript
let cine: readonly string[][] = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"]
]

cine[3] = ["D1", "D2", "D3"] // Create da ERROR
console.log(cine[0][0]) // Read NO da error
cine[0][0] = "A0" // Update da ERROR
delete cine[0][0] // Delete da ERROR
```
