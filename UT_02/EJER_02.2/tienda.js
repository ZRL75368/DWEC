// tienda.js
// Ejercicio integrador UT 2.1 + UT 2.2: Tienda de música
//
// Completa cada función. No cambies su nombre ni sus parámetros.
// Comprueba tu trabajo con:  node pruebas.js
// Cuando todo esté en verde:  node main.js
//
// Recuerda: salvo en la PARTE 5, las funciones NO deben modificar
// los arrays que reciben. Si necesitas ordenar, copia primero.

// ================================================================
// PARTE 1 · EL CATÁLOGO
// ================================================================

// 1.1 Convierte la matriz [[nombre, categoria, precio, stock], ...]
//     en un array de objetos { nombre, categoria, precio, stock }.
//     Si lo que recibe no es un array, devuelve [].
export const crearCatalogo = (matriz) => {
  // Comprobamos si la entrada es un array válido. Si no, devolvemos [].
  if (!Array.isArray(matriz)) return [];
  // .map() recorre cada fila y la transforma en un objeto usando desestructuración.
  return matriz.map(([nombre, categoria, precio, stock]) => ({
    nombre,
    categoria,
    precio,
    stock
  }));
};

// 1.2 Devuelve un catálogo NUEVO con las novedades (que llegan en
//     formato matriz) añadidas al final.
export const ampliarCatalogo = (catalogo, matrizNovedades) => {
  // Usamos el operador spread (...) para combinar el catálogo actual con las novedades ya convertidas a objetos.
  return [...catalogo, ...crearCatalogo(matrizNovedades)];
};

// 1.3 Devuelve los nombres de todos los productos en orden
//     alfabético, respetando las tildes ('Vinilo Ópera' va tras 'Vinilo Jazz').
export const nombresOrdenados = (catalogo) => {
  return catalogo
    .map(p => p.nombre) // Extraemos solo los nombres
    .sort((a, b) => a.localeCompare(b, 'es')); // Ordenamos alfabéticamente respetando tildes en español
};

// 1.4 Devuelve una COPIA del catálogo ordenada por precio,
//     de menor a mayor o, si descendente es true, de mayor a menor.
export const ordenarPorPrecio = (catalogo, descendente = false) => {
  // Copiamos el array con [...] para no modificar el original antes de ordenar.
  const copia = [...catalogo];
  copia.sort((a, b) => descendente ? b.precio - a.precio : a.precio - b.precio);
  return copia;
};

// 1.5 Devuelve los nombres de los tres productos más baratos.
export const tresMasBaratos = (catalogo) => {
  return [...catalogo]
    .sort((a, b) => a.precio - b.precio) // Ordenamos de más barato a más caro
    .slice(0, 3) // Cogemos los 3 primeros elementos
    .map(p => p.nombre); // Nos quedamos solo con sus nombres
};

// ================================================================
// PARTE 2 · BÚSQUEDAS
// ================================================================

// 2.1 Devuelve el producto con ese nombre, sin distinguir mayúsculas
//     y minúsculas, o undefined si no existe.
export const buscarProducto = (catalogo, nombre) => {
  const nombreBuscado = nombre.toLowerCase();
  // .find() devuelve el primer objeto que cumple la condición
  return catalogo.find(p => p.nombre.toLowerCase() === nombreBuscado);
};

// 2.2 Devuelve true si existe un producto con ese nombre.
//     Obligatorio: usa includes.
export const existeProducto = (catalogo, nombre) => {
  // Mapeamos a minúsculas y usamos .includes() para comprobar la existencia
  const nombres = catalogo.map(p => p.nombre.toLowerCase());
  return nombres.includes(nombre.toLowerCase());
};

// 2.3 Devuelve la posición del producto en el catálogo, o -1.
export const posicionProducto = (catalogo, nombre) => {
  const nombreBuscado = nombre.toLowerCase();
  // .findIndex() devuelve el índice o -1 si no lo encuentra
  return catalogo.findIndex(p => p.nombre.toLowerCase() === nombreBuscado);
};

// 2.4 Devuelve un array con los NOMBRES de los productos sin stock.
export const agotados = (catalogo) => {
  return catalogo
    .filter(p => p.stock === 0) // Filtramos los que tienen stock 0
    .map(p => p.nombre);        // Extraemos sus nombres
};

// 2.5 Devuelve los productos con precio entre minimo y maximo
//     (ambos incluidos).
export const productosEntre = (catalogo, minimo, maximo) => {
  // .filter() selecciona los objetos dentro del rango de precio indicado
  return catalogo.filter(p => p.precio >= minimo && p.precio <= maximo);
};

// ================================================================
// PARTE 3 · CÁLCULOS
// ================================================================

// 3.1 Valor total del almacén: suma de precio × stock.
export const valorAlmacen = (catalogo) => {
  // .reduce() acumula el resultado multiplicando precio por stock de cada producto
  return catalogo.reduce((acc, p) => acc + (p.precio * p.stock), 0);
};

// 3.2 Devuelve el producto (el objeto completo) más caro.
export const productoMasCaro = (catalogo) => {
  // Comparamos el precio actual con el acumulado para encontrar el máximo
  return catalogo.reduce((max, p) => p.precio > max.precio ? p : max, catalogo[0]);
};

// 3.3 Devuelve un objeto con las unidades en stock de cada categoría:
//     { equipos: 7, accesorios: 29, discos: 14 }
export const unidadesPorCategoria = (catalogo) => {
  // Usamos un objeto vacío {} como acumulador del .reduce()
  return catalogo.reduce((acc, p) => {
    // Si la categoría ya existe se le suma el stock, si no, empieza en 0
    acc[p.categoria] = (acc[p.categoria] || 0) + p.stock;
    return acc;
  }, {});
};

// 3.4 Devuelve true si hay AL MENOS un producto agotado.
export const hayAgotados = (catalogo) => {
  // .some() devuelve true si al menos un elemento cumple la condición
  return catalogo.some(p => p.stock === 0);
};

// 3.5 Devuelve true si TODOS los precios son números mayores que 0.
export const preciosValidos = (catalogo) => {
  // .every() comprueba que absolutamente todos cumplan la condición
  return catalogo.every(p => typeof p.precio === 'number' && p.precio > 0);
};

// ================================================================
// PARTE 4 · PEDIDOS
// ================================================================

// 4.1 Convierte el texto 'Lucía|Tocadiscos:1;Vinilo Jazz:2' en:
//     {
//       cliente: 'Lucía',
//       lineas: [
//         { nombre: 'Tocadiscos', cantidad: 1 },
//         { nombre: 'Vinilo Jazz', cantidad: 2 },
//       ],
//     }
//     ¡Ojo! La cantidad debe ser un número, no un string.
export const parsearPedido = (texto) => {
  // Separamos el cliente del resto de líneas usando el carácter '|'
  const [cliente, resto] = texto.split('|');
  // Separamos cada línea por ';' y mapeamos para crear los objetos individuales
  const lineas = resto.split(';').map(linea => {
    const [nombre, cantidad] = linea.split(':');
    return { nombre, cantidad: Number(cantidad) }; // Convertimos cantidad a número con Number()
  });
  return { cliente, lineas };
};

// 4.2 Devuelve true si TODOS los productos del pedido existen
//     y tienen stock suficiente.
export const puedeServirse = (catalogo, pedido) => {
  return pedido.lineas.every(linea => {
    const prod = buscarProducto(catalogo, linea.nombre);
    // Verificamos que el producto exista y que su stock cubra la cantidad pedida
    return prod && prod.stock >= linea.cantidad;
  });
};

// 4.3 Devuelve el importe total del pedido.
export const totalPedido = (catalogo, pedido) => {
  return pedido.lineas.reduce((total, linea) => {
    const prod = buscarProducto(catalogo, linea.nombre);
    return total + (prod ? prod.precio * linea.cantidad : 0);
  }, 0);
};

// 4.4 Devuelve un catálogo NUEVO en el que se ha restado del stock
//     la cantidad pedida de cada producto. El original no cambia.
//     Pista: { ...producto, stock: nuevoStock } crea una copia del objeto.
export const servirPedido = (catalogo, pedido) => {
  return catalogo.map(prod => {
    // Buscamos si el producto actual está incluido en las líneas del pedido
    const linea = pedido.lineas.find(l => l.nombre.toLowerCase() === prod.nombre.toLowerCase());
    if (linea) {
      // Devolvemos una copia del producto alterando únicamente su stock
      return { ...prod, stock: prod.stock - linea.cantidad };
    }
    return prod; // Si no está en el pedido, se queda igual
  });
};

// 4.5 Devuelve el ticket del pedido como un único texto:
//     Cliente: Lucía
//     1 x Tocadiscos = 200 €
//     2 x Vinilo Jazz = 60 €
//     TOTAL: 260 €
//     Pista: construye un array de líneas y únelas con '\n'.
export const generarTicket = (catalogo, pedido) => {
  const lineasTexto = pedido.lineas.map(linea => {
    const prod = buscarProducto(catalogo, linea.nombre);
    const subtotal = prod ? prod.precio * linea.cantidad : 0;
    return `${linea.cantidad} x ${linea.nombre} = ${subtotal} €`;
  });
  const total = totalPedido(catalogo, pedido);
  // Unimos todo el array resultante separándolo con saltos de línea ('\n')
  return [`Cliente: ${pedido.cliente}`, ...lineasTexto, `TOTAL: ${total} €`].join('\n');
};

// ================================================================
// PARTE 5 · COLA DE PEDIDOS Y CARRITO CON "DESHACER"
// En esta parte SÍ se modifican los arrays recibidos.
// ================================================================

// 5.1 COLA (el primero que llega es el primero en salir):
//     saca y devuelve el primer pedido de la cola.
export const atenderSiguiente = (cola) => {
  // .shift() extrae y elimina el primer elemento del array (comportamiento FIFO)
  return cola.shift();
};

// 5.2 Coloca el pedido al PRINCIPIO de la cola y devuelve
//     la nueva longitud de la cola.
export const agregarUrgente = (cola, pedido) => {
  // .unshift() añade un elemento al principio del array y devuelve la nueva longitud
  cola.unshift(pedido);
  return cola.length;
};

// 5.3 Añade el nombre al final del carrito y apunta la acción en el
//     historial: { accion: 'agregar', nombre }
export const agregarAlCarrito = (carrito, historial, nombre) => {
  carrito.push(nombre); // Añade al final del carrito
  historial.push({ accion: 'agregar', nombre }); // Registra la acción en la pila de historial
};

// 5.4 Quita la PRIMERA aparición del nombre en el carrito y apunta en
//     el historial: { accion: 'quitar', nombre, posicion }
//     Devuelve true, o false (sin tocar nada) si no estaba.
export const quitarDelCarrito = (carrito, historial, nombre) => {
  const posicion = carrito.indexOf(nombre);
  if (posicion === -1) return false; // Si no existe, no hace nada y devuelve false
  carrito.splice(posicion, 1); // Elimina el elemento encontrado en esa posición exacta
  historial.push({ accion: 'quitar', nombre, posicion }); // Guarda los datos para poder deshacer
  return true;
};

// 5.5 PILA (la última acción es la primera en deshacerse):
//     saca la última acción del historial y la revierte:
//     - si fue 'agregar', quita la ÚLTIMA aparición de ese nombre;
//     - si fue 'quitar', vuelve a insertarlo en su posición original.
//     Devuelve true, o false si el historial estaba vacío.
export const deshacer = (carrito, historial) => {
  if (historial.length === 0) return false; // Si no hay historial, no hay nada que deshacer
  const ultimaAccion = historial.pop(); // Sacamos la última acción registrada (LIFO)
  
  if (ultimaAccion.accion === 'agregar') {
    // Si se añadió, borramos la última aparición de ese nombre en el carrito
    const posicion = carrito.lastIndexOf(ultimaAccion.nombre);
    if (posicion !== -1) {
      carrito.splice(posicion, 1);
    }
  } else if (ultimaAccion.accion === 'quitar') {
    // Si se quitó, lo reinsertamos exactamente en la posición que ocupaba originalmente
    carrito.splice(ultimaAccion.posicion, 0, ultimaAccion.nombre);
  }
  return true;
};

// ================================================================
// PARTE 6 · INFORME FINAL
// ================================================================

// 6.1 Atiende uno a uno (con atenderSiguiente) todos los pedidos de la
//     cola. Si puede servirse, actualiza el catálogo con servirPedido y lo
//     guarda en servidos; si no, en rechazados. Al terminar la cola queda vacía.
//     Devuelve { catalogo, servidos, rechazados }
export const procesarCola = (catalogoObj, cola) => {
  let catalogo = catalogoObj;
  const servidos = [];
  const rechazados = [];
  
  // Un bucle while procesa elementos mientras la cola tenga longitud mayor a 0
  while (cola.length > 0) {
    const pedido = atenderSiguiente(cola);
    if (puedeServirse(catalogo, pedido)) {
      catalogo = servirPedido(catalogo, pedido); // Actualiza el stock del catálogo
      servidos.push(pedido); // Guardamos el objeto pedido completo para poder generar su ticket luego
    } else {
      rechazados.push(pedido); // Guardamos el objeto pedido completo
    }
  }
  return { catalogo, servidos, rechazados };
};

// 6.2 Recibe un array de pedidos y devuelve los nombres de los productos
//     vendidos, SIN repetidos y en orden alfabético.
export const productosVendidos = (pedidos) => {
  // .flatMap() extrae todas las líneas de todos los pedidos en un solo array plano de nombres
  const nombres = pedidos.flatMap(p => p.lineas.map(l => l.nombre));
  return nombres
    .filter((nombre, index) => nombres.indexOf(nombre) === index) // Filtra para eliminar duplicados dejando solo la primera aparición
    .sort((a, b) => a.localeCompare(b, 'es')); // Ordena alfabéticamente respetando tildes
};

// 6.3 Devuelve un array de textos con una barra por producto:
//     'Altavoz: ■■■ (3)'
//     Obligatorio: crea la barra con new Array(...).fill('■')
export const graficoStock = (catalogo) => {
  return catalogo.map(p => {
    // Creamos un array del tamaño del stock, lo rellenamos con '■' y lo unimos en un string
    const barra = new Array(p.stock).fill('■').join('');
    return `${p.nombre}: ${barra} (${p.stock})`;
  });
};