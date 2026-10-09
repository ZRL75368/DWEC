
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const potencia = (base, exponente) => {
  // Lanzamos un error explícito si el exponente es negativo
  if (exponente < 0) {
    throw new Error('El exponente no puede ser negativo');
  }
  return base ** exponente;
};

// Función de orden superior: recibe otra función como parámetro y la ejecuta
const aplicarOperacion = (a, b, operacion) => operacion(a, b);

console.log(aplicarOperacion(5, 3, suma));      // 8
console.log(aplicarOperacion(5, 3, resta));     // 2
console.log(aplicarOperacion(2, 3, potencia));  // 8