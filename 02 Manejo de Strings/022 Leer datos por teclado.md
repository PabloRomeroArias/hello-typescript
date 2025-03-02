# Leer datos por teclado

Lectura por teclado en TypeScript

```typescript
// Primero deberíamos tener el gestor de paquetes npm intalado, luego ejecutamos el siguiente comando en consola
// npm install readline-sync
// Y luego
// npm install @types/node --save-dev
// Por último importamos el paquete en el archivo de TypeScript
import * as readline from 'readline';

// async tiene que ver con el manejo de hilos y la concurrencia
(async () => {
    let texto = await leerPorTeclado(); // await hace que no se siga ejecutando más código hasta que se terminen de ejecutar las sentencias de la función leerPorTeclado()
    console.log(`El texto introducido es: ${texto}`) // No hay que olvidarse de recoger en una variable lo que nos devuelve el método para poder hacer lo que el algoritmo requiera con el dato introducido
})()

/*
 * Esta función escribirá por consola "Introduce un texto: ". Es un mensaje genérico que se puede cambiar en caso de que queramos ser más específicos a la hora de decirle al ususario lo que debe introducir
 * Luego podrás escribir lo que quieras por teclado
 * Cuando hayamos terminado de escribir, habrá que pulsar la tecla Enter
 * Luego devuelve ese valor y habrá que recuperarlo
*/
function leerPorTeclado(mensaje: string = "Introduce un texto: "): Promise<string> {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(mensaje, (input) => {
            rl.close();
            resolve(input);
        });
    });
}
```