# Funciones Avanzadas en TypeScript

En TypeScript existen varias formas avanzadas de definir y utilizar funciones. A continuación vamos a ver:

- Funciones anónimas
- Funciones flecha
- Funciones flecha con retorno implícito
- Parámetros opcionales y valores predeterminados
- Funciones como tipos

## Funciones Anónimas

Las funciones anónimas son funciones sin nombre que se pueden asignar a variables. Estas funciones son útiles cuando se necesita una función temporal o cuando se pasa una función como argumento a otra función

```typescript
let multiplicar = function(a: number, b: number): number {
    return a * b;
};

console.log(multiplicar(4, 3)); // 12
```

## Funciones flecha

Las funciones flecha son una sintaxis más corta para escribir funciones anónimas. Utilizan el operador =>

```typescript
let dividir = (a: number, b: number): number => {
    return a / b;
};

console.log(dividir(10, 2)); // 5
```

## Funciones flecha con retorno implícito

Si el cuerpo de la función flecha es una sola expresión, se puede omitir la palabra clave return y las llaves

```typescript
let restar = (a: number, b: number): number => a - b;

console.log(restar(10, 4)); // 6
```

## Parámetros opcionales y valores predeterminados

### Parámetros Opcionales

Los parámetros opcionales se indican con un signo de interrogación (?) después del nombre del parámetro. Esto permite llamar a la función sin proporcionar un valor para ese parámetro

```typescript
function saludarOpcional(nombre?: string) {
    if (nombre) {
        console.log(`Hola, ${nombre}!`);
    } else {
        console.log("Hola!");
    }
}

saludarOpcional("Ana"); // "Hola, Ana!"
saludarOpcional(); // "Hola!"
```

### Valores Predeterminados

Los parámetros pueden tener valores predeterminados que se utilizan si no se proporciona un valor al llamar a la función. Esto es útil para evitar errores y proporcionar valores por defecto

```typescript
function saludarConPredeterminado(nombre: string = "Invitado") {
    console.log(`Hola, ${nombre}!`);
}

saludarConPredeterminado("Pablo"); // "Hola, Pablo!"
saludarConPredeterminado(); // "Hola, Invitado!"
```

## Funciones como Tipos

En TypeScript, las funciones también pueden ser tipos. Esto es útil para definir variables que almacenan funciones y asegurar que las funciones asignadas a esas variables tengan la firma correcta

```typescript
type OperacionMatematica = (a: number, b: number) => number;

let suma: OperacionMatematica = (a, b) => a + b;
let multiplicacion: OperacionMatematica = (a, b) => a * b;

console.log(suma(5, 3)); // 8
console.log(multiplicacion(5, 3)); // 15
```

Como hemos visto, las funciones proporcionan una gran flexibilidad y capacidad para escribir código más limpio y eficiente

## Funciones de orden superior

Las funciones de orden superior son funciones que pueden tomar como argumento otra función o incluso devolver funciones como resultado. Esto permite una mayor flexibilidad y reutilización del código

```typescript
type Producto = {
    nombre: string;
    precio: number;
};

type EstrategiaDescuento = (precio: number) => number;

let productos: Producto[] = [
    { nombre: "Producto 1", precio: 100 },
    { nombre: "Producto 2", precio: 200 },
    { nombre: "Producto 3", precio: 300 },
];

let descuento10Porciento: EstrategiaDescuento = (precio) => precio * 0.9;
let descuento20Porciento: EstrategiaDescuento = (precio) => precio * 0.8;

function aplicarDescuento(productos: Producto[], estrategia: EstrategiaDescuento): Producto[] {
    return productos.map(producto => ({
        nombre: producto.nombre,
        precio: estrategia(producto.precio)
    }));
}

let productosConDescuento10 = aplicarDescuento(productos, descuento10Porciento);
let productosConDescuento20 = aplicarDescuento(productos, descuento20Porciento);

console.log(productosConDescuento10);
console.log(productosConDescuento20);
```