// SIN ACABAR

const dividir = (a, b) => {
  //TODO: lanza un error si b === 0
  return a / b
}

try {
  console.log(dividir(10, 0))
} catch (e) {
  console.log('Error:', /* ... */)
} finally {
  console.log('Operación finalizada')
}