# Hash map

Un `HashMap` es una estructura de datos en la que cada item es un par de **clave-valor**. Es útil para manejar datos que necesitan ser accedidos rápidamente mediante una clave única

## Sintaxis de los `Hash map`s

```typescript
let puntuaciones : Map<string, number> = new Map<string, number>([
    ['Pablo', 5],
    ['Elisabeth', 10],
    ['Isabel', 7],
])

console.log(puntuaciones.get("Pablo")) // 5
```

## Operaciones CRUD en un `hashmap`

CRUD es un acrónimo que representa las cuatro operaciones básicas que se pueden realizar en una base de datos o una estructura de datos:

- **C**reate (crear)
- **R**ead (leer)
- **U**pdate (actualizar)
- **D**elete (borrar)
 
A continuación, vas a aprender cómo aplicar cada una de estas operaciones en un hashmap

### Create (crear)

Para poder añadir un item, tenemos que llamar al método `set` y pasarle como parámetros la clave y el valor:
 
```typescript
let puntuaciones: Map<string, number> = new Map()

puntuaciones.set("Pablo", 7)
puntuaciones.set("Elisabeth", 10)
```

### Read (leer)

Para poder leer un valor, tenemos que llamar al método `get` y pasar como parámetro el valor de la clave:
 
```typescript
let puntuaciones : Map<string, number> = new Map<string, number>([
    ['Pablo', 5],
    ['Elisabeth', 10],
    ['Isabel', 7],
])

puntuaciones.get("Pablo")
```

### Update (actualizar)

Para poder actualizar un valor, tenemos que llamar al método `set` pasando como parámetro de la clave una ya existente
 
```typescript
let puntuaciones : Map<string, number> = new Map<string, number>([
    ['Pablo', 5],
    ['Elisabeth', 10],
    ['Isabel', 7],
])

puntuaciones.set("Pablo", 4)
```

### Delete (borrar)

Para poder borrar un item, tenemos que llamar al método `delete` pasando como argumento la clave que queramos borrar
 
```typescript
let puntuaciones : Map<string, number> = new Map<string, number>([
    ['Pablo', 5],
    ['Elisabeth', 10],
    ['Isabel', 7],
])

puntuaciones.delete("Pablo")
```

## Existencia de una clave

Si queremos saber si un `hashmap` tiene o no una clave, podemos hacer uso del método `has` pasando como argumento la clave

```typescript
let puntuaciones : Map<string, number> = new Map<string, number>([
    ['Pablo', 5],
    ['Elisabeth', 10],
    ['Isabel', 7],
])

puntuaciones.has("Pablo") // True
```
