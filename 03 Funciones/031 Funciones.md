# Funciones en TypeScript

Las funciones son bloques de código reutilizables que realizan un algoritmo específico. Sirven para estructurar y organizar el código

## Declaración de funciones

Para declarar una función, necesitamos lo siguiente:
- Hacer uso de la palabra reservada `function`
- Nombre de la función
- Apertura y cierre de paréntesis `()`
- Apertura y cierre de bloque de código `{}`
- Escribir las sentencias dentro del bloque de código

```typescript
function saludar() { // A esta línea se llama firma de la función
    // Sigue siendo secuencial, las instrucciones se siguen ejecutando una detrás de otra
    console.log("Hola, primer método!");
    console.log("Segunda sentencia del método");
    console.log("Tercera sentencia del método");
}
```

Si ejecutamos este bloque de código, vemos que no ocurre nada, esto se debe a que hemos declarado la función, está creada, pero en ningún momento le estamos diciendo a nuestro flujo principal del programa que tiene que ejecutar las sentencias de la función

Lo único que tenemos que hacer para que se ejecute, es llamar a la función por su nombre, seguido de apertura y cierre de paréntesis, tal y como se muestra a continuación:

```typescript
saludar()
```

La ejecución del código sigue siendo secuencial, es decir, una línea detrás de otra. Si llegamos a la llamada a una función, se dará un salto y se ejecutarán las líneas de código de dicha función, una vez que se ejecuten, volveremos al bloque de código que ha llamado a la función y se seguirán ejecutando secuencialmente las sentencias

```typescript
console.log("Me ejecuto antes del método")
saludar()
console.log("Hemos vuelto de la función saludar, seguimos hacia abajo")
```

Y como hemos dicho anteriormente, las funciones son reutilizables, es decir, podemos llamarlas las veces que necesitemos durante el tiempo de vida de nuestro programa

```typescript
saludar()
saludar()
saludar()
```

## Parámetros de entrada

En muchas ocasiones, las funciones necesitan datos de entrada (variables) para poder realizar aquello para lo que han sido creadas, por ejemplo, si queremos saludar a alguien por su nombre, necesitaremos una variable y dependiendo del valor de ésta, se imprimirá una cosa u otra

Para que la función sea capaz de recibir parámetros de entrada, tendremos que declararlos en la firma de la función:

```typescript
// Parámetro de entrada entre los paréntesis () del nombre
function saludar(nombre : string) { // nombre de la variable seguido de : y el tipo de dato
    console.log(`Hola ${nombre}, te saludo desde un método`)
}
```

Y ahora, además de llamar a la función, tenemos que pasarle el argumento. Ya sea pasándole el dato *hardcodeado* o mediante una variable

```typescript
saludar() // Da error

// Pasamos el valor del dato hardcodeado
saludar("Jaimito")

// Pasamos el valor del dato de la variable
let nombre = "Pablo"
saludar(nombre)
```

Podemos pasar tantos argumentos como sean necesarios, por ejemplo, para la suma de dos números cualesquiera. La única diferencia es que los argumentos van separados por coma:

```typescript
function sumar(a : number, b : number) {
    let suma = a + b
    console.log(`Sumita ${a} + ${b} = ${suma}`)
}
```

Y ahora solo tendríamos que llamar a la función sumar para que ejecute sus sentencias

```typescript
sumar(3, 5) // 8
sumar(100, -4) // 96

let a = 13
let b = 1
sumar(a, b) // 14
```

Se recomienda que cuando una función tenga muchos argumentos, para que la firma sea más legible, se use una línea para cada argumento, tal y como se muestra en el siguiente ejemplo

```typescript
function sumarMuchosNumeros(
    a : number,
    b : number,
    c : number,
    d : number,
    e : number,
    f : number,
) {
    let suma = a + b + c + d + e + f
    console.log(`Suma de muchos números\n${a} + ${b} + ${c} + ${d} + ${e} + ${f} = ${suma}`)
}
```

## Alcance de una función. Variables globales

### Alcance de una función

El alcance de una función se refiere a la visibilidad, privacidad y accesibilidad de las variables dentro y fuera de la función. En *TypeScript*, los argumentos y variables declaradas dentro de una función tienen un ámbito local. Esto significa que nadie fuera de la función podría acceder a ese valor, como se muestra en el siguiente ejemplo

```typescript
function sumar(a : number, b : number) {
    let suma = a + b
    console.log(`Sumita ${a} + ${b} = ${suma}`)
}
console.log(`Sumita ${a} + ${b} = ${suma}`) // Da error
```

En este ejemplo, cuando intentamos mostrar por pantalla el mensaje fuera del alcance de la función nos da error ya que no se pueden encontrar las variables *a*, *b* ni *suma*

Además aunque tengamos declarada las variables con el mismo nombre, no serán las mismas, hagamos el ejemplo con suma

```typescript
function sumar(a : number, b : number) {
    let suma = a + b
    console.log(`Sumita ${a} + ${b} = ${suma}`)
}

sumar(3, 7) // El valor de suma es 10
let suma = 0
console.log(`Valor variable suma en método principal: ${suma}`) // El valor de suma es 0
```

### Variables globales

Por otro lado, las variables globales son variables que se declaran fueran del ámbito de una función, por lo que pueden ser usadas y modificadas en cualquier parte del código, lo que hace que sea más fácil cometer fallos, además errores difíciles de encontrar. Por eso se recomienda evitar el uso de dichas variables

```typescript
function saludoMolon() {
    nombre = "Batman"
    console.log(`Hola, soy ${nombre}!`)
}

function llamarAlTelefonilloDeMama() {
    console.log(`Hola mamá, soy yo, ${nombre}, ábreme que estoy en la puerta`)
}

saludar() // (1)
let nombre = "Pablo"
saludar()

llamarAlTelefonilloDeMama() // (2)
```

Problemas encontrados al ejecutar el fragmento de código de arriba:

(1) Aquí la variable me da *undefined* porque aún no ha sido definida, pero no me salta ningún tipo de error, por lo que sería complicado encontrar la raíz del problema

(2) Hemos ejecutado un método que aparentemente está bien, pero no sale el nombre que debería de salir porque yo no me llamo "Batman", por lo que nos encontramos ante un problema de accesibilidad, si todo el mundo puede acceder al valor, en algún momento del código surgirán problemas. Ahora tendríamos que encontrar porqué se ha cambiado el nombre, y tener cuidado, porque probablemente si arreglamos el código para que funcione el método `llamarAlTelefonilloDeMama`, nos carguemos el código que cambió el valor del nombre a "Batman"

## Parámetros de salida

Imaginemos que tenemos una función que calcula la media aritmética de dos números, tal y como se muestra en el siguiente ejemplo

```typescript
function mediaAritmetica(a: number, b: number) {
    let media = (a + b) / 2

    console.log(`La media aritmética de ${a} y ${b} es: ${media}`)
}
```

Esta función no solo calcula la media aritmética de dos números, también muestra por pantalla el resultado. Si en algún otro lugar de nuestro programa necesitamos la media aritmética y llamamos a nuestra función, no solo vamos a calcular la media aritmética, sino que vamos a ejecutar el bloque de código de la función. Además, una vez se ejecute el bloque de código de la función, el valor calculado se pierde

En muchas ocasiones, necesitaremos que los métodos devuelvan el resultado del algoritmo que resuelven para nosotros poder seguir realizando otras tareas. Para ello se usan los valores de salida.

Para que la función sea capaz de devolver parámetros de salida, tendremos que declarar el **tipo** de retorno en la firma de la función, detrás de los paréntesis de los argumentos. Por último, en el cuerpo de la función se tiene que hacer uso de la palabra reservada `return`:

```typescript
function mediaAritmetica(a: number, b: number): number { // En la firma decimos el tipo de retorno, en este caso un number
    let media = (a + b) / 2

    return  media // Esta línea es la que se encarga de devolver el valor calculado en el algoritmo de la función, en este caso la media aritmética
}
```

Ahora, nuestra función ya devuelve un valor, lo que queda es, a parte de llamar a la función para que se ejecute su bloque de código, debemos de realizar alguna sentencia para hacer uso del valor devuelto

```typescript
// Por ejemplo, asignar el valor a una variable
let media = mediaAritmetica(3, 1) // Los parámetros de entrada siguen siendo necesarios

// Ahora que tenemos el valor, podemos usarlo para lo que necesiteos, por ejemplo, enviarlo a otro método cuyo argumento de entrada no es un simple número, sino la media aritmética
calculosEstadisticosComplejos(media)
```

Como hemos dicho al principio, una función es un bloque de código que realiza un algoritmo específico, es una buena práctica llevar esto a raja tabla, ya que de esta manera nuestro código tendrá menos errores, será más escalable y más mantenible

A partir de ahora, te recomiendo que hagas uso de funciones para prácticamente todo. Si no se hace, pronto tendrás lo que se llama código *spaguetti*, que no es más que aquel código que se escribe de manera totalmente secuencial, sin hacer uso de funciones