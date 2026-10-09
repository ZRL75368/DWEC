
// El parámetro rest (...) agrupa todos los argumentos sueltos en un vector
const maximo = (...numeros) => {
  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
};

const notas = [7, 9, 5, 10, 6];

// El operador spread (...) expande el vector notas en argumentos independientes
console.log(maximo(...notas)); // 10