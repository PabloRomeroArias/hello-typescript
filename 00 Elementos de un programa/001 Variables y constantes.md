# Variables y constantes

## Introducción
En programación, las variables y constantes son fundamentales para almacenar y manipular datos. Cuando las usamos, estamos reservando un espacio en memoria RAM. Este espacio de memoria estará reservado durante la vida del programa, es decir, desde que comienza hasta que termina

- Variables: para guardar valores que pueden cambiar (variar)
- Constantes: almacenar valores que **NO** van a cambiar

## Variables
Imagina cajas para guardar tus cosas, cada una con una etiqueta. Cada caja tendrá una forma y tamaño distinto, no es lo mismo guardar zapatos que guardar juegos de mesa. Si queremos saber lo que hay dentro de una caja, primero tendremos que localizar la caja, es decir, buscar la  etiqueta. Una vez que hayamos encontrado la caja, podremos abrirla y ver lo que hay dentro

Si el ejemplo lo llevamos al mundo de la programación, y más concretamente en *TypeScript* necesitamos lo siguiente:
1. Declarar la variable y su tipo:
   1. Declaración: tenemos que tener una caja con su respectiva etiqueta, para poder guardar algo en su interior y poder encontrar la caja
   2. Tipo: según la forma de la caja, almacenaremos una cosa u otra
2. Asignar valor a la variable: guardar algo en el interior de la caja
3. Acceder al valor de la variable gracias al nombre: gracias a la etiqueta de la caja, podremos abrirla y ver lo que hay en su interior

Vamos a ver todo lo que necesitamos para crear una variable en *TypeScript* que almacene nuestro nombre

### Declaración de una variable
1. Usaremos la palabra reservada *let*
2. Nombre de la variable: tiene que ser descriptivo. [Cosas a tener en cuenta](#tips)
3. El caracter dos puntos *:*
4. Tipo

```typescript
let nombre: string // Creamos la caja y le damos la forma (string) y le ponemos la etiqueta (nombre)
```

Con el código de arriba, hemos declarado una variable con el nombre *nombre* y de tipo *string* (texto)

### Asignación de valor en de una variable
1. Ponemos el nombre de la variable
2. Escribimos el caracter *igual* =
3. Asignamos el valor que queramos darle

```typescript
nombre = "Pablo" // Guardamos algo dentro de la caja
```

### Acceder al valor en de una variable
Aquí lo único que necesitaremos es escribir el nombre de la variable. Vamos a acceder al valor de la variable para escribirlo por consola

```typescript
console.log(nombre) // Podemos ver lo que hay guardado en la caja con etiqueta nombre, en este caso lo que hay guardado es Pablo (un string)
```

### Cambiar el valor en de una variable
Para cambiar el valor de una variable, lo único que necesitamos es asignarle un nuevo valor a la variable. **Nota:** el valor antiguo se pierde

```typescript
let nombre : string // Declaramos la variable
nombre = "Pablo" // Asignamos un valor
console.log(nombre) // Se imprime Pablo
nombre = "Elisabeth" // Asignamos otro valor
console.log(nombre) // Se imprime Elisabeth
```

## Creación de constantes
Para crear una constante, tenemos que usar la palabra reservada *const* y asignarle el valor a la vez que declaramos la constante

```typescript
const NUMERO_PI: number = 3.14
```

## Tips
Hay que tener en cuenta una serie de cosas a la hora de nombrar las variables y constantes:

El nombre tiene que describir aquello para lo que se ha creado. Si creamos la variable *nombre*, se almacenarán nombres. Aunque no sea un error, se recomienda seguir esta pauta

```typescript
let nombre: number = 7 // No tiene sentido el nombre
```

Para hacerlo más sencillo, podemos hacer la declaración y asignación de una variable en la misma línea. E incluso omitir el tipo, como en el segundo ejemplo

```typescript
let anio : number = 2025 // Este tipo de asignación se llama explícita, ponemos el tipo
let edad = 27 // Este tipo de asignación se llama implícita
```

## Reglas de variables y constantes
No podemos cambiar el tipo de una variable

```typescript
let nombre : string = "Pablo"
let nombre = 27 // Esto da error
```

No se puede hacer uso de espacios para el nombre de las variables
 
```typescript
let nom bre: string = "Pablo" // Esto da error
```

No se puede hacer uso de las palabras reservadas del lenguaje para dar nombre a las variables

```typescript
let let: string = "Pablo" // Esto da error
```

No se puede cambiar el valor de una constante

```typescript
const NUMERO_PI = 3.14
NUMERO_PI = 3.1415 // Esto da error
```