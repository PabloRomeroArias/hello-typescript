# `Enum`s

Los enums

## Syntaxis de `enum`

La sintaxis de una estructura de datos `enum` en TypeScript es la siguiente:

- Palabra reservada `enum`
- Nombre del `enum`
- Abrimos y cerramos bloque de código
- Valores separados por coma

```typescript
enum NombreEnum { Valor1, Valor2, Valor3 }
```

Veamos con un ejemplo real

```typescript
enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo,
}

// Para asignar un día de la semana a una variable:
let dia : DiaSemana = DiaSemana.Jueves // Como podemos comprobar, hemos creado un nuevo tipo de dato
console.log(dia) // 3
/* Cada elemento del enum está ordenado con un índice
 * El primer índice es el 0, hasta N - 1, siendo N el nº de elementos del enum
 * En este ejemplo, hay 7 elementos, por lo que el Domingo será: 7 - 1 => 6
*/
console.log(DiaSemana.Domingo) // 6
```

## `Enum` con valores personalizados

### Cambiar índice

Si te resulta más cómodo, puedes cambiar el primer índice y el resto de valores se asigna automáticamente

```typescript
enum DiaSemana {
    Lunes = 1,
    Martes,     // 2
    Miercoles,  // 3
    Jueves,     // 4
    Viernes,    // 5
    Sabado,     // 6
    Domingo,    // 7
}

Console.log(DiaSemana.Domingo) // 7 (antes era 6: N - 1)
```

### Cambiar a `string`

También puedes asignar valores como string a los elementos del `enum`, teniendo en cuenta que tienes que inizialiar todos y cada uno de ellos

```typescript
enum Color {
    // Valores en HEXADECIMAL
    Rojo = "#FF0000",
    Verde = "#00FF00",
    Azul = "#0000FF"
}

console.log(Color.Verde) // "#00FF00"
```

Veamos otro caso de uso de `enum`, en el que se muestra el estado de un pedido

```typescript
enum EstadoPedido {
    Pendiente,
    Enviado,
    Entregado,
    Cancelado
}

function actualizarEstadoPedido(estado: EstadoPedido): void {
    switch (estado) {
        case EstadoPedido.Pendiente:
            console.log("El pedido está pendiente.")
            break
        case EstadoPedido.Enviado:
            console.log("El pedido ha sido enviado.")
            break
        case EstadoPedido.Entregado:
            console.log("El pedido ha sido entregado.")
            break
        case EstadoPedido.Cancelado:
            console.log("El pedido ha sido cancelado.")
            break
        default:
            console.log("Estado de pedido no reconocido.")
    }
}

actualizarEstadoPedido(EstadoPedido.Enviado) // "El pedido ha sido enviado."
```

```typescript
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
console.log(StatusCodes.NotFound) // 404
console.log(StatusCodes.Success) // 200
```