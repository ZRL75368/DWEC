const dividir = (a, b) => {
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
};

try {
  console.log(dividir(10, 0));
} catch (e) {
  console.log('Error:', e.message); // Captura el mensaje del error lanzado
} finally {
  console.log('Operación finalizada'); // Se ejecuta ocurra o no un error
}