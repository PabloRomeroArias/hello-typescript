# Estructuras de datos - Introducción

De manera simple, una estructura de datos es un contenedor que almacena datos en una disposición específica. Dicha disposición permite que una estructura de datos sea eficiente en algunas operaciones e ineficiente en otras. Será elección tuya cuál viene mejor para resolver el problema de la manera más óptima

Algunas de las operaciones más básicas son, por sus siglas en inglés, **CRUD:**

- **C**reate: añade elementos
- **R**ead: accede a un elemento
- **U**pdate: actualiza un elemento
- **D**elete: elimina un elemento

## ¿Para qué sirven?
Ya que podemos almacenar datos de una manera organizada, la estructura de datos es, probablemente, la entidad más importante en informática

Cualquier algoritmo trabaja con datos. Estos datos necesitan ser almacenados en un formato específico, y para ello haremos uso de las estructuras de datos

A continuación veremos dos tipos de estructuras de datos: **lineales** y **no lineales**

## Lineales
Son aquellas estructuras de datos en las que los elementos ocupan lugares sucesivos entre sí y cada uno de ellos tiene, a lo sumo, un único predecesor y un único sucesor

### Arrays
Es la estructura más simple y usada de todas. Los datos suelen ser homogéneos (todos del mismo tipo)

A cada elemento se le asigna un valor entero positivo, normalmente empezando por 0, al que se le dice **índice**, que corresponde a la posición de cada elemento del `array`

Se suelen usar dos tipos de listas:
- Unidimensionales: cada item es un tipo de dato de datos básicos (Enteros, String, Booleans, etc.)
- Bidimensionales: cada item es una lista

En memoria, los elementos van seguidos uno detrás de otro, por lo que el acceso y la actualización es muy sencilla, sin embargo, añadir un nuevo elemento es ineficiente ya que en caso de que la siguiente celda de memoria esté ocupada, se tendrá que desplazar el array a otro espacio de memoria en el que sí hayan suficientes celdas contiguas para almacenar el array entero

### Listas enlazadas
La ordenación se realiza a través de punteros. Un puntero es algo que apunta a una dirección de memoria

En memoria, los elementos están ordenados, pero no van seguidos uno detrás de otro, por lo que el acceso y la actualización es ineficiente, ya que tendremos que empezar a buscar desde el primer elemento hasta el que estemos buscando. Sin embargo, añadir y borrar es eficiente ya que lo único que se tiene que hacer es actualizar el puntero hacia la nueva posición (si se añade) o la siguiente (si se elimina)

### Stack (pilas)

El método de acceso a los elementos de las pilas es, por sus siglas en inglés: **LIFO**, que quiere decir *Last In, First Out*. Si pensamos en apilar platos, cada vez que añadimos uno, el primero en salir es el último que hemos puesto

**CRUD** eficiente. Las operaciones básicas son (varían según el lenguaje):

- pop: delete
- push: create
- peek: read (el primer elemento que va a salir, el último en entrar)

### Queue (colas)

El método de acceso a los elementos de las pilas es, por sus siglas en inglés: **FIFO**, que quiere decir *First In, First Out*. Si pensamos en la caja de una tienda, cada vez que sale un cliente, el que lleve más tiempo en la cola será el siguiente en salir. Y el último que ha llegado será el último en ser atendido

**CRUD** eficiente. Las operaciones básicas son (varían según el lenguaje):

- enqueue: create
- dequeue: delete
- front: read (el primer elemento que va a salir, el primero en entrar)

### HashMap / Diccionarios
Cada elemento es un par de valores *clave*-*valor*. Accederemos a cada valor mediante la clave. No están ordenados los elementos

En memoria no están ordenados, por lo que cualquier operación **CRUD** es eficiente de realizar. Se relacionan (en memoria) entre sí mediante punteros

## No lineales
Son aquellas estructuras en las que cada elemento puede estar enlazado a cualquier otro. Este tipo de estructura jerárquica consiste en `nodos` (o vértices) y `aristas` que los conectan

En este tipo de estructura no profundizaremos mucho

### Árboles
Existen los nodos padres e hijos. Y hay un nodo `raíz`


Los usos más comunes son:

- Inteligencia Artificial
- Proveer mecanismo de almacenamiento eficiente para algoritmos complejos
- Sugerencia automática de palabras en motor de búsqueda (árboles Trie)

### Grafos
En los grafos, no existe un nodo raíz, por lo que están conectados a modo de `red`

Los usos más comunes son:

- Contactos en redes sociales
- Rutas y mapas interactivos

## Bibliografía
[HENRY Blog](https://blog.soyhenry.com/que-es-una-estructura-de-datos-en-programacion/ "HENRY")

[freeCodeCamp](https://www.freecodecamp.org/espanol/news/las-principales-estructuras-de-datos-que-deberias-saber-para-tu-proxima-entrevista-de-programacion/ "freeCodeCamp")

[ApInEm Web](https://www.apinem.com/estructuras-de-datos-programacion/ "ApInEm Web")
