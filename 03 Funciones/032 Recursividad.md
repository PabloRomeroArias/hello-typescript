# Recursividad en TypeScript

La recursividad es una técnica de programación en la que una función se llama a sí misma para resolver un problema. Este enfoque se utiliza para descomponer un problema complejo en subproblemas más simples y manejables. Una función recursiva debe tener una condición de parada, llamado **caso base** que evite llamadas infinitas y permita que la función termine, y por consiguiente el programa

### Conceptos Clave de la Recursividad

- Caso Base: es la condición que detiene la recursión. Sin un caso base, la función recursiva se llamaría a sí misma indefinidamente, lo que resultaría en un desbordamiento de pila (stack overflow)
- Caso Recursivo: es la parte de la función que se llama a sí misma con un subproblema más pequeño.

## Ejemplo de Recursividad

El factorial de un número `n` (denotado como `n!`) es el producto de todos los enteros positivos desde 1 hasta `n`. Por ejemplo, `5! = 5 * 4 * 3 * 2 * 1 = 120`.

### Factorial

Factorial: es el producto que resulta de multiplicar todos los números naturales consecutivos desde el 1, hasta el número n inclusive

```typescript
// Supongamos que n siempre es un número natural (0, 1, 2, 3, 4...)
function factorial(n: number): number {
    // Caso base: si n es 0 o 1, el factorial es 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Caso recursivo: n * factorial(n - 1)
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

### Serie de Fibonacci

La serie de Fibonacci es una secuencia de números en la que cada número es la suma de los dos anteriores. Los primeros dos números de la serie son 0 y 1. Por ejemplo, la serie de Fibonacci hasta el quinto término es: 0, 1, 1, 2, 3

```typescript
function fibonacci(n: number): number {
    // Caso base: si n es 0 o 1, devuelve n
    if (n === 0 || n === 1) {
        return n;
    }
    // Caso recursivo: fibonacci(n - 1) + fibonacci(n - 2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // 5
```

## Ventajas y Desventajas de la Recursividad

### Ventajas

Simplicidad: La recursividad puede hacer que el código sea más simple y fácil de entender para problemas que tienen una estructura recursiva natural.
Descomposición: Permite descomponer problemas complejos en subproblemas más simples.

### Desventajas

Eficiencia: Las funciones recursivas pueden ser menos eficientes que las iterativas debido a la sobrecarga de las llamadas a funciones.
Desbordamiento de Pila: Si la recursión es demasiado profunda, puede causar un desbordamiento de pila

La recursividad es una herramienta poderosa en la programación, pero debe usarse con cuidado para evitar problemas de eficiencia y desbordamiento de pila. Es importante asegurarse de que cada función recursiva tenga un caso base que detenga la recursión