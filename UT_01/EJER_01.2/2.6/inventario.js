// inventario.js

// Función que crea y devuelve un objeto producto con sus propiedades
export function crearProducto(nombre, categoria, precio, stock) {
    return { nombre, categoria, precio, stock };
}

// Función para filtrar productos por su categoría usando .filter()
export function filtrarPorCategoria(inventario, categoria) {
    return inventario.filter(producto => producto.categoria === categoria);
}

// Función para obtener productos con stock en 0 usando .filter()
export function listarProductosAgotados(inventario) {
    return inventario.filter(producto => producto.stock === 0);
}

// Función para calcular el valor total del inventario usando .reduce() (multiplicando precio * stock)
export function calcularValorTotalInventario(inventario) {
    return inventario.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
}

// Función por defecto que muestra un resumen completo del inventario en consola
export default function resumenInventario(inventario) {
    const totalProductos = inventario.length;
    const categoriasDistintas = [...new Set(inventario.map(p => p.categoria))].length;
    const valorTotal = calcularValorTotalInventario(inventario);

    console.log(`--- Resumen del Inventario ---`);
    console.log(`Número total de productos: ${totalProductos}`);
    console.log(`Número de categorías distintas: ${categoriasDistintas}`);
    console.log(`Valor total del inventario: $${valorTotal.toFixed(2)}`);
}