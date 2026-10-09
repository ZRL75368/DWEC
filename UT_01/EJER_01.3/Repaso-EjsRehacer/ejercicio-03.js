
const productos = [
  { nombre: 'Ratón', precio: 15, stock: 0 },
  { nombre: 'Teclado', precio: 25, stock: 8 },
  { nombre: 'Monitor', precio: 120, stock: 3 }
];

// 1. Filtrar los que tienen stock > 0 y extraer únicamente sus nombres con map
const disponibles = productos
  .filter(producto => producto.stock > 0)
  .map(producto => producto.nombre);

// 2. Convertir cada nombre en etiquetas HTML <li> y unirlas en una cadena de texto
const listaHtml = '<ul>' + disponibles
  .map(nombre => `<li>${nombre}</li>`)
  .join('') + '</ul>';

console.log(disponibles); // ['Teclado', 'Monitor']
console.log(listaHtml);   // <ul><li>Teclado</li><li>Monitor</li></ul>