# Tupla

Una tupla es un array en la que se define cuántos elementos tiene y el tipo de dato de cada item

## Sintaxis de las *tuplas*

```typescript
let tupla: [number, boolean, string] // Primero declaramos los tipos
tupla = [5, false, 'Coding God was here'] // Luego asignamos valores

let tupla2: [number, boolean, string] = [5, false, 'Coding God was here'] // O unir la declaración con la asignación

let estoNoEsUnaTupla = [5, false, 'Coding God was here']
```

## Operaciones CRUD en una *tupla*

```typescript
let tupla: [number, boolean, string]
tupla = [5, false, "Elemento string de la tupla"]

// Create
tupla[3] = "Error fatal" // Esto no lo podemos hacer

// Read
console.log(tupla[2]) // Elemento string de la tupla
tupla[3] // Error porque la tupla tiene 3 elementos y estamos intentando acceder al 4º

// Update
tupla[2] = "Elemento actualizado"
tupla[0] = "Number no puede ser string" // Error porque un number no puede ser string

// Delete
delete tupla[0] // Error
```

También podemos hacer que una tupla sea de solo lectura

```typescript
let tupla: readonly [number, boolean, string]
tupla = [5, false, "Elemento string de la tupla"]

// La única operación que podremos hacer es Read
console.log(tupla[2])

tupla[0] = 3 // Da error porque la tupla es solo de lectura
```