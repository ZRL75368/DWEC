function cajero(saldo, retirar, tieneTarjetaCredito){

    if(saldo >= retirar){
        let nuevoSaldo = 0;
        nuevoSaldo += (saldo - retirar);
        saldo = nuevoSaldo;

        return `Retiro exitoso. Saldo restante: ${saldo}`;
    }

     else if((saldo < retirar)&&(tieneTarjetaCredito)){
        let nuevoSaldo = 0;
        nuevoSaldo += (saldo - retirar);
        saldo = nuevoSaldo;

        return 'Saldo insuficiente, pero pagado con Tarjeta de credito';
    }


    else if((saldo < retirar)&&(!tieneTarjetaCredito)){

        return 'Saldo insuficiente';
    }
}

console.log(cajero(1000, 300, false)); // opcion 1

console.log(cajero(1000, 10000, true)); // opcion 2

console.log(cajero(1000, 10000, false)); // opcion 2