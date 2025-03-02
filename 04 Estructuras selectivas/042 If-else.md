# Sentencia `if-else` en TypeScript

La sentencia `if-else` es una estructura de control que permite ejecutar diferentes bloques de código en función de si una condición es verdadera o falsa. Es una de las estructuras más básicas y fundamentales en la programación, utilizada para tomar decisiones en el flujo del programa

## Sintaxis de `if-else`

La sintaxis básica de una sentencia `if-else` en TypeScript es la siguiente:

- Aplicamos la sintaxis de la sentencia selectiva `if`
- Fuera del bloque de código del `if`, usamos la palabra reservada `else`
- Abrimos y cerramos bloque de código
- Escribimos dentro del bloque de código del `else` las sentencias que queremos que se ejecuten en caso de que **NO** se cumpla la condición

```typescript
if (condición) {
    // Bloque de código que se ejecuta si la condición es verdadera
} else {
    // Bloque de código que se ejecuta si la condición es falsa
}
```

Veamos con un ejemplo real

```typescript
let edad = 16;

console.log("SIEMPRE me ejecuto, ANTES de la sentencia if-else");

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

console.log("SIEMPRE me ejecuto, DESPUÉS de la sentencia if-else");
```
