# Debug

Debug es una herramienta que te permite seguir, de manera secuencial la ejecución del código paso a paso. Esto es muy útil para que puedas encontrar errores dentro de tu algoritmo:

- ¿Porqué no se imprime lo que se supone que se tiene que imprimir?
- ¿Por qué lo que se imprime algo distinto a lo que pensabas que se iba a imprimir?

Y muchos otros errores y dudas que te habrán surgido a lo largo de tu camino. Ya no hay excusas, ahora puedes saber en todo momento, el valor de cada variable y por dónde va la ejecución del código

Para que puedas debuggear tu programa en `typescript`, hay que hacer una serie de pasos. Los pasos marcados con el caracter *asterisco* * tienen una aclaración posteriormente:

1. Instala Node.js
2. Configura el proyecto de TypeScript
   1. Crea una carpeta para tu proyecto
   2. Navega hacia ella en la terminal
   3. Inicializa un proyecto Node.js `npm init -y`
   4. Instala TypeScript como dependencia de desarrollo `npm install typescript --save-dev`
   5. Crea un archivo de configuración de TypeScript *tsconfig.json* `npx tsc --init` (*)
3. Configura Visual Studio Code
   1. Crea una carpeta .vscode
   2. Crea el archivo *launch.json* (*)
   3. Crea el archivo *tasks.json* (*)
4. Escribe código en TypeScript
5. Coloca *breakpoints* en la línea en la que quieres interrumpir la ejecución del código
6. Inicia la depuración presionando la tecla *F5*
7. Inspecciona las variables y el flujo de ejecución

Cómo debe de quedar el archivo *tsconfig.json* (ejemplo básico)

```json
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "sourceMap": true
    },
    "include": ["src/**/*"]
}
```

Cómo debe de quedar el archivo *launch.json* (ejemplo básico)

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": ["<node_internals>/**"],
            "program": "${workspaceFolder}/src/index.ts",
            "preLaunchTask": "tsc: build - tsconfig.json",
            "outFiles": ["${workspaceFolder}/dist/**/*.js"]
        }
    ]
}
```

Cómo debe de quedar el archivo *tasks.json*

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "tsc: build - tsconfig.json",
            "type": "typescript",
            "tsconfig": "tsconfig.json",
            "problemMatcher": ["$tsc"]
        }
    ]
}
```

A continuación te muestro cómo debería de estar organizado tu proyecto TypeScript

hello-typescript
|
|- .vscode/
|    |
|    |- launch.json
|    |- tasks.json
|
|- dist/
|    |
|    |- index.js
|    |- index.js.map
|
|- src/
|    |
|    |- index.ts
|
|- .tsconfig.json

Ahora puedes debuggear el archivo *index.ts* dentro de la carpeta *src*, puedes cambiar el nombre del archivo a debuggear, aunque te recomiendo que copies el contenido en otro archivo y luego borres el contenido de *index.ts* para no tener que estar cambiando el archivo *launch.json*. Para ello:

- Crea un archivo *ts* con una función y la palabra reservada `export`
- Pega el código que estaba en *index.ts*
- Importar en *index.ts* la función
- Ahora puedes debuggear *index.ts* simplemente importanto la función, sin tener que cambiar el nombre del archivo en *launch.json*

```typescript
// Archivo index.ts
import { suma } from './utilidades';

let resultado = suma(3, 4);
console.log(`Resultado: ${resultado}`); // Resultado: 7
```

```typescript

export function suma(a: number, b: number): number {
    return a + b;
}
```