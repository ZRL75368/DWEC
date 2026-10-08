const nombre = 'Teo';
let edad = 20;
// const tieneMascota = false;
let tieneMascota = false;
tieneMascota = true;

console.log('Nombre: ' + nombre + ' y el tipo de la variable es: ' + typeof(nombre));

console.log('Edad: ' + edad + ' y el tipo de la variable es: ' + typeof(edad));

console.log('TieneMascota: ' + tieneMascota + ' y el tipo de la variable es: ' + typeof(tieneMascota) + '\n');

console.log(`${nombre} tiene ${edad} años, y ${tieneMascota ? "no":"si"} tiene mascota`);
