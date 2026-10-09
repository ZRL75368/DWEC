// creo un Array de ciudades
const ciudades = ["Madrid", "Buenos Aires", "Tokio", "Nueva York", "París"];

// añado al Arary un nuevo elemento
ciudades.push("Roma");

// para mostrar las ciudades
console.log(ciudades);

// creamos un nuevo Array con el metodo .map() que contiene los elementos anteriores pero en mayusculas

// MAP: Recorre cada elemento del array, le aplica una función y devuelve un nuevo array del mismo tamaño
const ciudadesMayusculas = ciudades.map(
    function(ciudad){
        return ciudad.toLocaleUpperCase()
    });

console.log(ciudadesMayusculas);

// creamos otronuevo Array esta vez con el metodo .filter() para que contenga solo los elementos menores de 6 caracteres

//Recorre cada elemento del array y comprueba si cumple una condición (una función que devuelve true o false). Devuelve un nuevo array solo con los elementos que pasaron la prueba
const ciudadesFiltradas = ciudades.filter(
    function(ciudad){
        return ciudad.length > 6
    });

// la forma que s esuele hacer es asi, que de esta forma, ya da por echo que contiene un return y no hace falta ponerlo
// const ciudaddesFiltradas = ciudades.filter(ciudad => ciudad.length > 6)

console.log(ciudadesFiltradas);