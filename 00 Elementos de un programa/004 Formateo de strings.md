# Formateo de strings

Cuando queramos dar formato a un *string* podemos hacer uso de las plantillas de literales. De esta manera, podemos crear un mensaje de una manera más sencilla cuando queramos mostrar datos, como se muestra en el siguiente ejemplo:

```typescript
let nombre = "Pablo"
let edad = 27
let mensaje = `Hola ${nombre}, tienes ${edad} años` // IMPORTANTE: la cadena de texto tiene que estar entre un ` de apertura y otro ` de cierre

console.log(mensaje) // Hola Pablo, tienes 27 años
```

**NOTA:** para crear strings, se pueden hacer de muchas maneras. Se recomienda hacer uso de comillas dobles " ya que las comillas simples ' en otros lenguajes están reservadas para declarar caracteres. Las maneras de declarar un string en *TypeScript* son:
```typescript
let texto = "Manera 1" // Se recomienda usar esta manera
texto = 'Manera 1' // NO se recomienda para evitar confusión con otros lenguajes de programación
texto = `Manera 2`// Esta se recomienda usar SOLO para los String templates
```