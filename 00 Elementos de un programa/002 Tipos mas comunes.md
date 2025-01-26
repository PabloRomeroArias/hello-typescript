# Tipos más comunes

### Tipos de datos más comunes

| Tipo       | Descripción                                                                 | Ejemplo                                                                 |
|------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------|
| `string`   | Cadenas de texto                                                            | `let nombre: string = "Juan"`                                          |
| `number`   | Números, tanto enteros como decimales                                       | `let edad: number = 25.5`                                              |
| `boolean`  | Valores booleanos (`true` o `false`)                                        | `let esEstudiante: boolean = true`                                     |
| `array`    | Una lista de elementos del mismo tipo                                       | `let numeros: number[] = [1, 2, 3, 4, 5]`                              |

### Mayoría de tipos


| Tipo       | Descripción                                                                 | Ejemplo                                                                 |
|------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------|
| `string`   | Cadenas de texto                                                            | `let nombre: string = "Juan"`                                          |
| `number`   | Números, tanto enteros como decimales                                       | `let edad: number = 25`                                                |
| `bigint`   | Es un `number` pero permite crear un número más grande en valor absoluto    | `let edad: number = 25`                                                |
| `boolean`  | Valores booleanos (`true` o `false`)                                        | `let esEstudiante: boolean = true`                                     |
| `array`    | Una lista de elementos del mismo tipo                                       | `let numeros: number[] = [1, 2, 3, 4, 5]`                              |
| `tuple`    | Un array con un número fijo de elementos de tipos específicos                 | `let persona: [string, number] = ["Juan", 25]`                         |
| `Map`      | Un mapa de claves y valores                                                 | `let mapa: Map<string, number> = new Map([["uno", 1],["dos", 2]])`     |
| `enum`     | Un conjunto de constantes con nombre                                        | `enum Color { Rojo, Verde } let colorFavorito: Color = Color.Verde`    |
| `any`      | Cualquier tipo de dato                                                      | `let variable: any = "Hola"; variable = 25`                            |
| `void`     | La ausencia de tipo, comúnmente usado en funciones que no retornan un valor | `function saludar(): void { console.log("Hola") `                      |
| `null`     | Un valor nulo                                                               | `let valorNulo: null = null`                                           |
| `undefined` | Un valor indefinido                                                          | `let valorIndefinido: undefined = undefined`                              |
| `object`   | Cualquier valor que no sea un valor primitivo                               | `let persona: object = { nombre: "Juan", edad: 25 }`                   |
| `never`    | El tipo de valores que nunca ocurren                                        | `function error(mensaje: string): never { throw new Error(mensaje) }`  |