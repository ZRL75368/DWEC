// creo un Array con 6 numeros
let numeros = [1,4,2,7,5,6];

// utilizo el metodo map para crear un array nuevo del doble del anterior
const dobles = numeros.map(numero => numero * 2);
console.log(dobles);

// filtro con el metodo .filter en un nuevo Arary, los numeros pares
const pares = numeros.filter(numero => numero % 2 == 0);
console.log(pares);

// utilizo un bucle for ... of para recorrer los e ir guardando en la vairbale numero los datos en numeros y voy de posicion en posicion imprimiendo
for(let numero of numeros){
    console.log(numero);
}

