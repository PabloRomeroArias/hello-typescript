# Array

Un array es una estructura de datos que permite almacenar una colección de *elementos* **del mismo tipo** en una sola variable

Los Arrays son probablemente la estructura de datos más importante. Son útiles para manejar listas de datos y realizar operaciones entre ellos de manera sencilla y eficiente

Cada *elemento* de la lista también se suele denominar *item*. Estos están ordenados y a cada uno le corresponde un *índice*, empezando por el 0 y yendo hasta `N - 1`, siendo `N` el número de elementos que hay

## Sintaxis de los `array`s

Se pueden declarar arrays de varias maneras

```typescript
let frutas: Array<string> = ["manzana", "banana", "naranja"]
let frutas2: string[] = ["manzana", "banana", "naranja"]
let frutas3 = ["manzana", "banana", "naranja"] // No se recomienda esta iniciación porque podríamos cometer el "error" de las siguientes líneas

let frutas4 = [7, true, "naranja"] // Aunque no de error, es mala práctica tener tipos distintos en un array, para eso, tenemos las tuplas, que las veremos en el siguiente tema
let frutas5: string[] = [7, true, "naranja"] // Esto da error, porque no tiene sentido en TypeScript que un array tenga items de tipos distintos
```

## Operaciones CRUD en un `Array`

CRUD es un acrónimo que representa las cuatro operaciones básicas que se pueden realizar en una base de datos o una estructura de datos:

- **C**reate (crear)
- **R**ead (leer)
- **U**pdate (actualizar)
- **D**elete (borrar)
 
A continuación, vas a aprender cómo aplicar cada una de estas operaciones en un array

### Create (crear)

Para poder añadir un item, tenemos que:

- Tener un `array` declarado
- Escribimos el nombre de `array`
- Seguido de apertura y cierre de corchetes `[]`
- Dentro de los corchetes, pondremos el nuevo índice para el elemento que queramos crear
- Asignamos valor al item
 
```typescript
let coches: Array<string> = ["BMW", "Audi", "Ferrari"]

coches[3] = "Mercedes"
console.log(coches) // [ 'BMW', 'Audi', 'Ferrari', 'Mercedes' ]
```

### Read (leer)

Para poder leer un item, tenemos que:

- Tener un `array` declarado
- Escribimos el nombre de `array`
- Seguido de apertura y cierre de corchetes `[]`
- Dentro de los corchetes, pondremos el índice al que queremos acceder. Recuerda que el primer ítem es el 0
 
```typescript
let coches: Array<string> = ["BMW", "Audi", "Ferrari"]

let coche = coches[0] // BMW
coche = coches[1] // Audi
coche = coches[2] // Ferrari
coche = coches[3] // undefined
```

### Update (actualizar)

Para poder actualizar un item, tenemos que:

- Tener un `array` declarado
- Escribimos el nombre de `array`
- Seguido de apertura y cierre de corchetes `[]`
- Dentro de los corchetes, pondremos el índice del elemento que queramos actualizar
 
```typescript
let coches: Array<string> = ["BMW", "Audi", "Ferrari"]

coches[0] = "Porsche"
console.log(coches) // [ 'Porshe', 'Audi', 'Ferrari' ]
```

### Delete (borrar)

Para poder borrar un item, tenemos que:

- Tener un `array` declarado
- Escribimos la palabra reservada `delete`
- Seguido del nombre de `array`
- Seguido de apertura y cierre de corchetes `[]`
- Por último, dentro de los corchetes, pondremos el índice del elemento que queramos borrar
 
```typescript
let coches: Array<string> = ["BMW", "Audi", "Ferrari"]

delete coches[0]
console.log(coches) // [ <1 empty item>, 'Audi', 'Ferrari' ]
```

## Array de solo lectura

Si queremos un array en el que no podamos modificar ni borrar los elementos, tenemos que poner la palabra reservada `readonly`. Tenemos que usar la siguiente instanciación de arrays para que no de error

```typescript
let coches: readonly string[] = ["BMW", "Audi", "Ferrari"]

coches[3] = "Mercedes" // Create da ERROR
console.log(coches[0]); // Read NO da error
coches[0] = "Mercedes" // Update da ERROR
delete coches[0]; // Delete da ERROR
```
