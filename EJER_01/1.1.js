const nombre = "Teo"
let edad = 20
let tieneMascota = false

edad = 21
tieneMascota = true

console.log("Nombre:", nombre);
console.log("Tipo de nombre:", typeof nombre);

console.log("Edad:", edad);
console.log("Tipo de edad:", typeof edad);

console.log("Tiene mascota?:", tieneMascota);
console.log("Tipo de tieneMascota:", typeof tieneMascota);

const frase = `${nombre} tiene ${edad} años y tiene mascota es ${tieneMascota}`;

console.log(frase);