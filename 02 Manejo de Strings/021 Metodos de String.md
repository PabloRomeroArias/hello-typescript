# Métodos de String

Las cadenas de texto (strings) son una parte fundamental de la programación. En TypeScript, los strings vienen con una variedad de métodos incorporados que permiten realizar operaciones comunes, como la manipulación y el análisis de texto. Estos métodos facilitan tareas como la búsqueda de subcadenas, la conversión de mayúsculas a minúsculas, la división de cadenas en partes más pequeñas, y mucho más.

### Métodos comunes de string

```typescript
let texto = "Hola Mundo";

// length -> longitud del string
console.log(texto.length); // 10

// toUpperCase() -> convierte a mayúsculas
console.log(texto.toUpperCase()); // "HOLA MUNDO"

// toLowerCase() -> convierte a minúsculas
console.log(texto.toLowerCase()); // "hola mundo"

// charAt() -> carácter en una posición específica
console.log(texto.charAt(0)); // "H"
console.log(texto.charAt(5)); // "M"

// indexOf() -> posición de la primera aparición
console.log(texto.indexOf("Mundo")); // 5
console.log(texto.indexOf("Adiós")); // -1

// substring() -> parte de la cadena entre dos índices
console.log(texto.substring(0, 4)); // "Hola"
console.log(texto.substring(5)); // "Mundo"

// replace() -> reemplaza una subcadena
let nuevoTexto = texto.replace("Mundo", "TypeScript");
console.log(nuevoTexto); // "Hola TypeScript"

// split() -> divide la cadena en un array
let frutasTexto = "manzana,banana,cereza";
let frutas = frutasTexto.split(",");
console.log(frutas); // ["manzana", "banana", "cereza"]

// trim() -> elimina espacios en blanco de ambos extremos
let textoConEspacios = "   Hola Mundo   ";
console.log(textoConEspacios.trim()); // "Hola Mundo"

// includes() -> determina si contiene una subcadena
console.log(texto.includes("Mundo")); // true
console.log(texto.includes("Adiós")); // false