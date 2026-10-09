// Array principal que almacena todos los objetos (libros)
const libros = [
    { id: 1, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', paginas: 1000 },
    { id: 2, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 471 },
    { id: 3, titulo: '1984', autor: 'George Orwell', paginas: 328 },
    { id: 4, titulo: 'Crimen y castigo', autor: 'Fiódor Dostoyevski', paginas: 671 },
    { id: 5, titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', paginas: 96 },
    { id: 6, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', paginas: 432 },
    { id: 7, titulo: 'La metamorfosis', autor: 'Franz Kafka', paginas: 96 },
    { id: 8, titulo: 'Fahrenheit 451', autor: 'Ray Bradbury', paginas: 249 },
    { id: 9, titulo: 'El nombre de la rosa', autor: 'Umberto Eco', paginas: 512 },
    { id: 10, titulo: 'Rayuela', autor: 'Julio Cortázar', paginas: 600 }
];

// Añade un libro nuevo al final del array usando .push()
export function agregarLibro(nuevoLibro){
    libros.push(nuevoLibro);
}

// Devuelve el array completo con todos los libros
export function obtenerLibros() {
    return libros;
}

// Busca un libro por su ID usando .find() (devuelve el primer objeto que coincida)
export function buscarLibro(id) {
    return libros.find(libro => libro.id === id);
}

// Elimina un libro buscando primero su posición con .findIndex() y borrándolo con .splice()
export function elminiarLibro(id){
    const index = libros.findIndex(libro => libro.id === id);
    if (index !== -1) {
        libros.splice(index, 1);
    }
}

// Suma todas las páginas usando .reduce() (acumulador 'total' empieza en 0)
export function calcularTotalPaginas() {
    return libros.reduce((total, libro) => total + libro.paginas, 0);
}

// Ordena el array original de menor a mayor según las páginas usando .sort()
export function ordenarPorPaginas() {
    libros.sort((a, b) => a.paginas - b.paginas);
}

// Comprueba si AL MENOS UN libro supera el límite de páginas usando .some()
export function hayLibrosLargos(limitePaginas) {
    return libros.some(libro => libro.paginas > limitePaginas);
}

// Comprueba si TODOS los libros están por debajo del límite usando .every()
export function todosSonLibrosCortos(limitePaginas) {
    return libros.every(libro => libro.paginas < limitePaginas);
}