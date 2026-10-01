const maximo = (...numeros) => {
    let numeroMayor = numeros[0];
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > numeroMayor){
             numeroMayor = numeros[i];
        }
    }

  //TODO: recorre "numeros" con un bucle y guarda el mayor valor
    return numeroMayor;
};

const notas = [7, 9, 5, 10, 6]

console.log(maximo(...notas)) // 10