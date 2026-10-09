// Importamos todas las funciones que necesitamos del módulo biblioteca.js
import { 
    obtenerLibros, 
    agregarLibro, 
    buscarLibro, 
    elminiarLibro, 
    calcularTotalPaginas, 
    ordenarPorPaginas, 
    hayLibrosLargos, 
    todosSonLibrosCortos 
} from './biblioteca.js';

// 1. Mostramos la lista de libros iniciales
console.log("--- Colección inicial ---");
console.log(obtenerLibros());

// 2. Creamos un nuevo libro y lo añadimos a la colección
const nuevoLibro = {
    id: 11,
    titulo: 'El Hobbit',
    autor: 'J.R.R. Tolkien',
    paginas: 310
};
agregarLibro(nuevoLibro);

console.log("--- Colección después de añadir un libro ---");
console.log(obtenerLibros());

// 3. Buscamos y mostramos el libro con ID 1
console.log("--- Buscar libro con ID 1 ---");
console.log(buscarLibro(1));

// 4. Eliminamos el libro con ID 1 de la colección
elminiarLibro(1); 
console.log("--- Colección después de eliminar el libro 1 ---");
console.log(obtenerLibros());

// 5. Calculamos y mostramos la suma de todas las páginas
console.log("--- Total de páginas de la biblioteca ---");
console.log(calcularTotalPaginas());

// 6. Ordenamos los libros por número de páginas (de menor a mayor)
ordenarPorPaginas();
console.log("--- Colección ordenada por páginas ---");
console.log(obtenerLibros());

// 7. Probamos métodos some() y every()
console.log("¿Hay libros con más de 500 páginas?", hayLibrosLargos(500)); 
console.log("¿Hay libros con más de 1200 páginas?", hayLibrosLargos(1200)); 

console.log("¿Todos tienen menos de 1500 páginas?", todosSonLibrosCortos(1500)); 
console.log("¿Todos tienen menos de 300 páginas?", todosSonLibrosCortos(300));