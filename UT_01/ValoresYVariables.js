/**
 * RESUMEN SINTAXIS DWEC - UD1: VALORES Y VARIABLES
 */

'use strict'; // Regla de oro: Activar siempre el modo estricto

// 1. DECLARACIÓN DE VARIABLES
let counter = 0;
const PI = 3.141592653589793;
let x; // Si no se inicializa, su valor es undefined

// 2. TIPOS DE DATOS Y typeof
// ¡Cuidado! typeof null devuelve 'object' por un error histórico
let tipoNull = typeof null; 
let tipoNumero = typeof 42; // "number"

// 3. NÚMEROS Y CONVERSIONES
const notQuitePi = parseFloat('3.14');
const evenLessPi = parseInt('3');
const notQuitePiString = notQuitePi.toString();
const evenLessPiString = (3).toString();

// 4. OPERADORES Y CONVERSIÓN IMPLÍCITA
let agent = '00' + counter; // El operador '+' concatena si hay cadenas
let resultadoMultiplicacion = 6 * '7'; // Los operadores aritméticos fuerzan a número (42)

// 5. LITERALES DE PLANTILLA (Templates)
let destination = 'mundo';
let greetingTemplate = `Hola, ${destination.toUpperCase()}!`; // Interpolación
let multiline = `<div>Hola</div>
<div>${destination}</div>`; // Multilínea nativa

// 6. OBJETOS
const harry = { name: 'Harry Smith', age: 42 };
harry.age = 40; // Se puede mutar el contenido de un objeto declarado con const
harry.salary = 90000; // Añadir propiedad
delete harry.salary; // Eliminar propiedad
let harrysAge = harry['age']; // Acceso mediante corchetes

// 7. MATRICES (ARRAYS)
const numbers = [1, 2, 3, 'many']; // Tipos mixtos permitidos
let esArray = Array.isArray(numbers); // Forma correcta de comprobar arrays

// 8. JSON
let jsonString = JSON.stringify(harry); // Objeto JS a cadena JSON
let objetoParseado = JSON.parse(jsonString); // Cadena JSON a objeto JS

// 9. DESESTRUCTURACIÓN (Destructuring)
// "extraer" valores de arrays u objetos y guardarlos en variables de forma ultra rápida, sin tener que hacerlo uno por uno

// En arrays:
let pair = [10, 20];
let [first, second] = pair; // mete el contenido del array dentro de las varibales first y second

// Intercambio de variables elegante:
let a = 1, b = 2;
[a, b] = [b, a]; // En Java se haciua con una variable auxiliar

// En objetos:
let { name, age } = harry; // Mira en el objeto harry y crea dos varibales name y age

// 10. DESESTRUCTURACIÓN AVANZADA (Rest y valores por defecto)
// Operador Rest (...) para capturar el resto de elementos:

// Le asigna a las variables primero: 1, a seundoElem: 7, y 2 y 9 que son el resto a una variable 'others'
let [primero, segundoElem, ...others] = [1, 7, 2, 9]; // others = [2, 9]

// Valores predeterminados si la propiedad no existe:
let { nickname = 'None' } = harry; // Si busca la variable nickname en Harry y no la encuentra en vez de undefined muestra None