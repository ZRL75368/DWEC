// tienda.js

// Importamos las funciones necesarias desde inventario.js
import resumenInventario, { 
    crearProducto, 
    filtrarPorCategoria, 
    listarProductosAgotados, 
    calcularValorTotalInventario 
} from "./inventario.js";

// Creamos un array (inventario) con 6 productos diferentes (al menos uno con stock 0)
const inventario = [
    crearProducto("Laptop", "Electrónica", 1200, 5),
    crearProducto("Camiseta", "Ropa", 20, 15),
    crearProducto("Novela", "Libros", 15, 0),
    crearProducto("Auriculares", "Electrónica", 50, 8),
    crearProducto("Pantalón", "Ropa", 40, 0),
    crearProducto("Zapatillas", "Ropa", 60, 4)
];

// 1. Filtramos los productos de la categoría "Ropa" y los recorremos con un bucle 'for' clásico
console.log("--- Productos de la categoría 'Ropa' ---");
const productosRopa = filtrarPorCategoria(inventario, "Ropa");
for (let i = 0; i < productosRopa.length; i++) {
    console.log(`- ${productosRopa[i].nombre} ($${productosRopa[i].precio})`);
}

// 2. Obtenemos los productos agotados y los recorremos con un bucle 'for' clásico
console.log("\n--- Productos agotados ---");
const agotados = listarProductosAgotados(inventario);
for (let i = 0; i < agotados.length; i++) {
    console.log(`- ${agotados[i].nombre} (Stock: ${agotados[i].stock})`);
}

// 3. Calculamos y mostramos el valor total del inventario
console.log("\n--- Valor total del inventario ---");
console.log(`Total: $${calcularValorTotalInventario(inventario)}`);

// 4. Ejecutamos la función por defecto para mostrar el resumen completo
console.log("\n");
resumenInventario(inventario);