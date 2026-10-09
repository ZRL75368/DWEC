
'use strict';

const sumaFlexible = (x, y) => {
  // Si v es un array, sumamos sus elementos con reduce; si no, devolvemos el número tal cual
  const valorDe = (v) => Array.isArray(v) ? v.reduce((acum, actual) => acum + actual, 0) : v;

  return valorDe(x) + valorDe(y);
};

console.log(sumaFlexible(3, 4));      // 7
console.log(sumaFlexible([1, 2], 4)); // 7