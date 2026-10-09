
function esContrasenaValida(contrasena) {
  // Comprueba si la longitud es mayor o igual a 8 y devuelve true o false
  return contrasena.length >= 8;
}

const contrasenas = ['1234', 'miClave2024', 'abc'];

// Usamos una función anónima dentro de .map() para aplicar la validación a cada elemento
const resultado = contrasenas.map(function(contrasena) {
  return esContrasenaValida(contrasena);
});

console.log(resultado); // [false, true, false]