// Primero tenemos que tener el paquete instalado con npm, luego ejecutamos el siguiente comando en consola
// npm install readline-sync
// Y luego
// npm install @types/node --save-dev
// Por último importamos el paquete en el archivo de TypeScript
import * as readline from 'readline';

(async () => {
    let texto = await leerPorTeclado();
    console.log(`El texto introducido es: ${texto}`);
})()

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