// declaro una constante nombre usando mi nombre, y otra varibale eda con let

// nombre es una constatne que no se puede cambiar, en cambio let es una variable que si se puede

// y una varibale tieneMascota con const tambien, y le asignoo un booleano
const nombre = "Teo"
let edad = 20
const tieneMascota = false

// reasigno el valor de la varibale edad y tieneMascota
// tieneMascota no se le puede asignar un nuevo valor ya que es una constante
edad = 21
// tieneMascota = true

// mediante typeof que me da el tipo de cada una
console.log("Nombre:", nombre);
console.log("Tipo de nombre:", typeof nombre);

console.log("Edad:", edad);
console.log("Tipo de edad:", typeof edad);

console.log("Tiene mascota?:", tieneMascota);
console.log("Tipo de tieneMascota:", typeof tieneMascota);

// mediante el uso de Template Strings imprimo el resultado
const frase = `${nombre} tiene ${edad} años y tiene mascota es ${tieneMascota}`;

console.log(frase);