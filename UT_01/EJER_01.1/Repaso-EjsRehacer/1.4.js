const ciudades = ["Madrid", "Buenos Aires", "Tokio", "Nueva York", "Paris"];

ciudades.push("Roma");

const ciudaddesMayusculas = ciudades.map(ciudad => ciudad.toUpperCase());

const ciudaesFiltradas = ciudades.filter(ciudad => ciudad.length > 6);

console.log(ciudades);
console.log(ciudaddesMayusculas);
console.log(ciudaesFiltradas);

