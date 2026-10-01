// SIN ACABAR


const productos = [
  { nombre: 'Ratón', precio: 15, stock: 0 },
  { nombre: 'Teclado', precio: 25, stock: 8 },
  { nombre: 'Monitor', precio: 120, stock: 3 }
];

const disponibles = productos.filter(producto => producto.stock > 0);
console.log({disponibles});

const listaHtml = '<ul>' + disponibles
  /* .map(nombre => `<li>${nombre}</li>`) */
  .join('') + '</ul>'

console.log(disponibles) // ['Teclado', 'Monitor']
console.log(listaHtml)   // <ul><li>Teclado</li><li>Monitor</li></ul>const listaHtml = '<ul>' + disponibles
  /* .map(nombre => `<li>${nombre}</li>`) */
  .join('') + '</ul>'

console.log(disponibles) // ['Teclado', 'Monitor']
console.log(listaHtml)   // <ul><li>Teclado</li><li>Monitor</li></ul>