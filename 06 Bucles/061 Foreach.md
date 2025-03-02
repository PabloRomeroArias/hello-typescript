# ForEach

El método `forEach` te permite recorrer todos y cada uno de los items de una de las siguientes estructuras de datos:

- Array y tupla
- Matrices
- Hash map

## Sintaxis de `foreach`

La sintaxis del `foreach` es bastante similar en todas las estructuras de datos, y es la siguiente:

- Previamente, define una colección
- Nombre de la colección => `frutas`
- Un punto para poder acceder a sus métodos `.` => `frutas.`
- Seguido del método `forEach` => `frutas.forEach`
- Abre y cierra paréntesis `()` => `frutas.forEach()`
- Dentro del paréntesis, abre otro paréntesis, flecha y bloque de código => `frutas.forEach(() => {})`
- Dentro del paréntesis interno, pon un nombre descriptivo del elemento sobre el que iteramos, en este caso, cada elemento del array frutas es una fruta => `frutas.forEach((fruta) => {})`
- Por último, dentro del bloque de código puedes hacer aquello que necesites, para esta prueba simplemente imprimiremos por pantalla

```typescript
let frutas: string[] = ["Manzana", "Plátano", "Melón", "Sandía", "Naranja", "Fresa"];

frutas.forEach((fruta) => {
    console.log(fruta)
})
```

Este `forEach` sirve para `array` y `tupla`. Para `matrices` y `hash map` serán similares pero con alguna peculiaridad. Ahora se expone la peculiaridad y en este mismo documento verás una implementación del forEach para estas dos estructuras de datos:

- Matrices: es un forEach anidado ya que cada fila tendrá su columna
- HashMap: es un forEach en el que cada elemento es un par de *clave* y *valor*, por lo que tienes que definir dos elementos dentro del paréntesis interno

## Matrices

Las matrices, como ya sabemos, es una lista de listas, por lo tanto, para recorrer sus elementos, lo que tendremos que hacer es un `foreach` anidado

```typescript
let matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

matriz.forEach((fila) => {
    fila.forEach((elemento) => {
        console.log(elemento);
    });
});
// Salida: 1 2 3 4 5 6 7 8 9
```

## Hash map

Para recorrer los hashmap, tenemos que tener en cuenta que por cada item tenemos un par de elementos *clave* y *valor*

```typescript
let edades = new Map<string, number>([
    ["Juan", 20],
    ["Ana", 30],
    ["Luis", 40]
])
  
edades.forEach((edad, nombre) => { // Primero el valor, luego la clave
    console.log(`${nombre} tiene ${edad} años`);
});
// Salida:
// Juan tiene 20 años
// Ana tiene 30 años
// Luis tiene 40 años
```

# For..of y For..in

Otra manera de iterar sobre estructuras de datos es mediante los bucles for..of y for..in

```typescript
let nombres : string[] = ["Juan", "Pablo", "Jesús", "Elisabeth", "Isabella"] 
// El bucle for of se usa para recorrer los elementos de una estructura de datos mediante sus items
for (let nom of nombres) {
    console.log(nom)
}

// El bucle for in se usa para recorrer los elementos de una estructura de datos mediante sus índices
for (let i in nombres) {
    let posicion = parseInt(i) + 1
    console.log(`${nombres[i]} está en la posición: ${posicion}`)
}
```